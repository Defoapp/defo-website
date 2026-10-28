import React, { useState, useMemo } from "react";

// Color Utility Functions
function hexToRgb(hex) {
  let cleanHex = hex.replace("#", "").trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split("").map((c) => c + c).join("");
  }
  const num = parseInt(cleanHex, 16);
  if (isNaN(num) || cleanHex.length !== 6) {
    return { r: 0, g: 242, b: 152 }; // fallback Defo green
  }
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function rgbToHex(r, g, b) {
  const clamp = (val) => Math.max(0, Math.min(255, Math.round(val)));
  return (
    "#" +
    [clamp(r), clamp(g), clamp(b)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return {
    r: Math.round(f(0) * 255),
    g: Math.round(f(8) * 255),
    b: Math.round(f(4) * 255),
  };
}

// WCAG Relative Luminance
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Contrast Ratio Formula: (L1 + 0.05) / (L2 + 0.05)
function getContrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const BRAND_PRESETS = [
  { name: "Defo Mint", hex: "#00f298" },
  { name: "Cyber Cyan", hex: "#00f6ff" },
  { name: "Electric Violet", hex: "#a855f7" },
  { name: "Solar Amber", hex: "#f59e0b" },
  { name: "Neon Rose", hex: "#f43f5e" },
  { name: "Royal Azure", hex: "#3b82f6" },
  { name: "Crimson Flame", hex: "#ef4444" },
];

const DARK_BG_RGB = { r: 10, g: 13, b: 20 };
const LIGHT_BG_RGB = { r: 255, g: 255, b: 255 };

export default function ColorHarmonyValidator() {
  const [hexColor, setHexColor] = useState("#00f298");
  const [copiedText, setCopiedText] = useState(null);

  const rgb = useMemo(() => hexToRgb(hexColor), [hexColor]);
  const hsl = useMemo(() => rgbToHsl(rgb.r, rgb.g, rgb.b), [rgb]);

  // Derived Harmonies
  const harmonies = useMemo(() => {
    const makeHex = (h, s, l) => {
      const c = hslToRgb(h, s, l);
      return rgbToHex(c.r, c.g, c.b);
    };

    return {
      complementary: makeHex(hsl.h + 180, hsl.s, hsl.l),
      analogous1: makeHex(hsl.h - 30, hsl.s, hsl.l),
      analogous2: makeHex(hsl.h + 30, hsl.s, hsl.l),
      triadic1: makeHex(hsl.h + 120, hsl.s, hsl.l),
      triadic2: makeHex(hsl.h + 240, hsl.s, hsl.l),
      split1: makeHex(hsl.h + 150, hsl.s, hsl.l),
      split2: makeHex(hsl.h + 210, hsl.s, hsl.l),
      shades: [
        makeHex(hsl.h, hsl.s, 90),
        makeHex(hsl.h, hsl.s, 70),
        makeHex(hsl.h, hsl.s, 50),
        makeHex(hsl.h, hsl.s, 30),
        makeHex(hsl.h, hsl.s, 15),
      ],
    };
  }, [hsl]);

  const contrastDark = useMemo(() => getContrastRatio(rgb, DARK_BG_RGB), [rgb]);
  const contrastLight = useMemo(() => getContrastRatio(rgb, LIGHT_BG_RGB), [rgb]);

  // Determine best readable text color on top of this color (black or white)
  const textOnColor = useMemo(() => {
    const ratioWhite = getContrastRatio(rgb, LIGHT_BG_RGB);
    const ratioBlack = getContrastRatio(rgb, { r: 0, g: 0, b: 0 });
    return ratioBlack >= ratioWhite ? "#000000" : "#ffffff";
  }, [rgb]);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const generatedCssVariables = `:root {
  --color-brand-primary: ${hexColor};
  --color-brand-rgb: ${rgb.r}, ${rgb.g}, ${rgb.b};
  --color-brand-contrast: ${textOnColor};
  --color-brand-complementary: ${harmonies.complementary};
  --color-brand-analogous-1: ${harmonies.analogous1};
  --color-brand-analogous-2: ${harmonies.analogous2};
}`;

  return (
    <div className="preserve-dark w-full my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#05070c] border border-white/10 shadow-2xl relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-colors duration-500 opacity-20"
        style={{ background: hexColor }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-colors duration-500 opacity-20"
        style={{ background: harmonies.complementary }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Color Science & Accessibility Studio</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Color Harmony & WCAG Contrast Validator
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed font-light">
              Explore mathematical color harmonies, test real-time WCAG 2.1 accessibility compliance scores, and export production design tokens.
            </p>
          </div>

          <button
            onClick={() => handleCopy(generatedCssVariables, "css-tokens")}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold border border-white/20 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
          >
            {copiedText === "css-tokens" ? (
              <span className="text-emerald-300 font-bold">✓ Tokens Copied!</span>
            ) : (
              <span>📋 Export Design Tokens</span>
            )}
          </button>
        </div>

        {/* Color Input & Presets */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
          <div className="flex items-center gap-3">
            {/* Color Swatch Picker */}
            <div className="relative">
              <input
                type="color"
                value={hexColor}
                onChange={(e) => setHexColor(e.target.value)}
                className="w-12 h-12 rounded-xl cursor-pointer bg-transparent border-0 opacity-0 absolute inset-0 z-10"
              />
              <div
                className="w-12 h-12 rounded-xl border border-white/30 shadow-lg flex items-center justify-center transition-transform hover:scale-105"
                style={{ backgroundColor: hexColor }}
              >
                <span className="text-xs font-bold" style={{ color: textOnColor }}>
                  🎨
                </span>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 block font-semibold">Active Base Hex:</label>
              <input
                type="text"
                value={hexColor}
                onChange={(e) => setHexColor(e.target.value)}
                className="w-28 px-2.5 py-1 rounded-lg bg-black/60 border border-white/20 text-xs font-mono font-bold text-white focus:outline-none focus:border-emerald-400 mt-0.5"
              />
            </div>
            <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
              RGB: ({rgb.r}, {rgb.g}, {rgb.b}) • HSL: ({Math.round(hsl.h)}°, {Math.round(hsl.s)}%, {Math.round(hsl.l)}%)
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-slate-400 font-semibold uppercase mr-1">Presets:</span>
            {BRAND_PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => setHexColor(p.hex)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  hexColor.toLowerCase() === p.hex.toLowerCase()
                    ? "bg-white/20 border-white/50 text-white font-bold shadow-md"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.hex }} />
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Harmonic Palettes (6 Columns) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 space-y-5">
              <h4 className="text-sm font-bold text-white flex items-center justify-between border-b border-white/10 pb-3">
                <span>Color Theory Harmonies</span>
                <span className="text-[11px] font-mono text-emerald-400">MATH-CALCULATED</span>
              </h4>

              {/* 1. Complementary */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-300">Complementary (180° Opposite)</span>
                  <span className="text-slate-500 font-mono text-[10px]">High Visual Tension</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => handleCopy(hexColor, "base")}
                    className="h-16 rounded-xl border border-white/15 p-2.5 flex flex-col justify-between cursor-pointer transition-transform hover:scale-102"
                    style={{ backgroundColor: hexColor }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: textOnColor }}>Base</span>
                    <span className="text-xs font-mono font-bold" style={{ color: textOnColor }}>{hexColor}</span>
                  </div>
                  <div
                    onClick={() => {
                      setHexColor(harmonies.complementary);
                      handleCopy(harmonies.complementary, "comp");
                    }}
                    className="h-16 rounded-xl border border-white/15 p-2.5 flex flex-col justify-between cursor-pointer transition-transform hover:scale-102"
                    style={{ backgroundColor: harmonies.complementary }}
                  >
                    <span className="text-[10px] font-bold text-white drop-shadow">Complement</span>
                    <span className="text-xs font-mono font-bold text-white drop-shadow">{harmonies.complementary}</span>
                  </div>
                </div>
              </div>

              {/* 2. Analogous Triad */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-300">Analogous Harmony (±30° Shift)</span>
                  <span className="text-slate-500 font-mono text-[10px]">Peaceful & Organic</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  <div
                    onClick={() => setHexColor(harmonies.analogous1)}
                    className="h-14 rounded-xl border border-white/15 p-2 flex flex-col justify-between cursor-pointer hover:scale-102 transition-transform"
                    style={{ backgroundColor: harmonies.analogous1 }}
                  >
                    <span className="text-[9px] font-bold text-white drop-shadow">-30°</span>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow">{harmonies.analogous1}</span>
                  </div>
                  <div
                    className="h-14 rounded-xl border border-white/30 p-2 flex flex-col justify-between"
                    style={{ backgroundColor: hexColor }}
                  >
                    <span className="text-[9px] font-bold" style={{ color: textOnColor }}>Base</span>
                    <span className="text-[10px] font-mono font-bold" style={{ color: textOnColor }}>{hexColor}</span>
                  </div>
                  <div
                    onClick={() => setHexColor(harmonies.analogous2)}
                    className="h-14 rounded-xl border border-white/15 p-2 flex flex-col justify-between cursor-pointer hover:scale-102 transition-transform"
                    style={{ backgroundColor: harmonies.analogous2 }}
                  >
                    <span className="text-[9px] font-bold text-white drop-shadow">+30°</span>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow">{harmonies.analogous2}</span>
                  </div>
                </div>
              </div>

              {/* 3. Triadic Palette */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-300">Triadic Palette (120° Triangle)</span>
                  <span className="text-slate-500 font-mono text-[10px]">Vibrant & Balanced</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  <div
                    className="h-14 rounded-xl border border-white/30 p-2 flex flex-col justify-between"
                    style={{ backgroundColor: hexColor }}
                  >
                    <span className="text-[9px] font-bold" style={{ color: textOnColor }}>Base</span>
                    <span className="text-[10px] font-mono font-bold" style={{ color: textOnColor }}>{hexColor}</span>
                  </div>
                  <div
                    onClick={() => setHexColor(harmonies.triadic1)}
                    className="h-14 rounded-xl border border-white/15 p-2 flex flex-col justify-between cursor-pointer hover:scale-102 transition-transform"
                    style={{ backgroundColor: harmonies.triadic1 }}
                  >
                    <span className="text-[9px] font-bold text-white drop-shadow">+120°</span>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow">{harmonies.triadic1}</span>
                  </div>
                  <div
                    onClick={() => setHexColor(harmonies.triadic2)}
                    className="h-14 rounded-xl border border-white/15 p-2 flex flex-col justify-between cursor-pointer hover:scale-102 transition-transform"
                    style={{ backgroundColor: harmonies.triadic2 }}
                  >
                    <span className="text-[9px] font-bold text-white drop-shadow">+240°</span>
                    <span className="text-[10px] font-mono font-bold text-white drop-shadow">{harmonies.triadic2}</span>
                  </div>
                </div>
              </div>

              {/* 4. Monochromatic Tints & Shades */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-300">Monochromatic Tints & Shades</span>
                  <span className="text-slate-500 font-mono text-[10px]">UI Hierarchy Steps</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {harmonies.shades.map((shade, i) => (
                    <div
                      key={i}
                      onClick={() => handleCopy(shade, `shade-${i}`)}
                      className="h-12 rounded-lg border border-white/10 p-1 flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform"
                      style={{ backgroundColor: shade }}
                      title={`Click to copy: ${shade}`}
                    >
                      <span className="text-[8px] font-mono opacity-80 mix-blend-difference text-white">
                        {90 - i * 20}%
                      </span>
                      <span className="text-[8px] font-mono opacity-80 mix-blend-difference text-white truncate">
                        {shade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: WCAG Accessibility Validator & Component Mockup (6 Columns) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* WCAG Compliance Card */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center justify-between border-b border-white/10 pb-3">
                <span>WCAG 2.1 Accessibility Validator</span>
                <span className="text-[11px] font-mono text-cyan-400">ISO/IEC 40500</span>
              </h4>

              {/* Contrast Meters */}
              <div className="grid grid-cols-2 gap-4">
                {/* Against Dark Background */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">On Dark Surface (#0a0d14):</span>
                  <div className="flex items-baseline gap-1.5 my-1">
                    <span className="text-2xl font-black font-mono text-emerald-400">
                      {contrastDark.toFixed(1)}:1
                    </span>
                  </div>

                  <div className="space-y-1.5 mt-3 pt-3 border-t border-white/10 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[11px]">AA Normal Text (≥4.5:1)</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        contrastDark >= 4.5 ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                      }`}>
                        {contrastDark >= 4.5 ? "PASS" : "FAIL"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[11px]">AAA Normal Text (≥7.0:1)</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        contrastDark >= 7.0 ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                      }`}>
                        {contrastDark >= 7.0 ? "PASS" : "FAIL"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Against Light Background */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">On Pure White (#ffffff):</span>
                  <div className="flex items-baseline gap-1.5 my-1">
                    <span className="text-2xl font-black font-mono text-cyan-400">
                      {contrastLight.toFixed(1)}:1
                    </span>
                  </div>

                  <div className="space-y-1.5 mt-3 pt-3 border-t border-white/10 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[11px]">AA Normal Text (≥4.5:1)</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        contrastLight >= 4.5 ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                      }`}>
                        {contrastLight >= 4.5 ? "PASS" : "FAIL"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[11px]">AAA Normal Text (≥7.0:1)</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        contrastLight >= 7.0 ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                      }`}>
                        {contrastLight >= 7.0 ? "PASS" : "FAIL"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Live Component Specimen Preview */}
            <div className="rounded-2xl bg-black/60 border border-white/10 p-5 space-y-4">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                Live UI Component Specimen:
              </span>

              {/* Primary Button */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  className="px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    backgroundColor: hexColor,
                    color: textOnColor,
                    boxShadow: `0 10px 25px -5px ${hexColor}60`,
                  }}
                >
                  Primary Action Button
                </button>

                <div
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{
                    borderColor: `${hexColor}60`,
                    color: hexColor,
                    backgroundColor: `${hexColor}15`,
                  }}
                >
                  Active Tag Pill
                </div>
              </div>

              {/* Mock Banner */}
              <div
                className="p-3.5 rounded-xl border flex items-center justify-between text-xs"
                style={{
                  borderColor: `${hexColor}40`,
                  backgroundColor: `${hexColor}10`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hexColor }} />
                  <span className="text-white font-medium">
                    Infotainment Notification Badge
                  </span>
                </div>
                <span className="font-mono text-[11px]" style={{ color: hexColor }}>
                  {hexColor}
                </span>
              </div>
            </div>

            {/* Token Snippet */}
            <div className="rounded-2xl bg-black/80 border border-white/10 p-4 font-mono text-xs">
              <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider font-semibold">
                Generated CSS Variables:
              </span>
              <pre className="p-3 rounded-xl bg-slate-950 border border-white/5 text-cyan-300 overflow-x-auto leading-relaxed">
                {generatedCssVariables}
              </pre>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
