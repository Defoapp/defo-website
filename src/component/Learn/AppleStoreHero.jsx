import React, { useState, useEffect, useRef } from "react";
import { TECH_ICONS } from "./techIconsData";
import { useTheme } from "../../context/ThemeContext";

// Defo App Icon SVG (Apple App Store style squircle centerpiece)
const DefoAppSquircle = () => {
  return (
    <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95">
      {/* Ambient 3D glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-[36px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none" />

      {/* Squircle App Container */}
      <div
        className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-[28px] sm:rounded-[36px] p-[2px] shadow-2xl flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #3B82F6 100%)",
          boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.45), 0 8px 16px -4px rgba(6, 182, 212, 0.3)",
        }}
      >
        {/* Top Gloss Sheen (Apple App Store style glossy glass) */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.12) 65%, transparent 100%)",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          }}
        />

        {/* Diagonal Light Glare */}
        <div
          className="absolute -inset-full w-[200%] h-[200%] rotate-45 pointer-events-none group-hover:translate-x-1/2 transition-transform duration-1000"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
          }}
        />

        {/* Inner App Icon Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Defo Emblem: Iconic 'D' with Play Triangle */}
          <div className="relative flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              fill="none"
            >
              {/* Outer Bold 'D' in pure white */}
              <path
                d="M26 16h24c22.09 0 38 14.33 38 34s-15.91 34-38 34H26V16zm18 16v36h6c12.15 0 20-7.61 20-18s-7.85-18-20-18h-6z"
                fill="#FFFFFF"
              />
              {/* Vibrant Forward-Facing Play Triangle Inside */}
              <polygon
                points="49,36 49,64 73,50"
                fill="#00E599"
                className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              />
            </svg>
          </div>
        </div>

        {/* Subtle inner border for Apple retina sharpness */}
        <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] border border-white/30 pointer-events-none" />
      </div>
    </div>
  );
};

