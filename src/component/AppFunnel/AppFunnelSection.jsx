import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { APPLE_HERO_56_CHICLETS } from '../../data/funnelData';
import SquircleCard from './SquircleCard';
import defoIcon from '../../image/favicon.png';
import playstore from '../../image/google-play-badge.svg';
import appstore from '../../image/app-store-badge.svg';
import GpIcon from '../../image/Google_Play-Icon-Logo.wine.svg';

export default function AppFunnelSection() {
  const sectionRef = useRef(null);

  // InView trigger with generous threshold
  const isInView = useInView(sectionRef, { amount: 0.12 });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasTriggered(true);
    }
  }, [isInView]);

  // Reset cascade when user scrolls back to the very top without firing every scroll tick
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 60) {
            setHasTriggered((prev) => (prev ? false : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="funnel-section"
      className="relative z-10 w-full overflow-hidden apple-funnel-bg transition-colors duration-500 pt-8 pb-20 sm:pt-14 sm:pb-28"
    >
      <style>{`
        /* Vibrant Multi-Color Light Mesh Background */
        .apple-funnel-bg {
          background: 
            radial-gradient(ellipse 70% 60% at 50% 12%, rgba(0, 242, 152, 0.22) 0%, transparent 68%),
            radial-gradient(ellipse 55% 50% at 8% 28%, rgba(56, 189, 248, 0.26) 0%, transparent 62%),
            radial-gradient(ellipse 55% 50% at 92% 28%, rgba(192, 132, 252, 0.26) 0%, transparent 62%),
            radial-gradient(ellipse 60% 50% at 50% 68%, rgba(251, 191, 36, 0.22) 0%, transparent 68%),
            radial-gradient(ellipse 50% 45% at 88% 78%, rgba(244, 114, 182, 0.22) 0%, transparent 62%),
            radial-gradient(ellipse 50% 45% at 12% 78%, rgba(52, 211, 153, 0.22) 0%, transparent 62%),
            linear-gradient(180deg, #ecfbf5 0%, #f0f7fe 28%, #f6f3ff 62%, #fff5f2 85%, #f1f5f9 100%);
        }

        /* Dark Mode: Deep Cosmic Tone with Neon Beams */
        html.dark .apple-funnel-bg,
        html[data-theme="dark"] .apple-funnel-bg {
          background: 
            radial-gradient(ellipse 70% 55% at 50% 20%, rgba(0, 242, 152, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 15% 35%, rgba(14, 165, 233, 0.18) 0%, transparent 65%),
            radial-gradient(ellipse 50% 45% at 85% 35%, rgba(147, 51, 234, 0.18) 0%, transparent 65%),
            #07090e;
        }

        /* Authentic Apple App Store 19-Column CSS Grid Specification */
        .apple-chiclets-grid {
          --chiclet-size: 96px;
          --chiclet-gap: 22px;
          display: grid;
          gap: var(--chiclet-gap);
          grid-template-rows: repeat(5, var(--chiclet-size));
          grid-template-columns: repeat(19, var(--chiclet-size));
          justify-content: center;
          align-content: start;
          position: relative;
          left: 50%;
          margin-left: calc(-0.5 * (19 * var(--chiclet-size) + 18 * var(--chiclet-gap)));
          width: calc(19 * var(--chiclet-size) + 18 * var(--chiclet-gap));
        }

        @media (max-width: 1536px) {
          .apple-chiclets-grid {
            --chiclet-size: 82px;
            --chiclet-gap: 18px;
          }
        }

        @media (max-width: 1280px) {
          .apple-chiclets-grid {
            --chiclet-size: 70px;
            --chiclet-gap: 15px;
          }
        }

        @media (max-width: 1024px) {
          .apple-chiclets-grid {
            --chiclet-size: 58px;
            --chiclet-gap: 12px;
          }
        }

        @media (max-width: 768px) {
          .apple-chiclets-grid {
            --chiclet-size: 46px;
            --chiclet-gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .apple-chiclets-grid {
            --chiclet-size: 38px;
            --chiclet-gap: 8px;
          }
        }
      `}</style>

      {/* =================================================================== */}
      {/* AMBIENT COLORFUL LIGHT AURORA BLOBS (LUMINOUS MULTI-COLOR ACCENTS)  */}
      {/* =================================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Center Emerald Brand Halo */}
        <div 
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[550px] sm:w-[900px] h-[450px] sm:h-[600px] rounded-full blur-[110px] sm:blur-[140px] opacity-70 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,242,152,0.45) 0%, rgba(52,211,153,0.25) 50%, transparent 75%)' }}
        />
        {/* Left Wing Sky Blue / Cyan Aura */}
        <div 
          className="absolute top-16 -left-20 sm:left-[2%] w-[450px] sm:w-[650px] h-[450px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[130px] opacity-75 dark:opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(14,165,233,0.22) 50%, transparent 75%)' }}
        />
        {/* Right Wing Violet / Magenta Aura */}
        <div 
          className="absolute top-16 -right-20 sm:right-[2%] w-[450px] sm:w-[650px] h-[450px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[130px] opacity-75 dark:opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.45) 0%, rgba(236,72,153,0.22) 50%, transparent 75%)' }}
        />
        {/* Bottom Apex Warm Peach / Golden Glow */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] sm:w-[750px] h-[350px] sm:h-[480px] rounded-full blur-[100px] sm:blur-[130px] opacity-65 dark:opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.38) 0%, rgba(249,115,22,0.22) 50%, transparent 75%)' }}
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

      {/* Top soft blend from Hero */}
      <div className="absolute top-0 inset-x-0 h-14 sm:h-18 bg-gradient-to-b from-black/25 via-black/5 to-transparent pointer-events-none z-20" />

      {/* Bottom soft blend: deep cosmic fade in dark mode, seamless continuous light gradient in light mode */}
      <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 hidden dark:block bg-gradient-to-t from-[#07090e] via-[#07090e]/70 to-transparent pointer-events-none z-20" />

      <div className="relative w-full flex flex-col items-center">

        {/* ================================================================= */}
        {/* 19-COLUMN V-FUNNEL CHICLETS GRID (APPLE APP STORE REPLICA)        */}
        {/* ================================================================= */}
        {/* Padding-top ensures offset cards (-63px) stay smoothly within frame */}
        <div 
          className="w-full overflow-hidden relative pt-16 sm:pt-20 pb-4"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          <div className="apple-chiclets-grid">
            {APPLE_HERO_56_CHICLETS.map((card) => {
              return (
                <div
                  key={card.id}
                  style={{
                    gridRow: card.row,
                    gridColumn: card.col,
                    marginTop: `calc(var(--chiclet-size) * ${card.offsetFactor})`,
                    width: 'var(--chiclet-size)',
                    height: 'var(--chiclet-size)',
                  }}
                  className="relative flex items-center justify-center select-none"
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -20,
                      scale: 0.9,
                    }}
                    animate={
                      hasTriggered
                        ? {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                            y: -20,
                            scale: 0.9,
                          }
                    }
                    transition={{
                      duration: 0.75,
                      delay: Math.min(card.delaySec, 0.75),
                      ease: [0.16, 1, 0.3, 1], // Apple HIG fluid spring easing
                    }}
                    className="w-full h-full"
                  >
                    <SquircleCard item={card} isVisible={hasTriggered} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* THE APEX: DEFO PLAY ICON CRADLED AT THE VERTEX OF THE V-FUNNEL     */}
        {/* =================================================================== */}
        {/* Negative top margin pulls Defo logo right into the cradle of Col 9 & 11 */}
        <div className="relative -mt-6 sm:-mt-10 md:-mt-12 flex flex-col items-center z-30">
          
          {/* Blooming ambient halo behind Defo app icon */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={
              hasTriggered
                ? {
                    scale: [0.3, 1.3, 1],
                    opacity: [0, 0.55, 0.28],
                  }
                : { scale: 0.3, opacity: 0 }
            }
            transition={{
              duration: 1.2,
              delay: 1.70,
              ease: 'easeOut',
            }}
            className="absolute -top-3 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#00f298] blur-[60px] pointer-events-none opacity-40"
          />

          {/* Grand Defo App Squircle Icon matching Apple App Store hero size (146px) */}
          <motion.div
            initial={{ scale: 0.35, y: -24, opacity: 0 }}
            animate={
              hasTriggered
                ? { scale: 1, y: 0, opacity: 1 }
                : { scale: 0.35, y: -24, opacity: 0 }
            }
            transition={{
              type: 'spring',
              stiffness: 240,
              damping: 18,
              delay: 1.70,
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
          >
            <div 
              className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-[22.5%] bg-gradient-to-br from-[#00f298] via-[#00d284] to-[#00a862] p-1 shadow-[0_20px_45px_rgba(0,242,152,0.38)] flex items-center justify-center overflow-hidden border border-white/50"
            >
              {/* Top specular reflection gloss (Apple squircle aesthetic) */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 via-white/15 to-transparent rounded-t-[22.5%] pointer-events-none" />
              
              {/* Defo Play Icon Logo */}
              <div className="relative z-10 w-18 h-18 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center drop-shadow-xl">
                <img
                  src={defoIcon}
                  alt="Defo App Icon"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
            </div>
          </motion.div>

          {/* Typography under Defo Icon matching Apple App Store eyebrow and title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={hasTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.65, delay: 1.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-4 px-4"
          >
            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight"
              style={{ fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Defo
            </h3>
            <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-[#00f298] mt-1 font-poppins">
              <span className="group/radium-funnel relative inline-block cursor-pointer">
                <span className="transition-all duration-300 group-hover/radium-funnel:text-white group-hover/radium-funnel:[text-shadow:0_0_2px_#00ff88,0_0_6px_#00f298]">
                  Information
                </span>
              </span>{' '}
              with Entertainment
            </p>
          </motion.div>

          {/* Action Badges & Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={hasTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.65, delay: 1.95, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center mt-3"
          >
            <div className="flex flex-col xs:flex-row items-center justify-center gap-2.5 sm:gap-3.5">
              {/* Google Play Store Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
                target="_blank"
                rel="noreferrer"
                className="transition-all hover:scale-105 shadow-md hover:shadow-[#00f298]/20"
              >
                <img
                  className="h-8 sm:h-9 w-auto"
                  src={playstore}
                  alt="Get Defo on Google Play Store"
                />
              </a>

              {/* Apple App Store Badge */}
              <a
                href="https://apple.com/app-store"
                target="_blank"
                rel="noreferrer"
                className="transition-all hover:scale-105 shadow-md hover:shadow-neutral-400/20"
              >
                <img
                  className="h-8 sm:h-9 w-auto"
                  src={appstore}
                  alt="Download Defo on Apple App Store"
                />
              </a>

              {/* Primary Direct Download Button */}
              <a
                href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="flex items-center gap-1.5 bg-black hover:bg-neutral-900 border border-white/20 hover:border-[#00f298]/50 px-3.5 py-1.5 rounded-xl transition-all hover:scale-105 shadow-lg cursor-pointer">
                  <img className="w-4 h-4" src={GpIcon} alt="Play store icon" />
                  <span className="text-white text-xs font-bold group-hover:text-[#00f298] transition-colors whitespace-nowrap">
                    Install App
                  </span>
                </div>
              </a>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-3 text-neutral-500 dark:text-neutral-400 text-xs font-poppins">
              <span className="flex items-center gap-1">
                <span className="text-emerald-500 dark:text-[#00f298] font-bold">✓</span> Free Download
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="text-emerald-500 dark:text-[#00f298] font-bold">✓</span> 100% Ad-Free
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="text-emerald-500 dark:text-[#00f298] font-bold">✓</span> 4.9★ Rated
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
