import React from "react";

export const TECH_ICONS = [
  // Tier 1 - Flanking the center Defo icon
  {
    id: "java",
    name: "Java",
    category: "java",
    badge: "Enterprise & Backend",
    color: "#EA2D2E",
    bgGradient: "linear-gradient(135deg, #1B3A57 0%, #E76F00 50%, #EA2D2E 100%)",
    glowColor: "rgba(234, 45, 46, 0.4)",
    tier: 1,
    col: "left-inner",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
        <path
          d="M8.5 19.5c3.5 0.5 7-0.2 9-0.8-1 0.4-3.5 0.9-6.5 0.7-3.5-0.2-5-1.5-2.5 0.1z"
          fill="#5382A1"
        />
        <path
          d="M10.8 17.2c2.5 0.3 5.5-0.2 6.8-0.7-1.5 0.4-4 0.7-6 0.5-2.2-0.2-3.8-1.2-0.8 0.2z"
          fill="#E76F00"
        />
        <path
          d="M14.5 13.8c1.8 1.4-0.8 2.6-3.2 2.6-2.5 0-4.2-1.1-2.2-2.1 1.8-0.9 4-1.4 5.4-0.5z"
          fill="#5382A1"
        />
        <path
          d="M14.8 10.2c2.2 1.6-1.5 3-4.2 3.1-2.9 0.1-5-1.3-2.6-2.4 2.1-0.9 4.9-1.7 6.8-0.7z"
          fill="#E76F00"
        />
        <path
          d="M11.5 2c0.8 1.5-1.2 3.2-1.2 4.8 0 1.2 0.8 2.2 1.8 3.2-1.2-1.2-1.8-2.5-1.5-3.8 0.3-1.4 1.8-2.6 0.9-4.2z"
          fill="#E76F00"
        />
        <path
          d="M14.2 3.5c0.6 1.2-0.8 2.5-0.8 3.8 0 1 0.6 1.8 1.4 2.5-0.9-0.9-1.4-1.9-1.2-3 0.2-1.1 1.4-2 0.6-3.3z"
          fill="#5382A1"
        />
      </svg>
    ),
  },
  {
    id: "html",
    name: "HTML5",
    category: "html",
    badge: "Web Semantics & DOM",
    color: "#E34F26",
    bgGradient: "linear-gradient(135deg, #E44D26 0%, #F16529 100%)",
    glowColor: "rgba(228, 77, 38, 0.4)",
    tier: 1,
    col: "left-outer",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
        <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#E44D26" />
        <path d="M12 4.5v16l4.8-1.2L18.3 4.5H12z" fill="#F16529" />
        <path
          d="M7.8 7.5h8.4l-.2 2.2h-6l.2 2.3h5.6l-.5 5.5-3.3.9-3.3-.9-.2-2.3h2.2l.1 1.2 1.2.3 1.2-.3.2-2.4H7.6l.2-6.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "css",
    name: "CSS3",
    category: "css",
    badge: "Styling & Animations",
    color: "#1572B6",
    bgGradient: "linear-gradient(135deg, #1572B6 0%, #33A9DC 100%)",
    glowColor: "rgba(33, 150, 243, 0.4)",
    tier: 1,
    col: "left-far",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
        <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#1572B6" />
        <path d="M12 4.5v16l4.8-1.2L18.3 4.5H12z" fill="#33A9DC" />
        <path
          d="M16.2 7.5H7.8l.2 2.2h6l-.2 2.3H8.2l.2 2.3h5.4l-.5 5.5-3.3.9-3.3-.9-.2-2.3h-2.2l.3 4.5L12 23.5l6.2-1.5L19 7.5h-2.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "javascript",
    badge: "Dynamic Engines",
    color: "#F7DF1E",
    bgGradient: "linear-gradient(135deg, #F7DF1E 0%, #E5C50B 100%)",
    glowColor: "rgba(247, 223, 30, 0.4)",
    tier: 1,
    col: "left-closest",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M8.5 17.8c-.8 0-1.4-.4-1.8-1.1l1.1-.7c.2.4.5.6.8.6.4 0 .7-.2.7-.8V9.5h1.4v6.4c0 1.2-.7 1.9-2.2 1.9zm6.6 0c-1.4 0-2.3-.7-2.6-1.7l1.2-.6c.2.6.7 1 1.4 1 .6 0 1-.3 1-.7 0-.5-.4-.7-1.1-.9l-.4-.2c-1.2-.4-1.9-1-1.9-2 0-1.1.9-1.9 2.2-1.9 1.1 0 1.9.5 2.3 1.4l-1.1.7c-.2-.4-.6-.7-1.1-.7-.5 0-.8.3-.8.6 0 .4.3.6.9.8l.4.1c1.3.5 2 1.1 2 2.1 0 1.2-.9 2-2.4 2z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    id: "python",
    name: "Python",
    category: "python",
    badge: "AI, Data & Backend",
    color: "#3776AB",
    bgGradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    glowColor: "rgba(55, 118, 171, 0.4)",
    tier: 1,
    col: "right-closest",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
        <path
          d="M11.9 2C8.3 2 8.5 3.5 8.5 3.5v2.8h4.8v.7H6.2S3.8 6.7 3.8 10.3c0 3.6 2.1 3.4 2.1 3.4h1.3v-1.7s-.1-2.1 2-2.1h4.8s2 .1 2-2V4.4S16.2 2 11.9 2zm-1.4 1.4a.7.7 0 110 1.4.7.7 0 010-1.4z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c3.6 0 3.4-1.5 3.4-1.5v-2.8H10.7v-.7h7.1s2.4.3 2.4-3.3c0-3.6-2.1-3.4-2.1-3.4h-1.3v1.7s.1 2.1-2 2.1H10s-2-.1-2 2v3.5s-.2 2.4 4.1 2.4zm1.4-1.4a.7.7 0 110-1.4.7.7 0 010 1.4z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: "react",
    name: "React",
    category: "javascript",
    badge: "Component UI Engine",
    color: "#61DAFB",
    bgGradient: "linear-gradient(135deg, #20232A 0%, #16181D 100%)",
    glowColor: "rgba(97, 218, 251, 0.4)",
    tier: 1,
    col: "right-inner",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
        <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    badge: "Asynchronous Runtime",
    color: "#339933",
    bgGradient: "linear-gradient(135deg, #1C352D 0%, #0A1F18 100%)",
    glowColor: "rgba(51, 153, 51, 0.4)",
    tier: 1,
    col: "right-outer",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
        <path
          d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z"
          stroke="#339933"
          strokeWidth="1.5"
          fill="#1C352D"
        />
        <path
          d="M12 5.5l6.5 3.8v7.5L12 20.5l-6.5-3.8V9.3L12 5.5z"
          fill="#339933"
          opacity="0.8"
        />
        <path
          d="M10 9v6h2.5c1.5 0 2.5-.8 2.5-2.2 0-1.2-.8-1.9-2-2.1v-.1c1-.2 1.6-.9 1.6-1.8 0-1.3-1-1.8-2.3-1.8H10z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "javascript",
    badge: "Typed Superpowers",
    color: "#3178C6",
    bgGradient: "linear-gradient(135deg, #3178C6 0%, #235A97 100%)",
    glowColor: "rgba(49, 120, 198, 0.4)",
    tier: 1,
    col: "right-far",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M6 10.5h6v1.4H9.7v6.6H8.3v-6.6H6v-1.4zm9.3 5.4c.7.4 1.4.6 2.1.6.8 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.3-1-1.3-.4-2.1-1-2.1-2.1 0-1.3 1-2.2 2.6-2.2.8 0 1.5.2 2.1.5l-.4 1.2c-.5-.3-1.1-.4-1.7-.4-.8 0-1.1.4-1.1.8 0 .4.4.6 1.3.9 1.4.4 2.1 1.1 2.1 2.2 0 1.4-1.1 2.3-2.7 2.3-1 0-1.8-.3-2.5-.7l.4-1.3z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },

  // Tier 2 - Mid Canopy Arch
  {
    id: "cpp",
    name: "C++",
    category: "all",
    badge: "High Performance",
    color: "#00599C",
    bgGradient: "linear-gradient(135deg, #00599C 0%, #004482 100%)",
    glowColor: "rgba(0, 89, 156, 0.4)",
    tier: 2,
    col: "left-tier2-1",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
        <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="#00599C" />
        <path
          d="M10.5 8.5C8.8 8.5 7.5 9.8 7.5 12s1.3 3.5 3 3.5c1 0 1.8-.4 2.2-1l1.1.9c-.8 1-2 1.6-3.3 1.6C7.5 17 5.5 14.8 5.5 12s2-5 5-5c1.3 0 2.5.6 3.3 1.6l-1.1.9c-.4-.6-1.2-1-2.2-1zm5 2.5h1.2v-1.2h1v1.2h1.2v1h-1.2v1.2h-1v-1.2h-1.2v-1zm4 0h1.2v-1.2h1v1.2h1.2v1h-1.2v1.2h-1v-1.2h-1.2v-1z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    category: "backend",
    badge: "Containerization",
    color: "#2496ED",
    bgGradient: "linear-gradient(135deg, #0B3A60 0%, #2496ED 100%)",
    glowColor: "rgba(36, 150, 237, 0.4)",
    tier: 2,
    col: "left-tier2-2",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
        <path
          d="M22 12.5c-.3 0-1.8.1-2.7.7-.7.5-1.1 1.2-1.3 1.7-.8-.1-2.5-.1-3.6.6-.7.5-1.1 1.2-1.3 1.7-.8-.2-2.8-.2-3.8.7-.3.3-.6.7-.7 1.1H2.5c-.4 0-.8-.1-1.1-.3C2 21 6 22 10 22c7 0 11.5-4.5 12.5-9.5H22z"
          fill="#2496ED"
        />
        <rect x="7.5" y="11" width="2" height="2" rx=".3" fill="#FFFFFF" />
        <rect x="10" y="11" width="2" height="2" rx=".3" fill="#FFFFFF" />
        <rect x="12.5" y="11" width="2" height="2" rx=".3" fill="#FFFFFF" />
        <rect x="10" y="8.5" width="2" height="2" rx=".3" fill="#FFFFFF" />
        <rect x="12.5" y="8.5" width="2" height="2" rx=".3" fill="#FFFFFF" />
        <rect x="10" y="6" width="2" height="2" rx=".3" fill="#FFFFFF" />
        <circle cx="19" cy="14" r=".7" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git",
    category: "all",
    badge: "Distributed VCS",
    color: "#F05032",
    bgGradient: "linear-gradient(135deg, #F05032 0%, #D83B1E 100%)",
    glowColor: "rgba(240, 80, 50, 0.4)",
    tier: 2,
    col: "left-tier2-3",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
        <path
          d="M21.7 11.3l-9-9c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.3 2.3c.4-.1.9 0 1.2.3.4.4.5 1 .3 1.5l2.2 2.2c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5l-2-2v4.8c.2.2.3.4.3.7 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.2 1-1.4v-4.9c-.6-.2-1-.8-1-1.4 0-.4.1-.7.3-1L7.7 7.2 2.3 12.6c-.4.4-.4 1 0 1.4l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "rust",
    name: "Rust",
    category: "all",
    badge: "Memory Safe Systems",
    color: "#CE422B",
    bgGradient: "linear-gradient(135deg, #3B2A20 0%, #CE422B 100%)",
    glowColor: "rgba(206, 66, 43, 0.4)",
    tier: 2,
    col: "left-tier2-4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#E2B180" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="6" fill="#CE422B" />
        <path
          d="M10 8.5h2.5c1.1 0 1.8.6 1.8 1.5 0 .8-.5 1.3-1.2 1.4l1.5 2.6h-1.5l-1.3-2.3h-.6v2.3H10V8.5zm1.2 2.1h1.1c.5 0 .8-.3.8-.7s-.3-.7-.8-.7h-1.1v1.4z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "go",
    name: "Go Lang",
    category: "backend",
    badge: "Concurrency & Microservices",
    color: "#00ADD8",
    bgGradient: "linear-gradient(135deg, #00ADD8 0%, #007D9C 100%)",
    glowColor: "rgba(0, 173, 216, 0.4)",
    tier: 2,
    col: "right-tier2-1",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
        <path
          d="M3 13.5c0-3 2.5-5.5 5.5-5.5 2.1 0 3.9 1.2 4.8 2.9l-2 1.2C10.7 11.2 9.7 10.5 8.5 10.5c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.2 0 2.2-.7 2.7-1.7H8.5v-2h5.2v4.8h-1.5v-1c-.9 1.1-2.2 1.9-3.7 1.9-3 0-5.5-2.5-5.5-5.5zM18.5 8c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5 2.5-5.5 5.5-5.5zm0 2.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "sql",
    name: "PostgreSQL",
    category: "backend",
    badge: "Relational DB Engine",
    color: "#4169E1",
    bgGradient: "linear-gradient(135deg, #336791 0%, #1F425F 100%)",
    glowColor: "rgba(51, 103, 145, 0.4)",
    tier: 2,
    col: "right-tier2-2",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
        <path
          d="M12 2C7 2 5 4.5 5 8c0 3 1.5 5.5 4 6.5V20l3 2 3-2v-5.5c2.5-1 4-3.5 4-6.5 0-3.5-2-6-7-6zm-3.5 6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5S10.8 9.5 10 9.5 8.5 8.8 8.5 8zm7 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z"
          fill="#FFFFFF"
          opacity="0.9"
        />
      </svg>
    ),
  },
  {
    id: "swift",
    name: "Swift",
    category: "all",
    badge: "iOS & Apple Ecosystem",
    color: "#FA7343",
    bgGradient: "linear-gradient(135deg, #FA7343 0%, #E83526 100%)",
    glowColor: "rgba(250, 115, 67, 0.4)",
    tier: 2,
    col: "right-tier2-3",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
        <path
          d="M21.5 17c-2.3 3.6-6.4 5-10.5 5 5-2.2 7-6 7.5-8.5-1.8 1.5-4.5 2.5-7.5 2.5 5-3.5 7-8 7-8-3 3-7 4.5-11 4.5 5-4.5 7-10 7-10C9 4 5 7.5 2 12c4-2.5 8-3.5 11.5-3.5-3 2-6.5 5-9 9 4.5-2 9-2.5 13-1 1.5.5 3 1.5 4 2.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "kotlin",
    name: "Kotlin",
    category: "all",
    badge: "Modern Android & Multiplatform",
    color: "#7F52FF",
    bgGradient: "linear-gradient(135deg, #7F52FF 0%, #C711E1 50%, #E24462 100%)",
    glowColor: "rgba(127, 82, 255, 0.4)",
    tier: 2,
    col: "right-tier2-4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
        <path d="M22 22H2V2h20L12 12l10 10z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="2" y1="2" x2="22" y2="22">
            <stop stopColor="#7F52FF" />
            <stop offset="0.5" stopColor="#C711E1" />
            <stop offset="1" stopColor="#E24462" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // Tier 3 - Upper Wide Canopy Arch
  {
    id: "figma",
    name: "Figma",
    category: "css",
    badge: "UI/UX & Design Systems",
    color: "#F24E1E",
    bgGradient: "linear-gradient(135deg, #1E1E1E 0%, #2C2C2C 100%)",
    glowColor: "rgba(242, 78, 30, 0.4)",
    tier: 3,
    col: "top-1",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
        <circle cx="16" cy="12" r="3" fill="#1ABCFE" />
        <path d="M8 9h4v6H8a3 3 0 010-6z" fill="#0ACF83" />
        <path d="M8 3h4v6H8a3 3 0 010-6z" fill="#F24E1E" />
        <path d="M12 3h4a3 3 0 010 6h-4V3z" fill="#FF7262" />
        <path d="M12 9h4a3 3 0 010 6h-4V9z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "css",
    badge: "Utility-First Styling",
    color: "#38B2AC",
    bgGradient: "linear-gradient(135deg, #0F172A 0%, #064E3B 100%)",
    glowColor: "rgba(56, 178, 172, 0.4)",
    tier: 3,
    col: "top-2",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
        <path
          d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8 1.4 1.4 3 3 6.3 3 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.4-1.4-3-3-6.3-3zM6.6 12.5c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8 1.4 1.4 3 3 6.3 3 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.4-1.4-3-3-6.3-3z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "backend",
    badge: "Declarative Data Queries",
    color: "#E10098",
    bgGradient: "linear-gradient(135deg, #1B1124 0%, #E10098 100%)",
    glowColor: "rgba(225, 0, 152, 0.4)",
    tier: 3,
    col: "top-3",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
        <path
          d="M12 2l8.6 5v10L12 22l-8.6-5V7L12 2z"
          stroke="#E10098"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="2" r="2" fill="#E10098" />
        <circle cx="20.6" cy="7" r="2" fill="#E10098" />
        <circle cx="20.6" cy="17" r="2" fill="#E10098" />
        <circle cx="12" cy="22" r="2" fill="#E10098" />
        <circle cx="3.4" cy="17" r="2" fill="#E10098" />
        <circle cx="3.4" cy="7" r="2" fill="#E10098" />
        <path d="M12 2v20M3.4 7l17.2 10M3.4 17L20.6 7" stroke="#E10098" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "javascript",
    badge: "Fullstack React Framework",
    color: "#000000",
    bgGradient: "linear-gradient(135deg, #000000 0%, #1A1A1A 100%)",
    glowColor: "rgba(255, 255, 255, 0.25)",
    tier: 3,
    col: "top-4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#333333" strokeWidth="1" />
        <path
          d="M15 8v8m0 0l-5.5-7.5H8V16h1.5v-5.2l5 6.8c.2.2.4.4.5.4z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "linux",
    name: "Linux OS",
    category: "all",
    badge: "Kernel & Shell Scripts",
    color: "#FCC624",
    bgGradient: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
    glowColor: "rgba(252, 198, 36, 0.4)",
    tier: 3,
    col: "top-5",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
        <path
          d="M4 6h16v12H4V6zm2 2v2h2V8H6zm3 4h4v1H9v-1zm-3-1l2 2-2 2v-1l1-1-1-1v-1z"
          fill="#38BDF8"
        />
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#64748B" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "all",
    badge: "Cross-Platform Native Apps",
    color: "#02569B",
    bgGradient: "linear-gradient(135deg, #02569B 0%, #0175C2 100%)",
    glowColor: "rgba(1, 117, 194, 0.4)",
    tier: 3,
    col: "top-6",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
        <path d="M14 2L4 12l3 3L17 5h4L14 2zm0 8l-5 5 5 5h7l-5-5 5-5h-7z" fill="#0175C2" />
        <path d="M9 15l3 3-3 3-3-3 3-3z" fill="#13B9FD" />
      </svg>
    ),
  },
];
