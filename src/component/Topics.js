import React, { useRef, useState, useMemo, useEffect } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import { TOPICS_DATA, TOPICS_CATEGORIES } from "../data/topicsData";
import TopicPreviewModal from "./Topics/TopicPreviewModal";
import { useTheme } from "../context/ThemeContext";

const Topics = () => {
  const { isDark } = useTheme();
  const scrollContainerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTopicId, setSelectedTopicId] = useState("cooking");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreview, setActivePreview] = useState(null);

  // Auto scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter topics by category and search
  const filteredTopics = useMemo(() => {
    return TOPICS_DATA.filter((topic) => {
      const matchesCategory =
        activeCategory === "all" || topic.category === activeCategory;
      const matchesSearch =
        topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.subtopics.some(
          (s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Ensure selected topic is valid within filtered list
  const currentTopic = useMemo(() => {
    const found = TOPICS_DATA.find((t) => t.id === selectedTopicId);
    return found || filteredTopics[0] || TOPICS_DATA[0];
  }, [selectedTopicId, filteredTopics]);

  // Scroll topics bar
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  const handleNextSubtopic = () => {
    if (!activePreview || !currentTopic) return;
    const currentIndex = currentTopic.subtopics.findIndex(
      (s) => s.name === activePreview.subtopic.name
    );
    const nextIndex = (currentIndex + 1) % currentTopic.subtopics.length;
    setActivePreview({
      topic: currentTopic,
      subtopic: currentTopic.subtopics[nextIndex],
    });
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        isDark ? "bg-[#06080e] text-white" : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      {/* Universal Fixed Navbar */}
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 relative">
        {/* Background Ambient Glows */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 blur-3xl pointer-events-none -z-10 opacity-40 transition-colors duration-700"
          style={{
            background: `radial-gradient(circle, ${currentTopic.accent}33 0%, transparent 70%)`,
          }}
        />

        {/* Hero Header */}
        <section className="text-center pt-2 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-4 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Defo Topic Universe • Curated Infotainment</span>
          </div>

          <h1
            className={`text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Explore What Fuels Your{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Passion
            </span>
          </h1>

          <p
            className={`text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            From culinary arts to cinematic video editing, design systems, languages, and DIY crafts. Discover quick infotainment breakdowns and learn something new every day.
          </p>

          {/* Search bar & Category filters */}
          <div className="w-full max-w-2xl mx-auto mb-8">
            <div className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics or subtopics (e.g. Chicken, Color Grading, Origami, Figma)..."
                className={`w-full px-5 py-3.5 pl-11 rounded-2xl text-sm focus:outline-none transition-all ${
                  isDark
                    ? "bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    : "bg-white border border-slate-300 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                }`}
              />
              <svg
                className="w-5 h-5 text-slate-400 absolute left-3.5 top-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-white px-2 py-1 bg-white/10 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TOPICS_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-md scale-105"
                      : isDark
                      ? "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Topic Carousel Slider */}
        <section className="mb-10">
          <div className="flex items-center justify-between gap-3 relative">
            {/* Scroll Left Button */}
            <button
              onClick={scrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all shadow-md z-10 ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"
              }`}
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex-1 flex gap-3 py-2 px-1 overflow-x-auto scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredTopics.map((topic) => {
                const isSelected = currentTopic.id === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`flex-shrink-0 px-4 py-2.5 rounded-2xl transition-all duration-300 flex items-center gap-2.5 cursor-pointer border ${
                      isSelected
                        ? "bg-white/20 dark:bg-white/15 border-emerald-400/80 shadow-lg scale-105 ring-2 ring-emerald-400/40"
                        : isDark
                        ? "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/15"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
                    }`}
                  >
                    <span className="text-xl">{topic.icon}</span>
                    <div className="text-left">
                      <span
                        className={`block text-xs sm:text-sm font-bold leading-tight ${
                          isSelected
                            ? isDark
                              ? "text-emerald-300"
                              : "text-emerald-700"
                            : isDark
                            ? "text-white"
                            : "text-slate-800"
                        }`}
                      >
                        {topic.name}
                      </span>
                      <span className="block text-[10px] text-slate-400 font-mono">
                        {topic.videoCount}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={scrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all shadow-md z-10 ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"
              }`}
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Active Topic Featured Banner */}
        {currentTopic && (
          <section className="mb-12">
            <div
              className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden border transition-all shadow-2xl ${
                isDark
                  ? "bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-black/90 border-white/10"
                  : "bg-gradient-to-r from-white via-slate-50 to-white border-slate-200"
              }`}
            >
              {/* Top ambient color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: currentTopic.accent }}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl shrink-0"
                    style={{
                      backgroundColor: `${currentTopic.accent}20`,
                      border: `1px solid ${currentTopic.accent}50`,
                    }}
                  >
                    {currentTopic.icon}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Active Category
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {currentTopic.subtopics.length} Featured Subtopics
                      </span>
                      <span className="text-xs text-amber-400 flex items-center gap-1 font-semibold">
                        ★ {currentTopic.rating}
                      </span>
                    </div>

                    <h2
                      className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {currentTopic.name}
                    </h2>

                    <p
                      className={`text-xs sm:text-sm max-w-2xl ${
                        isDark ? "text-slate-300 font-light" : "text-slate-700 font-medium"
                      }`}
                    >
                      {currentTopic.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() =>
                      setActivePreview({
                        topic: currentTopic,
                        subtopic: currentTopic.subtopics[0],
                      })
                    }
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Watch Highlights</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Subtopics Grid Showcase */}
        {currentTopic && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10 dark:border-white/10 border-slate-200">
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold tracking-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {currentTopic.name} Subtopic Modules
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Select any card to preview the infotainment video guides and key takeaways.
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400">
                {currentTopic.subtopics.length} Guides Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTopic.subtopics.map((sub, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setActivePreview({
                      topic: currentTopic,
                      subtopic: sub,
                    })
                  }
                  className={`group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between border relative overflow-hidden ${
                    isDark
                      ? "bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-white/25 shadow-xl"
                      : "bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 shadow-md"
                  }`}
                >
                  {/* Accent glow on hover */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{ background: currentTopic.accent }}
                  />

                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${currentTopic.accent}15`,
                          color: currentTopic.accent,
                          border: `1px solid ${currentTopic.accent}30`,
                        }}
                      >
                        {sub.badge || sub.tag}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {sub.videos}
                      </span>
                    </div>

                    <h4
                      className={`text-lg font-bold mb-2 tracking-tight group-hover:text-cyan-400 transition-colors ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {sub.name}
                    </h4>

                    <p
                      className={`text-xs leading-relaxed mb-6 font-light ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {sub.desc}
                    </p>
                  </div>

                  {/* Card bottom footer */}
                  <div
                    className={`pt-4 border-t flex items-center justify-between text-xs ${
                      isDark ? "border-white/10" : "border-slate-100"
                    }`}
                  >
                    <span
                      className={`font-medium group-hover:underline ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Explore Guide
                    </span>

                    <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-cyan-500 group-hover:text-black flex items-center justify-center transition-all duration-300">
                      <svg
                        className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Global Topics Quick Access Grid */}
        <section className="my-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-950/20 via-cyan-950/20 to-blue-950/20 border border-white/10 dark:border-white/10 border-slate-200">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              All 15 Disciplines
            </span>
            <h3
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Browse All Defo Topic Portals
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mt-1">
              Click any portal to jump straight into its curated infotainment library.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {TOPICS_DATA.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedTopicId(t.id);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
                className={`p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-200 cursor-pointer border ${
                  currentTopic.id === t.id
                    ? "bg-white/20 border-cyan-400 scale-105 shadow-md"
                    : isDark
                    ? "bg-white/5 border-white/5 hover:bg-white/10 text-white"
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-800 shadow-sm"
                }`}
              >
                <span className="text-2xl mb-1">{t.icon}</span>
                <span className="text-xs font-bold truncate max-w-full">
                  {t.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {t.subtopics.length} Guides
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="my-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-blue-950/40 border border-emerald-500/30 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Want to Master These Skills on the Go?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 font-light">
              Download Defo to stream short 4K infotainment guides, save your favorite recipes & editing tutorials, and learn with millions of creators.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-500/25"
              >
                Get Defo on Google Play
              </a>
              <a
                href="https://creator.yesdefo.com/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all"
              >
                Join as Creator
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Subtopic Preview Modal */}
      {activePreview && (
        <TopicPreviewModal
          topic={activePreview.topic}
          subtopic={activePreview.subtopic}
          onClose={() => setActivePreview(null)}
          onSelectNext={handleNextSubtopic}
        />
      )}

      {/* Universal Footer */}
      <Footer />
    </div>
  );
};

export default Topics;
