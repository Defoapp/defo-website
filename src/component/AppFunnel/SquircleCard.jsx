import React, { useState, memo } from 'react';
import SquircleIcon from './SquircleIcons';

function SquircleCard({
  item,
  isDimmed = false,
  isHighlighted = false,
  isVisible = true,
  onCardClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group select-none w-full aspect-square flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick && onCardClick(item)}
    >
      {/* =================================================================== */}
      {/* SQUIRCLE BODY (AUTHENTIC CONTINUOUS APPLE CURVATURE)                */}
      {/* =================================================================== */}
      <div
        className={`w-full h-full transition-transform duration-300 ease-out cursor-pointer ${
          isDimmed ? 'opacity-25 grayscale-[60%] scale-95' : 'opacity-100'
        } ${isHighlighted ? 'scale-110' : ''}`}
      >
        <div
          className={`relative w-full h-full rounded-[22.5%] ${item.bgClass || 'bg-white'} border ${
            item.borderColor || 'border-black/[0.08] dark:border-white/[0.12]'
          } flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            isHovered
              ? 'scale-110 -translate-y-2 z-40 shadow-2xl ring-2 ring-white/60 dark:ring-white/30'
              : 'hover:scale-105'
          }`}
          style={{
            boxShadow: isHovered
              ? `0 20px 35px -8px ${item.shadowColor || 'rgba(0,0,0,0.35)'}, 0 8px 16px -4px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.7)`
              : `0 4px 14px -2px rgba(0,0,0,0.1), 0 2px 6px -1px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.4)`,
          }}
        >
          {/* Top Specular Gloss Highlight (Apple Glass / Gloss effect) */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-t-[22.5%] pointer-events-none" />

          {/* Inner ambient glow reflection on hover */}
          <div
            className={`absolute inset-0 bg-white/15 transition-opacity duration-200 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Branded Graphic Center - 70-75% scale matching authentic iOS home screen */}
          <div className="relative z-10 w-[72%] h-[72%] flex items-center justify-center drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
            <SquircleIcon
              type={item.iconType}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SquircleCard);
