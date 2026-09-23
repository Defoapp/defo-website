import React, { useState } from 'react';

export default function PhoneMockup({ item, slotPosition, isActive, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Determine CSS class based on slot position: -2, -1, 0, 1, 2 or hidden
  let slotClass = 'slot-hidden';
  if (slotPosition === -2) slotClass = 'slot-far-left';
  else if (slotPosition === -1) slotClass = 'slot-near-left';
  else if (slotPosition === 0) slotClass = 'slot-center-active';
  else if (slotPosition === 1) slotClass = 'slot-near-right';
  else if (slotPosition === 2) slotClass = 'slot-far-right';

  // Extract image URL from MongoDB document or direct string
  const imageUrl = typeof item === 'string' 
    ? item 
    : (item?.imageUrl || item?.image || item?.url || item?.src || item?.photo || '');

  const title = item?.title || item?.name || 'Mobile App Screen';
  const badge = item?.badge || item?.category || null;

  return (
    <div 
      className={`absolute top-0 left-0 w-[185px] h-[375px] sm:w-[215px] sm:h-[435px] md:w-[236px] md:h-[480px] preserve-3d cursor-pointer select-none transition-all duration-[850ms] [transition-timing-function:cubic-bezier(0.25,1,0.35,1)] will-change-transform ${slotClass} ${
        !isActive ? 'hover:brightness-100 hover:contrast-105 hover:opacity-100' : 'cursor-default'
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {/* Phone Hardware Chassis */}
      <div 
        className={`relative w-full h-full bg-black rounded-[34px] sm:rounded-[40px] md:rounded-[42px] overflow-hidden flex flex-col transition-all duration-500 ${
          isActive 
            ? 'shadow-[inset_0_0_0_2px_rgba(0,242,152,0.45),0_0_0_4px_#1d2524,0_0_0_6px_#0d1314,0_25px_65px_rgba(0,0,0,0.95),0_0_40px_rgba(0,242,152,0.25)]' 
            : 'shadow-[inset_0_0_0_2px_rgba(255,255,255,0.12),0_0_0_4px_#191b22,0_0_0_6px_#0d0f15,0_20px_50px_rgba(0,0,0,0.9)]'
        }`}
      >
        {/* Physical Side Buttons */}
        <div className="absolute -left-[7px] sm:-left-[8px] top-[75px] sm:top-[85px] w-[2.5px] sm:w-[3px] h-[30px] sm:h-[36px] bg-[#2b303d] rounded-l-sm z-10" />
        <div className="absolute -left-[7px] sm:-left-[8px] top-[115px] sm:top-[130px] w-[2.5px] sm:w-[3px] h-[30px] sm:h-[36px] bg-[#2b303d] rounded-l-sm z-10" />
        <div className="absolute -right-[7px] sm:-right-[8px] top-[95px] sm:top-[105px] w-[2.5px] sm:w-[3px] h-[38px] sm:h-[44px] bg-[#2b303d] rounded-r-sm z-10" />

        {/* Top Hardware Notch / Dynamic Island */}
        <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-[76px] sm:w-[86px] h-[15px] sm:h-[17px] bg-black rounded-xl z-50 flex items-center justify-center gap-1.5 shadow-sm">
          <div className="w-[26px] sm:w-[32px] h-[2.5px] sm:h-[3px] bg-[#18191c] rounded-full" />
          <div className="w-[5px] sm:w-[6px] h-[5px] sm:h-[6px] bg-[#0d1624] border border-[#1f2a3a] rounded-full" />
        </div>

        {/* Status Bar Floating Overlay */}
        <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-3.5 sm:px-4 pt-1.5 sm:pt-2 text-[9px] sm:text-[10px] font-semibold text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] pointer-events-none">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] tracking-widest">●●●</span>
            <span>5G</span>
            <span className="text-[9px] opacity-90">100%</span>
          </div>
        </div>

        {/* Phone Glass Glare Reflection Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-[34px] sm:rounded-[40px] md:rounded-[42px] z-[45]" />

        {/* Screen Display Area with Image */}
        <div className="relative w-full h-full bg-black overflow-hidden flex flex-col">
          {/* Shimmer loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#121826] to-[#07090e] animate-pulse flex items-center justify-center">
              <svg className="w-6 h-6 text-[#00f298]/40 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          )}

          {/* Actual Image */}
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          ) : (
            /* Fallback Card if image URL fails or is empty */
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#161f33] via-[#0d131f] to-black text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-3">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-white mb-1 truncate max-w-full px-2">{title}</p>
              <span className="text-[10px] text-slate-400">Image not loaded</span>
            </div>
          )}

          {/* Optional Title / Badge Pill at bottom of active card */}
          {badge && (
            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-40 pointer-events-none">
              <div className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-lg">
                <span className="text-[10px] sm:text-[11px] font-semibold text-white truncate max-w-[70%]">
                  {title}
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#00f298]/20 text-[#00f298] border border-[#00f298]/30">
                  {badge}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3D Floor Shadow & Active Glow */}
      <div className="pointer-events-none absolute -bottom-[16px] sm:-bottom-[20px] left-[5%] w-[90%] h-4 sm:h-5 bg-black/80 blur-md rounded-full -z-10 [transform:rotateX(85deg)]" />
      {isActive && (
        <div className="pointer-events-none absolute -bottom-[24px] sm:-bottom-[28px] left-[10%] w-[80%] h-7 sm:h-8 bg-[#00f298]/30 blur-xl rounded-full -z-10" />
      )}
    </div>
  );
}
