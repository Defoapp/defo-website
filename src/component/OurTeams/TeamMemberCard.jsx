import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ManBodyBackground from './ManBodyBackground';

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
  const { isDark } = useTheme();

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
          20% { transform: rotate(-4.5deg); }
          42% { transform: rotate(3.5deg); }
          65% { transform: rotate(-2deg); }
          84% { transform: rotate(1deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-id-swing {
          transform-origin: 50% 0px;
          animation: idCardSwing 0.85s cubic-bezier(0.34, 1.3, 0.64, 1);
        }
      `}</style>

      <div
        className={`group relative w-full h-[390px] sm:h-[410px] bg-white dark:bg-[#0f1422] rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 cursor-pointer ${
          isHovered
            ? 'border-2 border-emerald-500 dark:border-[#00f298] ring-1 ring-emerald-500/20 shadow-2xl -translate-y-1'
            : 'border-2 border-slate-300 dark:border-slate-700/80 ring-1 ring-slate-900/5 dark:ring-white/5 shadow-[0_10px_28px_-6px_rgba(15,23,42,0.1),0_2px_8px_rgba(15,23,42,0.06)] dark:shadow-[0_10px_28px_-6px_rgba(0,0,0,0.6)] hover:border-emerald-500/80 dark:hover:border-emerald-500/80 hover:shadow-xl'
        }`}
      >
        {/* ================================================================ */}
        {/* BACKGROUND: MAN'S BODY FROM NECK TO HIP (REVEALED ON HOVER)      */}
        {/* ================================================================ */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-500 ease-out ${
            isHovered
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
          }`}
        >
          <ManBodyBackground isDark={isDark} memberId={member.id} />
        </div>

        {/* ================================================================ */}
        {/* DEFAULT VIEW (LARGE PHOTO, NAME, ROLE) - WHEN NOT HOVERED        */}
        {/* ================================================================ */}
        <div
          className={`w-full flex flex-col items-center justify-center text-center transition-all duration-300 ease-out z-10 ${
            isHovered
              ? 'opacity-0 scale-90 pointer-events-none max-h-0 overflow-hidden'
              : 'opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90 group-hover:pointer-events-none group-hover:max-h-0 group-hover:overflow-hidden'
          }`}
        >
          {/* Large Photo */}
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 mb-3 shadow-sm shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Name */}
          <h3
            className="font-bold text-slate-900 dark:text-white tracking-tight text-xl sm:text-2xl mt-1 shrink-0"
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
        </div>

        {/* ================================================================ */}
        {/* HOVER VIEW: ID CARD HANGING FROM MAN'S NECK DOWN OVER CHEST       */}
        {/* ================================================================ */}
        <div className="absolute inset-x-0 top-[99px] flex flex-col items-center pointer-events-none z-20">
          <div
            className={`flex flex-col items-center origin-top transition-all duration-400 ease-out ${
              isHovered
                ? 'opacity-100 scale-100 pointer-events-auto animate-id-swing'
                : 'opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto group-hover:animate-id-swing'
            }`}
          >
            {/* Badge Top Slot Tab (connects directly to lobster clasp hook) */}
            <div className="w-8 h-2.5 rounded-t-md bg-slate-200 dark:bg-slate-700 border border-b-0 border-slate-300 dark:border-slate-600 flex items-center justify-center shadow-xs -mb-[1px]">
              <span className="w-4 h-1 rounded-full bg-slate-500/90 dark:bg-slate-900 block shadow-inner" />
            </div>

            {/* Hanging ID Card Badge Pass */}
            <div className="w-[230px] sm:w-[242px] bg-white/95 dark:bg-[#0f1422]/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-[0_14px_35px_-4px_rgba(0,0,0,0.38)] border border-slate-200/90 dark:border-slate-700/80 flex flex-col items-center text-center">
            {/* Top Emerald Accent Pill */}
            <div className="w-8 h-1 rounded-full bg-emerald-500/80 mb-1.5" />

            {/* Photo on ID Badge */}
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-md shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Acrylic Badge gloss reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none" />
            </div>

            {/* Name on ID Badge */}
            <h4
              className="font-bold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg mt-1 leading-snug"
              style={{ fontFamily: 'Outfit, var(--font-display), sans-serif' }}
            >
              {member.name}
            </h4>

            {/* Position Badge on ID */}
            <div className="flex items-center justify-center mt-0.5">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badgeClass}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
                {member.designation}
              </span>
            </div>

            {/* Bio Description */}
            {member.bio && (
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed text-center mt-1 line-clamp-2 px-0.5">
                {member.bio}
              </p>
            )}

            {/* LinkedIn Connect Button */}
            <div className="mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 w-full flex justify-center">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group/btn inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 hover:bg-black dark:bg-white/10 dark:hover:bg-white/20 text-white text-[11px] font-semibold transition-colors duration-200 shadow-xs"
              >
                <svg className="w-3 h-3 fill-current text-[#0077b5] dark:text-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>Connect</span>
                <span className="text-slate-400 group-hover/btn:text-white transition-colors">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
}
