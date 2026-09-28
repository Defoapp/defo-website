import React, { useState } from "react";

const PALETTES = [
  { name: "Cyan Cyber", glow: "0, 246, 255", hex: "#00f6ff", bgGrad: "from-cyan-500/20 to-blue-600/20" },
  { name: "Emerald Defo", glow: "62, 207, 122", hex: "#3ECF7A", bgGrad: "from-emerald-500/20 to-teal-600/20" },
  { name: "Electric Violet", glow: "168, 85, 247", hex: "#a855f7", bgGrad: "from-purple-500/20 to-pink-600/20" },
  { name: "Solar Amber", glow: "245, 158, 11", hex: "#f59e0b", bgGrad: "from-amber-500/20 to-orange-600/20" },
  { name: "Neon Rose", glow: "244, 63, 94", hex: "#f43f5e", bgGrad: "from-rose-500/20 to-red-600/20" },
];

const LiveCssPlayground = () => {
  const [blur, setBlur] = useState(16);
  const [radius, setRadius] = useState(20);
  const [opacity, setOpacity] = useState(0.08);
  const [glowSize, setGlowSize] = useState(30);
  const [tilt, setTilt] = useState(true);
  const [selectedPalette, setSelectedPalette] = useState(PALETTES[0]);
  const [copied, setCopied] = useState(false);

  const generatedCss = `.interactive-glass-card {
  background: rgba(255, 255, 255, ${opacity});
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border: 1px solid rgba(${selectedPalette.glow}, 0.3);
  border-radius: ${radius}px;
  box-shadow: 0 20px ${glowSize}px -5px rgba(${selectedPalette.glow}, 0.35);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-black to-[#05070c] border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none blur-3xl transition-all duration-700"
        style={{ background: `rgba(${selectedPalette.glow}, 0.15)` }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none blur-3xl transition-all duration-700"
        style={{ background: `rgba(${selectedPalette.glow}, 0.12)` }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Interactive CSS FX Visualizer</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Modern CSS Glassmorphism & 3D Lab
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Drag the interactive sliders below to observe how GPU-accelerated backdrop blur, specular lighting, and box-shadow physics compose in real-time.
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-medium border border-white/20 transition-all flex items-center gap-2 shadow-lg"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-300 font-semibold">CSS Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>Copy Generated CSS</span>
              </>
            )}
          </button>
        </div>

        {/* Playground grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Palette selection */}
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-slate-300 block mb-2">
                1. Select Neon Glow Aura:
              </label>
              <div className="flex flex-wrap gap-2">
                {PALETTES.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPalette(p)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 border ${
                      selectedPalette.name === p.name
                        ? "bg-white/20 border-white text-white shadow-md"
                        : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: p.hex, boxShadow: `0 0 8px ${p.hex}` }}
                    />
                    <span>{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
              {/* Blur */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1 font-mono">
                  <span>Backdrop Blur:</span>
                  <span className="text-cyan-400 font-bold">{blur}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="35"
                  value={blur}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Radius */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1 font-mono">
                  <span>Border Radius:</span>
                  <span className="text-cyan-400 font-bold">{radius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Background Opacity */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1 font-mono">
                  <span>Card Alpha Opacity:</span>
                  <span className="text-cyan-400 font-bold">{(opacity * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.02"
                  max="0.35"
                  step="0.01"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Glow Intensity */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1 font-mono">
                  <span>Shadow Spread & Depth:</span>
                  <span className="text-cyan-400 font-bold">{glowSize}px</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={glowSize}
                  onChange={(e) => setGlowSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* 3D Tilt toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-xs text-slate-300">Enable 3D Perspective Hover Tilt</span>
                <button
                  type="button"
                  onClick={() => setTilt(!tilt)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                    tilt ? "bg-cyan-500" : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      tilt ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Generated CSS snippet */}
            <div className="bg-black/60 rounded-xl p-4 border border-white/10 font-mono text-[11px] text-slate-300 overflow-x-auto">
              <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold mb-2">
                <span>Output CSS Ruleset</span>
                <span className="text-emerald-400">Live Generated</span>
              </div>
              <pre className="text-cyan-300/90 whitespace-pre-wrap leading-relaxed">{generatedCss}</pre>
            </div>
          </div>

          {/* Interactive Live Canvas preview */}
          <div className="lg:col-span-6 flex items-center justify-center p-6 sm:p-12 relative min-h-[380px] bg-radial from-slate-900/60 to-black/90 rounded-2xl border border-white/5 overflow-hidden">
            {/* Background pattern beneath the glass card */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Glowing colorful geometric background blobs */}
            <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 opacity-60 blur-xl top-6 left-8 animate-pulse" />
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-60 blur-xl bottom-8 right-8 animate-pulse" style={{ animationDelay: "1s" }} />

            {/* The Live Interactive Glassmorphic Card */}
            <div
              className={`relative z-20 w-full max-w-sm p-6 text-white transition-all duration-300 ${
                tilt ? "hover:scale-[1.03] hover:-rotate-1 cursor-pointer" : ""
              }`}
              style={{
                background: `rgba(255, 255, 255, ${opacity})`,
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                border: `1px solid rgba(${selectedPalette.glow}, 0.35)`,
                borderRadius: `${radius}px`,
                boxShadow: `0 20px ${glowSize}px -5px rgba(${selectedPalette.glow}, 0.35)`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase"
                  style={{
                    backgroundColor: `rgba(${selectedPalette.glow}, 0.15)`,
                    color: selectedPalette.hex,
                    border: `1px solid rgba(${selectedPalette.glow}, 0.4)`,
                  }}
                >
                  Live Preview
                </span>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                  <span className="w-2 h-2 rounded-full bg-green-400/80" />
                </div>
              </div>

              <h4 className="text-xl font-bold mb-2 tracking-tight">
                CSS3 Modern Glassmorphic Engine
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Notice how the vibrant colors behind this card smoothly blur while the specular border reflects the selected glowing hue.
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">blur({blur}px)</span>
                <span className="font-mono">radius({radius}px)</span>
                <span className="text-white font-medium">60 FPS Hardware</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCssPlayground;
