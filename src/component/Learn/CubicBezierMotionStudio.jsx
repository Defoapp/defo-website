import React, { useState, useEffect, useRef, useCallback } from "react";

const BEZIER_PRESETS = [
  {
    name: "Apple Fluid Spring",
    desc: "Iconic iOS natural deceleration curve",
    p1x: 0.16,
    p1y: 1.0,
    p2x: 0.3,
    p2y: 1.0,
    duration: 0.75,
  },
  {
    name: "Snappy Bouncy Pop",
    desc: "Tactile elastic overshoot with high initial velocity",
    p1x: 0.34,
    p1y: 1.56,
    p2x: 0.64,
    p2y: 1.0,
    duration: 0.65,
  },
  {
    name: "Dramatic Back Anticipate",
    desc: "Winds back slightly before accelerating forwards",
    p1x: 0.68,
    p1y: -0.55,
    p2x: 0.27,
    p2y: 1.55,
    duration: 0.9,
  },
  {
    name: "Smooth Ease-In-Out",
    desc: "Balanced sinusoidal acceleration and landing",
    p1x: 0.42,
    p1y: 0.0,
    p2x: 0.58,
    p2y: 1.0,
    duration: 0.6,
  },
  {
    name: "Hyper Acceleration (Ease-In)",
    desc: "Starts calm then rapidly breaks away",
    p1x: 0.895,
    p1y: 0.03,
    p2x: 0.685,
    p2y: 0.22,
    duration: 0.5,
  },
  {
    name: "Gentle Decelerate (Ease-Out)",
    desc: "Instant explosive start that softly glides into place",
    p1x: 0.0,
    p1y: 0.0,
    p2x: 0.2,
    p2y: 1.0,
    duration: 0.7,
  },
];

