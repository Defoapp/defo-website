import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { APPLE_HERO_56_CHICLETS } from '../../data/funnelData';
import SquircleCard from './SquircleCard';
import defoIcon from '../../image/favicon.png';
import playstore from '../../image/google-play-badge.svg';
import appstore from '../../image/app-store-badge.svg';
import AmbientDecorations from '../Common/AmbientDecorations';

export default function AppFunnelSection() {
  const sectionRef = useRef(null);

  // Trigger early so cards and Defo apex are already entering before scroll finishes
  const isInView = useInView(sectionRef, { amount: 0, margin: "140px 0px 0px 0px", once: true });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasTriggered(true);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="funnel-section"
      className="relative z-10 w-full overflow-hidden apple-funnel-bg transition-colors duration-500 pb-20 sm:pb-28"
    >
      <style>{`
        /* Clean, Luminous Multi-Color Light Mesh Background for Light Mode */
        .apple-funnel-bg {
          background: 
            radial-gradient(ellipse 70% 55% at 50% 15%, rgba(0, 242, 152, 0.16) 0%, transparent 68%),
            radial-gradient(ellipse 55% 50% at 10% 30%, rgba(56, 189, 248, 0.16) 0%, transparent 62%),
            radial-gradient(ellipse 55% 50% at 90% 30%, rgba(192, 132, 252, 0.16) 0%, transparent 62%),
            radial-gradient(ellipse 60% 50% at 50% 65%, rgba(251, 191, 36, 0.14) 0%, transparent 68%),
            radial-gradient(ellipse 50% 45% at 88% 85%, rgba(244, 114, 182, 0.14) 0%, transparent 62%),
            radial-gradient(ellipse 50% 45% at 12% 85%, rgba(52, 211, 153, 0.14) 0%, transparent 62%),
            linear-gradient(180deg, #0a0d14 0%, #111a24 3%, #eefbf4 10%, #f0f7fe 35%, #f6f3ff 65%, #fdf2f8 85%, #edf4fc 100%);
        }

        /* Dark Mode: Deep Cosmic Tone with Neon Beams */
        html.dark .apple-funnel-bg,
        html[data-theme="dark"] .apple-funnel-bg {
          background: 
            radial-gradient(ellipse 70% 55% at 50% 20%, rgba(0, 242, 152, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 15% 35%, rgba(14, 165, 233, 0.18) 0%, transparent 65%),
            radial-gradient(ellipse 50% 45% at 85% 35%, rgba(147, 51, 234, 0.18) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 50% 75%, rgba(251, 191, 36, 0.15) 0%, transparent 70%),
            #07090e;
        }

        /* Authentic Apple App Store 19-Column CSS Grid Specification */
        .apple-chiclets-grid {
          --chiclet-size: 86px;
          --chiclet-gap: 20px;
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
            --chiclet-size: 74px;
            --chiclet-gap: 16px;
          }
        }

        @media (max-width: 1280px) {
          .apple-chiclets-grid {
            --chiclet-size: 63px;
            --chiclet-gap: 14px;
          }
        }

        @media (max-width: 1024px) {
          .apple-chiclets-grid {
            --chiclet-size: 52px;
            --chiclet-gap: 11px;
          }
        }

        @media (max-width: 768px) {
          .apple-chiclets-grid {
            --chiclet-size: 41px;
            --chiclet-gap: 9px;
          }
        }

        @media (max-width: 480px) {
          .apple-chiclets-grid {
            --chiclet-size: 34px;
            --chiclet-gap: 7px;
          }
        }
      `}</style>

      {/* =================================================================== */}
      {/* AMBIENT COLORFUL LIGHT AURORA BLOBS (LUMINOUS MULTI-COLOR ACCENTS)  */}
      {/* =================================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Center Emerald Brand Halo */}
        <div 
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[550px] sm:w-[900px] h-[450px] sm:h-[600px] rounded-full blur-[64px] sm:blur-[72px] opacity-70 dark:opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,242,152,0.45) 0%, rgba(52,211,153,0.25) 50%, transparent 75%)', transform: 'translateZ(0)' }}
        />
        {/* Left Wing Sky Blue / Cyan Aura */}
        <div 
          className="absolute top-16 -left-20 sm:left-[2%] w-[450px] sm:w-[650px] h-[450px] sm:h-[600px] rounded-full blur-[60px] sm:blur-[70px] opacity-75 dark:opacity-35 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(14,165,233,0.22) 50%, transparent 75%)', transform: 'translateZ(0)' }}
        />
        {/* Right Wing Violet / Magenta Aura */}
        <div 
          className="absolute top-16 -right-20 sm:right-[2%] w-[450px] sm:w-[650px] h-[450px] sm:h-[600px] rounded-full blur-[60px] sm:blur-[70px] opacity-75 dark:opacity-35 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.45) 0%, rgba(236,72,153,0.22) 50%, transparent 75%)', transform: 'translateZ(0)' }}
        />
        {/* Bottom Apex Warm Peach / Golden Glow */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] sm:w-[750px] h-[350px] sm:h-[480px] rounded-full blur-[60px] sm:blur-[70px] opacity-65 dark:opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.38) 0%, rgba(249,115,22,0.22) 50%, transparent 75%)', transform: 'translateZ(0)' }}
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
      <AmbientDecorations variant="funnel" />

      {/* Deep Atmospheric Seamless Blend directly from Hero #0a0d14 in Dark Mode */}
      <div 
        className="absolute top-0 inset-x-0 h-28 sm:h-40 pointer-events-none z-25 hidden dark:block"
        style={{
          background: 'linear-gradient(180deg, #0a0d14 0%, rgba(10, 13, 20, 0.75) 50%, transparent 100%)'
        }}
      />


      {/* Bottom soft blend: deep cosmic fade in dark mode, seamless continuous light gradient in light mode */}
      <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 hidden dark:block bg-gradient-to-t from-[#07090e] via-[#07090e]/70 to-transparent pointer-events-none z-20" />

      <div className="relative z-20 w-full flex flex-col items-center pt-8 sm:pt-14">

        {/* ================================================================= */}
        {/* 19-COLUMN V-FUNNEL CHICLETS GRID (APPLE APP STORE REPLICA)        */}
        {/* ================================================================= */}
        {/* Padding-top ensures offset cards stay smoothly within frame */}
        <div className="w-full overflow-hidden relative pt-10 sm:pt-14 pb-4">
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
                      y: -14,
                      scale: 0.94,
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
                            y: -14,
                            scale: 0.94,
                          }
                    }
                    transition={{
                      duration: 0.38,
                      delay: Math.min(card.delaySec * 0.18, 0.22),
                      ease: [0.16, 1, 0.3, 1], // Apple HIG fluid spring easing
                    }}
                    style={{
                      transform: 'translateZ(0)',
                      willChange: hasTriggered ? 'auto' : 'transform, opacity',
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
            initial={{ scale: 0.4, opacity: 0 }}
            animate={
              hasTriggered
                ? {
                    scale: [0.4, 1.15, 1],
                    opacity: [0, 0.55, 0.28],
                  }
                : { scale: 0.4, opacity: 0 }
            }
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: 'easeOut',
            }}
            className="absolute -top-3 w-44 sm:w-56 h-44 sm:h-56 rounded-full bg-[#00f298] blur-[45px] pointer-events-none opacity-35"
          />

          {/* Grand Defo App Squircle Icon matching Apple App Store hero size (10% reduced to 128px) */}
          <motion.div
            initial={{ scale: 0.7, y: -16, opacity: 0 }}
            animate={
              hasTriggered
                ? { scale: 1, y: 0, opacity: 1 }
                : { scale: 0.7, y: -16, opacity: 0 }
            }
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 20,
              delay: 0.06,
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{ transform: 'translateZ(0)' }}
            className="relative group cursor-pointer"
          >
            <div 
              className="relative w-[86px] h-[86px] xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-[22.5%] bg-gradient-to-br from-[#00f298] via-[#00d284] to-[#00a862] p-1 shadow-[0_20px_45px_rgba(0,242,152,0.38)] flex items-center justify-center overflow-hidden border border-white/50"
            >
              {/* Top specular reflection gloss (Apple squircle aesthetic) */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 via-white/15 to-transparent rounded-t-[22.5%] pointer-events-none" />
              
              {/* Defo Play Icon Logo */}
              <div className="relative z-10 w-14 h-14 xs:w-16 xs:h-16 sm:w-[72px] sm:h-[72px] md:w-[86px] md:h-[86px] flex items-center justify-center drop-shadow-xl">
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
            initial={{ opacity: 0, y: 12 }}
            animate={hasTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.38, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Action Badges: Google Play & App Store */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={hasTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.38, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center mt-3"
          >
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
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
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
