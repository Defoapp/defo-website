import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { CATEGORIES_DATA, CATEGORY_FILTERS } from '../../data/categoriesData';
import CategoryCard from './CategoryCard';
import AmbientDecorations from '../Common/AmbientDecorations';

// ============================================================================
// INDIVIDUAL CATEGORY ROW WITH DEDICATED SCROLL-TRIGGERED STEP-BY-STEP DEALING
// ============================================================================
function CategoryRow({
  rowItems,
  rowIndex,
  totalRows,
  dealKey,
  forceDealAll,
  forceDelayOffset = 0,
  gridRef,
}) {
  const rowRef = useRef(null);
  
  // Trigger this row when the user scrolls to it (amount: 0.1 for instant response)
  const inView = useInView(rowRef, { once: true, amount: 0.1 });
  
  const [isDealt, setIsDealt] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [offsets, setOffsets] = useState({});

  // Column dealing rank within row requested by user:
  // Col 0: 1st (Adobe Tools / leftmost place)
  // Col 3: 2nd (Video Editing / rightmost place)
  // Col 1: 3rd (UI/UX / inner-left place)
  // Col 2: 4th (Photo Editing / inner-right place)
  const getColRank = useCallback((colIdx, count) => {
    if (count === 4) {
      if (colIdx === 0) return 0; // 1st: left
      if (colIdx === 3) return 1; // 2nd: right
      if (colIdx === 1) return 2; // 3rd: inner-left
      if (colIdx === 2) return 3; // 4th: inner-right
    }
    return colIdx;
  }, []);

  // Aerodynamic banking flight rotation as card flies to destination
  const getFlightRotation = useCallback((colIdx, count) => {
    if (count === 4) {
      if (colIdx === 0) return -8.0; // Banks left
      if (colIdx === 3) return 8.0;  // Banks right
      if (colIdx === 1) return -4.0; // Banks slight left
      if (colIdx === 2) return 4.0;  // Banks slight right
    }
    return 0;
  }, []);

  // Subtle deck stack rotation angle while resting at down center
  const getStackRotation = useCallback((colRank) => {
    const tilts = [-2.2, 2.4, -1.2, 2.8, -2.6, 1.6, -3.0, 1.8, -1.6, 2.5, -2.0, 1.2];
    return tilts[(rowIndex * 4 + colRank) % tilts.length];
  }, [rowIndex]);

  // Analytical fallback offset so cards are immediately at down center on frame 0
  const getFallbackOffset = useCallback((colIdx) => {
    const colStep = 295;
    const rowStep = 320;
    const deltaX = (1.5 - colIdx) * colStep;
    const deltaY = (totalRows - rowIndex + 0.35) * rowStep;
    return { deltaX, deltaY };
  }, [rowIndex, totalRows]);

  // Measure exact pixel offsets from grid down-center deck origin to each card slot
  const measureOffsets = useCallback(() => {
    if (!gridRef.current || !rowRef.current) return;
    const gridEl = gridRef.current;
    const cardNodes = rowRef.current.querySelectorAll('.category-card-slot');
    if (!cardNodes.length) return;

    // Deck center: exact horizontal center, just below the grid (down center)
    const deckX = gridEl.offsetWidth / 2;
    const deckY = gridEl.offsetHeight + 35;

    const newOffsets = {};
    cardNodes.forEach((node, colIdx) => {
      const cardCenterX = node.offsetLeft + node.offsetWidth / 2;
      const cardCenterY = node.offsetTop + node.offsetHeight / 2;
      newOffsets[colIdx] = {
        deltaX: deckX - cardCenterX,
        deltaY: deckY - cardCenterY,
      };
    });
    setOffsets(newOffsets);
  }, [gridRef]);

  // Trigger dealing when this specific row enters the viewport or when forced
  useEffect(() => {
    // If the row was already scrolled past (e.g. user refreshed at pricing section or below),
    // immediately mark it as dealt and completed so cards sit in their normal grid slots.
    if (rowRef.current) {
      const rect = rowRef.current.getBoundingClientRect();
      if (rect.bottom < 0) {
        setIsDealt(true);
        setIsComplete(true);
        return;
      }
    }

    if (!inView && !forceDealAll) return;

    setIsDealt(false);
    setIsComplete(false);

    measureOffsets();

    const delayStart = forceDealAll ? forceDelayOffset : 20;
    const dealTimer = setTimeout(() => {
      setIsDealt(true);
    }, delayStart);

    // Fast, crisp dealing interval (120ms stagger per card + 800ms flight duration)
    const totalRowDuration = delayStart + rowItems.length * 120 + 850;
    const doneTimer = setTimeout(() => {
      setIsComplete(true);
    }, totalRowDuration);

    return () => {
      clearTimeout(dealTimer);
      clearTimeout(doneTimer);
    };
  }, [inView, forceDealAll, forceDelayOffset, dealKey, rowItems.length, measureOffsets]);

  return (
    <div
      ref={rowRef}
      className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7"
    >
      {rowItems.map((category, colIdx) => {
        const colRank = getColRank(colIdx, rowItems.length);
        const flightRot = getFlightRotation(colIdx, rowItems.length);
        const stackRot = getStackRotation(colRank);
        const offset = offsets[colIdx] || getFallbackOffset(colIdx);
        
        // Crisp, natural deal interval (120ms between each card)
        const delay = colRank * 0.12;
        const globalZIndex = isComplete ? 1 : isDealt ? 60 - (rowIndex * 4 + colRank) : 0;

        return (
          <div
            key={category.id}
            className="category-card-slot relative h-full"
            style={{ zIndex: globalZIndex }}
          >
            <motion.div
              className="relative h-full w-full"
              style={{
                willChange: isComplete ? 'auto' : 'transform, opacity',
                pointerEvents: isComplete ? 'auto' : 'none',
              }}
              initial={{
                x: offset.deltaX,
                y: offset.deltaY,
                scale: 0.65,
                rotate: stackRot,
                opacity: 0,
              }}
              animate={
                isDealt
                  ? {
                      x: 0,
                      y: 0,
                      scale: [0.65, 1.03, 1.0],
                      rotate: [stackRot, flightRot, 0],
                      opacity: 1,
                    }
                  : {
                      x: offset.deltaX,
                      y: offset.deltaY,
                      scale: 0.65,
                      rotate: stackRot,
                      opacity: 0,
                    }
              }
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 95,
                  damping: 16,
                  mass: 0.85,
                  delay: delay,
                },
                y: {
                  type: 'spring',
                  stiffness: 95,
                  damping: 16,
                  mass: 0.85,
                  delay: delay,
                },
                scale: {
                  duration: 0.75,
                  delay: delay,
                  times: [0, 0.55, 1],
                  ease: [0.22, 1, 0.36, 1],
                },
                rotate: {
                  duration: 0.8,
                  delay: delay,
                  times: [0, 0.45, 1],
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  duration: 0.2,
                  delay: Math.max(0, delay - 0.02),
                },
              }}
            >
              <CategoryCard item={category} index={rowIndex * 4 + colIdx} />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// MAIN CATEGORIES SECTION COMPONENT
// ============================================================================
export default function CategoriesSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Re-deal key to replay distribution animation on demand
  const [dealKey, setDealKey] = useState(0);
  const [forceDealAll, setForceDealAll] = useState(false);

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

  // Divide filtered cards into 4-column rows so each row triggers step-by-step on scroll
  const rows = useMemo(() => {
    const result = [];
    const chunkSize = 4;
    for (let i = 0; i < filteredCategories.length; i += chunkSize) {
      result.push(filteredCategories.slice(i, i + chunkSize));
    }
    return result;
  }, [filteredCategories]);

  const handleFilterClick = (tabId) => {
    setActiveFilter(tabId);
    setDealKey((k) => k + 1);
    setForceDealAll(true);
  };

  const handleRedeal = () => {
    setDealKey((k) => k + 1);
    setForceDealAll(true);
  };

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 categories-section-bg transition-colors duration-500 overflow-hidden"
    >
      {/* Top transition soft fade from previous section */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-b from-[#edf4fc] dark:from-[#07090e] to-transparent pointer-events-none z-10" />

      {/* Ambient Colorful Light Aurora Blobs behind categories stage */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Center Emerald Brand Halo */}
        <div 
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[550px] sm:w-[900px] h-[400px] sm:h-[550px] rounded-full blur-[110px] sm:blur-[140px] opacity-75 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,242,152,0.42) 0%, rgba(52,211,153,0.22) 50%, transparent 75%)' }}
        />
        {/* Left Flank Sky Blue / Cyan Aura */}
        <div 
          className="absolute top-1/4 -left-20 sm:left-[3%] w-[450px] sm:w-[650px] h-[450px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[130px] opacity-75 dark:opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.42) 0%, rgba(14,165,233,0.20) 50%, transparent 75%)' }}
        />
        {/* Right Flank Violet / Magenta Aura */}
        <div 
          className="absolute top-1/4 -right-20 sm:right-[3%] w-[450px] sm:w-[650px] h-[450px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[130px] opacity-75 dark:opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.42) 0%, rgba(236,72,153,0.20) 50%, transparent 75%)' }}
        />
        {/* Lower Ambient Amber / Rose Glow */}
        <div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] rounded-full blur-[100px] sm:blur-[130px] opacity-65 dark:opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.32) 0%, rgba(244,114,182,0.20) 50%, transparent 75%)' }}
        />
        {/* Delicate Modern Mesh Dots Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Interactive Responsive Colorful Designs & Parallax Elements */}
      <AmbientDecorations variant="categories" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ================================================================== */}
        {/* SECTION HEADER (EXACT TITLE & SUBTITLE FROM SCREENSHOT)            */}
        {/* ================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#191e38] dark:text-white tracking-tight mb-4"
            style={{ fontFamily: 'Outfit, var(--font-display), sans-serif' }}
          >
            Discover, Like and Save the useful videos.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Discover a new way to learn and have fun at the same time!
          </p>
        </div>

        {/* ================================================================== */}
        {/* INTERACTIVE CONTROLS (CATEGORY TABS, SEARCH BAR & REDEAL BUTTON)   */}
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
                  onClick={() => handleFilterClick(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#191e38] dark:bg-[#00f298] text-white dark:text-slate-900 shadow-lg shadow-slate-900/15 dark:shadow-[0_4px_16px_rgba(0,242,152,0.35)] scale-105'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-sm'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Bar: Search Bar & Re-deal Button */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDealKey((k) => k + 1);
                  setForceDealAll(true);
                }}
                placeholder="Search 12+ categories..."
                className="w-full pl-10 pr-8 py-2 rounded-full text-xs sm:text-sm bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00f298]/30 focus:border-[#00f298] shadow-sm backdrop-blur-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setDealKey((k) => k + 1);
                    setForceDealAll(true);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs cursor-pointer font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Redeal Cards Action Button */}
            <button
              type="button"
              onClick={handleRedeal}
              title="Replay card distribution dealing animation"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#191e38] dark:hover:text-white border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span className="text-sm">🂠</span>
              <span>Redeal</span>
            </button>
          </div>
        </div>

        {/* ================================================================== */}
        {/* STEP-BY-STEP ROW-BY-ROW SCROLL-TRIGGERED 4-COLUMN CARDS GRID       */}
        {/* ================================================================== */}
        <div 
          ref={gridRef}
          key={`deal-grid-${dealKey}`}
          className="relative w-full flex flex-col gap-4 sm:gap-6 lg:gap-7"
        >
          {rows.map((rowItems, rowIndex) => (
            <CategoryRow
              key={`row-${rowIndex}-${dealKey}`}
              rowItems={rowItems}
              rowIndex={rowIndex}
              totalRows={rows.length}
              dealKey={dealKey}
              forceDealAll={forceDealAll}
              forceDelayOffset={rowIndex * 1400} // Graceful sequential pacing when Redeal is clicked
              gridRef={gridRef}
            />
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
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); setDealKey(k => k + 1); setForceDealAll(true); }}
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

