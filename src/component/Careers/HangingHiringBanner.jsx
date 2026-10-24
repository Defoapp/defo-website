import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

// Single Realistic Interlocking Chain Link
const ChainLink = ({ id, isSide = false, isDark = false }) => {
  if (isSide) {
    // Narrow edge-on view of the link
    return (
      <svg width="12" height="18" viewBox="0 0 12 18" fill="none" className="-my-1 shrink-0 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
        <rect
          x="3.5"
          y="1"
          width="5"
          height="16"
          rx="2.5"
          fill={`url(#chainLinkGrad-${id})`}
          stroke={isDark ? "#334155" : "#64748b"}
          strokeWidth="0.8"
        />
        <rect x="4.8" y="3" width="2.4" height="12" rx="1.2" fill={isDark ? "#0f172a" : "#cbd5e1"} opacity="0.6" />
      </svg>
    );
  }

  // Broad front-facing view of the link
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" className="-my-1 shrink-0 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
      <rect
        x="2"
        y="1"
        width="16"
        height="20"
        rx="8"
        fill="none"
        stroke={`url(#chainLinkGrad-${id})`}
        strokeWidth="3.2"
      />
      <rect
        x="3"
        y="2"
        width="14"
        height="18"
        rx="7"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.7"
      />
    </svg>
  );
};

// Full Chain Strand linked to the Rod's Eyelet
const ChainStrand = ({ chainId, isDark, count = 5 }) => {
  return (
    <div className="flex flex-col items-center select-none pointer-events-none">
      {/* SVG Metallic Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={`chainLinkGrad-${chainId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#94a3b8" : "#f8fafc"} />
            <stop offset="30%" stopColor={isDark ? "#cbd5e1" : "#e2e8f0"} />
            <stop offset="70%" stopColor={isDark ? "#475569" : "#64748b"} />
            <stop offset="100%" stopColor={isDark ? "#1e293b" : "#475569"} />
          </linearGradient>
        </defs>
      </svg>

      {/* Top Chain Ring (Loops directly through the rod eyelet) */}
      <div className="w-5 h-6 rounded-full border-[3px] border-slate-500 dark:border-slate-400 bg-transparent flex items-center justify-center -mt-1 shadow-sm">
        <div className="w-2.5 h-3 bg-slate-900/40 rounded-full" />
      </div>

      {/* Interlinked Chain Links */}
      {Array.from({ length: count }).map((_, i) => (
        <ChainLink key={i} id={chainId} isSide={i % 2 === 1} isDark={isDark} />
      ))}

      {/* Bottom Carabiner Clip */}
      <div className="w-4 h-6 rounded-t-sm rounded-b-md border-2 border-slate-500 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-600 dark:to-slate-800 -mt-1 shadow-sm flex items-center justify-center">
        <div className="w-1.5 h-3 bg-slate-800 dark:bg-black rounded-sm" />
      </div>
    </div>
  );
};

