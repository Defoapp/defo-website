import React from 'react';

export default function CategoryIcon({ type, isHovered = false, className = 'w-24 h-24' }) {
  return (
    <div className={`${className} flex items-center justify-center transition-all duration-300`}>
      {renderIcon(type, isHovered)}
    </div>
  );
}

function renderIcon(type, isHovered) {
  switch (type) {
    /* ====================================================================== */
    /* 1. ADOBE TOOLS - Solid, Sharp Red Wings with 3D Separation             */
    /* ====================================================================== */
    case 'adobe':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <g
            className="transition-all duration-400 ease-out"
            style={{
              filter: isHovered
                ? 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.18))'
                : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08))',
            }}
          >
            {/* Right Wing */}
            <path
              d="M61.8 15.5H88.5L58.2 84.5H35.8L61.8 15.5Z"
              fill="#E11D24"
              className="transition-transform duration-400 ease-out"
              style={{
                transform: isHovered ? 'translateX(4px) translateY(-2px)' : 'none',
              }}
            />
            {/* Left Wing */}
            <path
              d="M38.2 15.5H11.5L41.8 84.5H64.2L38.2 15.5Z"
              fill="#FA0F00"
              className="transition-transform duration-400 ease-out"
              style={{
                transform: isHovered ? 'translateX(-4px) translateY(-2px)' : 'none',
              }}
            />
            {/* Center Notch */}
            <polygon
              points="50,43.2 68,84.5 53.6,84.5 45.6,66.2 32.8,84.5 25.6,84.5"
              fill="#E11D24"
              className="transition-transform duration-400 ease-out"
              style={{
                transform: isHovered ? 'scale(1.1) translateY(1px)' : 'none',
                transformOrigin: '50px 65px',
              }}
            />
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 2. UI/UX DESIGN TOOLS - Scissors Snip & Glue Tilts                     */
    /* ====================================================================== */
    case 'uiux':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          {/* Canvas */}
          <rect
            x="14"
            y="18"
            width="72"
            height="54"
            rx="8"
            fill="#FFFFFF"
            stroke="#94A3B8"
            strokeWidth="2.5"
          />
          <rect x="18" y="22" width="64" height="26" rx="4" fill="#0284C7" />
          <rect x="22" y="26" width="22" height="4" rx="2" fill="#FFFFFF" />
          <rect x="22" y="34" width="36" height="3" rx="1.5" fill="#BAE6FD" />
          <circle cx="70" cy="35" r="7.5" fill="#F59E0B" />

          {/* Snipping Scissors */}
          <g
            transform="translate(18, 48)"
            className="transition-transform duration-300 ease-out"
            style={{
              transform: isHovered ? 'translate(18px, 44px) scale(1.08)' : 'translate(18px, 48px)',
            }}
          >
            <g
              style={{
                transform: isHovered ? 'rotate(-18deg)' : 'rotate(0deg)',
                transformOrigin: '18px 10px',
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <circle cx="10" cy="24" r="7" stroke="#DC2626" strokeWidth="3.5" fill="none" />
              <path d="M14 18L30 2" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
            </g>
            <g
              style={{
                transform: isHovered ? 'rotate(18deg)' : 'rotate(0deg)',
                transformOrigin: '18px 10px',
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <circle cx="26" cy="24" r="7" stroke="#DC2626" strokeWidth="3.5" fill="none" />
              <path d="M22 18L6 2" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
            </g>
            <circle cx="18" cy="10" r="3.5" fill="#334155" />
          </g>

          {/* Glue Bottle */}
          <g
            transform="translate(62, 45)"
            className="transition-transform duration-300 ease-out"
            style={{
              transform: isHovered ? 'translate(62px, 42px) rotate(-15deg)' : 'translate(62px, 45px) rotate(0deg)',
              transformOrigin: '12px 28px',
            }}
          >
            <rect x="4" y="10" width="16" height="22" rx="3" fill="#D97706" />
            <rect x="7" y="4" width="10" height="6" rx="1" fill="#FEF3C7" />
            <polygon points="12,0 8,4 16,4" fill="#DC2626" />
            <rect x="7" y="16" width="10" height="10" rx="1" fill="#FFFFFF" />
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 3. PHOTO EDITING - Wand Waves & Mountain Screen Pops                   */
    /* ====================================================================== */
    case 'photo':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.14))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          <rect x="42" y="74" width="16" height="12" rx="2" fill="#64748B" />
          <path d="M30 86H70" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
          <rect x="12" y="15" width="76" height="59" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2.5" />

          {/* Saturated Screen Image */}
          <rect x="17" y="20" width="66" height="49" rx="4" fill="#0284C7" />
          <circle cx="32" cy="33" r="6.5" fill="#FBBF24" />
          <polygon points="17,69 38,40 54,69" fill="#059669" />
          <polygon points="40,69 60,45 83,69" fill="#047857" />

          {/* Interactive Wand */}
          <g
            className="transition-transform duration-400 ease-out"
            style={{
              transform: isHovered
                ? 'translate(3px, -4px) rotate(14deg)'
                : 'translate(0px, 0px) rotate(0deg)',
              transformOrigin: '76px 28px',
            }}
          >
            <path d="M68 24L84 40" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
            <circle cx="84" cy="40" r="3" fill="#B45309" />
            <path
              d="M68 14L70 18L74 20L70 22L68 26L66 22L62 20L66 18Z"
              fill="#F59E0B"
              className={isHovered ? 'animate-spin' : ''}
              style={{ transformOrigin: '68px 20px', animationDuration: '2s' }}
            />
            <path d="M86 16L87 18L89 19L87 20L86 22L85 20L83 19L85 18Z" fill="#FBBF24" />
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 4. VIDEO EDITING - Film Strip Scrolls & Purple Scissors Snip          */
    /* ====================================================================== */
    case 'video':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.14))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          <rect
            x="12"
            y="16"
            width="76"
            height="34"
            rx="6"
            fill="#0369A1"
            stroke="#075985"
            strokeWidth="2"
          />

          {/* Scrolling Sprockets */}
          <g
            style={{
              transform: isHovered ? 'translateX(-8px)' : 'translateX(0px)',
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <rect x="17" y="20" width="8" height="6" rx="1.5" fill="#F0F9FF" />
            <rect x="31" y="20" width="8" height="6" rx="1.5" fill="#F0F9FF" />
            <rect x="45" y="20" width="8" height="6" rx="1.5" fill="#F0F9FF" />
            <rect x="59" y="20" width="8" height="6" rx="1.5" fill="#F0F9FF" />
            <rect x="73" y="20" width="8" height="6" rx="1.5" fill="#F0F9FF" />
            <rect x="87" y="20" width="8" height="6" rx="1.5" fill="#F0F9FF" />
          </g>

          <polygon
            points="44,32 44,44 56,38"
            fill="#FFFFFF"
            className="transition-transform duration-200"
            style={{
              transform: isHovered ? 'scale(1.2)' : 'scale(1)',
              transformOrigin: '48px 38px',
            }}
          />

          {/* Purple Scissors */}
          <g
            transform="translate(24, 46)"
            className="transition-transform duration-300"
            style={{
              transform: isHovered ? 'translate(24px, 42px) scale(1.08)' : 'translate(24px, 46px)',
            }}
          >
            <g
              style={{
                transform: isHovered ? 'rotate(-18deg)' : 'rotate(0deg)',
                transformOrigin: '26px 13px',
                transition: 'transform 0.25s ease-out',
              }}
            >
              <circle cx="16" cy="30" r="9" stroke="#7C3AED" strokeWidth="3.5" fill="none" />
              <path d="M21 23L42 2" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
            </g>
            <g
              style={{
                transform: isHovered ? 'rotate(18deg)' : 'rotate(0deg)',
                transformOrigin: '26px 13px',
                transition: 'transform 0.25s ease-out',
              }}
            >
              <circle cx="36" cy="30" r="9" stroke="#7C3AED" strokeWidth="3.5" fill="none" />
              <path d="M31 23L10 2" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
            </g>
            <circle cx="26" cy="13" r="3.5" fill="#5B21B6" />
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 5. PAPER CRAFT - Brush Paints Stroke Across Swatches                  */
    /* ====================================================================== */
    case 'papercraft':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          <rect x="14" y="16" width="72" height="66" rx="12" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2.5" />
          <rect x="14" y="16" width="72" height="16" rx="6" fill="#6D28D9" />
          <circle cx="23" cy="24" r="3" fill="#F87171" />
          <circle cx="31" cy="24" r="3" fill="#FBBF24" />
          <circle cx="39" cy="24" r="3" fill="#34D399" />

          {/* Saturated Swatches */}
          <circle cx="32" cy="46" r="7.5" fill="#DB2777" />
          <circle cx="50" cy="46" r="7.5" fill="#2563EB" />
          <circle cx="68" cy="46" r="7.5" fill="#059669" />

          {/* Brush */}
          <g
            className="transition-transform duration-400 ease-out"
            style={{
              transform: isHovered
                ? 'translate(28px, 38px) rotate(-20deg)'
                : 'translate(24px, 46px) rotate(0deg)',
            }}
          >
            <path d="M42 2L18 26" stroke="#92400E" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M18 26C14 30 8 36 6 42C12 40 18 34 22 30Z" fill="#D97706" />
            <circle cx="8" cy="44" r="6" fill="#DC2626" />
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 6. CARDBOARD CRAFT - 3D Box Flaps Lift with Gold Star Pop              */
    /* ====================================================================== */
    case 'cardboard':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          <polygon
            points={isHovered ? '26,38 28,14 72,14 56,38' : '26,38 34,22 66,22 56,38'}
            fill="#92400E"
            className="transition-all duration-400"
          />
          <polygon points="26,38 50,48 74,38 50,28" fill="#5A3212" />

          {/* Saturated Golden Star */}
          <g
            style={{
              transform: isHovered ? 'translateY(-14px) scale(1.15)' : 'translateY(0px) scale(0)',
              transformOrigin: '50px 30px',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <polygon points="50,20 53,28 62,29 55,35 57,44 50,39 43,44 45,35 38,29 47,28" fill="#D97706" />
          </g>

          <polygon points="22,46 50,60 50,86 22,70" fill="#B45309" />
          <polygon points="50,60 78,46 78,70 50,86" fill="#92400E" />

          <polygon
            points={isHovered ? '22,46 50,60 38,78 10,64' : '22,46 50,60 44,72 16,56'}
            fill="#C2410C"
            className="transition-all duration-400"
          />
          <polygon
            points={isHovered ? '50,60 78,46 90,64 62,78' : '50,60 78,46 84,56 56,72'}
            fill="#92400E"
            className="transition-all duration-400"
          />
          <line x1="50" y1="60" x2="50" y2="86" stroke="#451A03" strokeWidth="1.5" />
        </svg>
      );

    /* ====================================================================== */
    /* 7. DECORATIONS - Saturated Balloons Fill with Air & Float              */
    /* ====================================================================== */
    case 'decorations':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 10px 18px rgba(0,0,0,0.16))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          {/* Saturated Strings */}
          <path
            d={isHovered ? 'M32 36 Q28 60 50 86' : 'M36 46 Q40 68 50 86'}
            stroke="#64748B"
            strokeWidth="2.5"
            fill="none"
            className="transition-all duration-600 ease-out"
          />
          <path
            d={isHovered ? 'M50 30 Q54 58 50 86' : 'M50 48 Q50 66 50 86'}
            stroke="#64748B"
            strokeWidth="2.5"
            fill="none"
            className="transition-all duration-600 ease-out"
          />
          <path
            d={isHovered ? 'M70 28 Q72 60 50 86' : 'M64 46 Q60 68 50 86'}
            stroke="#64748B"
            strokeWidth="2.5"
            fill="none"
            className="transition-all duration-600 ease-out"
          />

          {/* Deep Red Heart Balloon - Inflates & lifts */}
          <g
            style={{
              transform: isHovered
                ? 'translate(-4px, -15px) scale(1.18) rotate(-5deg)'
                : 'translate(0px, 0px) scale(1) rotate(0deg)',
              transformOrigin: '36px 36px',
              transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <path
              d="M36 22 C30 14 20 18 20 28 C20 40 36 50 36 50 C36 50 52 40 52 28 C52 18 42 14 36 22 Z"
              fill="#E11D48"
            />
            <path d="M26 24 Q28 20 32 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Warm Amber-Yellow Balloon - Inflates & rises */}
          <g
            style={{
              transform: isHovered
                ? 'translate(0px, -20px) scale(1.22)'
                : 'translate(0px, 0px) scale(1)',
              transformOrigin: '50px 38px',
              transition: 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <ellipse cx="50" cy="38" rx="14" ry="18" fill="#F59E0B" />
            <polygon points="50,56 46,60 54,60" fill="#D97706" />
            <path d="M44 30 Q46 26 50 26" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Deep Teal Balloon - Inflates & floats */}
          <g
            style={{
              transform: isHovered
                ? 'translate(6px, -16px) scale(1.18) rotate(7deg)'
                : 'translate(0px, 0px) scale(1) rotate(0deg)',
              transformOrigin: '66px 32px',
              transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <ellipse cx="66" cy="32" rx="13" ry="17" fill="#0D9488" />
            <polygon points="66,49 62,53 70,53" fill="#0F766E" />
            <path d="M62 25 Q64 22 68 22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 8. KIDS - Smiling Child & Toy Blocks Bounce                           */
    /* ====================================================================== */
    case 'kids':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.14))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          <g
            style={{
              transform: isHovered ? 'translateY(-7px) rotate(-3deg)' : 'translateY(0px) rotate(0deg)',
              transformOrigin: '62px 50px',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <circle cx="62" cy="36" r="16" fill="#FED7AA" />
            <path d="M46 32 C48 18 76 18 78 32 C74 26 66 28 62 26 C58 28 50 26 46 32 Z" fill="#EA580C" />
            <circle cx="56" cy="36" r="2" fill="#0F172A" />
            <circle cx="68" cy="36" r={isHovered ? '1.5' : '2'} fill="#0F172A" />
            <path
              d={isHovered ? 'M56 40 Q62 48 68 40' : 'M59 42 Q62 46 65 42'}
              stroke="#C2410C"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="53" cy="40" r="3" fill="#F87171" />
            <circle cx="71" cy="40" r="3" fill="#F87171" />
            <path d="M46 52 C50 48 74 48 78 52 L78 70 L46 70 Z" fill="#0284C7" />
          </g>

          {/* Blocks */}
          <g
            style={{
              transform: isHovered ? 'translate(-2px, -3px) rotate(-5deg)' : 'none',
              transformOrigin: '27px 71px',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <rect x="18" y="62" width="18" height="18" rx="3" fill="#DC2626" />
            <text x="27" y="75" fontSize="11" fontWeight="bold" fill="#FFF" textAnchor="middle">A</text>
          </g>

          <g
            style={{
              transform: isHovered ? 'translate(2px, -2px) rotate(5deg)' : 'none',
              transformOrigin: '45px 71px',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <rect x="36" y="62" width="18" height="18" rx="3" fill="#D97706" />
            <text x="45" y="75" fontSize="11" fontWeight="bold" fill="#0F172A" textAnchor="middle">B</text>
          </g>

          <g
            style={{
              transform: isHovered ? 'translateY(-10px) rotate(8deg)' : 'translateY(0px)',
              transformOrigin: '36px 53px',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <rect x="27" y="44" width="18" height="18" rx="3" fill="#059669" />
            <text x="36" y="57" fontSize="11" fontWeight="bold" fill="#FFF" textAnchor="middle">C</text>
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 9. SPORTS - Saturated Sports Balls Spin & Bounce                      */
    /* ====================================================================== */
    case 'sports':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          {/* Basketball */}
          <g
            style={{
              transform: isHovered ? 'translateY(-12px) scale(1.05)' : 'translateY(0px)',
              transformOrigin: '64px 42px',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <circle cx="64" cy="42" r="20" fill="#C2410C" />
            <path d="M44 42 H84" stroke="#431407" strokeWidth="2.5" />
            <path d="M54 24 Q64 42 54 60" stroke="#431407" strokeWidth="2.5" fill="none" />
            <path d="M74 24 Q64 42 74 60" stroke="#431407" strokeWidth="2.5" fill="none" />
          </g>

          {/* Soccer Ball */}
          <g
            style={{
              transform: isHovered ? 'rotate(90deg) scale(1.05)' : 'rotate(0deg)',
              transformOrigin: '36px 46px',
              transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <circle cx="36" cy="46" r="20" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
            <polygon points="36,40 43,45 40,53 32,53 29,45" fill="#0F172A" />
            <line x1="36" y1="40" x2="36" y2="30" stroke="#0F172A" strokeWidth="2" />
            <line x1="43" y1="45" x2="52" y2="43" stroke="#0F172A" strokeWidth="2" />
            <line x1="40" y1="53" x2="46" y2="61" stroke="#0F172A" strokeWidth="2" />
            <line x1="32" y1="53" x2="26" y2="61" stroke="#0F172A" strokeWidth="2" />
            <line x1="29" y1="45" x2="20" y2="43" stroke="#0F172A" strokeWidth="2" />
          </g>

          {/* American Football */}
          <g
            style={{
              transform: isHovered ? 'translate(30px, 53px) rotate(-24deg)' : 'translate(30px, 58px) rotate(0deg)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <ellipse cx="20" cy="14" rx="20" ry="12" transform="rotate(-15 20 14)" fill="#78350F" />
            <line x1="6" y1="18" x2="34" y2="10" stroke="#FEF3C7" strokeWidth="2" />
            <line x1="16" y1="12" x2="18" y2="18" stroke="#FEF3C7" strokeWidth="1.5" />
            <line x1="20" y1="11" x2="22" y2="17" stroke="#FEF3C7" strokeWidth="1.5" />
            <line x1="24" y1="10" x2="26" y2="16" stroke="#FEF3C7" strokeWidth="1.5" />
          </g>

          <circle cx="74" cy={isHovered ? '62' : '68'} r="9" fill="#65A30D" />
          <path d="M68 62 Q74 68 68 74" stroke="#FFF" strokeWidth="1.5" fill="none" />
        </svg>
      );

    /* ====================================================================== */
    /* 10. LANGUAGES - Dark Slate Chalkboard & Bright White Chalk ABC        */
    /* ====================================================================== */
    case 'languages':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          <line x1="24" y1="84" x2="36" y2="40" stroke="#5A3212" strokeWidth="4" strokeLinecap="round" />
          <line x1="76" y1="84" x2="64" y2="40" stroke="#5A3212" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="84" x2="50" y2="40" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
          <rect x="22" y="68" width="56" height="5" rx="2" fill="#92400E" />

          {/* Blackboard */}
          <g
            style={{
              transform: isHovered ? 'translateY(-4px) rotate(2deg)' : 'none',
              transformOrigin: '50px 44px',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <rect x="18" y="20" width="64" height="48" rx="6" fill="#92400E" stroke="#5A3212" strokeWidth="2.5" />
            <rect x="23" y="25" width="54" height="38" rx="3" fill="#0F172A" />

            <text
              x="50"
              y="52"
              fontSize="20"
              fontWeight="900"
              fontFamily="sans-serif"
              fill="#FFFFFF"
              textAnchor="middle"
              letterSpacing="2"
            >
              ABC
            </text>
            <rect x="42" y="66" width="8" height="3" rx="1" fill="#FFFFFF" />
            <rect x="53" y="66" width="6" height="3" rx="1" fill="#F59E0B" />
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 11. COOKING - Rich Skillet Pan with Rising Steam & Chef Stirs          */
    /* ====================================================================== */
    case 'cooking':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.14))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          <g
            style={{
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <path d="M42 22 C36 22 36 12 46 10 C50 6 56 6 58 10 C68 10 68 20 62 22 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
            <rect x="42" y="20" width="20" height="7" rx="1.5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="52" cy="34" r="8" fill="#FED7AA" />
            <circle cx="49" cy="33" r="1.5" fill="#0F172A" />
            <circle cx="55" cy="33" r="1.5" fill="#0F172A" />
            <path d="M49 37 Q52 40 55 37" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M40 42 C44 40 60 40 64 42 L67 58 L37 58 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <circle cx="52" cy="46" r="1.5" fill="#0284C7" />
            <circle cx="52" cy="52" r="1.5" fill="#0284C7" />
          </g>

          {/* Spatula */}
          <g
            style={{
              transform: isHovered ? 'translate(3px, -4px) rotate(-18deg)' : 'translate(0, 0) rotate(0deg)',
              transformOrigin: '72px 55px',
              transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <line x1="72" y1="40" x2="72" y2="70" stroke="#0369A1" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse cx="72" cy="36" rx="4" ry="5" fill="#0369A1" />
          </g>

          {/* Pan */}
          <g transform="translate(14, 58)">
            <rect x="0" y="8" width="16" height="4" rx="2" fill="#1E293B" />
            <ellipse cx="36" cy="10" rx="24" ry="9" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
            <ellipse cx="36" cy="9" rx="20" ry="6" fill="#EA580C" />

            <circle cx="32" cy={isHovered ? '4' : '9'} r="2.5" fill="#059669" />
            <circle cx="40" cy={isHovered ? '3' : '8'} r="2" fill="#DC2626" />
            <circle cx="36" cy={isHovered ? '5' : '11'} r="2" fill="#D97706" />

            {/* Crisp Rising Steam */}
            <path
              d="M30 0 Q33 -6 30 -10"
              stroke="#EA580C"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{
                transform: isHovered ? 'translateY(-7px) scale(1.2)' : 'none',
                opacity: 0.9,
              }}
            />
            <path
              d="M38 -2 Q41 -8 38 -12"
              stroke="#EA580C"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{
                transform: isHovered ? 'translateY(-8px) scale(1.2)' : 'none',
                opacity: 0.9,
              }}
            />
          </g>
        </svg>
      );

    /* ====================================================================== */
    /* 12. WOMEN'S STYLE - Deep Brunette Hair & Rich Cyan Dryer               */
    /* ====================================================================== */
    case 'style':
      return (
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none"
          style={{
            filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.14))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
          }}
        >
          {/* Hairdryer */}
          <g
            style={{
              transform: isHovered ? 'translate(10px, 11px) rotate(-8deg)' : 'translate(12px, 14px) rotate(0deg)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <rect x="18" y="8" width="10" height="8" rx="2" fill="#0891B2" />
            <rect x="8" y="5" width="12" height="14" rx="4" fill="#0E7490" />
            <rect x="10" y="17" width="5" height="12" rx="2" fill="#155E75" transform="rotate(-15 10 17)" />

            <path d="M30 7 Q38 4 46 7" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M30 12 Q40 10 48 12" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M30 17 Q38 19 46 17" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>

          {/* Comb */}
          <g
            style={{
              transform: isHovered ? 'translate(54px, 16px) rotate(22deg)' : 'translate(62px, 12px) rotate(0deg)',
              transition: 'transform 0.35s ease-out',
            }}
          >
            <rect x="4" y="6" width="22" height="6" rx="2" fill="#78350F" transform="rotate(35 4 6)" />
            <line x1="6" y1="12" x2="10" y2="18" stroke="#451A03" strokeWidth="2" />
            <line x1="10" y1="15" x2="14" y2="21" stroke="#451A03" strokeWidth="2" />
            <line x1="14" y1="18" x2="18" y2="24" stroke="#451A03" strokeWidth="2" />
          </g>

          {/* Saturated Brunette Hair */}
          <path
            d={
              isHovered
                ? 'M38 48 C26 52 20 66 24 84 C34 84 40 76 40 70 C42 56 42 46 44 42 Z'
                : 'M38 48 C30 54 26 70 30 84 C38 84 40 76 40 70 C42 56 42 46 44 42 Z'
            }
            fill="#5A3212"
            className="transition-all duration-400"
          />
          <path
            d={
              isHovered
                ? 'M62 48 C76 52 82 66 78 84 C68 84 60 76 60 70 C58 56 58 46 56 42 Z'
                : 'M62 48 C70 54 74 70 70 84 C62 84 60 76 60 70 C58 56 58 46 56 42 Z'
            }
            fill="#5A3212"
            className="transition-all duration-400"
          />

          <circle cx="50" cy="48" r="14" fill="#FED7AA" />
          <path d="M36 44 C38 30 62 30 64 44 C60 38 52 38 50 39 C48 38 40 38 36 44 Z" fill="#78350F" />
          <circle cx="43" cy="47" r="1.5" fill="#0F172A" />
          <circle cx="57" cy="47" r="1.5" fill="#0F172A" />
          <circle cx="43" cy="51" r="2.5" fill="#FB7185" />
          <circle cx="57" cy="51" r="2.5" fill="#FB7185" />
          <path d="M47 54 Q50 57 53 54" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M34 68 C38 62 62 62 66 68 L66 86 L34 86 Z" fill="#E11D48" />
        </svg>
      );

    default:
      return null;
  }
}