const AppleStoreHero = ({ onSelectCategory, onScrollToSection }) => {
  const { isDark } = useTheme();
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  // Smooth entrance trigger on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Smooth 3D mouse parallax tracking
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    // Limit maximum tilt angle for gentle Apple spatial effect
    setMouseTilt({
      x: Math.max(-1, Math.min(1, deltaX)) * 7,
      y: Math.max(-1, Math.min(1, deltaY)) * -7,
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
    setHoveredIcon(null);
  };

  // Group icons by display row for arch layout
  // Top wide canopy
  const topIcons = TECH_ICONS.filter((item) => item.tier === 3);
  // Mid canopy
  const midIcons = TECH_ICONS.filter((item) => item.tier === 2);
  // Tier 1 left (HTML, CSS, JS, etc.) and right (Python, React, Node, TS, etc.)
  const tier1Left = TECH_ICONS.filter((item) => item.tier === 1 && item.col.includes("left"));
  const tier1Right = TECH_ICONS.filter((item) => item.tier === 1 && item.col.includes("right"));

  const handleIconClick = (category) => {
    onSelectCategory(category);
    onScrollToSection("articles-grid");
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full overflow-hidden transition-colors duration-500 pt-0 pb-12 sm:pb-16 ${
        isDark ? "bg-[#06080e]" : "bg-gradient-to-b from-[#f5f5f7] via-[#fafafa] to-white"
      }`}
      style={{ perspective: "1400px" }}
    >
      {/* 1. Apple-Style Top Sub-Navigation Header Bar (Like Apple's App Store header in the reference image) */}
      <div
        className={`w-full py-2.5 px-4 sm:px-8 border-b backdrop-blur-md transition-colors duration-300 z-30 relative ${
          isDark
            ? "bg-black/60 border-white/10 text-slate-300"
            : "bg-white/80 border-slate-200/80 text-slate-700 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="text-base sm:text-lg font-bold tracking-tight bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Defo Learn
            </span>
            <span
              className={`hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                isDark
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-emerald-50 border-emerald-200 text-emerald-700"
              }`}
            >
              Apple-Style 3D Canopy
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            <button
              onClick={() => onScrollToSection("articles-grid")}
              className={`hover:text-emerald-500 transition-colors ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => onScrollToSection("css-playground")}
              className={`hover:text-cyan-500 transition-colors ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Live CSS Lab
            </button>
            <button
              onClick={() => onScrollToSection("code-sandbox")}
              className={`hover:text-emerald-500 transition-colors ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Code Sandbox
            </button>
            <button
              onClick={() => onScrollToSection("roadmap-tracks")}
              className={`hidden md:inline-block hover:text-emerald-500 transition-colors ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Roadmaps
            </button>
          </div>
        </div>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* 2. 3D Spatial Canopy of Tech App Squircles & Defo Logo */}
      <div
        className="max-w-6xl mx-auto px-4 pt-6 sm:pt-10 transition-transform duration-200 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${mouseTilt.y}deg) rotateY(${mouseTilt.x}deg)`,
        }}
      >
        {/* Tier 3: Upper Wide Canopy Arch with arched vertical offset */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-7 mb-2 sm:mb-4 flex-wrap">
          {topIcons.map((icon, idx) => {
            // Parabolic curve: center icons slightly lower, outer icons higher
            const distFromCenter = Math.abs(idx - (topIcons.length - 1) / 2);
            const curveOffset = Math.pow(distFromCenter, 1.4) * -6;
            return (
              <div
                key={icon.id}
                style={{
                  transform: `translateY(${curveOffset}px)`,
                }}
              >
                <SquircleIcon
                  icon={icon}
                  index={idx}
                  isLoaded={isLoaded}
                  isDark={isDark}
                  onHover={setHoveredIcon}
                  onClick={() => handleIconClick(icon.category)}
                />
              </div>
            );
          })}
        </div>

        {/* Tier 2: Mid Canopy Arch */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 mb-3 sm:mb-5 flex-wrap">
          {midIcons.map((icon, idx) => {
            const distFromCenter = Math.abs(idx - (midIcons.length - 1) / 2);
            const curveOffset = Math.pow(distFromCenter, 1.3) * -5;
            return (
              <div
                key={icon.id}
                style={{
                  transform: `translateY(${curveOffset}px)`,
                }}
              >
                <SquircleIcon
                  icon={icon}
                  index={idx + 6}
                  isLoaded={isLoaded}
                  isDark={isDark}
                  onHover={setHoveredIcon}
                  onClick={() => handleIconClick(icon.category)}
                />
              </div>
            );
          })}
        </div>

        {/* Tier 1 & Central Anchor: Surrounding Icons + Defo Centerpiece */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-8 my-2 sm:my-3">
          {/* Left Flanking Icons */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
            {tier1Left.map((icon, idx) => (
              <div
                key={icon.id}
                style={{
                  transform: `translateY(${-(tier1Left.length - 1 - idx) * 4}px)`,
                }}
              >
                <SquircleIcon
                  icon={icon}
                  index={idx + 14}
                  isLoaded={isLoaded}
                  isDark={isDark}
                  onHover={setHoveredIcon}
                  onClick={() => handleIconClick(icon.category)}
                />
              </div>
            ))}
          </div>

          {/* Central Featured Defo App Icon */}
          <div
            className={`flex flex-col items-center justify-center z-20 px-2 sm:px-4 transition-all duration-700 ease-out ${
              isLoaded
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-75 translate-y-8"
            }`}
            style={{
              transform: `translateZ(50px)`,
            }}
          >
            <DefoAppSquircle />
          </div>

          {/* Right Flanking Icons */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
            {tier1Right.map((icon, idx) => (
              <div
                key={icon.id}
                style={{
                  transform: `translateY(${-(idx) * 4}px)`,
                }}
              >
                <SquircleIcon
                  icon={icon}
                  index={idx + 18}
                  isLoaded={isLoaded}
                  isDark={isDark}
                  onHover={setHoveredIcon}
                  onClick={() => handleIconClick(icon.category)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Hero Label & Typography (Exactly matching "App Store" in the reference image) */}
        <div
          className={`text-center mt-6 sm:mt-8 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Main Title matching "App Store" */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-2 ${
              isDark ? "text-white" : "text-[#1d1d1f]"
            }`}
            style={{ fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, sans-serif" }}
          >
            Defo Learn
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-6 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Master Java, Python, HTML5, CSS3, JavaScript, and backend architectures through interactive sandboxes, live code execution, and cinematic visual guides.
          </p>

          {/* Quick stats pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                isDark
                  ? "bg-white/5 border-white/10 text-slate-300"
                  : "bg-slate-100 border-slate-200 text-slate-700 shadow-sm"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              15+ Technologies Ready
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                isDark
                  ? "bg-white/5 border-white/10 text-slate-300"
                  : "bg-slate-100 border-slate-200 text-slate-700 shadow-sm"
              }`}
            >
              ⚡ In-Browser Code Sandbox
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                isDark
                  ? "bg-white/5 border-white/10 text-slate-300"
                  : "bg-slate-100 border-slate-200 text-slate-700 shadow-sm"
              }`}
            >
              🎨 Live CSS Visualizer Lab
            </span>
          </div>

          {/* Floating Hover Details Pill */}
          <div className="h-8 mt-3 flex items-center justify-center">
            {hoveredIcon ? (
              <div
                className={`animate-fadeIn inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono border backdrop-blur-md shadow-lg ${
                  isDark
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-white border-slate-300 text-slate-900 shadow-slate-200"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: hoveredIcon.color }}
                />
                <span className="font-semibold">{hoveredIcon.name}:</span>
                <span className={isDark ? "text-slate-300" : "text-slate-600"}>
                  {hoveredIcon.badge}
                </span>
                <span className="text-emerald-500 font-bold ml-1">Click to filter →</span>
              </div>
            ) : (
              <span className="text-[11px] font-mono tracking-wider uppercase opacity-40">
                Hover any icon in 3D • Click to explore topic
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Apple Squircle App Icon Component with smooth 3D entry & hover
const SquircleIcon = ({ icon, index, isLoaded, isDark, onHover, onClick }) => {
  // Staggered entrance timing
  const delay = Math.min(800, index * 32);
  const floatDuration = 3.5 + (index % 4) * 0.4;
  const floatDelay = (index % 5) * 0.35;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => onHover(icon)}
      onMouseLeave={() => onHover(null)}
      className={`group relative cursor-pointer select-none transition-all duration-700 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Elevated Squircle Card with Ambient Floating */}
      <div
        className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[14px] sm:rounded-[18px] md:rounded-[20px] p-[1.5px] transition-all duration-300 ease-out group-hover:scale-115 group-active:scale-95 flex items-center justify-center overflow-hidden animate-squircle-3d"
        style={{
          background: icon.bgGradient,
          animationDuration: `${floatDuration}s`,
          animationDelay: `${floatDelay}s`,
          boxShadow: isDark
            ? `0 8px 24px -4px ${icon.glowColor}, 0 2px 6px rgba(0,0,0,0.5)`
            : `0 10px 20px -3px rgba(0,0,0,0.12), 0 4px 8px -2px rgba(0,0,0,0.06)`,
          transform: "translateZ(10px)",
        }}
      >
        {/* Apple Gloss Sheen */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.08) 60%, transparent 100%)",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          }}
        />

        {/* Ambient Hover Backlight Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${icon.glowColor} 0%, transparent 80%)`,
          }}
        />

        {/* Crisp Vector SVG Icon */}
        <div className="relative z-10 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          {icon.svg}
        </div>

        {/* Apple Squircle Inner Border */}
        <div
          className={`absolute inset-0 rounded-[14px] sm:rounded-[18px] md:rounded-[20px] pointer-events-none border ${
            isDark ? "border-white/20" : "border-black/10"
          }`}
        />
      </div>

      {/* Floating Tooltip Label */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30 whitespace-nowrap">
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded shadow-md border ${
            isDark
              ? "bg-slate-900 border-slate-700 text-white"
              : "bg-white border-slate-200 text-slate-800"
          }`}
        >
          {icon.name}
        </span>
      </div>
    </div>
  );
};

export default AppleStoreHero;
