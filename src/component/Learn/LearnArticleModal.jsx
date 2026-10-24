import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const LearnArticleModal = ({ article, onClose, onSelectNext }) => {
  const { isDark } = useTheme();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!article) return null;

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setIsAnswered(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(article.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const quiz = article.fullArticle?.quiz;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/80 animate-in fade-in duration-200 font-inter">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 scrollbar-thin ${
          isDark
            ? "preserve-dark bg-gradient-to-b from-slate-900 via-slate-950 to-[#070b14] border border-white/15 text-white scrollbar-thumb-white/20 scrollbar-track-transparent"
            : "bg-white border border-slate-200 text-slate-900 shadow-2xl scrollbar-thumb-slate-300 scrollbar-track-slate-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top ambient glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-36 rounded-full blur-3xl pointer-events-none opacity-40"
          style={{ background: article.glowColor }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center transition-all z-20 cursor-pointer ${
            isDark
              ? "bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 border border-slate-200 shadow-sm"
          }`}
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Article Header */}
        <div className={`relative z-10 mb-8 border-b pb-6 ${isDark ? "border-white/10" : "border-slate-200"}`}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${article.iconBg}`}
            >
              {article.name}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isDark
                  ? "bg-white/5 border border-white/10 text-slate-300"
                  : "bg-slate-100 border border-slate-200 text-slate-700"
              }`}
            >
              {article.badge}
            </span>
            <span
              className={`text-xs flex items-center gap-1 font-medium ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
            <span className="text-xs text-emerald-500 font-mono font-semibold">Level: {article.level}</span>
          </div>

          <h2
            className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 ${
              isDark ? "text-white stay-white" : "text-slate-950"
            }`}
          >
            {article.title}
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-700 font-normal"
            }`}
          >
            {article.fullArticle?.intro || article.summary}
          </p>
        </div>

        {/* Key Takeaways Grid */}
        <div
          className={`mb-8 p-5 rounded-2xl border ${
            isDark
              ? "bg-slate-900/60 border-white/10 shadow-lg"
              : "bg-slate-50 border-slate-200/90 shadow-sm"
          }`}
        >
          <h4
            className={`text-xs uppercase font-bold tracking-wider mb-3 flex items-center gap-2 ${
              isDark ? "text-slate-300" : "text-slate-800"
            }`}
          >
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Architecture Takeaways
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {article.quickTakeaways.map((point, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                  isDark ? "text-slate-200 font-normal" : "text-slate-800 font-medium"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-sm shadow-emerald-500/50" />
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 mb-8">
          {article.fullArticle?.sections?.map((sec, index) => (
            <div key={index} className="space-y-2">
              <h3
                className={`text-lg sm:text-xl font-bold tracking-tight ${
                  isDark ? "text-white stay-white" : "text-slate-950 font-bold"
                }`}
              >
                {sec.heading}
              </h3>
              <p
                className={`text-sm leading-relaxed whitespace-pre-line ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Code Blueprint Window (Universal Dark Terminal) */}
        <div className="mb-8 rounded-2xl bg-[#030712] border border-slate-800 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/10 text-xs">
            <span className="font-mono text-slate-300 font-medium">
              Snippet: {article.name} Production Architecture
            </span>
            <button
              onClick={handleCopyCode}
              className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-all text-xs flex items-center gap-1.5 cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Blueprint</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-emerald-300/90 overflow-x-auto leading-relaxed bg-[#050811] selection:bg-cyan-500/30">
            {article.codeSnippet}
          </pre>
        </div>

        {/* Pro Tips Callout */}
        {article.fullArticle?.proTips && (
          <div
            className={`mb-8 p-5 rounded-2xl border ${
              isDark
                ? "bg-gradient-to-r from-amber-500/10 via-amber-950/20 to-transparent border-amber-500/30"
                : "bg-amber-50/90 border-amber-300 shadow-sm"
            }`}
          >
            <h4
              className={`text-xs uppercase font-bold tracking-wider mb-3 flex items-center gap-2 ${
                isDark ? "text-amber-400" : "text-amber-800"
              }`}
            >
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Senior Engineer Pro Tips
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {article.fullArticle.proTips.map((tip, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2.5 ${
                    isDark ? "text-slate-200" : "text-amber-950 font-medium"
                  }`}
                >
                  <span className={`font-bold mt-0.5 ${isDark ? "text-amber-400" : "text-amber-700"}`}>
                    →
                  </span>
                  <span className="leading-snug">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Interactive Knowledge Check Quiz */}
        {quiz && (
          <div
            className={`mb-8 p-6 rounded-2xl border ${
              isDark
                ? "bg-slate-900/60 border-white/10"
                : "bg-slate-50 border-slate-200/90 shadow-sm"
            }`}
          >
            <div
              className={`flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider font-bold ${
                isDark ? "text-cyan-400" : "text-cyan-700"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Interactive Knowledge Check</span>
            </div>
            <h4
              className={`text-base sm:text-lg font-bold mb-4 ${
                isDark ? "text-white stay-white" : "text-slate-950"
              }`}
            >
              {quiz.question}
            </h4>

            <div className="space-y-2.5 mb-4">
              {quiz.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === quiz.answerIndex;

                let btnThemeClasses = "";

                if (isAnswered) {
                  if (isCorrect) {
                    btnThemeClasses = isDark
                      ? "border-emerald-500 bg-emerald-500/25 text-emerald-200 font-bold"
                      : "border-2 border-emerald-600 bg-emerald-100 text-emerald-950 font-bold";
                  } else if (isSelected && !isCorrect) {
                    btnThemeClasses = isDark
                      ? "border-rose-500 bg-rose-500/25 text-rose-200 font-bold"
                      : "border-2 border-rose-600 bg-rose-100 text-rose-950 font-bold";
                  } else {
                    btnThemeClasses = isDark
                      ? "border-white/5 bg-transparent text-slate-500 opacity-50"
                      : "border border-slate-200 bg-slate-100 text-slate-400 opacity-60";
                  }
                } else {
                  btnThemeClasses = isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white"
                    : "border-2 border-slate-200 bg-white text-slate-900 font-medium hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-950 shadow-sm";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => !isAnswered && handleAnswerClick(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${btnThemeClasses}`}
                  >
                    <span>{option}</span>
                    {isAnswered && isCorrect && (
                      <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                        ✓ Correct
                      </span>
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-rose-400" : "text-rose-700"}`}>
                        ✗ Incorrect
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div
                className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                  isDark
                    ? "bg-slate-900/90 border-cyan-500/30 text-slate-300"
                    : "bg-cyan-50 border-cyan-300 text-cyan-950"
                }`}
              >
                <span className={`font-bold block mb-1 ${isDark ? "text-cyan-400" : "text-cyan-800"}`}>
                  Explanation:
                </span>
                {quiz.explanation}
              </div>
            )}
          </div>
        )}

        {/* Modal Bottom Actions */}
        <div className={`flex items-center justify-between pt-4 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              isDark
                ? "border border-white/20 hover:bg-white/10 text-white"
                : "border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800 shadow-sm"
            }`}
          >
            Close Reader
          </button>

          {onSelectNext && (
            <button
              onClick={onSelectNext}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Next Topic</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnArticleModal;
