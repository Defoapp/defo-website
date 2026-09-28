import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { LEARN_ARTICLES, ROADMAP_TRACKS } from "./learnData";
import LearnArticleModal from "./LearnArticleModal";
import LiveCssPlayground from "./LiveCssPlayground";
import CodeRunnerSandbox from "./CodeRunnerSandbox";
import AppleStoreHero from "./AppleStoreHero";
import { useTheme } from "../../context/ThemeContext";

const Learn = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalArticle, setActiveModalArticle] = useState(null);
  const [copiedSnippetId, setCopiedSnippetId] = useState(null);

  // Auto scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "python", label: "Python" },
    { id: "java", label: "Java" },
    { id: "html", label: "HTML5" },
    { id: "css", label: "CSS3" },
    { id: "javascript", label: "JavaScript" },
    { id: "backend", label: "Databases & SQL" },
  ];

  const filteredArticles = useMemo(() => {
    return LEARN_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;
      const matchesSearch =
        article.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyCardSnippet = (e, article) => {
    e.stopPropagation();
    navigator.clipboard.writeText(article.codeSnippet);
    setCopiedSnippetId(article.id);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  const handleNextArticle = () => {
    if (!activeModalArticle) return;
    const currentIndex = LEARN_ARTICLES.findIndex(
      (a) => a.id === activeModalArticle.id
    );
    const nextIndex = (currentIndex + 1) % LEARN_ARTICLES.length;
    setActiveModalArticle(LEARN_ARTICLES[nextIndex]);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        isDark ? "bg-[#06080e] text-white" : "bg-[#f5f5f7] text-slate-900"
      }`}
    >
      {/* Universal Fixed Navbar */}
      <Navbar />

      {/* 3D Apple App Store Style Canopy Header */}
      <AppleStoreHero
        onSelectCategory={setSelectedCategory}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 relative">
        {/* Background ambient radial gradients */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-cyan-600/10 via-emerald-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Search bar, Category Tabs & Navigation Jump Controls */}
        <div className="w-full max-w-3xl mx-auto mb-12">
          {/* Quick jump navigation pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <button
              onClick={() => scrollToSection("articles-grid")}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-black font-semibold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              📚 Curriculum Modules
            </button>
            <button
              onClick={() => scrollToSection("css-playground")}
              className={`px-4 py-2 rounded-xl border font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 border-white/15 text-white"
                  : "bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm"
              }`}
            >
              🎨 Live CSS FX Lab
            </button>
            <button
              onClick={() => scrollToSection("code-sandbox")}
              className={`px-4 py-2 rounded-xl border font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 border-white/15 text-white"
                  : "bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm"
              }`}
            >
              ⚡ Code Execution Sandbox
            </button>
          </div>

          {/* Search bar */}
          <div className="relative mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tutorials (e.g. Python, Java, CSS, Event Loop, Flexbox, SQL)..."
              className={`w-full px-5 py-3.5 pl-11 rounded-2xl border text-sm focus:outline-none focus:ring-2 backdrop-blur-md transition-all ${
                isDark
                  ? "bg-white/5 border-white/15 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                  : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500/20"
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
                className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-white px-2 py-1 bg-white/10 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-md shadow-emerald-500/30 scale-105"
                    : isDark
                    ? "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles & Blog Cards Section */}
        <section id="articles-grid" className="py-4">
          <div
            className={`flex items-center justify-between mb-8 border-b pb-4 ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}
          >
            <div>
              <h2
                className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Featured Learning Modules
              </h2>
              <p
                className={`text-xs sm:text-sm mt-1 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Showing {filteredArticles.length} curated topic{filteredArticles.length === 1 ? "" : "s"}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-500 font-semibold">
              Interactive Blueprint Series
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white/[0.02] rounded-3xl border border-white/10 p-8">
              <p className="text-slate-400 text-base mb-3">
                No articles matched your search query "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs hover:bg-white/20 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setActiveModalArticle(article)}
                  className={`group relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden border ${
                    isDark
                      ? "bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black/80 border-white/10 hover:border-white/30"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl"
                  }`}
                  style={{
                    boxShadow: isDark
                      ? "0 10px 30px -10px rgba(0,0,0,0.5)"
                      : "0 10px 25px -5px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Subtle hover aura */}
                  <div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ background: article.glowColor }}
                  />

                  {/* Top card metadata */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${article.iconBg}`}
                      >
                        {article.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          {article.readTime}
                        </span>
                        <span className={`text-[11px] px-2 py-0.5 rounded-full border ${
                          isDark ? "bg-white/5 text-slate-300 border-white/5" : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}>
                          {article.level}
                        </span>
                      </div>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors tracking-tight line-clamp-2 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      {article.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-light ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}>
                      {article.summary}
                    </p>

                    {/* Mini Code Snippet Preview */}
                    <div className="relative rounded-xl bg-slate-950 border border-white/10 p-3 mb-4 overflow-hidden">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[10px] text-slate-400 font-mono">
                        <span>Preview ({article.codeLanguage})</span>
                        <button
                          onClick={(e) => handleCopyCardSnippet(e, article)}
                          className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          {copiedSnippetId === article.id ? (
                            <span className="text-emerald-400 font-bold">Copied!</span>
                          ) : (
                            <span>Copy</span>
                          )}
                        </button>
                      </div>
                      <pre className="text-[11px] font-mono text-emerald-400/90 overflow-x-hidden line-clamp-4 leading-relaxed">
                        {article.codeSnippet}
                      </pre>
                    </div>

                    {/* Key takeaway bullets */}
                    <ul className="space-y-1.5 mb-6">
                      {article.quickTakeaways.slice(0, 2).map((pt, i) => (
                        <li key={i} className={`flex items-start gap-2 text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span className="line-clamp-1">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action footer */}
                  <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                    isDark ? "border-white/10" : "border-slate-100"
                  }`}>
                    <span className={`font-medium transition-colors ${
                      isDark ? "text-slate-400 group-hover:text-white" : "text-slate-600 group-hover:text-emerald-600"
                    }`}>
                      Read Interactive Article
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isDark
                        ? "bg-white/10 group-hover:bg-emerald-400 group-hover:text-black"
                        : "bg-slate-100 group-hover:bg-emerald-500 group-hover:text-white"
                    }`}>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
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
          )}
        </section>

        {/* Interactive Live CSS Playground */}
        <section id="css-playground" className="scroll-mt-20">
          <LiveCssPlayground />
        </section>

        {/* Interactive Code Execution Sandbox */}
        <section id="code-sandbox" className="scroll-mt-20">
          <CodeRunnerSandbox />
        </section>

        {/* Comprehensive Technology Comparison Matrix */}
        <section className={`my-16 p-6 sm:p-8 rounded-3xl border transition-colors ${
          isDark ? "bg-slate-900/40 border-white/10" : "bg-white border-slate-200 shadow-md text-slate-800"
        }`}>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-2">
              <span>Architectural Overview</span>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Tech Stack Architecture Matrix
            </h3>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Comparing paradigms, runtime speeds, and optimal industry use cases for each technology.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className={`border-b font-mono text-[11px] uppercase ${
                  isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"
                }`}>
                  <th className="py-3 px-4">Technology</th>
                  <th className="py-3 px-4">Core Paradigm</th>
                  <th className="py-3 px-4">Primary Superpower</th>
                  <th className="py-3 px-4">Performance Profile</th>
                  <th className="py-3 px-4">Premier Ecosystem</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? "divide-white/5 text-slate-300" : "divide-slate-200 text-slate-700"}`}>
                <tr className={isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"}>
                  <td className="py-3.5 px-4 font-semibold text-cyan-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Python
                  </td>
                  <td className="py-3.5 px-4">Multi-paradigm (OOP, Functional)</td>
                  <td className="py-3.5 px-4">AI, Data Science, Clean APIs</td>
                  <td className="py-3.5 px-4">Dynamic / Fast prototyping (JIT / C-libs)</td>
                  <td className="py-3.5 px-4">PyTorch, FastAPI, Pandas, Django</td>
                </tr>
                <tr className={isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"}>
                  <td className="py-3.5 px-4 font-semibold text-amber-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Java
                  </td>
                  <td className="py-3.5 px-4">Strict OOP, Static Typing</td>
                  <td className="py-3.5 px-4">Enterprise Backends, Banking, Android</td>
                  <td className="py-3.5 px-4">High-throughput JVM JIT (Microseconds)</td>
                  <td className="py-3.5 px-4">Spring Boot, Kafka, Android, Hibernate</td>
                </tr>
                <tr className={isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"}>
                  <td className="py-3.5 px-4 font-semibold text-rose-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    HTML5
                  </td>
                  <td className="py-3.5 px-4">Declarative Markup & Semantics</td>
                  <td className="py-3.5 px-4">Document Structure, SEO, Accessibility</td>
                  <td className="py-3.5 px-4">Instant Browser DOM Parse</td>
                  <td className="py-3.5 px-4">DOM API, Canvas 2D/WebGL, Web Audio</td>
                </tr>
                <tr className={isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"}>
                  <td className="py-3.5 px-4 font-semibold text-blue-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    CSS3
                  </td>
                  <td className="py-3.5 px-4">Declarative Rule-Based Styling</td>
                  <td className="py-3.5 px-4">3D Transforms, Glassmorphism, Layouts</td>
                  <td className="py-3.5 px-4">60 FPS Hardware GPU Composited</td>
                  <td className="py-3.5 px-4">TailwindCSS, CSS Grid, PostCSS</td>
                </tr>
                <tr className={isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"}>
                  <td className="py-3.5 px-4 font-semibold text-yellow-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    JavaScript
                  </td>
                  <td className="py-3.5 px-4">Event-Driven, Prototype OOP</td>
                  <td className="py-3.5 px-4">Fullstack Web, Interactive UIs</td>
                  <td className="py-3.5 px-4">Single-Threaded Non-blocking V8 JIT</td>
                  <td className="py-3.5 px-4">React, Node.js, Next.js, TypeScript</td>
                </tr>
                <tr className={isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"}>
                  <td className="py-3.5 px-4 font-semibold text-emerald-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Databases / SQL
                  </td>
                  <td className="py-3.5 px-4">Relational & Document Storage</td>
                  <td className="py-3.5 px-4">ACID Consistency, In-memory Caching</td>
                  <td className="py-3.5 px-4">Indexed B-Tree lookups (0.1ms)</td>
                  <td className="py-3.5 px-4">PostgreSQL, MongoDB, Redis, Prisma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Learning Pathways / Roadmaps */}
        <section id="roadmap-tracks" className="my-16">
          <div className="text-center mb-10">
            <h3 className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Recommended Developer Roadmaps
            </h3>
            <p className={`text-xs sm:text-base max-w-xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              Follow a battle-tested milestone path to master frontend, backend, or full-stack engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ROADMAP_TRACKS.map((track, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  isDark ? "bg-black/60 border-white/10 hover:border-white/20" : "bg-white border-slate-200 hover:border-slate-300 shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${track.color}`} />
                  <h4 className={`text-lg sm:text-xl font-bold tracking-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {track.title}
                  </h4>
                </div>

                <div className="space-y-4">
                  {track.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3.5 rounded-xl border flex items-start gap-3.5 transition-colors ${
                        isDark
                          ? "bg-white/[0.03] border-white/5 hover:bg-white/[0.06]"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        {sIdx + 1}
                      </span>
                      <div>
                        <h5 className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                          {step.name}
                        </h5>
                        <p className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="my-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-blue-950/40 border border-emerald-500/30 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Ready to Build the Future with Defo?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8 font-light">
              Experience the seamless synergy of top-tier coding design, high-frequency performance, and creative storytelling on Defo.
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

      {/* Interactive Modal Reader */}
      {activeModalArticle && (
        <LearnArticleModal
          article={activeModalArticle}
          onClose={() => setActiveModalArticle(null)}
          onSelectNext={handleNextArticle}
        />
      )}

      {/* Universal Footer */}
      <Footer />
    </div>
  );
};

export default Learn;
