import React, { useEffect, useRef } from 'react';
import CuteCursorParticles from './CuteCursorParticles';

/**
 * AmbientDecorations
 * Lightweight, colorful, cute floating ambient design elements (sparkle stars ✨, glowing bubbles 🫧, 
 * hearts ♡, subtle plus crosses, and bokeh fireflies).
 * Combined with an interactive CuteCursorParticles canvas for mouse tracking, dynamic trail,
 * and cursor repulsion.
 * Strictly rendered in the background layer (z-0) with ZERO backdrop-blur, so they
 * never shade, blur, or obscure any icons or content.
 *
 * @param {'funnel' | 'showcase' | 'categories' | 'hero'} variant - Layout preset for the section
 * @param {string} className - Optional container styling
 */
export default function AmbientDecorations({ variant = 'funnel', className = '' }) {
  const containerRef = useRef(null);

  // Smooth mouse-tracking parallax with spring damping via CSS variables
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parent = container.parentElement;
    if (!parent) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId = null;
    let isTracking = false;

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      // Normalize mouse position from -1 to +1
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (!isTracking) {
        isTracking = true;
        render();
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const render = () => {
      // Smooth interpolation (lerp factor 0.08)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      container.style.setProperty('--mouse-x', currentX.toFixed(4));
      container.style.setProperty('--mouse-y', currentY.toFixed(4));

      // Stop loop when close to target to save battery/GPU
      if (
        Math.abs(targetX - currentX) > 0.001 ||
        Math.abs(targetY - currentY) > 0.001 ||
        targetX !== 0 ||
        targetY !== 0
      ) {
        animId = requestAnimationFrame(render);
      } else {
        isTracking = false;
      }
    };

    parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      style={{
        '--mouse-x': 0,
        '--mouse-y': 0,
      }}
    >
      {/* Interactive Cursor Particle Canvas (Swirling, Moving, Fairy Dust Trail & Burst) */}
      <CuteCursorParticles variant={variant} density="high" />

      <style>{`
        /* ========================================================== */
        /* CRISP, DELICATE FLOATING & TWINKLING KEYFRAMES (NO BLURS)  */
        /* ========================================================== */
        @keyframes ambientSparkleTwinkle {
          0%, 100% {
            transform: scale(0.7) rotate(0deg);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.95;
          }
        }

        @keyframes ambientFloatBokeh {
          0% {
            transform: translate3d(0, 0, 0) scale(0.85);
            opacity: 0.35;
          }
          50% {
            transform: translate3d(5px, -14px, 0) scale(1.15);
            opacity: 0.85;
          }
          100% {
            transform: translate3d(-4px, -26px, 0) scale(0.8);
            opacity: 0.25;
          }
        }

        @keyframes ambientPulseGlow {
          0%, 100% {
            transform: scale(0.88);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.85;
          }
        }

        @keyframes cuteBubbleFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(4px, -8px, 0) scale(1.08);
          }
          66% {
            transform: translate3d(-3px, -15px, 0) scale(0.95);
          }
        }

        @keyframes cuteHeartFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-4deg) scale(0.9);
            opacity: 0.45;
          }
          50% {
            transform: translate3d(3px, -12px, 0) rotate(5deg) scale(1.12);
            opacity: 0.85;
          }
        }

        .ambient-item {
          will-change: transform;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* ============================================================== */}
      {/* SECTION PRESET 1: FUNNEL SECTION                               */}
      {/* ============================================================== */}
      {variant === 'funnel' && (
        <>
          {/* --- LEFT OUTER PERIMETER ACCENTS --- */}
          {/* Emerald Sparkle Star ✨ (Far Left Top) */}
          <div
            className="absolute ambient-item"
            style={{
              left: '2.5%',
              top: '18%',
              transform: 'translate3d(calc(var(--mouse-x) * 16px), calc(var(--mouse-y) * 14px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-emerald-400 dark:text-[#00f298] drop-shadow-[0_0_8px_rgba(0,242,152,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 4.5s ease-in-out infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Cute Glass Bubble 🫧 (Left Upper) */}
          <div
            className="absolute ambient-item"
            style={{
              left: '7%',
              top: '28%',
              transform: 'translate3d(calc(var(--mouse-x) * 12px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="relative w-4 h-4 rounded-full border border-sky-400/60 bg-sky-300/25 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              style={{ animation: 'cuteBubbleFloat 6s ease-in-out infinite' }}
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/90" />
            </div>
          </div>

          {/* Cyan Sparkle Star ✨ (Far Left Mid) */}
          <div
            className="absolute ambient-item"
            style={{
              left: '3.5%',
              top: '48%',
              transform: 'translate3d(calc(var(--mouse-x) * 14px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 5.8s ease-in-out 1.2s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Cute Pastel Pink Heart ♡ (Mid Left) */}
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              left: '9%',
              top: '58%',
              transform: 'translate3d(calc(var(--mouse-x) * 10px), calc(var(--mouse-y) * 8px), 0)',
            }}
          >
            <div
              className="w-3.5 h-3.5 text-pink-400 drop-shadow-[0_0_6px_rgba(244,114,182,0.6)]"
              style={{ animation: 'cuteHeartFloat 6.5s ease-in-out 0.8s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Minimalist Cyan Plus (+) */}
          <div
            className="absolute ambient-item hidden sm:block opacity-60 dark:opacity-40"
            style={{
              left: '5%',
              top: '36%',
              transform: 'translate3d(calc(var(--mouse-x) * -8px), calc(var(--mouse-y) * -6px), 0)',
            }}
          >
            <span className="text-cyan-400 font-light text-base select-none" style={{ animation: 'ambientPulseGlow 6s ease-in-out infinite' }}>
              +
            </span>
          </div>

          {/* Tiny Emerald Bokeh Dot (Far Left) */}
          <div
            className="absolute ambient-item rounded-full bg-emerald-400"
            style={{
              left: '6%',
              top: '24%',
              width: '6px',
              height: '6px',
              boxShadow: '0 0 10px 2px rgba(0,242,152,0.75)',
              transform: 'translate3d(calc(var(--mouse-x) * 18px), calc(var(--mouse-y) * 16px), 0)',
              animation: 'ambientFloatBokeh 7.5s ease-in-out infinite',
            }}
          />

          {/* Tiny Cyan Bokeh Dot (Far Left Lower) */}
          <div
            className="absolute ambient-item rounded-full bg-sky-400"
            style={{
              left: '4%',
              top: '72%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 2px rgba(56,189,248,0.75)',
              transform: 'translate3d(calc(var(--mouse-x) * 16px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 9s ease-in-out 1.8s infinite',
            }}
          />

          {/* --- RIGHT OUTER PERIMETER ACCENTS --- */}
          {/* Violet Sparkle Star ✨ (Far Right Top) */}
          <div
            className="absolute ambient-item"
            style={{
              right: '2.5%',
              top: '20%',
              transform: 'translate3d(calc(var(--mouse-x) * -16px), calc(var(--mouse-y) * 14px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 5.2s ease-in-out 0.8s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Cute Lavender Bubble 🫧 (Right Upper) */}
          <div
            className="absolute ambient-item"
            style={{
              right: '7%',
              top: '30%',
              transform: 'translate3d(calc(var(--mouse-x) * -12px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="relative w-4 h-4 rounded-full border border-purple-400/60 bg-purple-300/25 shadow-[0_0_10px_rgba(192,132,252,0.5)]"
              style={{ animation: 'cuteBubbleFloat 6.8s ease-in-out 1s infinite' }}
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/90" />
            </div>
          </div>

          {/* Golden Amber Sparkle Star ✨ (Far Right Mid) */}
          <div
            className="absolute ambient-item"
            style={{
              right: '3.5%',
              top: '52%',
              transform: 'translate3d(calc(var(--mouse-x) * -14px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 6s ease-in-out 2s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Cute Emerald Bubble 🫧 (Mid Right) */}
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              right: '9%',
              top: '64%',
              transform: 'translate3d(calc(var(--mouse-x) * -10px), calc(var(--mouse-y) * 8px), 0)',
            }}
          >
            <div
              className="relative w-3.5 h-3.5 rounded-full border border-emerald-400/60 bg-emerald-300/25 shadow-[0_0_10px_rgba(0,242,152,0.5)]"
              style={{ animation: 'cuteBubbleFloat 5.5s ease-in-out 2s infinite' }}
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/90" />
            </div>
          </div>

          {/* Minimalist Violet Plus (+) */}
          <div
            className="absolute ambient-item hidden sm:block opacity-60 dark:opacity-40"
            style={{
              right: '5%',
              top: '40%',
              transform: 'translate3d(calc(var(--mouse-x) * 8px), calc(var(--mouse-y) * -6px), 0)',
            }}
          >
            <span className="text-purple-400 font-light text-base select-none" style={{ animation: 'ambientPulseGlow 6.5s ease-in-out infinite' }}>
              +
            </span>
          </div>

          {/* Tiny Purple Bokeh Dot (Far Right) */}
          <div
            className="absolute ambient-item rounded-full bg-purple-400"
            style={{
              right: '6%',
              top: '26%',
              width: '6px',
              height: '6px',
              boxShadow: '0 0 10px 2px rgba(192,132,252,0.75)',
              transform: 'translate3d(calc(var(--mouse-x) * -18px), calc(var(--mouse-y) * 16px), 0)',
              animation: 'ambientFloatBokeh 8s ease-in-out 0.9s infinite',
            }}
          />

          {/* Tiny Rose Pink Bokeh Dot (Far Right Lower) */}
          <div
            className="absolute ambient-item rounded-full bg-pink-400"
            style={{
              right: '4%',
              top: '74%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 2px rgba(244,114,182,0.75)',
              transform: 'translate3d(calc(var(--mouse-x) * -16px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 9.5s ease-in-out 2.5s infinite',
            }}
          />

          {/* --- BOTTOM BASE CORNERS --- */}
          <div
            className="absolute ambient-item rounded-full bg-amber-400"
            style={{
              left: '18%',
              bottom: '8%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(251,191,36,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * 12px), calc(var(--mouse-y) * 10px), 0)',
              animation: 'ambientFloatBokeh 7s ease-in-out 1s infinite',
            }}
          />
          <div
            className="absolute ambient-item rounded-full bg-emerald-400"
            style={{
              right: '18%',
              bottom: '8%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(0,242,152,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * -12px), calc(var(--mouse-y) * 10px), 0)',
              animation: 'ambientFloatBokeh 7.5s ease-in-out 0.4s infinite',
            }}
          />
        </>
      )}

      {/* ============================================================== */}
      {/* SECTION PRESET 2: SHOWCASE 3D PHONES SECTION                   */}
      {/* ============================================================== */}
      {variant === 'showcase' && (
        <>
          {/* Header Left Emerald Sparkle Star ✨ */}
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              left: '12%',
              top: '10%',
              transform: 'translate3d(calc(var(--mouse-x) * 14px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_rgba(0,242,152,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 4.8s ease-in-out infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Header Right Violet Sparkle Star ✨ */}
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              right: '12%',
              top: '10%',
              transform: 'translate3d(calc(var(--mouse-x) * -14px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 5.5s ease-in-out 1.5s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Cute Glass Bubble 🫧 (Showcase Left) */}
          <div
            className="absolute ambient-item"
            style={{
              left: '5%',
              top: '28%',
              transform: 'translate3d(calc(var(--mouse-x) * 12px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="relative w-4 h-4 rounded-full border border-cyan-400/60 bg-cyan-300/25 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              style={{ animation: 'cuteBubbleFloat 6.2s ease-in-out infinite' }}
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/90" />
            </div>
          </div>

          {/* Cyan Sparkle Star ✨ (Left) */}
          <div
            className="absolute ambient-item"
            style={{
              left: '3%',
              top: '46%',
              transform: 'translate3d(calc(var(--mouse-x) * 16px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.75)]"
              style={{ animation: 'ambientSparkleTwinkle 5.5s ease-in-out 0.6s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Cute Glass Bubble 🫧 (Showcase Right) */}
          <div
            className="absolute ambient-item"
            style={{
              right: '5%',
              top: '30%',
              transform: 'translate3d(calc(var(--mouse-x) * -12px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="relative w-4 h-4 rounded-full border border-pink-400/60 bg-pink-300/25 shadow-[0_0_10px_rgba(244,114,182,0.5)]"
              style={{ animation: 'cuteBubbleFloat 6.5s ease-in-out 1.2s infinite' }}
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/90" />
            </div>
          </div>

          {/* Violet Sparkle Star ✨ (Right) */}
          <div
            className="absolute ambient-item"
            style={{
              right: '3%',
              top: '48%',
              transform: 'translate3d(calc(var(--mouse-x) * -16px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.75)]"
              style={{ animation: 'ambientSparkleTwinkle 6.2s ease-in-out 1s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Bokeh Dots */}
          <div
            className="absolute ambient-item rounded-full bg-cyan-400"
            style={{
              left: '4%',
              top: '64%',
              width: '6px',
              height: '6px',
              boxShadow: '0 0 10px 2px rgba(56,189,248,0.75)',
              transform: 'translate3d(calc(var(--mouse-x) * 18px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 8.5s ease-in-out infinite',
            }}
          />
          <div
            className="absolute ambient-item rounded-full bg-purple-400"
            style={{
              right: '4%',
              top: '66%',
              width: '6px',
              height: '6px',
              boxShadow: '0 0 10px 2px rgba(192,132,252,0.75)',
              transform: 'translate3d(calc(var(--mouse-x) * -18px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 9s ease-in-out 1.2s infinite',
            }}
          />
        </>
      )}

      {/* ============================================================== */}
      {/* SECTION PRESET 3: CATEGORIES SECTION                           */}
      {/* ============================================================== */}
      {variant === 'categories' && (
        <>
          {/* Header Left Sparkle Star ✨ */}
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              left: '9%',
              top: '6%',
              transform: 'translate3d(calc(var(--mouse-x) * 14px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_rgba(0,242,152,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 5.2s ease-in-out infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Header Right Sparkle Star ✨ */}
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              right: '9%',
              top: '6%',
              transform: 'translate3d(calc(var(--mouse-x) * -14px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 6.2s ease-in-out 1.2s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Left Sparkle Star */}
          <div
            className="absolute ambient-item"
            style={{
              left: '2.5%',
              top: '32%',
              transform: 'translate3d(calc(var(--mouse-x) * 16px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.75)]"
              style={{ animation: 'ambientSparkleTwinkle 5.5s ease-in-out 0.5s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Right Sparkle Star */}
          <div
            className="absolute ambient-item"
            style={{
              right: '2.5%',
              top: '34%',
              transform: 'translate3d(calc(var(--mouse-x) * -16px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.75)]"
              style={{ animation: 'ambientSparkleTwinkle 6s ease-in-out 1s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>
        </>
      )}

      {/* ============================================================== */}
      {/* SECTION PRESET 4: HERO SECTION                                 */}
      {/* ============================================================== */}
      {variant === 'hero' && (
        <>
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              left: '8%',
              top: '25%',
              transform: 'translate3d(calc(var(--mouse-x) * 16px), calc(var(--mouse-y) * 14px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-[#00f298] drop-shadow-[0_0_10px_rgba(0,242,152,0.8)]"
              style={{ animation: 'ambientSparkleTwinkle 4.5s ease-in-out infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              right: '8%',
              top: '28%',
              transform: 'translate3d(calc(var(--mouse-x) * -16px), calc(var(--mouse-y) * 14px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
              style={{ animation: 'ambientSparkleTwinkle 5s ease-in-out 1s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
