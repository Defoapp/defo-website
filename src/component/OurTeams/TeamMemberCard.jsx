import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BADGE_COLORS = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50',
  cyan: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/50',
  purple: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/50',
  blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50',
  pink: 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/50',
};

const DOT_COLORS = {
  emerald: 'bg-emerald-500',
  cyan: 'bg-sky-500',
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  pink: 'bg-pink-500',
};

export default function TeamMemberCard({ member, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const badgeClass = BADGE_COLORS[member.accentColor] || BADGE_COLORS.emerald;
  const dotClass = DOT_COLORS[member.accentColor] || DOT_COLORS.emerald;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="w-full max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      <style>{`
        @keyframes idCardSwing {
          0% { transform: rotate(0deg); }
          22% { transform: rotate(-4deg); }
          45% { transform: rotate(3deg); }
          70% { transform: rotate(-1.5deg); }
          88% { transform: rotate(0.8deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-id-swing {
          transform-origin: 50% -20px;
          animation: idCardSwing 0.75s cubic-bezier(0.34, 1.3, 0.64, 1);
        }
      `}</style>

      <div
        className={`group relative w-full h-[390px] sm:h-[410px] bg-white dark:bg-[#0f1422] rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 cursor-pointer ${
          isHovered
            ? 'border-2 border-emerald-500 dark:border-[#00f298] ring-1 ring-emerald-500/20 shadow-2xl -translate-y-1'
            : 'border-2 border-slate-300 dark:border-slate-700/80 ring-1 ring-slate-900/5 dark:ring-white/5 shadow-[0_10px_28px_-6px_rgba(15,23,42,0.1),0_2px_8px_rgba(15,23,42,0.06)] dark:shadow-[0_10px_28px_-6px_rgba(0,0,0,0.6)] hover:border-emerald-500/80 dark:hover:border-emerald-500/80 hover:shadow-xl'
        }`}
      >
        {/* Crisp Top Accent Frame */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-90 z-30" />

        {/* ================================================================ */}
        {/* ID CARD LANYARD ROPE & METAL CLIP (DROPS DOWN FROM TOP OF CARD)  */}
        {/* ================================================================ */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-500 origin-top ${
            isHovered
              ? 'translate-y-0 opacity-100 scale-100'
              : '-translate-y-full opacity-0 scale-90 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.45, 0.7, 1)',
          }}
        >
          <svg width="48" height="92" viewBox="0 0 48 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
            <defs>
              <linearGradient id={`lanyardStrap-${member.id}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00f298" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#00f298" />
              </linearGradient>
              <linearGradient id={`chromeMetal-${member.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#cbd5e1" />
                <stop offset="65%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id={`metalHook-${member.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="40%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>

            {/* Left Woven Strap Strand from Top of Card */}
            <path d="M14 0 L22 60 L19 60 L11 0 Z" fill={`url(#lanyardStrap-${member.id})`} />
            <path d="M12.5 0 L20.5 60" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" strokeDasharray="1.5 1" />

            {/* Right Woven Strap Strand from Top of Card */}
            <path d="M34 0 L26 60 L29 60 L37 0 Z" fill={`url(#lanyardStrap-${member.id})`} />
            <path d="M35.5 0 L27.5 60" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" strokeDasharray="1.5 1" />

            {/* Metallic Crimp / Collar joining the straps */}
            <rect x="19" y="59" width="10" height="7" rx="1.5" fill={`url(#chromeMetal-${member.id})`} stroke="#64748b" strokeWidth="0.5" />
            <line x1="20" y1="62.5" x2="28" y2="62.5" stroke="#334155" strokeWidth="0.5" />

            {/* Swivel Ring */}
            <circle cx="24" cy="71" r="3.5" fill="none" stroke={`url(#chromeMetal-${member.id})`} strokeWidth="1.5" />

            {/* Lobster Clasp Body */}
            <path
              d="M22 73 C22 73, 21 77, 21.5 80 C22 83, 23.5 86, 24 86.5 C24.5 86, 26 83, 26.5 80 C27 77, 26 73, 26 73 Z"
              fill={`url(#metalHook-${member.id})`}
              stroke="#475569"
              strokeWidth="0.5"
            />
            {/* Clasp trigger lever */}
            <rect x="25.5" y="77" width="2.5" height="4" rx="0.8" fill={`url(#chromeMetal-${member.id})`} />
            {/* Clasp Hook tip (clasps directly into the ID badge hole) */}
            <path d="M24 84.5 L24 90" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* ================================================================ */}
        {/* ID CARD BADGE CONTAINER (SWINGS LIGHTLY WHEN HANGING ON ROPE)    */}
        {/* ================================================================ */}
        <div
          className={`flex flex-col items-center shrink-0 transition-all duration-300 ease-out ${
            isHovered ? 'animate-id-swing mt-14' : 'group-hover:animate-id-swing group-hover:mt-14 mt-0'
          }`}
        >
          {/* Badge Top Slot Tab (where lanyard clasp connects directly) */}
          <div
            className={`transition-all duration-300 ease-out flex flex-col items-center ${
              isHovered
                ? 'opacity-100 max-h-3 scale-100 -mb-[1px]'
                : 'opacity-0 max-h-0 scale-75 group-hover:opacity-100 group-hover:max-h-3 group-hover:scale-100 group-hover:-mb-[1px] overflow-hidden'
            }`}
          >
            <div className="w-8 h-2.5 rounded-t-md bg-slate-200 dark:bg-slate-700 border border-b-0 border-slate-300 dark:border-slate-600 flex items-center justify-center shadow-xs">
              <span className="w-4 h-1 rounded-full bg-slate-500/90 dark:bg-slate-900 block shadow-inner" />
            </div>
          </div>

          {/* Photo Holder (Styled like an executive acrylic ID badge) */}
          <div
            className={`relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shrink-0 transition-all duration-300 ease-out ${
              isHovered
                ? 'w-24 h-24 sm:w-26 sm:h-26 shadow-lg border-emerald-500/40 dark:border-emerald-500/30'
                : 'w-44 h-44 sm:w-48 sm:h-48 mb-3 shadow-sm group-hover:w-24 group-hover:h-24 sm:group-hover:w-26 sm:group-hover:h-26 group-hover:shadow-lg group-hover:border-emerald-500/40'
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Acrylic Badge subtle gloss shine overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />
          </div>
        </div>

        {/* Name */}
        <h3
          className={`font-bold text-slate-900 dark:text-white tracking-tight shrink-0 transition-all duration-300 ${
            isHovered
              ? 'text-lg sm:text-xl mt-2'
              : 'text-xl sm:text-2xl mt-1 group-hover:text-lg sm:group-hover:text-xl group-hover:mt-2'
          }`}
          style={{ fontFamily: 'Outfit, var(--font-display), sans-serif' }}
        >
          {member.name}
        </h3>

        {/* Position Badge */}
        <div className="flex items-center justify-center gap-2 mt-1.5 shrink-0">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold border ${badgeClass}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
            {member.designation}
          </span>
        </div>

        {/* Description & LinkedIn link: revealed smoothly when hovered */}
        <div
          className={`w-full flex flex-col items-center overflow-hidden transition-all duration-300 ease-out ${
            isHovered
              ? 'max-h-48 opacity-100 mt-2 pointer-events-auto'
              : 'max-h-0 opacity-0 mt-0 pointer-events-none group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-2 group-hover:pointer-events-auto'
          }`}
        >
          {/* Description */}
          {member.bio && (
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed text-center px-1 line-clamp-2">
              {member.bio}
            </p>
          )}

          {/* LinkedIn Connect Button */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 w-full flex justify-center">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group/btn inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 hover:bg-black dark:bg-white/10 dark:hover:bg-white/20 text-white text-xs font-semibold transition-colors duration-200 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#0077b5] dark:text-white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>Connect</span>
              <span className="text-slate-400 group-hover/btn:text-white transition-colors">↗</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
