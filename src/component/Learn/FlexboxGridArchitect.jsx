import React, { useState } from "react";

const FLEX_PRESETS = [
  {
    name: "Hero Center (Holy Grail)",
    desc: "Perfect horizontal & vertical centering with generous gap",
    direction: "row",
    justify: "center",
    align: "center",
    wrap: "wrap",
    gap: 20,
    itemCount: 3,
  },
  {
    name: "Responsive App Navbar",
    desc: "Space-between distribution with vertically centered items",
    direction: "row",
    justify: "space-between",
    align: "center",
    wrap: "nowrap",
    gap: 16,
    itemCount: 4,
  },
  {
    name: "Staggered Card Stack",
    desc: "Evenly spaced flex wrap layout for dashboard widgets",
    direction: "row",
    justify: "space-evenly",
    align: "stretch",
    wrap: "wrap",
    gap: 24,
    itemCount: 6,
  },
  {
    name: "Vertical Feed / Timeline",
    desc: "Column flow with start alignment and compact spacing",
    direction: "column",
    justify: "flex-start",
    align: "stretch",
    wrap: "nowrap",
    gap: 16,
    itemCount: 4,
  },
];

const GRID_PRESETS = [
  {
    name: "3-Column Responsive Grid",
    columns: "repeat(3, minmax(0, 1fr))",
    colCount: 3,
    justify: "stretch",
    align: "stretch",
    gap: 20,
    itemCount: 6,
  },
  {
    name: "Asymmetric Bento Box",
    columns: "2fr 1fr 1fr",
    colCount: 3,
    justify: "stretch",
    align: "stretch",
    gap: 16,
    itemCount: 5,
  },
  {
    name: "Auto-Fit Fluid Cards",
    columns: "repeat(auto-fit, minmax(140px, 1fr))",
    colCount: 4,
    justify: "stretch",
    align: "stretch",
    gap: 20,
    itemCount: 6,
  },
  {
    name: "4-Column Metrics Showcase",
    columns: "repeat(4, minmax(0, 1fr))",
    colCount: 4,
    justify: "stretch",
    align: "stretch",
    gap: 16,
    itemCount: 4,
  },
];

const ITEM_COLORS = [
  { bg: "from-emerald-500/30 to-teal-600/30", border: "border-emerald-400/50", text: "text-emerald-300", accent: "#00f298" },
  { bg: "from-cyan-500/30 to-blue-600/30", border: "border-cyan-400/50", text: "text-cyan-300", accent: "#00f6ff" },
  { bg: "from-purple-500/30 to-pink-600/30", border: "border-purple-400/50", text: "text-purple-300", accent: "#c084fc" },
  { bg: "from-amber-500/30 to-orange-600/30", border: "border-amber-400/50", text: "text-amber-300", accent: "#fbbf24" },
  { bg: "from-rose-500/30 to-red-600/30", border: "border-rose-400/50", text: "text-rose-300", accent: "#fb7185" },
  { bg: "from-indigo-500/30 to-cyan-600/30", border: "border-indigo-400/50", text: "text-indigo-300", accent: "#818cf8" },
  { bg: "from-teal-500/30 to-emerald-600/30", border: "border-teal-400/50", text: "text-teal-300", accent: "#2dd4bf" },
  { bg: "from-fuchsia-500/30 to-purple-600/30", border: "border-fuchsia-400/50", text: "text-fuchsia-300", accent: "#e879f9" },
];

