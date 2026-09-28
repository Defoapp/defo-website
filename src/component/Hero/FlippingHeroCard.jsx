import React, { useState, useEffect } from 'react';

// Curated high-res backface metadata for each category
const BACKFACE_INFO = {
  yoga: {
    backImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    badge: "Mindful Flow",
    stat: "Episode 08 • 4.9★",
    accent: "#3ECF7A",
  },
  cooking: {
    backImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    badge: "Master Chef",
    stat: "24 Recipes • 4.8★",
    accent: "#f97316",
  },
  coding: {
    backImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    badge: "Full-Stack AI",
    stat: "Live Class • 5.0★",
    accent: "#00f6ff",
  },
  magic: {
    backImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    badge: "Illusion Secrets",
    stat: "Exclusive • 4.9★",
    accent: "#a855f7",
  },
  dance: {
    backImage: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=600&q=80",
    badge: "Choreography",
    stat: "Pro Level • 4.9★",
    accent: "#fbbf24",
  },
  hairstyle: {
    backImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    badge: "Salon Styling",
    stat: "15 Techniques • 4.7★",
    accent: "#ec4899",
  },
  business: {
    backImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    badge: "Executive Strategy",
    stat: "Case Studies • 4.9★",
    accent: "#38bdf8",
  },
  photo: {
    backImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80",
    badge: "Pro Lighting",
    stat: "4K Masterclass • 4.8★",
    accent: "#00f298",
  },
  painting: {
    backImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    badge: "Canvas Studio",
    stat: "Watercolor • 4.9★",
    accent: "#f43f5e",
  },
};

export default function FlippingHeroCard({ card, cardIdx, colIdx }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Derive category key from title or id
  const lowerTitle = (card.title || '').toLowerCase();
  const lowerId = (card.id || '').toLowerCase();
  let key = 'yoga';
  if (lowerTitle.includes('cook') || lowerId.includes('cook')) key = 'cooking';
  else if (lowerTitle.includes('cod') || lowerId.includes('cod')) key = 'coding';
  else if (lowerTitle.includes('mag') || lowerId.includes('mag')) key = 'magic';
  else if (lowerTitle.includes('dan') || lowerId.includes('dan')) key = 'dance';
  else if (lowerTitle.includes('hair') || lowerId.includes('hair')) key = 'hairstyle';
  else if (lowerTitle.includes('bus') || lowerId.includes('bus')) key = 'business';
  else if (lowerTitle.includes('photo') || lowerId.includes('photo')) key = 'photo';
  else if (lowerTitle.includes('paint') || lowerId.includes('paint')) key = 'painting';

  const backInfo = BACKFACE_INFO[key] || BACKFACE_INFO.yoga;
  const backImage = card.backImageUrl || backInfo.backImage;

  // Alternate horizontal (Y) and vertical (X) flip axis based on column & card index
  const flipAxis = (colIdx + cardIdx) % 3 === 0 ? 'X' : 'Y';

  useEffect(() => {
    // Generate organic randomized delay and durations per card
    // Stagger initial flips so cards across columns flip at different moments
    const initialDelay = 1500 + Math.random() * 9000;
    const flipDuration = 3000 + Math.random() * 2500; // Stay flipped for 3s - 5.5s
    const idlePeriod = 7000 + Math.random() * 9000;  // Stay normal for 7s - 16s

    let flipTimer;
    let cycleInterval;

    const executeFlip = () => {
      setIsFlipped(true);
      flipTimer = setTimeout(() => {
        setIsFlipped(false);
      }, flipDuration);
    };

    const starterTimer = setTimeout(() => {
      executeFlip();
      cycleInterval = setInterval(executeFlip, flipDuration + idlePeriod);
    }, initialDelay);

    return () => {
      clearTimeout(starterTimer);
      clearTimeout(flipTimer);
      if (cycleInterval) clearInterval(cycleInterval);
    };
  }, []);

  // Compute 3D rotation transform string with physical forward depth pop
  const flipTransform = isFlipped
    ? flipAxis === 'X'
      ? 'rotateX(180deg) translateZ(28px) scale(1.03)'
      : 'rotateY(180deg) translateZ(28px) scale(1.03)'
    : 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';

  return (
    <div
      style={{
        height: `${card.height}px`,
        perspective: '1400px',
        zIndex: isFlipped ? 25 : 1,
      }}
      className="relative w-full rounded-2xl shrink-0 select-none transition-all duration-500"
    >
      {/* 3D Flippable Inner Container */}
      <div
        style={{
          transform: flipTransform,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease',
        }}
        className={`relative w-full h-full rounded-2xl transition-all duration-500 shadow-2xl ${
          isFlipped
            ? 'border-2 border-[#3ECF7A] shadow-[0_15px_40px_rgba(62,207,122,0.45)]'
            : 'border border-white/10 hover:border-white/20'
        }`}
      >
        {/* ============================================================== */}
        {/* FRONT FACE                                                     */}
        {/* ============================================================== */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-[#0c101c]"
        >
          {/* Main Image */}
          <img
            src={card.imageUrl}
            alt={card.title}
            loading="lazy"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] transition-transform duration-700"
          />

          {/* Front gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          {/* Stylized Category Title matching Figma reference */}
          <div className="absolute bottom-3 left-3 right-3">
            <span className={`block drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${card.fontStyle}`}>
              {card.title}
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BACK FACE (3D FLIPPED)                                         */}
        {/* ============================================================== */}
        <div
          style={{
            transform: flipAxis === 'X' ? 'rotateX(180deg)' : 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-[#070b14] flex flex-col justify-between p-4"
        >
          {/* Alternate Back Image with soft blur vignette */}
          <img
            src={backImage}
            alt={`${card.title} preview`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15]"
          />

          {/* Ambient Glow Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 pointer-events-none" />

          {/* Top Tag: Defo Original / Live Indicator */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-[#3ECF7A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF7A] animate-ping" />
              Defo 3D
            </span>
            <span className="text-[10px] font-bold text-white/80 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-md">
              4K HDR
            </span>
          </div>

          {/* Center: Glowing Play Icon */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center">
            <div 
              className="w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110"
              style={{
                backgroundColor: `${backInfo.accent}25`,
                border: `1.5px solid ${backInfo.accent}80`,
                boxShadow: `0 0 20px ${backInfo.accent}40`
              }}
            >
              <svg className="w-5 h-5 text-white ml-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-white mt-2 drop-shadow-md tracking-wide">
              {backInfo.badge}
            </span>
          </div>

          {/* Bottom: Title & Stats */}
          <div className="relative z-10 pt-2 border-t border-white/15">
            <div className="flex items-center justify-between">
              <span 
                className="text-sm font-extrabold text-white truncate drop-shadow-md capitalize"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {card.title}
              </span>
              <span className="text-[10px] font-semibold text-[#00f6ff] shrink-0 ml-1">
                {backInfo.stat}
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