export default function CubicBezierMotionStudio() {
  const [p1x, setP1x] = useState(0.16);
  const [p1y, setP1y] = useState(1.0);
  const [p2x, setP2x] = useState(0.3);
  const [p2y, setP2y] = useState(1.0);
  const [duration, setDuration] = useState(0.75);
  const [selectedPresetName, setSelectedPresetName] = useState(BEZIER_PRESETS[0].name);

  // Animation trigger state
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [copied, setCopied] = useState(false);
  const animTimeoutRef = useRef(null);

  const bezierString = `cubic-bezier(${p1x.toFixed(2)}, ${p1y.toFixed(2)}, ${p2x.toFixed(2)}, ${p2y.toFixed(2)})`;

  const generatedCss = `.motion-element {
  transition: transform ${duration}s ${bezierString}, opacity ${duration}s ${bezierString};
  will-change: transform;
}`;

  const applyPreset = (preset) => {
    setSelectedPresetName(preset.name);
    setP1x(preset.p1x);
    setP1y(preset.p1y);
    setP2x(preset.p2x);
    setP2y(preset.p2y);
    setDuration(preset.duration);
    triggerReplay();
  };

  const triggerReplay = useCallback(() => {
    setIsAnimating(false);
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    requestAnimationFrame(() => {
      setIsAnimating(true);
      animTimeoutRef.current = setTimeout(() => {
        if (!isLooping) setIsAnimating(false);
      }, duration * 1000 + 100);
    });
  }, [duration, isLooping]);

  useEffect(() => {
    let loopInterval;
    if (isLooping) {
      triggerReplay();
      loopInterval = setInterval(() => {
        triggerReplay();
      }, (duration + 0.6) * 1000);
    }
    return () => {
      if (loopInterval) clearInterval(loopInterval);
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    };
  }, [isLooping, duration, p1x, p1y, p2x, p2y, triggerReplay]);

  const handleCopy = () => {
    navigator.clipboard.writeText(bezierString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // SVG coordinate mapping (200x200 canvas)
  // X: 0 -> 20, 1 -> 180 (span 160)
  // Y: 0 -> 160, 1 -> 40 (span 120, inverted, plus headroom for overshoot)
  const mapX = (x) => 25 + x * 150;
  const mapY = (y) => 150 - y * 100;

  const p0Svg = { x: mapX(0), y: mapY(0) };
  const p1Svg = { x: mapX(p1x), y: mapY(p1y) };
  const p2Svg = { x: mapX(p2x), y: mapY(p2y) };
  const p3Svg = { x: mapX(1), y: mapY(1) };

  const curvePath = `M ${p0Svg.x} ${p0Svg.y} C ${p1Svg.x} ${p1Svg.y}, ${p2Svg.x} ${p2Svg.y}, ${p3Svg.x} ${p3Svg.y}`;

  return (
    <div className="preserve-dark w-full my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#05070c] border border-white/10 shadow-2xl relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-[#00f298]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>Fluid Motion & Physics Lab</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Cubic-Bezier & Keyframe Motion Studio
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed font-light">
              Craft responsive animation curves, model physical mass springs and overshoots, and preview realistic kinematics in real time.
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 active:scale-95 text-purple-300 text-xs font-bold border border-purple-400/40 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-500/10"
          >
            {copied ? (
              <span className="text-emerald-300 font-bold">✓ Easing Copied!</span>
            ) : (
              <>
                <span>📋 Copy {bezierString.slice(0, 20)}...</span>
              </>
            )}
          </button>
        </div>

        {/* Presets Grid */}
        <div className="mb-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-2.5">
            Curated Motion Profiles:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {BEZIER_PRESETS.map((preset) => {
              const isSelected = selectedPresetName === preset.name;
              return (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer text-xs ${
                    isSelected
                      ? "bg-purple-500/20 border-purple-400/70 shadow-lg shadow-purple-500/20 text-white font-semibold scale-105"
                      : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:border-white/20"
                  }`}
                >
                  <span className="font-bold truncate block mb-1">{preset.name}</span>
                  <span className="text-[10px] text-slate-400 line-clamp-1">
                    {preset.duration}s • {preset.p1y > 1.0 ? "Bounce" : "Smooth"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Curve Visualizer & Sliders (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 bg-white/[0.02] border border-white/10 rounded-2xl p-5">
            
            {/* SVG Bezier Graph */}
            <div className="relative rounded-2xl bg-black/60 border border-white/10 p-4 flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
                <span>Bezier Spline Vector</span>
                <span className="text-purple-400 font-bold">P1({p1x}, {p1y}) • P2({p2x}, {p2y})</span>
              </div>

              <svg viewBox="0 0 200 200" className="w-full max-w-[240px] aspect-square overflow-visible">
                {/* Background gridlines */}
                <line x1="25" y1="150" x2="175" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="25" y1="50" x2="175" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="25" y1="20" x2="25" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="175" y1="20" x2="175" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

                {/* Diagonal linear reference */}
                <line x1={p0Svg.x} y1={p0Svg.y} x2={p3Svg.x} y2={p3Svg.y} stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" strokeWidth="1" />

                {/* Control handle lines */}
                <line x1={p0Svg.x} y1={p0Svg.y} x2={p1Svg.x} y2={p1Svg.y} stroke="#00f298" strokeWidth="1.5" strokeOpacity="0.8" />
                <line x1={p3Svg.x} y1={p3Svg.y} x2={p2Svg.x} y2={p2Svg.y} stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.8" />

                {/* Cubic Bezier Curve */}
                <path d={curvePath} fill="none" stroke="url(#bezierGradient)" strokeWidth="3.5" strokeLinecap="round" />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="bezierGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f298" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>

                {/* Anchor Points */}
                <circle cx={p0Svg.x} cy={p0Svg.y} r="4" fill="#ffffff" />
                <circle cx={p3Svg.x} cy={p3Svg.y} r="4" fill="#ffffff" />

                {/* Control Handle 1 (P1) */}
                <circle cx={p1Svg.x} cy={p1Svg.y} r="6" fill="#00f298" stroke="#ffffff" strokeWidth="1.5" />
                {/* Control Handle 2 (P2) */}
                <circle cx={p2Svg.x} cy={p2Svg.y} r="6" fill="#c084fc" stroke="#ffffff" strokeWidth="1.5" />
              </svg>

              <div className="w-full flex items-center justify-between text-[10px] text-slate-500 font-mono mt-2">
                <span>Start: (0, 0)</span>
                <span>Time Progress (0s ➔ {duration}s)</span>
                <span>Target: (1, 1)</span>
              </div>
            </div>

            {/* Parameter Sliders */}
            <div className="space-y-4">
              {/* P1 Controls */}
              <div className="p-3 rounded-xl bg-black/40 border border-[#00f298]/20">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-emerald-400">P1 Handle (Acceleration)</span>
                  <span className="font-mono text-slate-400 text-[11px]">X: {p1x} • Y: {p1y}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-slate-400 w-5">X:</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.02"
                      value={p1x}
                      onChange={(e) => {
                        setP1x(Number(e.target.value));
                        setSelectedPresetName("Custom");
                      }}
                      className="w-full accent-emerald-400 h-1.5 bg-white/10 rounded cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-slate-400 w-5">Y:</span>
                    <input
                      type="range"
                      min="-0.5"
                      max="1.6"
                      step="0.02"
                      value={p1y}
                      onChange={(e) => {
                        setP1y(Number(e.target.value));
                        setSelectedPresetName("Custom");
                      }}
                      className="w-full accent-emerald-400 h-1.5 bg-white/10 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* P2 Controls */}
              <div className="p-3 rounded-xl bg-black/40 border border-purple-400/20">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-purple-400">P2 Handle (Deceleration / Overshoot)</span>
                  <span className="font-mono text-slate-400 text-[11px]">X: {p2x} • Y: {p2y}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-slate-400 w-5">X:</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.02"
                      value={p2x}
                      onChange={(e) => {
                        setP2x(Number(e.target.value));
                        setSelectedPresetName("Custom");
                      }}
                      className="w-full accent-purple-400 h-1.5 bg-white/10 rounded cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-slate-400 w-5">Y:</span>
                    <input
                      type="range"
                      min="-0.5"
                      max="1.6"
                      step="0.02"
                      value={p2y}
                      onChange={(e) => {
                        setP2y(Number(e.target.value));
                        setSelectedPresetName("Custom");
                      }}
                      className="w-full accent-purple-400 h-1.5 bg-white/10 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Duration Slider */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-300">Duration (seconds)</span>
                  <span className="font-mono text-cyan-400 font-bold">{duration}s</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="2.5"
                  step="0.05"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-1.5 bg-white/10 rounded cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Physics Motion Testing Stage (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Physics Stage */}
            <div className="relative rounded-2xl bg-black/70 border border-white/15 p-6 overflow-hidden min-h-[380px] flex flex-col justify-between shadow-2xl">
              
              {/* Stage Controls */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white">Motion Simulator Stage</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsLooping(!isLooping)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      isLooping
                        ? "bg-purple-500/30 border-purple-400 text-purple-300 shadow-md shadow-purple-500/20"
                        : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    {isLooping ? "⏸ Loop Active" : "⟳ Loop Off"}
                  </button>

                  <button
                    onClick={triggerReplay}
                    className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-emerald-500/20 cursor-pointer"
                  >
                    ▶ Play Kinematics
                  </button>
                </div>
              </div>

              {/* Visual Test Track 1: Kinetic Orb with Trail */}
              <div className="space-y-6 relative z-10 my-auto">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-300">1. Horizontal Track Displacement</span>
                    <span className="font-mono text-[11px] text-emerald-400">translate-x</span>
                  </div>
                  <div className="relative h-14 rounded-2xl bg-white/[0.04] border border-white/10 p-2 flex items-center overflow-hidden">
                    <div
                      className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00f298] to-cyan-400 shadow-[0_0_20px_rgba(0,242,152,0.6)] flex items-center justify-center font-bold text-slate-950 text-xs cursor-pointer select-none"
                      style={{
                        transform: isAnimating ? "translateX(calc(100% * 6.5))" : "translateX(0px)",
                        transition: `transform ${duration}s ${bezierString}`,
                      }}
                    >
                      ▶
                    </div>
                  </div>
                </div>

                {/* Visual Test Track 2: 3D Scale & Depth Pop */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-300">2. Scale & Elastic Pop Dynamics</span>
                    <span className="font-mono text-[11px] text-purple-400">scale & rotate</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Defo App Icon", bg: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-400/40" },
                      { label: "Notification Card", bg: "from-purple-500/20 to-pink-500/20", border: "border-purple-400/40" },
                      { label: "Tactile Modal", bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-400/40" },
                    ].map((card, i) => (
                      <div
                        key={i}
                        className={`h-20 rounded-2xl border ${card.border} bg-gradient-to-br ${card.bg} p-3 flex flex-col justify-between shadow-lg select-none`}
                        style={{
                          transform: isAnimating ? "scale(1.08) translateY(-6px)" : "scale(1) translateY(0px)",
                          opacity: isAnimating ? 1 : 0.85,
                          transition: `all ${duration}s ${bezierString}`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-400">Pop #{i + 1}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                        </div>
                        <span className="text-xs font-bold text-white tracking-tight">{card.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Test Track 3: Fluid Progress Bar Fill */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-300">3. Continuous Fill Interpolation</span>
                    <span className="font-mono text-[11px] text-cyan-400">width & opacity</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 shadow-[0_0_12px_rgba(0,242,152,0.8)]"
                      style={{
                        width: isAnimating ? "100%" : "6%",
                        transition: `width ${duration}s ${bezierString}`,
                      }}
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* Generated CSS / Tailwind Output */}
            <div className="rounded-2xl bg-black/80 border border-white/10 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
                  <span className="text-purple-400">⚡</span> Production Motion Specifications
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Hardware GPU Accelerated</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider font-semibold">
                    CSS Timing Function:
                  </span>
                  <pre className="p-3 rounded-xl bg-slate-950 border border-white/5 text-purple-300 overflow-x-auto">
                    {bezierString}
                  </pre>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider font-semibold">
                    Complete CSS Rule:
                  </span>
                  <pre className="p-3 rounded-xl bg-slate-950 border border-white/5 text-emerald-400 overflow-x-auto leading-relaxed">
                    {generatedCss}
                  </pre>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