export default function HangingHiringBanner({ onExploreClick }) {
  const { isDark } = useTheme();
  const [isPushed, setIsPushed] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  // Trigger drop-down animation on mount / refresh
  useEffect(() => {
    setAnimKey((prev) => prev + 1);
  }, []);

  // Trigger interactive push on click
  const handleSignClick = () => {
    setIsPushed(true);
    setTimeout(() => setIsPushed(false), 1400);
    if (onExploreClick) {
      onExploreClick();
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none py-2" style={{ perspective: "1200px" }}>
      <style>{`
        /* Realistic Gravity Drop-Down on Page Load, followed by Natural Pendulum Swing */
        @keyframes boardDropAndSwing {
          0% {
            transform: translateY(-160px) rotateX(-20deg) scale(0.92);
            opacity: 0;
          }
          28% {
            transform: translateY(14px) rotateX(22deg) scale(1.02);
            opacity: 1;
          }
          42% {
            /* Chain snap tension bounce */
            transform: translateY(-6px) rotateX(-14deg) scale(0.99);
          }
          58% {
            /* Rebound swing forward */
            transform: translateY(0px) rotateX(10deg);
          }
          72% {
            /* Damped backward swing */
            transform: translateY(0px) rotateX(-5deg);
          }
          86% {
            /* Soft forward swing */
            transform: translateY(0px) rotateX(2.5deg);
          }
          95% {
            transform: translateY(0px) rotateX(-1deg);
          }
          100% {
            transform: translateY(0px) rotateX(0deg);
            opacity: 1;
          }
        }

        /* Subtle organic breathing idle swing */
        @keyframes ambientSignFloat {
          0%, 100% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(1.8deg);
          }
        }

        /* Interactive push on user click */
        @keyframes interactivePush3D {
          0% {
            transform: rotateX(0deg) scale(0.98);
          }
          22% {
            transform: rotateX(24deg) scale(1.03);
          }
          45% {
            transform: rotateX(-14deg) scale(0.99);
          }
          65% {
            transform: rotateX(7deg);
          }
          82% {
            transform: rotateX(-3deg);
          }
          100% {
            transform: rotateX(0deg) scale(1);
          }
        }

        .animate-drop-and-swing {
          transform-origin: 50% 0px;
          animation: boardDropAndSwing 2.4s cubic-bezier(0.22, 1, 0.36, 1) forwards,
                     ambientSignFloat 6s ease-in-out 2.5s infinite;
        }

        .animate-push-3d {
          transform-origin: 50% 0px;
          animation: interactivePush3D 1.3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      {/* =================================================================== */}
      {/* 1. SOLID CEILING MOUNT & INDUSTRIAL SUPPORT BEAM                    */}
      {/* =================================================================== */}
      <div className="relative w-full flex flex-col items-center z-30 pointer-events-none">
        {/* Ceiling Brackets (attaching beam to ceiling) */}
        <div className="w-64 sm:w-80 flex justify-between px-10 sm:px-14">
          <div className="w-4 h-3 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-700 dark:to-slate-900 border-x border-t border-slate-500 rounded-t-sm shadow-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800 dark:bg-black block" />
          </div>
          <div className="w-4 h-3 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-700 dark:to-slate-900 border-x border-t border-slate-500 rounded-t-sm shadow-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800 dark:bg-black block" />
          </div>
        </div>

        {/* Heavy-duty Horizontal Steel Rod */}
        <div className="w-72 sm:w-88 h-3.5 rounded-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 dark:from-slate-800 dark:via-slate-600 dark:to-slate-800 border border-slate-300 dark:border-slate-700 shadow-lg relative flex justify-between px-10 sm:px-14 items-center">
          {/* Left End Metallic Flange Cap */}
          <div className="absolute -left-1 w-3 h-5 rounded-l-md bg-slate-500 dark:bg-slate-700 border border-slate-400" />
          {/* Right End Metallic Flange Cap */}
          <div className="absolute -right-1 w-3 h-5 rounded-r-md bg-slate-500 dark:bg-slate-700 border border-slate-400" />

          {/* Left Bolt Rivet */}
          <div className="w-2 h-2 rounded-full bg-slate-600 dark:bg-slate-900 border border-slate-400 shadow-inner" />
          {/* Center Title Tag */}
          <span className="text-[9px] font-mono tracking-widest text-slate-500 dark:text-slate-300 uppercase font-semibold">
            DEFO TALENT LAB
          </span>
          {/* Right Bolt Rivet */}
          <div className="w-2 h-2 rounded-full bg-slate-600 dark:bg-slate-900 border border-slate-400 shadow-inner" />
        </div>

        {/* Welded Under-Rod Eyelet Brackets (Anchor points where chains permanently link) */}
        <div className="w-64 sm:w-80 flex justify-between px-10 sm:px-14 -mt-1 relative z-20">
          {/* Left Eyelet Loop */}
          <div className="w-4 h-5 rounded-b-full border-2 border-t-0 border-slate-500 bg-slate-300 dark:bg-slate-700 flex items-end justify-center pb-0.5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-slate-800 dark:bg-black" />
          </div>
          {/* Right Eyelet Loop */}
          <div className="w-4 h-5 rounded-b-full border-2 border-t-0 border-slate-500 bg-slate-300 dark:bg-slate-700 flex items-end justify-center pb-0.5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-slate-800 dark:bg-black" />
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. DROPPING & SWINGING FIXTURE (CHAINS + SIGNBOARD)                  */}
      {/* =================================================================== */}
      <div
        key={animKey}
        onClick={handleSignClick}
        title="Click to interact & view openings"
        className={`w-full flex flex-col items-center cursor-pointer -mt-2.5 relative z-10 ${
          isPushed ? "animate-push-3d" : "animate-drop-and-swing"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dual Steel Chains Row (Locked directly to the eyelets above) */}
        <div className="w-64 sm:w-80 flex justify-between px-10 sm:px-14 -mt-1">
          <ChainStrand chainId="left" isDark={isDark} count={4} />
          <ChainStrand chainId="right" isDark={isDark} count={4} />
        </div>

        {/* ================================================================= */}
        {/* 3. THE NEON / ACRYLIC HANGING SIGNBOARD                           */}
        {/* ================================================================= */}
        <div
          className={`relative w-full max-w-sm sm:max-w-md rounded-3xl p-5 sm:p-7 border-2 transition-all duration-300 -mt-2 group ${
            isDark
              ? "bg-[#0b1120]/90 backdrop-blur-2xl border-emerald-400/35 shadow-[0_0_40px_rgba(0,242,152,0.18),0_20px_50px_rgba(0,0,0,0.7)] hover:border-emerald-400/60 hover:shadow-[0_0_55px_rgba(0,242,152,0.28)]"
              : "bg-white/95 backdrop-blur-2xl border-slate-200/90 shadow-[0_20px_45px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)] hover:border-emerald-400/60 hover:shadow-[0_24px_55px_rgba(0,242,152,0.2)]"
          }`}
        >
          {/* Top Metal Bracket Caps with Rivets (where carabiners clasp on) */}
          <div className="absolute -top-3 inset-x-8 sm:inset-x-12 flex justify-between pointer-events-none">
            <div className="w-6 h-4 rounded-t-md bg-gradient-to-b from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-800 border border-slate-400 flex items-center justify-center shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800 dark:bg-black block" />
            </div>
            <div className="w-6 h-4 rounded-t-md bg-gradient-to-b from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-800 border border-slate-400 flex items-center justify-center shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800 dark:bg-black block" />
            </div>
          </div>

          {/* Brushed Metal Top Header Bar */}
          <div className="w-full flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                ACTIVE RECRUITMENT
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10">
              JOIN OUR CREW
            </span>
          </div>

          {/* Main Glowing Neon Headline */}
          <div className="text-center py-2 sm:py-3">
            <div
              className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none ${
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00f298] via-cyan-400 to-[#00f298] drop-shadow-[0_0_20px_rgba(0,242,152,0.7)]"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 drop-shadow-sm"
              }`}
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              WE ARE
            </div>
            <div
              className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase leading-tight mt-1 ${
                isDark
                  ? "text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.75)]"
                  : "text-slate-900 drop-shadow-sm"
              }`}
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              HIRING
            </div>
          </div>

          {/* Glowing Neon Outline Tube (Simulated Inner Rim) */}
          <div className="my-3 px-3 py-2 rounded-xl bg-emerald-500/5 dark:bg-emerald-400/5 border border-emerald-500/20 dark:border-emerald-400/20 text-center">
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              ⚡ Build the future of digital infotainment with us
            </p>
          </div>

          {/* Hanging Sub-tags (Role Badges) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "UI/UX DESIGNER", color: "emerald" },
              { label: "FULLSTACK DEV", color: "cyan" },
              { label: "CREATOR OPS", color: "teal" },
            ].map((role, idx) => (
              <span
                key={idx}
                className={`text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-200 group-hover:scale-105 ${
                  isDark
                    ? "bg-slate-800/80 text-emerald-300 border-emerald-500/30 hover:border-emerald-400"
                    : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400"
                }`}
              >
                {role.label}
              </span>
            ))}
          </div>

          {/* Interactive Hint Bottom Pill */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            <span>✨ Tap sign to swing & view</span>
            <span className="text-emerald-500 dark:text-emerald-400 font-bold group-hover:translate-y-0.5 transition-transform">
              Scroll Down ↓
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
