import React from "react";
import { useTheme } from "../../context/ThemeContext";

const TopicPreviewModal = ({ topic, subtopic, onClose, onSelectNext }) => {
  const { isDark } = useTheme();

  if (!subtopic || !topic) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/80 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl p-6 sm:p-8 scrollbar-thin scrollbar-thumb-white/20 overflow-hidden transition-colors ${
          isDark
            ? "bg-[#090d16] border-white/15 text-white"
            : "bg-white border-slate-200 text-slate-900 shadow-2xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient background glow matching topic accent */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-25"
          style={{ background: topic.accent }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-all z-20 cursor-pointer ${
            isDark
              ? "bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
              : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black"
          }`}
          aria-label="Close preview"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xl">{topic.icon}</span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              isDark ? "bg-white/10 text-white" : "bg-slate-100 text-slate-800"
            }`}
          >
            {topic.name}
          </span>
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold"
            style={{
              backgroundColor: `${topic.accent}15`,
              color: topic.accent,
              border: `1px solid ${topic.accent}30`,
            }}
          >
            {subtopic.badge || subtopic.tag}
          </span>
          <span className="text-xs text-slate-400 ml-auto mr-8 sm:mr-0 font-mono">
            {subtopic.videos}
          </span>
        </div>

        {/* Title & Description */}
        <h3
          className={`text-xl sm:text-2xl font-extrabold mb-2 tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {subtopic.name}
        </h3>
        <p
          className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${
            isDark ? "text-slate-300" : "text-slate-600 font-normal"
          }`}
        >
          {subtopic.desc}
        </p>

        {/* Simulated Video Player Box */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-tr from-black via-slate-900 to-black border border-white/10 flex items-center justify-center mb-6 shadow-xl group cursor-pointer">
          {/* Subtle animated background grid */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Glowing central orb */}
          <div
            className="absolute w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity"
            style={{ background: topic.accent }}
          />

          {/* Interactive Play Button */}
          <div className="relative z-10 w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
            <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Infotainment Preview</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
              HD 4K Video
            </span>
          </div>
        </div>

        {/* Learning Takeaways */}
        <div
          className={`p-4 rounded-xl border mb-6 ${
            isDark
              ? "bg-white/[0.03] border-white/10"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <h4
            className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
              isDark ? "text-slate-300" : "text-slate-800"
            }`}
          >
            What You'll Learn in this Topic Series:
          </h4>
          <ul
            className={`space-y-1.5 text-xs ${
              isDark ? "text-slate-300" : "text-slate-700 font-medium"
            }`}
          >
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Step-by-step master techniques and essential workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Curated quick bite-sized infotainment video lessons</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Verified creator tips to level up your skills</span>
            </li>
          </ul>
        </div>

        {/* Bottom Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t ${
            isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-600"
          }`}
        >
          <div className="text-xs">
            Available now on the{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>
              Defo App
            </strong>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl border text-xs font-medium transition-colors ${
                isDark
                  ? "border-white/15 hover:bg-white/10 text-slate-300"
                  : "border-slate-300 hover:bg-slate-100 text-slate-700"
              }`}
            >
              Close
            </button>

            {onSelectNext && (
              <button
                onClick={onSelectNext}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-1.5"
              >
                <span>Next Subtopic</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPreviewModal;
