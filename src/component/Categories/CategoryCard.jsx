import React, { useState, useRef } from 'react';
import CategoryIcon from './CategoryIcons';

export default function CategoryCard({ item, index = 0 }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, isHovered: false });

  // Smooth 3D card tilt on cursor movement
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Gentle 10-degree tilt for subtle, tactile 3D responsiveness
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="group relative h-full flex flex-col cursor-pointer select-none transition-all duration-300 active:scale-[0.98]"
    >
      {/* 3D Transform Card Container - Clean, Crisp White with Natural Depth */}
      <div
        className="relative flex-1 flex flex-col items-center text-center p-5 sm:p-7 lg:p-8 rounded-3xl transition-all duration-300 ease-out preserve-3d bg-white"
        style={{
          transform: tilt.isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-8px) scale(1.02)`
            : 'rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
          boxShadow: tilt.isHovered
            ? '0 25px 45px -12px rgba(15, 23, 42, 0.14), 0 2px 6px rgba(0, 0, 0, 0.04)'
            : '0 8px 24px -8px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(0, 0, 0, 0.03)',
          border: tilt.isHovered
            ? '1.5px solid rgba(203, 213, 225, 0.9)'
            : '1.5px solid rgba(241, 245, 249, 1)',
        }}
      >
        {/* Big Interactive Vector Image - Sharp, Crisp, Fully Saturated & Elevated */}
        <div
          className="relative my-2 sm:my-3 preserve-3d flex items-center justify-center transition-transform duration-300"
          style={{
            transform: tilt.isHovered ? 'translateZ(40px) scale(1.08)' : 'translateZ(15px) scale(1)',
            filter: tilt.isHovered ? 'drop-shadow(0 10px 18px rgba(0,0,0,0.12))' : 'none',
          }}
        >
          <CategoryIcon 
            type={item.iconType} 
            isHovered={tilt.isHovered} 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" 
          />
        </div>

        {/* Title - Crisp, High-Contrast Dark Navy matching screenshot */}
        <h3
          className="text-lg sm:text-xl font-bold tracking-tight text-[#191e38] group-hover:text-black mb-2.5 transition-colors duration-200 preserve-3d"
          style={{
            fontFamily: 'Outfit, var(--font-display), sans-serif',
            transform: tilt.isHovered ? 'translateZ(26px)' : 'translateZ(10px)',
          }}
        >
          {item.title}
        </h3>

        {/* Description - Clean, readable neutral text matching screenshot */}
        <p
          className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-700 leading-relaxed font-normal max-w-[260px] preserve-3d transition-colors duration-200"
          style={{ transform: tilt.isHovered ? 'translateZ(18px)' : 'translateZ(5px)' }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
