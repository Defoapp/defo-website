import React, { useState, useRef } from 'react';
import { HERO_COLUMNS_DATA } from '../../data/heroData';

export default function HeroSection({ onExploreClick }) {
  
  // Interactive 3D tilt state for the center hero typography card
  const heroCardRef = useRef(null);
  const [headlineTilt, setHeadlineTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleHeroMouseMove = (e) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Gentle 3D parallax tilt (max 8 deg)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setHeadlineTilt({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
    });
  };

  const handleHeroMouseLeave = () => {
    setHeadlineTilt({ rotateX: 0, rotateY: 0 });
  };

  const defaultExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById("discover-section") || document.getElementById("price");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Alternating scroll directions and speeds for natural, organic jumbled motion
  const columnConfigs = [
    { direction: 'up', duration: '32s' },
    { direction: 'down', duration: '38s' },
    { direction: 'up', duration: '28s' },
    { direction: 'down', duration: '35s' },
    { direction: 'up', duration: '30s' },
  ];

  return (
    <div 
      id="home"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative w-full min-h-[720px] lg:h-screen lg:max-h-[980px] overflow-hidden bg-[#0a0d14] text-white flex flex-col justify-between select-none"
    >
      
      {/* ================================================================== */}
      {/* BACKGROUND JUMBLED MASONRY COLUMNS (EXACT SIZES FROM FIGMA)        */}
      {/* ================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-3.5 h-full w-[110%] -left-[5%] -top-[10%]">
          {HERO_COLUMNS_DATA.map((colCards, colIdx) => {
            const config = columnConfigs[colIdx % columnConfigs.length];
            // Duplicate array for mathematically seamless vertical loop
            const loopCards = [...colCards, ...colCards];

            return (
              <div 
                key={colIdx} 
                className={`relative overflow-hidden h-[125%] ${colIdx >= 2 ? 'hidden sm:block' : ''} ${colIdx >= 3 ? 'hidden md:block' : ''} ${colIdx >= 4 ? 'hidden lg:block' : ''}`}
              >
                <div
                  className={`flex flex-col gap-3 sm:gap-3.5 ${
                    config.direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'
                  }`}
                  style={{
                    '--scroll-duration': config.duration,
                  }}
                >
                  {loopCards.map((card, cardIdx) => (
                    <div
                      key={`${card.id}-${cardIdx}`}
                      style={{ height: `${card.height}px` }}
                      className="relative w-full rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-2xl group"
                    >
                      {/* Image */}
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Card gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                      {/* Stylized Category Title matching Figma reference */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className={`block drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${card.fontStyle}`}>
                          {card.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================================================================== */}
      {/* DARK CINEMATIC VIGNETTE OVERLAY                                    */}
      {/* ================================================================== */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(10, 13, 20, 0.45) 0%, rgba(10, 13, 20, 0.78) 58%, rgba(10, 13, 20, 0.98) 100%)'
        }}
      />
      {/* Top & Bottom gradient soft fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/95 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-transparent z-10 pointer-events-none" />

      {/* Top spacer to provide headroom for the fixed universal Navbar */}
      <div className="relative z-20 w-full h-20 sm:h-24 pointer-events-none shrink-0" />

      {/* ================================================================== */}
      {/* CENTER HERO COPY WITH 3D TEXT & PARALLAX PERSPECTIVE               */}
      {/* ================================================================== */}
      <div 
        ref={heroCardRef}
        style={{ perspective: '1000px' }}
        className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center my-auto py-8 sm:py-12"
      >
        <div
          className="preserve-3d transition-transform duration-200 ease-out"
          style={{
            transform: `rotateX(${headlineTilt.rotateX}deg) rotateY(${headlineTilt.rotateY}deg)`,
          }}
        >
          {/* Main 3D Extruded Headline */}
          <h1 
            className="text-[30px] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-6 text-3d-hero text-white preserve-3d"
            style={{ 
              fontFamily: 'Outfit, var(--font-display), sans-serif',
              transform: 'translateZ(45px)'
            }}
          >
            <span className="inline-block hover:text-[#00f298] transition-colors duration-300">Information</span> <br />
            <span className="inline-block text-slate-300 text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-light italic opacity-90 my-1">with</span> <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00f298] drop-shadow-[0_10px_25px_rgba(0,242,152,0.3)]">Entertainment</span>
          </h1>

          {/* Subtitle with depth shadow */}
          <p 
            className="text-xs xs:text-sm sm:text-lg md:text-xl text-slate-300 font-medium max-w-xl mx-auto mb-8 text-3d-subtle preserve-3d px-2"
            style={{ transform: 'translateZ(30px)' }}
          >
            Are you looking to have fun and learn at the same time?
          </p>

          {/* App Store & Google Play Badges with 3D tactile buttons */}
          <div 
            className="flex flex-col xs:flex-row items-center justify-center gap-3.5 sm:gap-5 preserve-3d px-2"
            style={{ transform: 'translateZ(35px)' }}
          >
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-tactile w-full xs:w-auto flex items-center justify-center gap-3 px-5 py-2.5 sm:py-3 rounded-2xl bg-black/90 border border-white/20 hover:border-[#00f298]/60 text-white shadow-2xl hover:shadow-[0_10px_30px_rgba(0,242,152,0.25)] cursor-pointer"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 1.8A1.6 1.6 0 0 0 3 3.1v17.8c0 .5.2.9.6 1.3l9.8-9.8-9.8-10.4z" fill="#00E676" />
                <path d="M16.5 9.3 13.4 12.4l3.1 3.1 3.6-2.1c1-.6 1-1.5 0-2.1l-3.6-2z" fill="#FFD600" />
                <path d="M3.6 1.8 13.4 12.4l3.1-3.1-9.9-5.7c-1.3-.7-2.3-.3-3 0l.4-.2z" fill="#00B0FF" />
                <path d="M13.4 12.4 3.6 22.2c.7.4 1.7.6 3 0l9.9-5.7-3.1-3.1z" fill="#FF3D00" />
              </svg>
              <div className="text-left">
                <span className="block text-[9px] sm:text-[10px] tracking-wider uppercase text-slate-400 font-semibold leading-none">
                  GET IT ON
                </span>
                <span className="block text-xs sm:text-sm font-bold text-white tracking-tight leading-tight mt-0.5 font-sans">
                  Google Play
                </span>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="https://apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-tactile w-full xs:w-auto flex items-center justify-center gap-3 px-5 py-2.5 sm:py-3 rounded-2xl bg-black/90 border border-white/20 hover:border-white/50 text-white shadow-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] cursor-pointer"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 fill-current text-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.65-.79 1.09-1.89.97-2.99-.94.04-2.07.63-2.74 1.41-.58.68-1.1 1.79-.96 2.87 1.05.08 2.08-.5 2.73-1.29" />
              </svg>
              <div className="text-left">
                <span className="block text-[9px] sm:text-[10px] tracking-wider text-slate-400 font-semibold leading-none">
                  Download on the
                </span>
                <span className="block text-xs sm:text-sm font-bold text-white tracking-tight leading-tight mt-0.5 font-sans">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* BOTTOM SCROLL CUE TO NEXT SECTION                                  */}
      {/* ================================================================== */}
      <div className="relative z-20 pb-6 flex flex-col items-center">
        <button
          type="button"
          onClick={defaultExploreClick}
          className="group flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 group-hover:text-[#00f298] transition-colors">
            Explore Categories
          </span>
          <svg className="w-4 h-4 animate-bounce text-[#00f298]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
