import React from 'react';

export default function SquircleIcon({ type, className = 'w-full h-full' }) {
  switch (type) {
    // 1. Duolingo Owl Face (Iconic large white eyes + orange beak)
    case 'duolingo':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Owl eye sockets */}
          <ellipse cx="32" cy="46" rx="19" ry="21" fill="#FFFFFF" />
          <ellipse cx="68" cy="46" rx="19" ry="21" fill="#FFFFFF" />
          {/* Pupils looking slightly forward */}
          <circle cx="34" cy="47" r="10" fill="#4B4B4B" />
          <circle cx="66" cy="47" r="10" fill="#4B4B4B" />
          {/* Pupil eye catchlights */}
          <circle cx="31" cy="43" r="3.5" fill="#FFFFFF" />
          <circle cx="63" cy="43" r="3.5" fill="#FFFFFF" />
          {/* Friendly Orange Beak */}
          <path d="M 50 49 L 41 62 Q 50 67 59 62 Z" fill="#FF9600" />
        </svg>
      );

    // 2. Hulu (Bold typography)
    case 'hulu':
      return (
        <div className="w-full h-full flex items-center justify-center select-none">
          <span className="text-[#1CE783] font-black text-xl sm:text-2xl tracking-tighter lowercase font-sans">
            hulu
          </span>
        </div>
      );

    // 3. Snapchat (White Ghost silhouette)
    case 'snapchat':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M50 16c-13.8 0-23.2 10.4-23.2 24.2 0 6.8 2.5 12.3 3.6 14.8.4.8.1 1.7-.6 2.2-3.2 2.3-6.8 3.8-10.4 4.5-1.5.3-2.1 2.1-1 3.2 3.1 3 7.8 4.7 13 4.2 1.2-.1 2.3.6 2.6 1.8 1.1 4.3 4.8 6.4 8.7 7.1.8.1 1.4.8 1.4 1.6-.2 3.2-2.1 5.4-4.8 6.6-1.6.7-1.1 3.1.7 3.1 8.2 0 13.5-3.2 17.5-6.8 1.4-1.2 3.4-1.2 4.8 0 4 3.6 9.3 6.8 17.5 6.8 1.8 0 2.3-2.4.7-3.1-2.7-1.2-4.6-3.4-4.8-6.6 0-.8.6-1.5 1.4-1.6 3.9-.7 7.6-2.8 8.7-7.1.3-1.2 1.4-1.9 2.6-1.8 5.2.5 9.9-1.2 13-4.2 1.1-1.1.5-2.9-1-3.2-3.6-.7-7.2-2.2-10.4-4.5-.7-.5-1-1.4-.6-2.2 1.1-2.5 3.6-8 3.6-14.8C73.2 26.4 63.8 16 50 16z"
            fill="#FFFFFF"
            stroke="#1E1E1E"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 4. Cut The Rope / Om Nom (Cute turquoise monster face)
    case 'om-nom':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Big Cartoon Eyes */}
          <circle cx="34" cy="42" r="17" fill="#FFFFFF" />
          <circle cx="66" cy="42" r="17" fill="#FFFFFF" />
          <circle cx="36" cy="43" r="8" fill="#18181B" />
          <circle cx="64" cy="43" r="8" fill="#18181B" />
          <circle cx="33" cy="39" r="2.8" fill="#FFFFFF" />
          <circle cx="61" cy="39" r="2.8" fill="#FFFFFF" />
          {/* Smiling Mouth with two teeth */}
          <path d="M 30 63 Q 50 82 70 63 Z" fill="#881337" />
          <polygon points="38,63 44,63 41,70" fill="#FFFFFF" />
          <polygon points="56,63 62,63 59,70" fill="#FFFFFF" />
        </svg>
      );

    // 5. Temple Run (Carved Ancient Gold Mask)
    case 'temple-run':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect x="25" y="20" width="50" height="60" rx="8" fill="#D97706" stroke="#78350F" strokeWidth="4" />
          {/* Fierce Carved Eyes */}
          <path d="M 32 36 L 45 42 L 32 46 Z" fill="#451A03" />
          <path d="M 68 36 L 55 42 L 68 46 Z" fill="#451A03" />
          {/* Tribal Nose */}
          <polygon points="50,42 44,56 56,56" fill="#92400E" />
          {/* Carved Grimace Teeth */}
          <rect x="34" y="62" width="32" height="10" rx="2" fill="#FEF3C7" stroke="#78350F" strokeWidth="2" />
          <line x1="42" y1="62" x2="42" y2="72" stroke="#78350F" strokeWidth="2" />
          <line x1="50" y1="62" x2="50" y2="72" stroke="#78350F" strokeWidth="2" />
          <line x1="58" y1="62" x2="58" y2="72" stroke="#78350F" strokeWidth="2" />
        </svg>
      );

    // 6. GoodNotes (Diagonal Yellow Pencil)
    case 'pencil':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <g transform="rotate(-45 50 50)">
            {/* Eraser */}
            <rect x="42" y="16" width="16" height="12" rx="3" fill="#FB7185" />
            {/* Metal collar */}
            <rect x="42" y="28" width="16" height="6" fill="#CBD5E1" />
            {/* Yellow Pencil Shaft */}
            <rect x="42" y="34" width="16" height="38" fill="#FACC15" />
            <line x1="47" y1="34" x2="47" y2="72" stroke="#EAB308" strokeWidth="1.5" />
            <line x1="53" y1="34" x2="53" y2="72" stroke="#CA8A04" strokeWidth="1.5" />
            {/* Wooden Tip */}
            <polygon points="42,72 58,72 50,86" fill="#FDE68A" />
            {/* Graphite Lead */}
            <polygon points="47,81 53,81 50,86" fill="#1E293B" />
          </g>
        </svg>
      );

    // 7. DoorDash Wing Icon
    case 'doordash':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 22 45 C 22 36 29 28 39 28 L 74 28 C 76 28 78 30 77 32 L 67 60 C 65 66 59 70 52 70 L 26 70 C 23 70 21 68 22 65 Z"
            fill="#FF3008"
          />
          <path
            d="M 33 46 C 33 42 36 39 40 39 L 60 39 L 55 52 L 38 52 C 35 52 33 49 33 46 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 8. Disney+ Logo Style (Arch + Plus)
    case 'disney-plus':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 20 68 C 28 32 60 22 80 34"
            fill="none"
            stroke="url(#disneyGlow)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <text x="32" y="66" fill="#FFFFFF" fontWeight="900" fontSize="22" fontFamily="sans-serif">
            D+
          </text>
          <defs>
            <linearGradient id="disneyGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 9. 1Password (Keyhole inside Security Badge)
    case 'onepassword':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="32" fill="#0284C7" />
          <circle cx="50" cy="50" r="24" fill="#0369A1" />
          {/* Keyhole */}
          <circle cx="50" cy="44" r="6" fill="#FFFFFF" />
          <polygon points="46,47 54,47 56,58 44,58" fill="#FFFFFF" />
        </svg>
      );

    // 10. Carrot / Fresh Food
    case 'carrot':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Leaves */}
          <path d="M 50 32 C 45 18 35 22 46 32 C 50 16 58 18 52 32 C 60 22 68 25 54 35" fill="#16A34A" />
          {/* Carrot body */}
          <path d="M 43 35 Q 50 34 57 35 Q 58 55 51 78 Q 48 55 43 35 Z" fill="#EA580C" />
          {/* Accent ridges */}
          <path d="M 47 45 Q 52 46 55 45" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
          <path d="M 45 57 Q 50 58 53 57" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 11. Swimmer
    case 'swimmer':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Head */}
          <circle cx="34" cy="40" r="7" fill="#FFFFFF" />
          {/* Torso & arm stroke */}
          <path
            d="M 39 44 Q 50 48 64 42 Q 68 36 74 38"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Water wave ripples */}
          <path
            d="M 20 60 Q 32 54 44 60 T 68 60 T 90 60"
            fill="none"
            stroke="#E0F2FE"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 16 72 Q 28 66 40 72 T 64 72 T 86 72"
            fill="none"
            stroke="#BAE6FD"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      );

    // 12. Star Trek USS Enterprise in Space
    case 'startrek':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Stars */}
          <circle cx="24" cy="30" r="1.5" fill="#FFFFFF" />
          <circle cx="76" cy="24" r="1.8" fill="#FDE047" />
          <circle cx="80" cy="70" r="1.2" fill="#FFFFFF" />
          {/* Saucer section */}
          <ellipse cx="50" cy="42" rx="18" ry="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
          <ellipse cx="50" cy="41" rx="9" ry="5" fill="#F8FAFC" />
          {/* Hull & Nacelles */}
          <path d="M 47 48 L 47 62 L 53 62 L 53 48 Z" fill="#CBD5E1" />
          <rect x="32" y="54" width="5" height="18" rx="2" fill="#38BDF8" />
          <rect x="63" y="54" width="5" height="18" rx="2" fill="#38BDF8" />
          <line x1="37" y1="62" x2="47" y2="58" stroke="#94A3B8" strokeWidth="2" />
          <line x1="63" y1="62" x2="53" y2="58" stroke="#94A3B8" strokeWidth="2" />
        </svg>
      );

    // 13. Marvel Hero Mask
    case 'marvel':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Iron Man helmet silhouette */}
          <path
            d="M 32 26 Q 50 20 68 26 L 72 54 L 62 76 L 50 80 L 38 76 L 28 54 Z"
            fill="#DC2626"
            stroke="#B91C1C"
            strokeWidth="2"
          />
          {/* Gold Faceplate */}
          <path
            d="M 36 34 Q 50 30 64 34 L 66 52 L 59 66 L 50 68 L 41 66 L 34 52 Z"
            fill="#FBBF24"
          />
          {/* Glowing Eyes */}
          <polygon points="40,46 47,48 41,51" fill="#FFFFFF" />
          <polygon points="60,46 53,48 59,51" fill="#FFFFFF" />
        </svg>
      );

    // 14. 3D Water Droplet
    case 'water-drop':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 50 22 C 50 22 28 50 28 64 C 28 76 38 84 50 84 C 62 84 72 76 72 64 C 72 50 50 22 50 22 Z"
            fill="url(#waterGrad)"
          />
          {/* Specular highlight */}
          <ellipse cx="43" cy="56" rx="4" ry="9" transform="rotate(-24 43 56)" fill="#FFFFFF" opacity="0.65" />
          <defs>
            <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 15. Butterfly
    case 'butterfly':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Blue Wings */}
          <path
            d="M 48 48 C 42 26 22 24 22 42 C 22 56 36 60 48 54 Z"
            fill="#0284C7"
            stroke="#0369A1"
            strokeWidth="1.5"
          />
          <path
            d="M 52 48 C 58 26 78 24 78 42 C 78 56 64 60 52 54 Z"
            fill="#0284C7"
            stroke="#0369A1"
            strokeWidth="1.5"
          />
          {/* Bottom small wings */}
          <path d="M 48 54 C 36 58 30 72 42 76 C 48 76 50 64 48 54 Z" fill="#0EA5E9" />
          <path d="M 52 54 C 64 58 70 72 58 76 C 52 76 50 64 52 54 Z" fill="#0EA5E9" />
          {/* Body */}
          <line x1="50" y1="36" x2="50" y2="72" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // 16. Bear App Logo
    case 'bear':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 32 34 Q 30 24 40 28 Q 50 24 60 28 Q 70 24 68 34 Q 78 48 72 66 Q 64 78 50 78 Q 36 78 28 66 Q 22 48 32 34 Z"
            fill="#334155"
          />
          <circle cx="42" cy="46" r="3" fill="#FFFFFF" />
          <circle cx="58" cy="46" r="3" fill="#FFFFFF" />
          <ellipse cx="50" cy="58" rx="5" ry="3.5" fill="#FFFFFF" />
        </svg>
      );

    // 17. Lake / Art Cursive
    case 'lake':
      return (
        <div className="w-full h-full flex items-center justify-center select-none">
          <span className="text-[#38BDF8] font-bold text-2xl tracking-normal italic font-serif">
            Lake
          </span>
        </div>
      );

    // 18. Etsy
    case 'etsy':
      return (
        <div className="w-full h-full flex items-center justify-center select-none">
          <span className="text-[#FFFFFF] font-serif font-black text-2xl tracking-tight italic">
            Etsy
          </span>
        </div>
      );

    // 19. Runkeeper (Sporty 'R')
    case 'runkeeper':
      return (
        <div className="w-full h-full flex items-center justify-center select-none">
          <span className="text-white font-black text-3xl font-sans tracking-tighter">
            R
          </span>
        </div>
      );

    // 20. Caribu
    case 'caribu':
      return (
        <div className="w-full h-full flex items-center justify-center select-none">
          <span className="text-[#FB923C] font-extrabold text-base tracking-widest font-sans uppercase">
            CARIBU
          </span>
        </div>
      );

    // 21. Botanical Sprout
    case 'sprout':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 50 78 Q 48 50 34 40 C 26 48 36 64 48 56"
            fill="#10B981"
            stroke="#059669"
            strokeWidth="1.5"
          />
          <path
            d="M 50 62 Q 54 44 68 34 C 76 42 66 56 52 52"
            fill="#34D399"
            stroke="#059669"
            strokeWidth="1.5"
          />
          <path d="M 50 82 L 50 54" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // 22. Cinema Reel & Film
    case 'cinema':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="28" fill="#1E293B" stroke="#F59E0B" strokeWidth="3" />
          <circle cx="50" cy="50" r="10" fill="#0F172A" />
          {/* Reel holes */}
          <circle cx="50" cy="32" r="5" fill="#0F172A" />
          <circle cx="65" cy="44" r="5" fill="#0F172A" />
          <circle cx="60" cy="62" r="5" fill="#0F172A" />
          <circle cx="40" cy="62" r="5" fill="#0F172A" />
          <circle cx="35" cy="44" r="5" fill="#0F172A" />
        </svg>
      );

    // 23. Vinyl Record & Neon Beats
    case 'vinyl':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="30" fill="#18181B" stroke="#27272A" strokeWidth="3" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="#27272A" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#27272A" strokeWidth="1" />
          <circle cx="50" cy="50" r="11" fill="#EC4899" />
          <circle cx="50" cy="50" r="3" fill="#FAFAFA" />
        </svg>
      );

    // 24. 4K Camera Lens with Reflection
    case 'camera-lens':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="30" fill="#18181B" stroke="#52525B" strokeWidth="4" />
          <circle cx="50" cy="50" r="22" fill="#09090B" />
          <circle cx="50" cy="50" r="14" fill="#0284C7" opacity="0.4" />
          {/* Glass glare arc */}
          <path
            d="M 34 38 A 18 18 0 0 1 64 34"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    // 25. Lightning Storm Cloud
    case 'storm':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Cloud */}
          <path
            d="M 32 54 C 24 54 20 46 26 40 C 24 30 36 24 44 30 C 50 22 66 22 72 32 C 80 34 82 46 74 54 Z"
            fill="#FFFFFF"
          />
          {/* Jagged Lightning Bolt */}
          <polygon points="50,48 42,64 50,64 45,80 62,58 52,58" fill="#FACC15" />
        </svg>
      );

    // 26. Coffee Cup
    case 'coffee':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 30 42 L 34 66 C 36 72 44 74 50 74 C 56 74 64 72 66 66 L 70 42 Z"
            fill="#FFFFFF"
          />
          {/* Cup Handle */}
          <path d="M 68 46 C 78 46 78 60 67 62" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          {/* Latte Art Heart */}
          <path d="M 46 52 C 44 48 40 48 40 52 C 40 58 50 63 50 63 C 50 63 60 58 60 52 C 60 48 56 48 54 52 Z" fill="#92400E" />
        </svg>
      );

    // 27. CPU Smart Core
    case 'cpu-chip':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect x="30" y="30" width="40" height="40" rx="6" fill="#0F172A" stroke="#F59E0B" strokeWidth="3" />
          <rect x="40" y="40" width="20" height="20" rx="3" fill="#F59E0B" />
          {/* Pins */}
          <line x1="38" y1="22" x2="38" y2="30" stroke="#F59E0B" strokeWidth="3" />
          <line x1="50" y1="22" x2="50" y2="30" stroke="#F59E0B" strokeWidth="3" />
          <line x1="62" y1="22" x2="62" y2="30" stroke="#F59E0B" strokeWidth="3" />
          <line x1="38" y1="70" x2="38" y2="78" stroke="#F59E0B" strokeWidth="3" />
          <line x1="50" y1="70" x2="50" y2="78" stroke="#F59E0B" strokeWidth="3" />
          <line x1="62" y1="70" x2="62" y2="78" stroke="#F59E0B" strokeWidth="3" />
        </svg>
      );

    // 28. Precision Scissors / Editing
    case 'editing':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="34" cy="68" r="8" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="66" cy="68" r="8" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="38" y1="62" x2="68" y2="28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <line x1="62" y1="62" x2="32" y2="28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="45" r="3" fill="#F43F5E" />
        </svg>
      );

    // 29. Gamepad Controller
    case 'gamepad':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 28 36 C 36 34 64 34 72 36 C 82 38 86 64 78 74 C 74 78 68 74 62 64 L 56 62 L 44 62 L 38 64 C 32 74 26 78 22 74 C 14 64 18 38 28 36 Z"
            fill="#FFFFFF"
          />
          {/* D-Pad */}
          <rect x="30" y="46" width="10" height="4" rx="1" fill="#7C3AED" />
          <rect x="33" y="43" width="4" height="10" rx="1" fill="#7C3AED" />
          {/* Action buttons */}
          <circle cx="66" cy="46" r="2.5" fill="#EC4899" />
          <circle cx="72" cy="49" r="2.5" fill="#3B82F6" />
        </svg>
      );

    // 30. Drafting Compass
    case 'compass':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="32" r="5" fill="#D97706" />
          <line x1="48" y1="36" x2="30" y2="76" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
          <line x1="52" y1="36" x2="70" y2="76" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
          <line x1="38" y1="56" x2="62" y2="56" stroke="#B45309" strokeWidth="3" />
        </svg>
      );

    // 31. Podcast Microphone
    case 'podcast-mic':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect x="42" y="26" width="16" height="28" rx="8" fill="#FFFFFF" />
          <path d="M 34 44 C 34 58 66 58 66 44" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="58" x2="50" y2="72" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="38" y1="72" x2="62" y2="72" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    // 32. Origami / Crafts
    case 'crafts':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,22 30,50 50,78 70,50" fill="#FFFFFF" opacity="0.95" />
          <polygon points="50,22 50,78 30,50" fill="#FED7AA" />
          <polygon points="50,22 70,50 64,54" fill="#FDBA74" />
        </svg>
      );

    // 33. Headphones / Dance
    case 'dance':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M 28 52 A 22 22 0 0 1 72 52" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <rect x="22" y="48" width="10" height="20" rx="5" fill="#FFFFFF" />
          <rect x="68" y="48" width="10" height="20" rx="5" fill="#FFFFFF" />
        </svg>
      );

    // 34. Magic Sparks
    case 'magic':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* 4-point star */}
          <path d="M 50 20 Q 50 45 25 50 Q 50 55 50 80 Q 50 55 75 50 Q 50 45 50 20 Z" fill="#FFFFFF" />
          <circle cx="70" cy="28" r="3.5" fill="#FDE047" />
          <circle cx="28" cy="70" r="3" fill="#FDE047" />
        </svg>
      );

    // 35. Painter's Palette
    case 'palette':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 50 22 C 32 22 22 34 22 52 C 22 70 34 78 52 78 C 66 78 78 72 78 58 C 78 50 72 50 72 44 C 72 38 78 36 74 28 C 68 22 58 22 50 22 Z"
            fill="#E0F2FE"
            stroke="#0284C7"
            strokeWidth="2"
          />
          <circle cx="36" cy="38" r="4.5" fill="#EF4444" />
          <circle cx="48" cy="32" r="4.5" fill="#F59E0B" />
          <circle cx="62" cy="36" r="4.5" fill="#10B981" />
          <circle cx="34" cy="54" r="4.5" fill="#3B82F6" />
          <circle cx="60" cy="62" r="5" fill="#0284C7" />
        </svg>
      );

    // 36. Code Brackets
    case 'code':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            d="M 38 34 L 24 50 L 38 66"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 62 34 L 76 50 L 62 66"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="54" y1="30" x2="46" y2="70" stroke="#00F298" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    // 37. Dumbbell / Fitness
    case 'dumbbell':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect x="22" y="38" width="8" height="24" rx="2" fill="#FFFFFF" />
          <rect x="30" y="42" width="6" height="16" rx="1" fill="#FFFFFF" />
          <rect x="70" y="38" width="8" height="24" rx="2" fill="#FFFFFF" />
          <rect x="64" y="42" width="6" height="16" rx="1" fill="#FFFFFF" />
          <line x1="36" y1="50" x2="64" y2="50" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    // 38. Landscape / Home
    case 'landscape':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* House */}
          <polygon points="50,26 28,44 72,44" fill="#FFFFFF" />
          <rect x="34" y="44" width="32" height="26" fill="#FFFFFF" />
          <rect x="44" y="52" width="12" height="18" fill="#0284C7" />
        </svg>
      );

    // 39. Constellation Chart
    case 'constellation':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="28" cy="40" r="3.5" fill="#FDE047" />
          <circle cx="48" cy="28" r="4" fill="#FFFFFF" />
          <circle cx="68" cy="44" r="3.5" fill="#FDE047" />
          <circle cx="58" cy="68" r="4.5" fill="#FFFFFF" />
          <circle cx="36" cy="64" r="3" fill="#FDE047" />
          <polyline points="28,40 48,28 68,44 58,68 36,64 28,40" fill="none" stroke="#DDD6FE" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      );

    // 40. Smiley Face
    case 'smiley':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="36" cy="42" r="5" fill="#FFFFFF" />
          <circle cx="64" cy="42" r="5" fill="#FFFFFF" />
          <path d="M 32 58 Q 50 74 68 58" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    // 41. Briefcase
    case 'briefcase':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M 40 32 L 40 26 C 40 24 44 24 50 24 C 56 24 60 24 60 26 L 60 32" fill="none" stroke="#FFFFFF" strokeWidth="3" />
          <rect x="24" y="32" width="52" height="38" rx="4" fill="#FFFFFF" />
          <line x1="24" y1="50" x2="76" y2="50" stroke="#1D4ED8" strokeWidth="2" />
          <rect x="46" y="47" width="8" height="6" rx="1" fill="#F59E0B" />
        </svg>
      );

    // 42. Mobile Device
    case 'mobile':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect x="32" y="20" width="36" height="60" rx="7" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <rect x="44" y="24" width="12" height="3" rx="1.5" fill="#FFFFFF" />
          <circle cx="50" cy="72" r="3" fill="#FFFFFF" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="24" fill="#FFFFFF" opacity="0.8" />
        </svg>
      );
  }
}
