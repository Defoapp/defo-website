import React, { useRef, useState, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import tick from '../../image/price_box/Vector.svg';

function PricingCard({ priceItem, index = 0 }) {
  const cardRef = useRef(null);
  const cardRectRef = useRef(null);
  const rafIdRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.15 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, isHovered: false });

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  // Smooth RAF-throttled 3D tactile tilt on hover
  const handleMouseMove = (e) => {
    if (rafIdRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;
      if (!cardRectRef.current && cardRef.current) {
        cardRectRef.current = cardRef.current.getBoundingClientRect();
      }
      if (!cardRectRef.current) return;
      const rect = cardRectRef.current;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      setTilt({
        rotateX: Math.round(rotateX * 10) / 10,
        rotateY: Math.round(rotateY * 10) / 10,
        isHovered: true,
      });
    });
  };

  const handleMouseLeave = () => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    cardRectRef.current = null;
    setTilt({ rotateX: 0, rotateY: 0, isHovered: false });
  };

  const isPopular = index === 1; // Middle card (₹99 plan) is highlighted

  const specsList = Array.isArray(priceItem.specs) && priceItem.specs.length > 0
    ? priceItem.specs
    : [priceItem.spec1, priceItem.spec2, priceItem.spec3, priceItem.spec4].filter(Boolean);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className="relative w-full max-w-[21rem] select-none mx-auto flex flex-col"
    >
      {/* Floating Popular Badge */}
      {isPopular && (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.85 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -16, scale: 0.85 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.25, ease: 'easeOut' }}
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="relative px-4 py-1 rounded-full bg-gradient-to-r from-[#00f298] to-[#00c978] text-[#07090e] font-black text-xs tracking-wider uppercase shadow-[0_8px_20px_rgba(0,242,152,0.4)] flex items-center gap-1.5 border border-white/40">
            <span className="text-[10px] animate-pulse">★</span>
            <span>Most Popular</span>
          </div>
        </motion.div>
      )}

      {/* Main Entrance Animated Container */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.94 }}
        animate={
          isInView
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 50, opacity: 0, scale: 0.94 }
        }
        transition={{
          duration: 0.7,
          delay: index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex-1 flex flex-col"
      >
        {/* Interactive 3D Card Container */}
        <div
          style={{
            transform: tilt.isHovered
              ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-8px) scale(1.02)`
              : 'rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
            boxShadow: isPopular
              ? tilt.isHovered
                ? '0 30px 60px -12px rgba(0, 242, 152, 0.3), 0 10px 25px rgba(15, 23, 42, 0.12)'
                : '0 20px 45px -10px rgba(0, 242, 152, 0.22), 0 6px 18px rgba(15, 23, 42, 0.08)'
              : tilt.isHovered
                ? '0 30px 60px -12px rgba(15, 23, 42, 0.25), 0 8px 20px rgba(0, 0, 0, 0.08)'
                : '0 16px 36px -10px rgba(15, 23, 42, 0.15), 0 4px 12px rgba(0, 0, 0, 0.04)',
          }}
          className={`relative flex-1 bg-white rounded-3xl p-7 text-center flex flex-col justify-between transition-[transform,box-shadow] duration-200 ease-out border ${
            isPopular
              ? 'border-[#00f298]/80 ring-2 ring-[#00f298]/20'
              : 'border-slate-100 hover:border-slate-200'
          } min-h-[27rem]`}
        >
        {/* Subtle top ambient corner glow */}
        <div
          className={`absolute top-0 left-0 right-0 h-32 rounded-t-3xl pointer-events-none transition-opacity duration-300 ${
            isPopular
              ? 'bg-gradient-to-b from-[#00f298]/10 to-transparent opacity-100'
              : 'bg-gradient-to-b from-slate-100/60 to-transparent opacity-60'
          }`}
        />

        {/* Card Header & Features */}
        <div className="relative z-10">
          {/* Price Header with animated entrance */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.1, ease: 'easeOut' }}
            className="mt-2"
          >
            <h3 className="font-poppins text-gray-900 tracking-tight flex items-baseline justify-center">
              <span className="font-extrabold text-4xl sm:text-5xl">{priceItem.rate}</span>
            </h3>

            {/* Validity Pill */}
            <div className="mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
              <span>{priceItem.valid}</span>
            </div>
          </motion.div>

          <hr className="w-5/6 mx-auto my-5 border-slate-100" />

          {/* Staggered Features List */}
          <ul className="text-left flex flex-col gap-y-3.5 font-poppins text-slate-600 px-3">
            {specsList.map((spec, sIdx) => (
              <motion.li
                key={sIdx}
                initial={{ x: -16, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.15 + sIdx * 0.08 + 0.22,
                  ease: 'easeOut',
                }}
                className="flex items-center text-sm font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center mr-3 shrink-0">
                  <img src={tick} alt="check" className="w-3.5 h-3.5 object-contain" />
                </div>
                <span className="text-slate-700">{spec}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ================================================================ */}
        {/* "GET STARTED" BUTTON — EMERGES FROM DOWN ON SCROLL WITH SPRING   */}
        {/* ================================================================ */}
        <div className="relative z-10 mt-7 pt-2 overflow-hidden">
          <motion.div
            initial={{ y: 70, opacity: 0, scale: 0.88 }}
            animate={
              isInView
                ? { y: 0, opacity: 1, scale: 1 }
                : { y: 70, opacity: 0, scale: 0.88 }
            }
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 14,
              mass: 0.8,
              delay: index * 0.16 + 0.32, // Rises from down right after the card settles
            }}
            className="w-full"
          >
            <a
              href="https://play.google.com/store/apps/details?id=dev.lowpow.defo"
              target="_blank"
              rel="noreferrer"
              className="block group cursor-pointer"
            >
              <div
                className={`relative overflow-hidden w-full py-3.5 px-6 rounded-2xl font-bold text-base tracking-wide flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.97] ${
                  isPopular
                    ? 'bg-gradient-to-r from-[#00f298] via-[#00e28d] to-[#00c978] text-slate-950 shadow-[0_10px_25px_rgba(0,242,152,0.42)] group-hover:shadow-[0_16px_35px_rgba(0,242,152,0.6)] group-hover:scale-[1.03]'
                    : 'bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white shadow-[0_10px_22px_rgba(34,197,94,0.32)] group-hover:from-[#16a34a] group-hover:to-[#15803d] group-hover:shadow-[0_14px_30px_rgba(34,197,94,0.45)] group-hover:scale-[1.03]'
                }`}
              >
                {/* Diagonal Light Sweep Shine on Reveal & Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform pointer-events-none" />

                <span className="relative z-10">Get Started</span>

                {/* Arrow slide animation on hover */}
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>

        </div>
      </motion.div>
    </div>
  );
}

export default memo(PricingCard);
