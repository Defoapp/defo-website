import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import { faqmap } from "../constants/map";
import searchimg from "../image/majesticons_search-line.svg";
import noData from "../image/faq/3009287 1.svg";
import { useTheme } from "../context/ThemeContext";

const Faq = () => {
  const { isDark } = useTheme();
  const [search, setSearch] = useState("");

  const filteredFaqs = faqmap.filter((item) =>
    search.toLowerCase() === ""
      ? true
      : item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`w-full h-full min-h-screen transition-colors duration-300 ${isDark ? "bg-[#06080e] text-white" : "bg-white text-slate-900"}`}>
      <Navbar />
      <div className="w-full h-full pb-10">
        {/* Page Heading */}
        <h1 className={`text-3xl md:text-4xl font-bold text-center my-8 md:my-10 px-4 ${isDark ? "text-white" : "text-slate-900"}`}>
          Frequently Asked Questions
        </h1>

        {/* Search bar */}
        <div className={`w-11/12 sm:w-4/5 lg:w-3/6 flex flex-col sm:flex-row items-center justify-between mx-auto p-4 rounded-xl gap-4 transition-colors ${isDark ? "bg-slate-900/80 border border-white/10 text-white" : "bg-slate-100 border border-slate-200 text-slate-800 shadow-sm"}`}>
          <h2 className={`text-xl md:text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>FAQ</h2>
          <div className="relative w-full sm:w-4/5">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className={`w-full px-5 py-3 rounded-full border focus:ring-2 focus:ring-blue-500 outline-none text-base pr-12 transition-colors ${isDark ? "bg-slate-950 text-white placeholder-slate-400 border-white/20" : "bg-white text-slate-900 placeholder-slate-400 border-slate-300"}`}
            />
            <button aria-label="Search FAQ" className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors ${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-gray-200 hover:bg-gray-300 text-slate-700"}`}>
              <img className={`w-4 h-4 ${isDark ? "invert brightness-200" : ""}`} src={searchimg} alt="Search icon" />
            </button>
          </div>
        </div>

        {/* Questions */}
        <div className="w-11/12 md:w-4/6 mx-auto my-10 py-6 md:py-10 px-4 md:px-8 rounded-2xl bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50% shadow-xl">
          {filteredFaqs.map((item) => (
            <div
              key={item.id}
              className={`w-full mx-auto py-4 my-3 rounded-xl transition-all ${isDark ? "bg-[#0b1120]/95 backdrop-blur-md border border-white/10 text-white shadow-lg" : "bg-white text-slate-900 shadow-md"}`}
            >
              <details className="group px-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-base md:text-lg">
                  <span className={`pr-4 font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{item.title}</span>
                  <span className="bg-blue-950 text-white p-1 rounded-full transition-transform group-open:rotate-180 flex-shrink-0">
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className={`mt-3 text-left text-sm md:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {item.answer}
                </p>
              </details>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="w-full text-center py-8">
              <img className="w-44 md:w-56 mx-auto mb-4" src={noData} alt="No data found" />
              <h2 className="text-white text-xl md:text-2xl font-medium px-4">
                No results found for "{search}".
              </h2>
              <p className="text-gray-200 text-base md:text-lg my-2 px-4">
                Try adjusting your search to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
