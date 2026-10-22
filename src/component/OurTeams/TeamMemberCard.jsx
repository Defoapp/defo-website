import React from 'react';
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
  const badgeClass = BADGE_COLORS[member.accentColor] || BADGE_COLORS.emerald;
  const dotClass = DOT_COLORS[member.accentColor] || DOT_COLORS.emerald;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="w-full max-w-sm mx-auto"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Photo Container */}
        <div className="relative mb-5 w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Name */}
        <h3
          className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
          style={{ fontFamily: 'Outfit, var(--font-display), sans-serif' }}
        >
          {member.name}
        </h3>

        {/* Position Badge */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
            {member.designation}
          </span>
        </div>

        {/* Department / Subtitle */}
        {member.department && (
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mt-2">
            {member.department}
          </p>
        )}

        {/* Short Bio */}
        {member.bio && (
          <p className="text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed mt-3 px-1 min-h-[42px] line-clamp-2">
            {member.bio}
          </p>
        )}

        {/* Skill Chips */}
        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3.5">
            {member.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* LinkedIn Connect Button */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 w-full flex justify-center">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-black dark:bg-white/10 dark:hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors duration-200"
          >
            <svg className="w-4 h-4 fill-current text-[#0077b5] dark:text-white" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>Connect</span>
            <span className="text-slate-400 group-hover/btn:text-white transition-colors">↗</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
