import React, { useEffect, useRef } from 'react';

/**
 * AmbientDecorations
 * Lightweight, colorful floating ambient design elements (sparkles, glowing dots, subtle crosses).
 * Strictly rendered in the background layer (z-0) with ZERO backdrop-blur, so they
 * never shade, blur, or obscure any icons or content.
 *
 * @param {'funnel' | 'showcase'} variant - Layout preset for the section
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
            transform: scale(1.15) rotate(180deg);
            opacity: 0.95;
          }
        }

        @keyframes ambientFloatBokeh {
          0% {
            transform: translate3d(0, 0, 0) scale(0.85);
            opacity: 0.35;
          }
          50% {
            transform: translate3d(4px, -12px, 0) scale(1.15);
            opacity: 0.85;
          }
          100% {
            transform: translate3d(-3px, -24px, 0) scale(0.8);
            opacity: 0.25;
          }
        }

        @keyframes ambientPulseGlow {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.75;
          }
        }

        .ambient-item {
          will-change: transform;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* ============================================================== */}
      {/* SECTION PRESET 1: FUNNEL SECTION (OUTER NEGATIVE MARGINS ONLY) */}
      {/* ============================================================== */}
      {variant === 'funnel' && (
        <>
          {/* --- LEFT OUTER PERIMETER ACCENTS (OUTSIDE THE CHICLET GRID) --- */}
          {/* Emerald Sparkle Star ✨ (Far Left Top) */}
          <div
            className="absolute ambient-item"
            style={{
              left: '2.5%',
              top: '20%',
              transform: 'translate3d(calc(var(--mouse-x) * 14px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-emerald-400 dark:text-[#00f298] drop-shadow-[0_0_6px_rgba(0,242,152,0.65)]"
              style={{ animation: 'ambientSparkleTwinkle 5s ease-in-out infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Cyan Sparkle Star ✨ (Far Left Mid) */}
          <div
            className="absolute ambient-item"
            style={{
              left: '3.5%',
              top: '52%',
              transform: 'translate3d(calc(var(--mouse-x) * 12px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.65)]"
              style={{ animation: 'ambientSparkleTwinkle 6.5s ease-in-out 1.2s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Minimalist Cyan Plus (+) */}
          <div
            className="absolute ambient-item hidden sm:block opacity-50 dark:opacity-40"
            style={{
              left: '5%',
              top: '36%',
              transform: 'translate3d(calc(var(--mouse-x) * -8px), calc(var(--mouse-y) * -6px), 0)',
            }}
          >
            <span className="text-cyan-400 font-light text-sm select-none" style={{ animation: 'ambientPulseGlow 6s ease-in-out infinite' }}>
              +
            </span>
          </div>

          {/* Tiny Emerald Bokeh Dot (Far Left) */}
          <div
            className="absolute ambient-item rounded-full bg-emerald-400"
            style={{
              left: '6%',
              top: '26%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(0,242,152,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * 16px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 7.5s ease-in-out infinite',
            }}
          />

          {/* Tiny Cyan Bokeh Dot (Far Left Lower) */}
          <div
            className="absolute ambient-item rounded-full bg-sky-400"
            style={{
              left: '4%',
              top: '68%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(56,189,248,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * 14px), calc(var(--mouse-y) * 12px), 0)',
              animation: 'ambientFloatBokeh 9s ease-in-out 1.8s infinite',
            }}
          />

          {/* --- RIGHT OUTER PERIMETER ACCENTS (OUTSIDE THE CHICLET GRID) --- */}
          {/* Violet Sparkle Star ✨ (Far Right Top) */}
          <div
            className="absolute ambient-item"
            style={{
              right: '2.5%',
              top: '22%',
              transform: 'translate3d(calc(var(--mouse-x) * -14px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.65)]"
              style={{ animation: 'ambientSparkleTwinkle 5.8s ease-in-out 0.8s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Golden Amber Sparkle Star ✨ (Far Right Mid) */}
          <div
            className="absolute ambient-item"
            style={{
              right: '3.5%',
              top: '54%',
              transform: 'translate3d(calc(var(--mouse-x) * -12px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="w-3.5 h-3.5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.65)]"
              style={{ animation: 'ambientSparkleTwinkle 6.2s ease-in-out 2s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Minimalist Violet Plus (+) */}
          <div
            className="absolute ambient-item hidden sm:block opacity-50 dark:opacity-40"
            style={{
              right: '5%',
              top: '38%',
              transform: 'translate3d(calc(var(--mouse-x) * 8px), calc(var(--mouse-y) * -6px), 0)',
            }}
          >
            <span className="text-purple-400 font-light text-sm select-none" style={{ animation: 'ambientPulseGlow 6.5s ease-in-out infinite' }}>
              +
            </span>
          </div>

          {/* Tiny Purple Bokeh Dot (Far Right) */}
          <div
            className="absolute ambient-item rounded-full bg-purple-400"
            style={{
              right: '6%',
              top: '28%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(192,132,252,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * -16px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 8s ease-in-out 0.9s infinite',
            }}
          />

          {/* Tiny Rose Pink Bokeh Dot (Far Right Lower) */}
          <div
            className="absolute ambient-item rounded-full bg-pink-400"
            style={{
              right: '4%',
              top: '70%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(244,114,182,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * -14px), calc(var(--mouse-y) * 12px), 0)',
              animation: 'ambientFloatBokeh 9.5s ease-in-out 2.5s infinite',
            }}
          />

          {/* --- BOTTOM BASE CORNERS (AWAY FROM DEFO & BUTTONS) --- */}
          <div
            className="absolute ambient-item rounded-full bg-amber-400"
            style={{
              left: '20%',
              bottom: '8%',
              width: '4px',
              height: '4px',
              boxShadow: '0 0 6px 1px rgba(251,191,36,0.65)',
              transform: 'translate3d(calc(var(--mouse-x) * 10px), calc(var(--mouse-y) * 8px), 0)',
              animation: 'ambientFloatBokeh 7s ease-in-out 1s infinite',
            }}
          />
          <div
            className="absolute ambient-item rounded-full bg-emerald-400"
            style={{
              right: '20%',
              bottom: '8%',
              width: '4px',
              height: '4px',
              boxShadow: '0 0 6px 1px rgba(0,242,152,0.65)',
              transform: 'translate3d(calc(var(--mouse-x) * -10px), calc(var(--mouse-y) * 8px), 0)',
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
          {/* --- TOP HEADER ACCENTS --- */}
          {/* Emerald Sparkle Star ✨ near Title Left */}
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              left: '12%',
              top: '12%',
              transform: 'translate3d(calc(var(--mouse-x) * 14px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(0,242,152,0.65)]"
              style={{ animation: 'ambientSparkleTwinkle 5s ease-in-out infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Violet Sparkle Star ✨ near Title Right */}
          <div
            className="absolute ambient-item hidden sm:block"
            style={{
              right: '12%',
              top: '12%',
              transform: 'translate3d(calc(var(--mouse-x) * -14px), calc(var(--mouse-y) * 10px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.65)]"
              style={{ animation: 'ambientSparkleTwinkle 6s ease-in-out 1.5s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* --- FAR LEFT FLANK (SAFELY OUTSIDE PHONES STAGE) --- */}
          {/* Cyan Sparkle Star ✨ */}
          <div
            className="absolute ambient-item"
            style={{
              left: '3%',
              top: '46%',
              transform: 'translate3d(calc(var(--mouse-x) * 16px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 5.8s ease-in-out 0.6s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Cyan Plus (+) */}
          <div
            className="absolute ambient-item hidden sm:block opacity-50 dark:opacity-40"
            style={{
              left: '5%',
              top: '34%',
              transform: 'translate3d(calc(var(--mouse-x) * -8px), calc(var(--mouse-y) * -6px), 0)',
            }}
          >
            <span className="text-cyan-400 font-light text-base select-none" style={{ animation: 'ambientPulseGlow 7s ease-in-out infinite' }}>
              +
            </span>
          </div>

          {/* Bokeh Dots (Far Left) */}
          <div
            className="absolute ambient-item rounded-full bg-cyan-400"
            style={{
              left: '4%',
              top: '60%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(56,189,248,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * 18px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 8.5s ease-in-out infinite',
            }}
          />
          <div
            className="absolute ambient-item rounded-full bg-emerald-400"
            style={{
              left: '6%',
              top: '72%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(0,242,152,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * 12px), calc(var(--mouse-y) * 10px), 0)',
              animation: 'ambientFloatBokeh 10s ease-in-out 2s infinite',
            }}
          />

          {/* --- FAR RIGHT FLANK (SAFELY OUTSIDE PHONES STAGE) --- */}
          {/* Violet Sparkle Star ✨ */}
          <div
            className="absolute ambient-item"
            style={{
              right: '3%',
              top: '48%',
              transform: 'translate3d(calc(var(--mouse-x) * -16px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 6.2s ease-in-out 1s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Violet Plus (+) */}
          <div
            className="absolute ambient-item hidden sm:block opacity-50 dark:opacity-40"
            style={{
              right: '5%',
              top: '36%',
              transform: 'translate3d(calc(var(--mouse-x) * 8px), calc(var(--mouse-y) * -6px), 0)',
            }}
          >
            <span className="text-purple-400 font-light text-base select-none" style={{ animation: 'ambientPulseGlow 6.8s ease-in-out infinite' }}>
              +
            </span>
          </div>

          {/* Bokeh Dots (Far Right) */}
          <div
            className="absolute ambient-item rounded-full bg-purple-400"
            style={{
              right: '4%',
              top: '62%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(192,132,252,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * -18px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 9s ease-in-out 1.2s infinite',
            }}
          />
          <div
            className="absolute ambient-item rounded-full bg-pink-400"
            style={{
              right: '6%',
              top: '74%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(244,114,182,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * -12px), calc(var(--mouse-y) * 10px), 0)',
              animation: 'ambientFloatBokeh 10.5s ease-in-out 2.5s infinite',
            }}
          />
        </>
      )}

      {/* ============================================================== */}
      {/* SECTION PRESET 3: CATEGORIES SECTION (DISCOVER & LIKE)         */}
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
              className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(0,242,152,0.65)]"
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
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.65)]"
              style={{ animation: 'ambientSparkleTwinkle 6.2s ease-in-out 1.2s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* --- FAR LEFT FLANK (OUTSIDE 4-COLUMN CARDS GRID) --- */}
          {/* Cyan Sparkle Star ✨ */}
          <div
            className="absolute ambient-item"
            style={{
              left: '2.5%',
              top: '32%',
              transform: 'translate3d(calc(var(--mouse-x) * 16px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 5.5s ease-in-out 0.5s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Plus (+) Left */}
          <div
            className="absolute ambient-item hidden sm:block opacity-50 dark:opacity-40"
            style={{
              left: '4%',
              top: '42%',
              transform: 'translate3d(calc(var(--mouse-x) * -8px), calc(var(--mouse-y) * -6px), 0)',
            }}
          >
            <span className="text-cyan-400 font-light text-base select-none" style={{ animation: 'ambientPulseGlow 7s ease-in-out infinite' }}>
              +
            </span>
          </div>

          {/* Left Bokeh Dots */}
          <div
            className="absolute ambient-item rounded-full bg-cyan-400"
            style={{
              left: '3.5%',
              top: '56%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(56,189,248,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * 18px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 8s ease-in-out infinite',
            }}
          />
          <div
            className="absolute ambient-item rounded-full bg-emerald-400"
            style={{
              left: '2%',
              top: '76%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(0,242,152,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * 14px), calc(var(--mouse-y) * 10px), 0)',
              animation: 'ambientFloatBokeh 10s ease-in-out 2s infinite',
            }}
          />

          {/* --- FAR RIGHT FLANK (OUTSIDE 4-COLUMN CARDS GRID) --- */}
          {/* Violet Sparkle Star ✨ */}
          <div
            className="absolute ambient-item"
            style={{
              right: '2.5%',
              top: '34%',
              transform: 'translate3d(calc(var(--mouse-x) * -16px), calc(var(--mouse-y) * 12px), 0)',
            }}
          >
            <div
              className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.7)]"
              style={{ animation: 'ambientSparkleTwinkle 6s ease-in-out 1s infinite' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Plus (+) Right */}
          <div
            className="absolute ambient-item hidden sm:block opacity-50 dark:opacity-40"
            style={{
              right: '4%',
              top: '44%',
              transform: 'translate3d(calc(var(--mouse-x) * 8px), calc(var(--mouse-y) * -6px), 0)',
            }}
          >
            <span className="text-purple-400 font-light text-base select-none" style={{ animation: 'ambientPulseGlow 6.8s ease-in-out infinite' }}>
              +
            </span>
          </div>

          {/* Right Bokeh Dots */}
          <div
            className="absolute ambient-item rounded-full bg-amber-400"
            style={{
              right: '3.5%',
              top: '58%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(251,191,36,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * -18px), calc(var(--mouse-y) * 14px), 0)',
              animation: 'ambientFloatBokeh 9s ease-in-out 1.5s infinite',
            }}
          />
          <div
            className="absolute ambient-item rounded-full bg-pink-400"
            style={{
              right: '2%',
              top: '78%',
              width: '5px',
              height: '5px',
              boxShadow: '0 0 8px 1.5px rgba(244,114,182,0.7)',
              transform: 'translate3d(calc(var(--mouse-x) * -14px), calc(var(--mouse-y) * 10px), 0)',
              animation: 'ambientFloatBokeh 11s ease-in-out 2.8s infinite',
            }}
          />
        </>
      )}
    </div>
  );
}