export default function FlexboxGridArchitect() {
  const [layoutMode, setLayoutMode] = useState("flex"); // 'flex' | 'grid'

  // Flexbox state
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");
  const [flexWrap, setFlexWrap] = useState("wrap");

  // Grid state
  const [gridColumns, setGridColumns] = useState(3);
  const [gridJustify, setGridJustify] = useState("stretch");
  const [gridAlign, setGridAlign] = useState("stretch");

  // Shared state
  const [gap, setGap] = useState(20);
  const [itemCount, setItemCount] = useState(5);
  const [copiedFormat, setCopiedFormat] = useState(null);
  const [selectedPresetName, setSelectedPresetName] = useState(FLEX_PRESETS[0].name);

  // Generate CSS code
  const generatedCss = layoutMode === "flex"
    ? `.layout-container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  gap: ${gap}px;
}`
    : `.layout-container {
  display: grid;
  grid-template-columns: repeat(${gridColumns}, minmax(0, 1fr));
  justify-items: ${gridJustify};
  align-items: ${gridAlign};
  gap: ${gap}px;
}`;

  // Generate Tailwind equivalent classes
  const generatedTailwind = layoutMode === "flex"
    ? `flex ${flexDirection === "row" ? "flex-row" : flexDirection === "row-reverse" ? "flex-row-reverse" : flexDirection === "column" ? "flex-col" : "flex-col-reverse"} ${
        justifyContent === "flex-start" ? "justify-start" : justifyContent === "center" ? "justify-center" : justifyContent === "flex-end" ? "justify-end" : justifyContent === "space-between" ? "justify-between" : justifyContent === "space-around" ? "justify-around" : "justify-evenly"
      } ${
        alignItems === "stretch" ? "items-stretch" : alignItems === "flex-start" ? "items-start" : alignItems === "center" ? "items-center" : alignItems === "flex-end" ? "items-end" : "items-baseline"
      } ${flexWrap === "wrap" ? "flex-wrap" : flexWrap === "wrap-reverse" ? "flex-wrap-reverse" : "flex-nowrap"} gap-[${gap}px]`
    : `grid grid-cols-${gridColumns} ${
        gridJustify === "stretch" ? "justify-items-stretch" : gridJustify === "start" ? "justify-items-start" : gridJustify === "center" ? "justify-items-center" : "justify-items-end"
      } ${
        gridAlign === "stretch" ? "items-stretch" : gridAlign === "start" ? "items-start" : gridAlign === "center" ? "items-center" : "items-end"
      } gap-[${gap}px]`;

  const handleCopy = (type) => {
    const textToCopy = type === "css" ? generatedCss : generatedTailwind;
    navigator.clipboard.writeText(textToCopy);
    setCopiedFormat(type);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const applyFlexPreset = (preset) => {
    setSelectedPresetName(preset.name);
    setFlexDirection(preset.direction);
    setJustifyContent(preset.justify);
    setAlignItems(preset.align);
    setFlexWrap(preset.wrap);
    setGap(preset.gap);
    setItemCount(preset.itemCount);
  };

  const applyGridPreset = (preset) => {
    setSelectedPresetName(preset.name);
    setGridColumns(preset.colCount);
    setGridJustify(preset.justify);
    setGridAlign(preset.align);
    setGap(preset.gap);
    setItemCount(preset.itemCount);
  };

  return (
    <div className="preserve-dark w-full my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#05070c] border border-white/10 shadow-2xl relative overflow-hidden text-white">
      {/* Background ambient decorative aurora glows */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Modern Layout Blueprint Engine</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Visual CSS Flexbox & Grid Architect
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed font-light">
              Toggle layout properties in real time to understand multidimensional alignment, wrapping dynamics, and responsive grid geometry.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-black/60 border border-white/15 rounded-2xl self-start md:self-auto shadow-inner">
            <button
              onClick={() => {
                setLayoutMode("flex");
                setSelectedPresetName(FLEX_PRESETS[0].name);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                layoutMode === "flex"
                  ? "bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/30 scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>📐 Flexbox Flow</span>
            </button>
            <button
              onClick={() => {
                setLayoutMode("grid");
                setSelectedPresetName(GRID_PRESETS[0].name);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                layoutMode === "grid"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 shadow-md shadow-cyan-500/30 scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>▦ CSS 2D Grid</span>
            </button>
          </div>
        </div>

        {/* Quick Presets Bar */}
        <div className="mb-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-2.5">
            Quick Architecture Templates:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {(layoutMode === "flex" ? FLEX_PRESETS : GRID_PRESETS).map((preset) => {
              const isSelected = selectedPresetName === preset.name;
              return (
                <button
                  key={preset.name}
                  onClick={() => (layoutMode === "flex" ? applyFlexPreset(preset) : applyGridPreset(preset))}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer text-xs ${
                    isSelected
                      ? "bg-white/10 border-emerald-400/60 shadow-lg shadow-emerald-500/10 text-white font-semibold"
                      : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold truncate">{preset.name}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />}
                  </div>
                  <span className="text-[10px] text-slate-400 line-clamp-1">
                    {preset.desc || `${preset.colCount || 3} Columns fluid`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (5 Columns) */}
          <div className="lg:col-span-5 space-y-5 bg-white/[0.02] border border-white/10 rounded-2xl p-5">
            <h4 className="text-sm font-bold text-white flex items-center justify-between border-b border-white/10 pb-3">
              <span>Layout Constraints</span>
              <span className="text-[11px] font-mono text-emerald-400 uppercase">
                {layoutMode.toUpperCase()}
              </span>
            </h4>

            {layoutMode === "flex" ? (
              <>
                {/* flex-direction */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                    flex-direction:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["row", "column", "row-reverse", "column-reverse"].map((dir) => (
                      <button
                        key={dir}
                        onClick={() => setFlexDirection(dir)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                          flexDirection === dir
                            ? "bg-emerald-500/20 border border-emerald-400/80 text-emerald-300 font-bold"
                            : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        {dir}
                      </button>
                    ))}
                  </div>
                </div>

                {/* justify-content */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                    justify-content (Main Axis):
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"].map((j) => (
                      <button
                        key={j}
                        onClick={() => setJustifyContent(j)}
                        className={`px-2 py-1.5 rounded-xl text-[11px] font-mono truncate transition-all ${
                          justifyContent === j
                            ? "bg-emerald-500/20 border border-emerald-400/80 text-emerald-300 font-bold"
                            : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                        }`}
                        title={j}
                      >
                        {j.replace("flex-", "").replace("space-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* align-items */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                    align-items (Cross Axis):
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {["stretch", "flex-start", "center", "flex-end", "baseline"].map((a) => (
                      <button
                        key={a}
                        onClick={() => setAlignItems(a)}
                        className={`px-2 py-1.5 rounded-xl text-[11px] font-mono truncate transition-all ${
                          alignItems === a
                            ? "bg-emerald-500/20 border border-emerald-400/80 text-emerald-300 font-bold"
                            : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                        }`}
                        title={a}
                      >
                        {a.replace("flex-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* flex-wrap */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                    flex-wrap:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["nowrap", "wrap", "wrap-reverse"].map((w) => (
                      <button
                        key={w}
                        onClick={() => setFlexWrap(w)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                          flexWrap === w
                            ? "bg-emerald-500/20 border border-emerald-400/80 text-emerald-300 font-bold"
                            : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* grid-template-columns */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs text-slate-300 font-medium">
                      grid columns:
                    </label>
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {gridColumns} cols (repeat({gridColumns}, 1fr))
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[2, 3, 4, 5, 6].map((cols) => (
                      <button
                        key={cols}
                        onClick={() => setGridColumns(cols)}
                        className={`flex-1 py-1.5 rounded-xl text-xs font-mono transition-all ${
                          gridColumns === cols
                            ? "bg-cyan-500/20 border border-cyan-400/80 text-cyan-300 font-bold"
                            : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        {cols}c
                      </button>
                    ))}
                  </div>
                </div>

                {/* justify-items */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                    justify-items (Inline):
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {["stretch", "start", "center", "end"].map((j) => (
                      <button
                        key={j}
                        onClick={() => setGridJustify(j)}
                        className={`px-2 py-1.5 rounded-xl text-xs font-mono transition-all ${
                          gridJustify === j
                            ? "bg-cyan-500/20 border border-cyan-400/80 text-cyan-300 font-bold"
                            : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        {j}
                      </button>
                    ))}
                  </div>
                </div>

                {/* align-items */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                    align-items (Block):
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {["stretch", "start", "center", "end"].map((a) => (
                      <button
                        key={a}
                        onClick={() => setGridAlign(a)}
                        className={`px-2 py-1.5 rounded-xl text-xs font-mono transition-all ${
                          gridAlign === a
                            ? "bg-cyan-500/20 border border-cyan-400/80 text-cyan-300 font-bold"
                            : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Gap Slider */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs text-slate-300 font-medium">gap:</label>
                <span className="text-xs font-mono text-emerald-400 font-bold">{gap}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="48"
                step="4"
                value={gap}
                onChange={(e) => setGap(Number(e.target.value))}
                className="w-full accent-emerald-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

            {/* Item Count Selector */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium">Rendered Items:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setItemCount((c) => Math.max(2, c - 1))}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold active:scale-95 transition-all"
                  title="Remove item"
                >
                  -
                </button>
                <span className="text-xs font-mono text-white font-bold w-6 text-center">
                  {itemCount}
                </span>
                <button
                  onClick={() => setItemCount((c) => Math.min(8, c + 1))}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold active:scale-95 transition-all"
                  title="Add item"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Live Canvas & Code Preview (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Visual Canvas Container */}
            <div className="relative rounded-2xl bg-black/70 border border-white/15 p-4 sm:p-6 overflow-hidden min-h-[340px] flex flex-col justify-between shadow-2xl">
              {/* Subtle grid background pattern */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Canvas header status */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4 border-b border-white/10 pb-2 relative z-10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Live Preview Container ({layoutMode.toUpperCase()})
                </span>
                <span className="text-[10px] text-slate-500">60 FPS Hardware Composited</span>
              </div>

              {/* Dynamic Interactive Container */}
              <div
                className="w-full flex-1 transition-all duration-300 relative z-10"
                style={
                  layoutMode === "flex"
                    ? {
                        display: "flex",
                        flexDirection,
                        justifyContent,
                        alignItems,
                        flexWrap,
                        gap: `${gap}px`,
                        minHeight: "260px",
                      }
                    : {
                        display: "grid",
                        gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
                        justifyItems: gridJustify,
                        alignItems: gridAlign,
                        gap: `${gap}px`,
                        minHeight: "260px",
                      }
                }
              >
                {Array.from({ length: itemCount }).map((_, index) => {
                  const colorScheme = ITEM_COLORS[index % ITEM_COLORS.length];
                  return (
                    <div
                      key={index}
                      className={`relative rounded-2xl p-4 flex flex-col justify-between border ${colorScheme.border} bg-gradient-to-br ${colorScheme.bg} shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 select-none`}
                      style={{
                        minWidth: layoutMode === "flex" ? "95px" : "auto",
                        minHeight: "75px",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-white/90">
                          #{index + 1}
                        </span>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: colorScheme.accent }}
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <span className={`text-xs font-semibold ${colorScheme.text}`}>
                          Block {index + 1}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Generated Code Switcher & Copy Controls */}
            <div className="rounded-2xl bg-black/80 border border-white/10 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
                  <span className="text-emerald-400">⚡</span> Copy Code Snippets
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy("css")}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-xs text-white border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedFormat === "css" ? (
                      <span className="text-emerald-300 font-bold">✓ CSS Copied</span>
                    ) : (
                      <span>Copy CSS</span>
                    )}
                  </button>

                  <button
                    onClick={() => handleCopy("tailwind")}
                    className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 active:scale-95 text-xs text-cyan-300 border border-cyan-400/40 transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
                  >
                    {copiedFormat === "tailwind" ? (
                      <span className="text-cyan-200 font-bold">✓ Tailwind Copied</span>
                    ) : (
                      <span>Copy Tailwind</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Previews */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider font-semibold">
                    Native CSS:
                  </span>
                  <pre className="p-3 rounded-xl bg-slate-950 border border-white/5 text-emerald-400 overflow-x-auto leading-relaxed">
                    {generatedCss}
                  </pre>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider font-semibold">
                    Tailwind Utility Classes:
                  </span>
                  <pre className="p-3 rounded-xl bg-slate-950 border border-white/5 text-cyan-300 overflow-x-auto leading-relaxed whitespace-pre-wrap break-all">
                    {generatedTailwind}
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
