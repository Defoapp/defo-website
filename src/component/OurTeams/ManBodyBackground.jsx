import React from 'react';

/**
 * ManBodyBackground:
 * Renders a stylized, executive illustration of a man's torso from neck to hip,
 * with broad shoulders, crisp collared dress shirt, tailored blazer, leather belt,
 * buckle, trousers, and the green Defo lanyard draped around the neck.
 */
export default function ManBodyBackground({ isDark = false, memberId = 'default' }) {
  const uid = `man-${memberId}`;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl z-0">
      <svg
        viewBox="0 0 340 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          {/* Subtle Ambient Studio Lighting Behind the Body */}
          <radialGradient id={`${uid}-studioGlow`} cx="50%" cy="30%" r="65%">
            <stop offset="0%" stopColor={isDark ? '#1a2235' : '#e2e8f0'} stopOpacity="0.85" />
            <stop offset="60%" stopColor={isDark ? '#0c101a' : '#f1f5f9'} stopOpacity="0.95" />
            <stop offset="100%" stopColor={isDark ? '#080b12' : '#e5e7eb'} stopOpacity="1" />
          </radialGradient>

          {/* Neck Skin Gradient */}
          <linearGradient id={`${uid}-neckSkin`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isDark ? '#4a372f' : '#edd0bd'} />
            <stop offset="65%" stopColor={isDark ? '#3d2c25' : '#e2beaa'} />
            <stop offset="100%" stopColor={isDark ? '#2e1f19' : '#cf9e86'} />
          </linearGradient>

          {/* Neck Shadow under Chin */}
          <linearGradient id={`${uid}-neckShadow`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Crisp Dress Shirt Gradient */}
          <linearGradient id={`${uid}-shirt`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={isDark ? '#1e283b' : '#f8fafc'} />
            <stop offset="50%" stopColor={isDark ? '#29354d' : '#ffffff'} />
            <stop offset="100%" stopColor={isDark ? '#1e283b' : '#f1f5f9'} />
          </linearGradient>

          {/* Shirt Collar Wings Gradient */}
          <linearGradient id={`${uid}-collarWing`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isDark ? '#2a3750' : '#ffffff'} />
            <stop offset="100%" stopColor={isDark ? '#1c2638' : '#e2e8f0'} />
          </linearGradient>

          {/* Tailored Suit Blazer Fabric Gradient */}
          <linearGradient id={`${uid}-suitFabric`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isDark ? '#121826' : '#1e293b'} />
            <stop offset="45%" stopColor={isDark ? '#0d131f' : '#182132'} />
            <stop offset="100%" stopColor={isDark ? '#070a12' : '#0f172a'} />
          </linearGradient>

          {/* Suit Lapel Highlights */}
          <linearGradient id={`${uid}-lapelLeft`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={isDark ? '#1e283d' : '#334155'} />
            <stop offset="100%" stopColor={isDark ? '#0d1320' : '#1e293b'} />
          </linearGradient>
          <linearGradient id={`${uid}-lapelRight`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isDark ? '#1e283d' : '#334155'} />
            <stop offset="100%" stopColor={isDark ? '#0d1320' : '#1e293b'} />
          </linearGradient>

          {/* Leather Belt Gradient */}
          <linearGradient id={`${uid}-belt`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="50%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          {/* Chrome / Silver Belt Buckle */}
          <linearGradient id={`${uid}-buckle`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#cbd5e1" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          {/* Trousers Gradient (Waist to Hip) */}
          <linearGradient id={`${uid}-pants`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isDark ? '#0a0d17' : '#0f172a'} />
            <stop offset="100%" stopColor={isDark ? '#05070c' : '#090d16'} />
          </linearGradient>

          {/* Defo Green Woven Lanyard Strap */}
          <linearGradient id={`${uid}-lanyard`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00f298" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#00d282" />
          </linearGradient>

          {/* Metallic Clasp Hardware */}
          <linearGradient id={`${uid}-hardware`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#94a3b8" />
            <stop offset="85%" stopColor="#475569" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          {/* Soft Drop Shadow for Collar & Lanyard */}
          <filter id={`${uid}-dropShadow`} x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ============================================================== */}
        {/* 1. STUDIO AMBIENT BACKDROP                                     */}
        {/* ============================================================== */}
        <rect width="340" height="410" fill={`url(#${uid}-studioGlow)`} />

        {/* ============================================================== */}
        {/* 2. SHOULDERS, ARMS & SUIT BODY SILHOUETTE                     */}
        {/* ============================================================== */}
        {/* Full Outer Torso: Shoulders sloping down to arms & chest */}
        <path
          d="M 142 26 
             C 105 32, 55 48, 16 78 
             C 6 84, 0 95, 0 108 
             L 0 410 
             L 340 410 
             L 340 108 
             C 340 95, 334 84, 324 78 
             C 285 48, 235 32, 198 26 
             Z"
          fill={`url(#${uid}-suitFabric)`}
        />

        {/* Left Arm Seam & Crease */}
        <path
          d="M 44 88 C 54 130, 56 185, 48 245 L 42 355"
          stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.18)'}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Right Arm Seam & Crease */}
        <path
          d="M 296 88 C 286 130, 284 185, 292 245 L 298 355"
          stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.18)'}
          strokeWidth="1.5"
          fill="none"
        />

        {/* Left Breast Pocket & Pocket Square */}
        <rect
          x="58"
          y="138"
          width="44"
          height="5"
          rx="1"
          fill={isDark ? '#1a2335' : '#334155'}
          stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.2)'}
          strokeWidth="0.8"
        />
        {/* Elegant White Silk Pocket Square fold */}
        <path
          d="M 68 138 L 78 128 L 86 135 L 90 130 L 96 138 Z"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* ============================================================== */}
        {/* 3. DRESS SHIRT (VISIBLE THROUGH THE V-OPENING)                 */}
        {/* ============================================================== */}
        {/* Shirt body filling the chest */}
        <path
          d="M 142 30 
             L 118 90 
             L 156 220 
             L 156 356 
             L 184 356 
             L 184 220 
             L 222 90 
             L 198 30 
             Z"
          fill={`url(#${uid}-shirt)`}
        />

        {/* Center Placket Band */}
        <rect
          x="165"
          y="65"
          width="10"
          height="291"
          fill={isDark ? '#232e44' : '#eef2f6'}
        />
        <line
          x1="165"
          y1="65"
          x2="165"
          y2="356"
          stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}
          strokeWidth="0.8"
        />
        <line
          x1="175"
          y1="65"
          x2="175"
          y2="356"
          stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}
          strokeWidth="0.8"
        />

        {/* Small Pearlescent Buttons on Shirt Placket */}
        {[95, 135, 175, 215, 255, 295, 335].map((btnY) => (
          <g key={btnY}>
            <circle
              cx="170"
              cy={btnY}
              r="2.5"
              fill={isDark ? '#94a3b8' : '#ffffff'}
              stroke="#64748b"
              strokeWidth="0.5"
            />
            <circle cx="170" cy={btnY} r="0.8" fill="#475569" />
          </g>
        ))}

        {/* ============================================================== */}
        {/* 4. NECK & THROAT                                              */}
        {/* ============================================================== */}
        {/* Natural Neck Cylinder */}
        <path
          d="M 142 0 
             L 142 26 
             C 142 38, 154 48, 170 48 
             C 186 48, 198 38, 198 26 
             L 198 0 
             Z"
          fill={`url(#${uid}-neckSkin)`}
        />
        {/* Subtle Chin Shadow at top */}
        <rect x="142" y="0" width="56" height="12" fill={`url(#${uid}-neckShadow)`} />

        {/* Clavicle / Suprasternal Hollow shadow */}
        <ellipse cx="170" cy="44" rx="4.5" ry="2" fill="#000000" opacity="0.12" />

        {/* ============================================================== */}
        {/* 5. SHIRT COLLAR (SHARP SPREAD COLLAR)                         */}
        {/* ============================================================== */}
        {/* Collar Stand Back Band */}
        <path
          d="M 142 20 C 154 26, 186 26, 198 20 L 198 25 C 186 31, 154 31, 142 25 Z"
          fill={isDark ? '#1a2436' : '#cbd5e1'}
        />

        {/* Left Collar Wing */}
        <path
          d="M 142 22 L 157 66 L 166 48 L 149 20 Z"
          fill={`url(#${uid}-collarWing)`}
          filter={`url(#${uid}-dropShadow)`}
        />
        {/* Right Collar Wing */}
        <path
          d="M 198 22 L 183 66 L 174 48 L 191 20 Z"
          fill={`url(#${uid}-collarWing)`}
          filter={`url(#${uid}-dropShadow)`}
        />

        {/* ============================================================== */}
        {/* 6. SUIT BLAZER NOTCH LAPELS (LAYERED OVER SHIRT)              */}
        {/* ============================================================== */}
        {/* Left Lapel */}
        <path
          d="M 140 28 
             L 116 88 
             L 128 94 
             L 158 205 
             L 156 356 
             L 140 356 
             L 134 220 
             L 104 96 
             Z"
          fill={`url(#${uid}-lapelLeft)`}
          filter={`url(#${uid}-dropShadow)`}
        />
        {/* Right Lapel */}
        <path
          d="M 200 28 
             L 224 88 
             L 212 94 
             L 182 205 
             L 184 356 
             L 200 356 
             L 206 220 
             L 236 96 
             Z"
          fill={`url(#${uid}-lapelRight)`}
          filter={`url(#${uid}-dropShadow)`}
        />

        {/* Blazer Button Stance (2-button jacket) */}
        <g>
          <circle cx="170" cy="215" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
          <circle cx="168.5" cy="213.5" r="0.8" fill="#94a3b8" />
          <circle cx="171.5" cy="213.5" r="0.8" fill="#94a3b8" />
          <circle cx="168.5" cy="216.5" r="0.8" fill="#94a3b8" />
          <circle cx="171.5" cy="216.5" r="0.8" fill="#94a3b8" />
        </g>
        <g>
          <circle cx="170" cy="265" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
          <circle cx="168.5" cy="263.5" r="0.8" fill="#94a3b8" />
          <circle cx="171.5" cy="263.5" r="0.8" fill="#94a3b8" />
          <circle cx="168.5" cy="266.5" r="0.8" fill="#94a3b8" />
          <circle cx="171.5" cy="266.5" r="0.8" fill="#94a3b8" />
        </g>

        {/* ============================================================== */}
        {/* 7. WAISTBAND, LEATHER BELT & BUCKLE                           */}
        {/* ============================================================== */}
        {/* Belt Band across Waist (y = 350 to 368) */}
        <rect x="0" y="350" width="340" height="18" fill={`url(#${uid}-belt)`} />
        {/* Belt Stitch Lines */}
        <line x1="0" y1="352" x2="340" y2="352" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="3 2" />
        <line x1="0" y1="366" x2="340" y2="366" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="3 2" />

        {/* Belt Loops */}
        <rect x="75" y="348" width="6" height="22" rx="1" fill="#3f3f46" stroke="#18181b" strokeWidth="0.5" />
        <rect x="259" y="348" width="6" height="22" rx="1" fill="#3f3f46" stroke="#18181b" strokeWidth="0.5" />

        {/* Chrome Metallic Belt Buckle */}
        <rect
          x="153"
          y="347"
          width="34"
          height="24"
          rx="3.5"
          fill={`url(#${uid}-buckle)`}
          stroke="#475569"
          strokeWidth="0.8"
          filter={`url(#${uid}-dropShadow)`}
        />
        {/* Inner Buckle Cutout */}
        <rect
          x="158"
          y="352"
          width="24"
          height="14"
          rx="2"
          fill="#18181b"
        />
        {/* Buckle Prong / Tongue */}
        <rect x="169" y="350" width="2.5" height="18" rx="1" fill="#ffffff" />

        {/* ============================================================== */}
        {/* 8. TROUSERS (BELOW BELT DOWN TO HIP, y = 368 to 410)          */}
        {/* ============================================================== */}
        <rect x="0" y="368" width="340" height="42" fill={`url(#${uid}-pants)`} />
        {/* Center Fly Seam */}
        <line
          x1="170"
          y1="368"
          x2="170"
          y2="410"
          stroke={isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.35)'}
          strokeWidth="1.2"
        />
        {/* Left & Right Pocket Seams */}
        <path d="M 40 368 C 48 380, 52 395, 54 410" stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.2)'} strokeWidth="1" fill="none" />
        <path d="M 300 368 C 292 380, 288 395, 286 410" stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.2)'} strokeWidth="1" fill="none" />

        {/* ============================================================== */}
        {/* 9. DEFO LANYARD STRAP DRAPED AROUND THE MAN'S NECK             */}
        {/* ============================================================== */}
        {/* Left Strap: Curves gracefully from behind collar down to chest */}
        <path
          d="M 143 14 
             C 146 32, 154 54, 166 74 
             L 171 74 
             C 160 54, 151 32, 148 14 
             Z"
          fill={`url(#${uid}-lanyard)`}
          filter={`url(#${uid}-dropShadow)`}
        />
        {/* Left Strap Center Stitch Highlight */}
        <path
          d="M 145.5 14 C 148.5 32, 156.5 54, 168.5 74"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.8"
          strokeDasharray="2 1"
          fill="none"
        />

        {/* Right Strap: Curves gracefully from behind collar down to chest */}
        <path
          d="M 197 14 
             C 194 32, 186 54, 174 74 
             L 169 74 
             C 180 54, 189 32, 192 14 
             Z"
          fill={`url(#${uid}-lanyard)`}
          filter={`url(#${uid}-dropShadow)`}
        />
        {/* Right Strap Center Stitch Highlight */}
        <path
          d="M 194.5 14 C 191.5 32, 183.5 54, 171.5 74"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.8"
          strokeDasharray="2 1"
          fill="none"
        />

        {/* Hardware: Metallic Crimp Joining the Straps */}
        <rect
          x="165"
          y="73"
          width="10"
          height="8"
          rx="1.5"
          fill={`url(#${uid}-hardware)`}
          stroke="#475569"
          strokeWidth="0.5"
          filter={`url(#${uid}-dropShadow)`}
        />
        <line x1="166" y1="77" x2="174" y2="77" stroke="#334155" strokeWidth="0.6" />

        {/* Swivel Ring */}
        <circle
          cx="170"
          cy="85"
          r="3.5"
          fill="none"
          stroke={`url(#${uid}-hardware)`}
          strokeWidth="1.5"
          filter={`url(#${uid}-dropShadow)`}
        />

        {/* Lobster Clasp Body */}
        <path
          d="M 168 87 
             C 168 87, 167 91, 167.5 94 
             C 168 97, 169.5 100, 170 100.5 
             C 170.5 100, 172 97, 172.5 94 
             C 173 91, 172 87, 172 87 
             Z"
          fill={`url(#${uid}-hardware)`}
          stroke="#475569"
          strokeWidth="0.5"
        />
        {/* Clasp Lever */}
        <rect x="171.5" y="91" width="2" height="4" rx="0.5" fill={`url(#${uid}-hardware)`} />
        {/* Clasp Hook Connecting directly into Badge Slot */}
        <path
          d="M 170 98.5 L 170 105"
          stroke="#334155"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
