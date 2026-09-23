import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import PhoneMockup from './PhoneMockup';
import { MOCK_MONGODB_DATA } from '../../data/screensData';

export default function RotatingShowcase({ 
  items, 
  images, 
  onActiveChange,
  initialSpeed = 2000 // 2 seconds default auto-rotation
}) {
  // Normalize items from MongoDB documents or URL array
  const displayItems = useMemo(() => {
    const raw = items || images || MOCK_MONGODB_DATA;
    if (!Array.isArray(raw) || raw.length === 0) return MOCK_MONGODB_DATA;

    return raw.map((item, idx) => {
      if (typeof item === 'string') {
        return {
          _id: `img-${idx}`,
          imageUrl: item,
          title: `Image ${idx + 1}`,
        };
      }
      return {
        _id: item._id || item.id || `doc-${idx}`,
        imageUrl: item.imageUrl || item.image || item.url || item.src || '',
        title: item.title || item.name || `Screen ${idx + 1}`,
        ...item,
      };
    });
  }, [items, images]);

  const total = displayItems.length;

  // Center screen by default (middle or index 0)
  const [activeIndex, setActiveIndex] = useState(() => Math.min(2, Math.max(0, Math.floor(total / 2))));
  const [rotationSpeed] = useState(initialSpeed);
  const [direction] = useState(1); // 1: next, -1: prev
  const [isHovered, setIsHovered] = useState(false);

  const progressStartTimeRef = useRef(Date.now());
  const animationFrameRef = useRef(null);

  // Touch gesture state for mobile swiping
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Notify parent whenever active item changes
  useEffect(() => {
    if (onActiveChange && displayItems[activeIndex]) {
      onActiveChange(displayItems[activeIndex], activeIndex);
    }
  }, [activeIndex, displayItems, onActiveChange]);

  // Navigate next / prev
  const handleNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
    progressStartTimeRef.current = Date.now();
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
    progressStartTimeRef.current = Date.now();
  }, [total]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    progressStartTimeRef.current = Date.now();
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Automatic smooth 2-second rotation loop
  useEffect(() => {
    if (isHovered || total <= 1) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const checkAutoRotate = () => {
      const now = Date.now();
      const elapsed = now - progressStartTimeRef.current;

      if (elapsed >= rotationSpeed) {
        if (direction === 1) {
          handleNext();
        } else {
          handlePrev();
        }
        progressStartTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(checkAutoRotate);
    };

    animationFrameRef.current = requestAnimationFrame(checkAutoRotate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHovered, rotationSpeed, direction, total, handleNext, handlePrev]);

  // Compute 3D slot relative to activeIndex
  const getSlotPosition = (index) => {
    let diff = index - activeIndex;
    let offset = ((diff % total) + total) % total;
    if (offset > total / 2) {
      offset -= total;
    }
    return offset;
  };

  return (
    <div 
      className="relative flex flex-col items-center w-full max-w-5xl mx-auto py-2 select-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Perspective Stage Viewport */}
      <div className="relative w-full h-[400px] sm:h-[460px] md:h-[520px] perspective-1000 md:perspective-1400 flex items-center justify-center">
        {/* Soft focal ambient lighting */}
        <div className="pointer-events-none absolute top-[10%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[380px] md:w-[440px] h-[280px] sm:h-[340px] bg-emerald-500/15 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 w-[320px] sm:w-[540px] md:w-[720px] h-12 sm:h-14 bg-emerald-500/10 blur-2xl z-0" />

        {/* Carousel Rail with responsive widths */}
        <div className="relative w-[185px] h-[375px] sm:w-[215px] sm:h-[435px] md:w-[236px] md:h-[480px] preserve-3d flex items-center justify-center">
          {displayItems.map((item, index) => {
            const slotPos = getSlotPosition(index);
            return (
              <PhoneMockup
                key={item._id || index}
                item={item}
                slotPosition={slotPos}
                isActive={slotPos === 0}
                onClick={() => handleSelect(index)}
              />
            );
          })}
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="flex items-center gap-2 mt-4 z-20">
        {displayItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex
                ? 'w-7 h-2 bg-[#00f298] shadow-[0_0_10px_rgba(0,242,152,0.6)]'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
