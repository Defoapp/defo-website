import React, { useState } from "react";

const LearnArticleModal = ({ article, onClose, onSelectNext }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/80 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-white/15 text-white shadow-2xl p-6 sm:p-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
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
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Article Header */}
        <div className="relative z-10 mb-8 border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${article.iconBg}`}
            >
              {article.name}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              {article.badge}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
            <span className="text-xs text-emerald-400 font-mono">Level: {article.level}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {article.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {article.fullArticle?.intro || article.summary}
          </p>
        </div>

        {/* Key Takeaways Grid */}
        <div className="mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Architecture Takeaways
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {article.quickTakeaways.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 mb-8">
          {article.fullArticle?.sections?.map((sec, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {sec.heading}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Code Blueprint Window */}
        <div className="mb-8 rounded-2xl bg-black border border-white/10 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/10 text-xs">
            <span className="font-mono text-slate-400">
              Snippet: {article.name} Production Architecture
            </span>
            <button
              onClick={handleCopyCode}
              className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-all text-xs flex items-center gap-1.5"
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
          <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-emerald-300/90 overflow-x-auto leading-relaxed bg-[#050811]">
            {article.codeSnippet}
          </pre>
        </div>

        {/* Pro Tips Callout */}
        {article.fullArticle?.proTips && (
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-transparent to-transparent border border-amber-500/20">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Senior Engineer Pro Tips
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {article.fullArticle.proTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">→</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Interactive Knowledge Check Quiz */}
        {quiz && (
          <div className="mb-8 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Interactive Knowledge Check</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-4">
              {quiz.question}
            </h4>

            <div className="space-y-2 mb-4">
              {quiz.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === quiz.answerIndex;
                let btnStyle = "border-white/10 bg-white/5 hover:bg-white/10 text-slate-200";

                if (isAnswered) {
                  if (isCorrect) {
                    btnStyle = "border-emerald-500 bg-emerald-500/20 text-emerald-200 font-bold";
                  } else if (isSelected && !isCorrect) {
                    btnStyle = "border-rose-500 bg-rose-500/20 text-rose-200";
                  } else {
                    btnStyle = "border-white/5 bg-transparent text-slate-500 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => !isAnswered && handleAnswerClick(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && isCorrect && (
                      <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">✓ Correct</span>
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">✗ Incorrect</span>
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-xs text-slate-300">
                <span className="text-cyan-400 font-bold block mb-1">Explanation:</span>
                {quiz.explanation}
              </div>
            )}
          </div>
        )}

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-medium transition-colors"
          >
            Close Reader
          </button>

          {onSelectNext && (
            <button
              onClick={onSelectNext}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-black text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2"
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
