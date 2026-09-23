import React, { useState, useMemo } from 'react';
import { CATEGORIES_DATA, CATEGORY_FILTERS } from '../../data/categoriesData';
import CategoryCard from './CategoryCard';

export default function CategoriesSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories by pill tag and search query
  const filteredCategories = useMemo(() => {
    return CATEGORIES_DATA.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      const matchesQuery = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section
      id="categories"
      className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#07090e] via-[#f4f7fc] to-[#edf2f9] text-slate-900 transition-colors"
    >
      {/* Top transition curved glow divider */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#07090e] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ================================================================== */}
        {/* SECTION HEADER (EXACT TITLE & SUBTITLE FROM SCREENSHOT)            */}
        {/* ================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Main Title matching Screenshot font and text */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#191e38] tracking-tight mb-4"
            style={{ fontFamily: 'Outfit, var(--font-display), sans-serif' }}
          >
            Discover, Like and Save the useful videos.
          </h2>

          {/* Subtitle matching Screenshot */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Discover a new way to learn and have fun at the same time!
          </p>
        </div>

        {/* ================================================================== */}
        {/* INTERACTIVE CONTROLS (CATEGORY TABS & SEARCH BAR)                  */}
        {/* ================================================================== */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORY_FILTERS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#191e38] text-white shadow-lg shadow-slate-900/15 scale-105'
                      : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200 shadow-sm'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 12+ categories..."
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs sm:text-sm bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ================================================================== */}
        {/* 4-COLUMN 3D CARD GRID (MATCHING 12 ITEMS FROM SCREENSHOT)          */}
        {/* ================================================================== */}
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {filteredCategories.map((category, idx) => (
            <CategoryCard key={category.id} item={category} index={idx} />
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredCategories.length === 0 && (
          <div className="w-full py-16 text-center flex flex-col items-center justify-center">
            <svg className="w-12 h-12 text-slate-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <h3 className="text-lg font-bold text-slate-700">No categories found</h3>
            <p className="text-sm text-slate-500 mt-1">Try adjusting your search or category filter</p>
            <button
              type="button"
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#191e38] text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}


      </div>
    </section>
  );
}
