import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ isMobile = false }) => {
  const {
    themeMode,
    currentTheme,
    isAuto,
    isDark,
    toggleTheme,
    setThemeMode,
    isDayTime,
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full my-3 p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300">Theme Mode:</span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            {isAuto ? "Auto" : currentTheme === "dark" ? "Dark" : "Bright"}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 pt-1">
          <button
            type="button"
            onClick={() => setThemeMode("light")}
            className={`py-2 px-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              themeMode === "light"
                ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <span>☀️</span>
            <span>Bright</span>
          </button>

          <button
            type="button"
            onClick={() => setThemeMode("dark")}
            className={`py-2 px-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              themeMode === "dark"
                ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <span>🌙</span>
            <span>Dark</span>
          </button>

          <button
            type="button"
            onClick={() => setThemeMode("auto")}
            className={`py-2 px-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              themeMode === "auto"
                ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-md"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <span>🕒</span>
            <span>Auto</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Main Interactive Button */}
      <div className="flex items-center rounded-xl bg-black/40 hover:bg-black/60 dark:bg-white/10 dark:hover:bg-white/15 border border-white/15 backdrop-blur-md p-1 transition-all duration-200 shadow-md">
        {/* Click to quick toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          title={`Current: ${isAuto ? "Auto " + (isDayTime ? "Day" : "Night") : currentTheme === "dark" ? "Dark" : "Bright"} (Click to toggle)`}
          className="flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-transform active:scale-95 text-white"
        >
          {isDark ? (
            /* Crescent Moon Icon with Star */
            <span className="relative flex items-center justify-center w-5 h-5 text-indigo-300 transform transition-transform duration-300 rotate-0">
              <svg className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          ) : (
            /* Radiant Sun Icon */
            <span className="relative flex items-center justify-center w-5 h-5 text-amber-400 transform transition-transform duration-300 rotate-180">
              <svg className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-10c.41 0 .75-.34.75-.75V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5c0 .41.34.75.75.75zm0 15c-.41 0-.75.34-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5c0-.41-.34-.75-.75-.75zm8.75-8.75h-1.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-15 0H4.25c-.41 0-.75.34-.75.75s.34.75.75.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM17.49 6.51c.29-.29.29-.77 0-1.06l-1.06-1.06c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.06 1.06c.29.29.77.29 1.06 0zm-8.92 8.92c-.29-.29-.77-.29-1.06 0l-1.06 1.06c-.29.29-.29.77 0 1.06s.77.29 1.06 0l1.06-1.06c.29-.29.29-.77 0-1.06zm8.92 1.06c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.06 1.06c.29.29.77.29 1.06 0s.29-.77 0-1.06l-1.06-1.06zm-8.92-8.92c.29-.29.29-.77 0-1.06l-1.06-1.06c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.06 1.06c.29.29.77.29 1.06 0z" />
              </svg>
            </span>
          )}

          <span className="hidden md:inline-block font-medium">
            {isDark ? "Dark" : "Bright"}
          </span>

          {isAuto && (
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Auto
            </span>
          )}
        </button>

        {/* Small Mode Selector Dropdown Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          title="Open Theme Options"
          className="px-1 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <svg
            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-black/95 dark:bg-slate-900/95 border border-white/15 p-2 shadow-2xl backdrop-blur-xl z-50 text-white animate-in fade-in duration-150">
          <div className="px-3 py-1.5 border-b border-white/10 mb-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Theme Settings
            </span>
            <span className="text-[10px] text-slate-400">
              {isAuto ? "Active: Auto" : `Active: ${currentTheme === "dark" ? "Dark" : "Bright"}`}
            </span>
          </div>

          {/* Option: Bright */}
          <button
            type="button"
            onClick={() => {
              setThemeMode("light");
              setIsOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
              themeMode === "light"
                ? "bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30"
                : "hover:bg-white/10 text-slate-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>☀️</span>
              <span>Bright (Light Mode)</span>
            </span>
            {themeMode === "light" && <span className="text-amber-400 text-xs">✓</span>}
          </button>

          {/* Option: Dark */}
          <button
            type="button"
            onClick={() => {
              setThemeMode("dark");
              setIsOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors mt-1 ${
              themeMode === "dark"
                ? "bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30"
                : "hover:bg-white/10 text-slate-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>🌙</span>
              <span>Dark Mode</span>
            </span>
            {themeMode === "dark" && <span className="text-indigo-400 text-xs">✓</span>}
          </button>

          {/* Option: Auto Schedule */}
          <button
            type="button"
            onClick={() => {
              setThemeMode("auto");
              setIsOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors mt-1 ${
              themeMode === "auto"
                ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30"
                : "hover:bg-white/10 text-slate-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>🕒</span>
              <span>Auto</span>
            </span>
            {themeMode === "auto" && <span className="text-emerald-400 text-xs">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
