import React, { useEffect, useRef } from 'react';

/**
 * CuteCursorParticles
 * Lightweight, battery-friendly ambient background particle canvas.
 * Renders cute floating background particles (sparkle stars ✨, glass bubbles 🫧,
 * cute hearts ♡, rings ৹, crosses ✦, and fairy bokeh dots).
 * 
 * Note: Cursor-following sparkles/trail have been removed per user request,
 * leaving pure, peaceful, beautiful floating particles in the background.
 */

const PASTEL_PALETTE = [
  '#00f298', // Defo Mint Green
  '#10b981', // Emerald
  '#38bdf8', // Sky Cyan
  '#0ea5e9', // Deep Sky Blue
  '#c084fc', // Dreamy Lavender
  '#a855f7', // Violet
  '#f472b6', // Bubblegum Pink
  '#fbbf24', // Sun Amber Gold
  '#fb923c', // Warm Peach
];

const SHAPE_TYPES = ['star', 'bubble', 'star', 'dot', 'heart', 'star', 'ring', 'cross'];

export default function CuteCursorParticles({
  density = 'normal',
  variant = 'funnel',
  className = '',
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth || window.innerWidth);
    let height = (canvas.height = container.clientHeight || 800);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Parallax smoothed offset
    const parallax = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
    };

    // Ambient background particles pool
    const bgParticles = [];
    let animId = null;
    let isVisible = true;

    // Resize handler
    const updateSize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 800;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    updateSize();

    // Determine particle count based on density and screen width
    const baseCount =
      density === 'high'
        ? width < 768 ? 28 : 48
        : width < 768 ? 20 : 36;

    // Initialize floating ambient background particles
    const initBgParticles = () => {
      bgParticles.length = 0;
      for (let i = 0; i < baseCount; i++) {
        const type = SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)];
        const color = PASTEL_PALETTE[Math.floor(Math.random() * PASTEL_PALETTE.length)];
        const depth = 0.3 + Math.random() * 0.7; // Depth for gentle parallax

        bgParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0,
          vy: 0,
          driftX: (Math.random() - 0.5) * 0.35,
          driftY: (Math.random() - 0.5) * 0.3 - 0.12, // Gentle natural float
          size: type === 'bubble' ? 5 + Math.random() * 6 : 6 + Math.random() * 7,
          type,
          color,
          depth,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.018 + Math.random() * 0.02,
          baseAlpha: 0.45 + Math.random() * 0.45,
        });
      }
    };

    initBgParticles();

    // Mouse movement handler solely for subtle ambient parallax (no cursor trail)
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside) {
        // Subtle normalized parallax offset (-1 to 1)
        parallax.targetX = ((currentX / width) - 0.5) * 2;
        parallax.targetY = ((currentY / height) - 0.5) * 2;
      } else {
        parallax.targetX = 0;
        parallax.targetY = 0;
      }
    };

    const handleMouseLeave = () => {
      parallax.targetX = 0;
      parallax.targetY = 0;
    };

    // -------------------------------------------------------------
    // SHAPE DRAWING METHODS
    // -------------------------------------------------------------
    const drawStar = (x, y, size, rotation, color, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.beginPath();
      const outer = size;
      const inner = size * 0.22;
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI) / 2;
        const aMid = a + Math.PI / 4;
        if (i === 0) ctx.moveTo(Math.cos(a) * outer, Math.sin(a) * outer);
        else ctx.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
        ctx.quadraticCurveTo(0, 0, Math.cos(aMid) * inner, Math.sin(aMid) * inner);
      }
      ctx.closePath();
      ctx.fill();

      // Sparkling bright white core
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha * 0.9));
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawBubble = (x, y, radius, color, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha * 0.85));

      // Soft luminous bubble body
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Delicate bright rim
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      ctx.stroke();

      // Cute white curved highlight reflection on upper-left
      ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
      ctx.beginPath();
      ctx.arc(-radius * 0.35, -radius * 0.35, Math.max(1, radius * 0.28), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawHeart = (x, y, size, rotation, color, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha * 0.8));
      ctx.beginPath();
      const s = size * 0.55;
      ctx.moveTo(0, s * 0.4);
      ctx.bezierCurveTo(-s * 0.8, -s * 0.5, -s * 1.4, s * 0.4, 0, s * 1.3);
      ctx.bezierCurveTo(s * 1.4, s * 0.4, s * 0.8, -s * 0.5, 0, s * 0.4);
      ctx.closePath();
      ctx.fill();

      // Tiny white shine
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha * 0.6));
      ctx.beginPath();
      ctx.arc(-s * 0.25, 0, s * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawRing = (x, y, radius, color, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha * 0.75));
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.restore();
    };

    const drawCross = (x, y, size, rotation, color, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha * 0.7));
      const w = size * 0.28;
      const h = size;
      ctx.beginPath();
      ctx.rect(-h / 2, -w / 2, h, w);
      ctx.rect(-w / 2, -h / 2, w, h);
      ctx.fill();
      ctx.restore();
    };

    const drawDot = (x, y, radius, color, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      // Outer glow
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 2.2);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.35, color);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawShape = (type, x, y, size, rotation, color, alpha) => {
      switch (type) {
        case 'star':
          drawStar(x, y, size, rotation, color, alpha);
          break;
        case 'bubble':
          drawBubble(x, y, size, color, alpha);
          break;
        case 'heart':
          drawHeart(x, y, size, rotation, color, alpha);
          break;
        case 'ring':
          drawRing(x, y, size, color, alpha);
          break;
        case 'cross':
          drawCross(x, y, size, rotation, color, alpha);
          break;
        case 'dot':
        default:
          drawDot(x, y, size * 0.6, color, alpha);
          break;
      }
    };

    // -------------------------------------------------------------
    // MAIN ANIMATION LOOP
    // -------------------------------------------------------------
    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth parallax lerp
      parallax.currentX += (parallax.targetX - parallax.currentX) * 0.05;
      parallax.currentY += (parallax.targetY - parallax.currentY) * 0.05;

      // UPDATE & RENDER BACKGROUND AMBIENT PARTICLES
      for (let i = 0; i < bgParticles.length; i++) {
        const p = bgParticles[i];

        // Natural peaceful floating drift
        p.x += p.driftX;
        p.y += p.driftY;
        p.rotation += p.rotSpeed;
        p.twinklePhase += p.twinkleSpeed;

        // Screen wrap-around with safety margin
        const pad = 30;
        if (p.x < -pad) p.x = width + pad;
        if (p.x > width + pad) p.x = -pad;
        if (p.y < -pad) p.y = height + pad;
        if (p.y > height + pad) p.y = -pad;

        // Subtle camera parallax offset
        const renderX = p.x + parallax.currentX * p.depth * 18;
        const renderY = p.y + parallax.currentY * p.depth * 14;

        // Twinkling pulse
        const twinkle = 0.45 + 0.55 * (Math.sin(p.twinklePhase) * 0.5 + 0.5);
        const alpha = p.baseAlpha * twinkle;

        drawShape(p.type, renderX, renderY, p.size, p.rotation, p.color, alpha);
      }

      animId = requestAnimationFrame(render);
    };

    // ResizeObserver to handle layout and window changes seamlessly
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    // IntersectionObserver to pause rendering when section is scrolled out of viewport
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Event listener for gentle ambient parallax
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [density, variant]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
}
