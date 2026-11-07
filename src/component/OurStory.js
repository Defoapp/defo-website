import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";

import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import { useTheme } from "../context/ThemeContext";
import AmbientDecorations from "./Common/AmbientDecorations";

import infoGraphics from "../image/OurStory/illustration.svg";

// Timeline illustration images
import firstPicture from "../image/OurStory/timeline/timeline images/5573520_2928997 1.svg";
import secondPicture from "../image/OurStory/timeline/timeline images/12643952_5028426 1.svg";
import thirdPicture from "../image/OurStory/timeline/timeline images/image 2.svg";
import fourthPicture from "../image/OurStory/timeline/timeline images/join_Creator.svg";
import fifthPicture from "../image/OurStory/timeline/timeline images/updates.svg";

// Timeline bar icons
import firsticon from "../image/OurStory/timeline/bar icon/mingcute_code-fill.svg";
import secondicon from "../image/OurStory/timeline/bar icon/mdi_web.svg";
import thirdicon from "../image/OurStory/timeline/bar icon/arcticons_creator-studio.svg";
import fourthicon from "../image/OurStory/timeline/bar icon/Group 72.svg";
import fifthicon from "../image/OurStory/timeline/bar icon/mdi_web.svg";

// 4-Point Star Sparkle SVG Icon
const SparkleStarIcon = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

// 8 Directional Supernova Ray Beams
const BLAST_RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

// 24 Pre-computed blast fireworks particles (360 degree radial explosion)
const BLAST_PARTICLES = [
  { id: 1, deg: 0, dist: 65, size: 7, color: "#00f298", delay: 0 },
  { id: 2, deg: 15, dist: 95, size: 10, color: "#38bdf8", delay: 0.12, isStar: true },
  { id: 3, deg: 30, dist: 55, size: 6, color: "#fbbf24", delay: 0.04 },
  { id: 4, deg: 45, dist: 110, size: 12, color: "#ffffff", delay: 0.22, isStar: true },
  { id: 5, deg: 60, dist: 75, size: 8, color: "#c084fc", delay: 0.18 },
  { id: 6, deg: 75, dist: 90, size: 9, color: "#00f298", delay: 0.08, isStar: true },
  { id: 7, deg: 90, dist: 60, size: 6, color: "#38bdf8", delay: 0.15 },
  { id: 8, deg: 105, dist: 105, size: 11, color: "#fbbf24", delay: 0.06, isStar: true },
  { id: 9, deg: 120, dist: 70, size: 7, color: "#ffffff", delay: 0.24 },
  { id: 10, deg: 135, dist: 100, size: 10, color: "#00f298", delay: 0.1, isStar: true },
  { id: 11, deg: 150, dist: 58, size: 6, color: "#c084fc", delay: 0.16 },
  { id: 12, deg: 165, dist: 88, size: 9, color: "#38bdf8", delay: 0.05, isStar: true },
  { id: 13, deg: 180, dist: 62, size: 7, color: "#00f298", delay: 0.14 },
  { id: 14, deg: 195, dist: 96, size: 10, color: "#fbbf24", delay: 0.07, isStar: true },
  { id: 15, deg: 210, dist: 54, size: 6, color: "#ffffff", delay: 0.2 },
  { id: 16, deg: 225, dist: 108, size: 11, color: "#c084fc", delay: 0.11, isStar: true },
  { id: 17, deg: 240, dist: 72, size: 8, color: "#00f298", delay: 0.09 },
  { id: 18, deg: 255, dist: 92, size: 9, color: "#38bdf8", delay: 0.17, isStar: true },
  { id: 19, deg: 270, dist: 60, size: 6, color: "#fbbf24", delay: 0.03 },
  { id: 20, deg: 285, dist: 104, size: 10, color: "#ffffff", delay: 0.21, isStar: true },
  { id: 21, deg: 300, dist: 68, size: 7, color: "#00f298", delay: 0.13 },
  { id: 22, deg: 315, dist: 112, size: 12, color: "#c084fc", delay: 0.19, isStar: true },
  { id: 23, deg: 330, dist: 56, size: 6, color: "#38bdf8", delay: 0.08 },
  { id: 24, deg: 345, dist: 86, size: 9, color: "#fbbf24", delay: 0.16, isStar: true },
];

function TimelineEndSparkle({ isDark, spineScaleY }) {
  // Dynamic scaling and opacity linked to laser line scroll completion
  const blastScale = useTransform(spineScaleY, [0.65, 0.95], [0.75, 1.05]);
  const blastOpacity = useTransform(spineScaleY, [0.55, 0.9], [0.4, 1]);
  const [burstActive, setBurstActive] = useState(false);

  const handleOrbClick = () => {
    setBurstActive(true);
    setTimeout(() => setBurstActive(false), 900);
  };

  return (
    <>
      {/* Central Flash Aura & Blast Shockwaves (at the exact terminus tip of the laser line) */}
      <div className="absolute bottom-0 left-7 sm:left-8 lg:left-1/2 -translate-x-1/2 translate-y-1/2 z-30 flex items-center justify-center">
        <motion.div
          style={{ scale: blastScale, opacity: blastOpacity }}
          className="relative flex items-center justify-center"
        >
          {/* Connection Collar at exact line terminus */}
          <div className="absolute -top-4 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_#ffffff,0_0_20px_#00f298] animate-ping" />

          {/* Large Ambient Radial Glow Flare */}
          <div
            className="absolute w-52 h-52 rounded-full blur-3xl opacity-80 pointer-events-none animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(0,242,152,0.7) 0%, rgba(56,189,248,0.5) 35%, rgba(192,132,252,0.3) 65%, transparent 85%)",
            }}
          />

          {/* 8 Supernova Ray Beams */}
          {BLAST_RAYS.map((deg, i) => (
            <motion.div
              key={`ray-${i}`}
              animate={{
                scaleY: [0.4, 1.35, 0.4],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
              className="absolute w-[2px] h-32 origin-center pointer-events-none"
              style={{
                transform: `rotate(${deg}deg)`,
                background:
                  "linear-gradient(to bottom, transparent, #00f298, #ffffff, #38bdf8, transparent)",
                filter: "drop-shadow(0 0 6px #00f298)",
              }}
            />
          ))}

          {/* Concentric Expanding Shockwaves */}
          <motion.div
            animate={{ scale: [0.3, 3.5], opacity: [0.95, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            className="absolute w-16 h-16 rounded-full border-2 border-[#00f298] shadow-[0_0_20px_#00f298] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [0.3, 2.9], opacity: [0.85, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.55 }}
            className="absolute w-16 h-16 rounded-full border-2 border-cyan-400 shadow-[0_0_16px_#38bdf8] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [0.3, 2.3], opacity: [0.75, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
            className="absolute w-16 h-16 rounded-full border border-purple-400 shadow-[0_0_14px_#c084fc] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [0.3, 1.7], opacity: [0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.65 }}
            className="absolute w-16 h-16 rounded-full border border-amber-400 shadow-[0_0_12px_#fbbf24] pointer-events-none"
          />

          {/* Interactive Blast Shockwave on Click */}
          {burstActive && (
            <motion.div
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 4.5, opacity: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="absolute w-20 h-20 rounded-full border-4 border-white shadow-[0_0_35px_#00f298] pointer-events-none z-30"
            />
          )}

          {/* 360-Degree Radiating Blast Sparkle Particles */}
          {BLAST_PARTICLES.map((p) => {
            const rad = (p.deg * Math.PI) / 180;
            const targetX = Math.round(Math.cos(rad) * p.dist);
            const targetY = Math.round(Math.sin(rad) * p.dist);

            return (
              <motion.div
                key={p.id}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: [0, targetX],
                  y: [0, targetY],
                  scale: [0, p.isStar ? 1.6 : 1.3, 0],
                  opacity: [1, 1, 0],
                  rotate: p.isStar ? [0, 180] : 0,
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute pointer-events-none flex items-center justify-center"
                style={{
                  width: p.size,
                  height: p.size,
                  color: p.color,
                }}
              >
                {p.isStar ? (
                  <SparkleStarIcon className="w-full h-full drop-shadow-[0_0_10px_currentColor]" />
                ) : (
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      backgroundColor: p.color,
                      boxShadow: `0 0 10px ${p.color}, 0 0 18px ${p.color}`,
                    }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Central Luminous Energy Core Orb (Interactive Micro-Action) */}
          <motion.button
            whileHover={{ scale: 1.25, rotate: 15 }}
            whileTap={{ scale: 0.85 }}
            onClick={handleOrbClick}
            className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f298] via-cyan-300 to-white flex items-center justify-center shadow-[0_0_25px_#00f298,0_0_45px_#38bdf8,0_0_70px_#c084fc] z-20 cursor-pointer pointer-events-auto group focus:outline-none"
            title="Click for celebratory fireworks burst!"
          >
            {/* Inner 4-point Diamond Star */}
            <SparkleStarIcon
              className="w-5 h-5 text-slate-950 animate-spin group-hover:text-emerald-900"
              style={{ animationDuration: "6s" }}
            />
            {/* Floating Spark Pop on Click */}
            <AnimatePresence>
              {burstActive && (
                <motion.span
                  initial={{ opacity: 1, y: 0, scale: 0.8 }}
                  animate={{ opacity: 0, y: -30, scale: 1.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute -top-7 text-xs font-mono font-black text-[#00f298] whitespace-nowrap drop-shadow-[0_0_10px_#00f298] pointer-events-none"
                >
                  🎉 Sparkle Blast!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

const MILESTONES = [
  {
    id: "m1",
    year: "2022",
    date: "Jul 22, 2022",
    phase: "The Foundation",
    title: "The Inception of Defo",
    description:
      "A passionate team with a bold dream laid the bedrock for what would evolve into the premier destination for edutainment and valuable short-form video discovery.",
    icon: firsticon,
    image: firstPicture,
    accentGrad: "from-emerald-400 to-teal-500",
    glowColor: "rgba(0, 242, 152, 0.45)",
    tagClass: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
    highlightWord: "Defo Inception",
    stat: "🌱 The Genesis • Day 1",
    takeaway: "Foundational vision laid for high-quality, ad-free micro-learning reels.",
    highlights: [
      "Codified 100% ad-free micro-learning edutainment vision",
      "Assembled multidisciplinary founding tech & creative team",
      "Architected initial high-throughput prototype streaming engine",
    ],
    actionLabel: "Read Genesis Story",
    actionLink: "#timeline-section",
  },
  {
    id: "m2",
    year: "2022",
    date: "Aug 30, 2022",
    phase: "Web Presence",
    title: "Official Web Platform Reveal",
    description:
      "Witness the grand reveal of Defo's infotainment website — a responsive, modern platform engineered to deliver a seamless and engaging browsing experience.",
    icon: secondicon,
    image: secondPicture,
    accentGrad: "from-cyan-400 to-blue-500",
    glowColor: "rgba(56, 189, 248, 0.45)",
    tagClass: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border-cyan-500/30",
    highlightWord: "Infotainment Web",
    stat: "🌐 Global Web Presence",
    takeaway: "Sleek, responsive web showcase launched for knowledge discovery.",
    highlights: [
      "Responsive edutainment portal launched globally",
      "Sub-second video delivery pipeline integration",
      "Dark & Bright adaptive UI designed from day one",
    ],
    actionLabel: "Explore Web Platform",
    actionLink: "/",
  },
  {
    id: "m3",
    year: "2023",
    date: "Jan 19, 2023",
    phase: "Flagship Milestone",
    title: "Groundbreaking Mobile App Launch",
    description:
      "The defining moment! Defo officially launched its mobile app on app stores, bringing high-quality, ad-free short videos and joyful learning to audiences worldwide.",
    icon: thirdicon,
    image: thirdPicture,
    accentGrad: "from-purple-400 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.45)",
    tagClass: "bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30",
    highlightWord: "App Store Debut",
    stat: "📱 Mobile App Live",
    takeaway: "Ad-free short video experience launched across Google Play & iOS App Store.",
    highlights: [
      "Official Google Play Store release with 4.8★ launch rating",
      "Bingeable bite-sized infotainment reels recommendation feed",
      "Instant video bookmarking & personalized curiosity topics",
    ],
    actionLabel: "Get App on Google Play",
    actionLink: "https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1",
    actionExternal: true,
  },
  {
    id: "m4",
    year: "2023",
    date: "Jun 05, 2023",
    phase: "Creator Ecosystem",
    title: "Empowering Voices with “Join Creator”",
    description:
      "Opening doors to passionate educators, artists, and creators globally. Empowering creators to broadcast meaningful infotainment and nurture their communities.",
    icon: fourthicon,
    image: fourthPicture,
    accentGrad: "from-amber-400 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.45)",
    tagClass: "bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30",
    highlightWord: "Creator Studio",
    stat: "🎨 Creator Portal Open",
    takeaway: "Empowering educators, subject experts, and creative minds globally.",
    highlights: [
      "Dedicated portal for knowledge creators & domain experts",
      "Real-time creator analytics and engagement dashboards",
      "Community curation tools ensuring high-signal edutainment",
    ],
    actionLabel: "Visit Creator Studio",
    actionLink: "https://creator.yesdefo.com/",
    actionExternal: true,
  },
  {
    id: "m5",
    year: "2024",
    date: "Jan 01, 2024",
    phase: "Next-Gen Horizon",
    title: "Next-Gen Web & Architecture Overhaul",
    description:
      "A complete architectural and visual evolution. Faster page loads, interactive developer studios, and enhanced media discovery across all touchpoints.",
    icon: fifthicon,
    image: fifthPicture,
    accentGrad: "from-emerald-400 via-teal-400 to-cyan-400",
    glowColor: "rgba(52, 211, 153, 0.45)",
    tagClass: "bg-teal-500/15 text-teal-600 dark:text-teal-300 border-teal-500/30",
    highlightWord: "Platform 2.0",
    stat: "⚡ Platform Architecture 2.0",
    takeaway: "Interactive developer tools, 3D showcases, and ultra-snappy performance.",
    highlights: [
      "40% faster initial bundle load via modern asset chunking",
      "Interactive 3D timeline and micro-interactions system",
      "Next-generation media discovery engine and reactive UI",
    ],
    actionLabel: "Experience 2.0 Showcase",
    actionLink: "#timeline-section",
  },
];

const ERA_FILTERS = [
  { id: "all", label: "All Milestones" },
  { id: "2022", label: "2022 • The Genesis" },
  { id: "2023", label: "2023 • Mobile & Creators" },
  { id: "2024", label: "2024 • Evolution" },
];

const OurStory = () => {
  const { isDark } = useTheme();
  const [selectedEra, setSelectedEra] = useState("all");
  const [expandedMilestones, setExpandedMilestones] = useState({});
  const [activeCelebration, setActiveCelebration] = useState({});
  const [reactions, setReactions] = useState({
    m1: 38,
    m2: 52,
    m3: 89,
    m4: 67,
    m5: 114,
  });
  const timelineRef = useRef(null);

  const toggleMilestone = (id) => {
    setExpandedMilestones((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCelebrate = (id, e) => {
    e?.stopPropagation();
    setReactions((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setActiveCelebration((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setActiveCelebration((prev) => ({ ...prev, [id]: false }));
    }, 700);
  };

  // Active Scroll-linked laser spine: tracks timeline line from center to center
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 50%", "end 50%"],
  });

  const spineScaleY = useSpring(scrollYProgress, {
    stiffness: 350,
    damping: 35,
    restDelta: 0.0005,
  });

  const filteredMilestones = MILESTONES.filter((m) =>
    selectedEra === "all" ? true : m.year === selectedEra
  );

  return (
    <div
      className="relative w-full min-h-screen transition-colors duration-500 flex flex-col justify-between overflow-x-hidden sparkle-page-bg text-slate-900 dark:text-white"
    >
      {/* Universal Fixed Navbar */}
      <Navbar />

      <main className="relative w-full flex-1">
        {/* =================================================================== */}
        {/* AMBIENT AURORA BACKGROUND MESH                                      */}
        {/* =================================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Emerald Brand Spotlight */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[650px] rounded-full blur-[130px] opacity-65 dark:opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(0,242,152,0.38) 0%, rgba(56,189,248,0.2) 50%, transparent 75%)",
            }}
          />
          {/* Middle Cyan Halo */}
          <div
            className="absolute top-1/3 -left-20 sm:left-[5%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[120px] opacity-60 dark:opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(14,165,233,0.18) 50%, transparent 75%)",
            }}
          />
          {/* Right Violet Flare */}
          <div
            className="absolute top-2/3 -right-20 sm:right-[5%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[120px] opacity-60 dark:opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(192,132,252,0.35) 0%, rgba(236,72,153,0.18) 50%, transparent 75%)",
            }}
          />
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(15, 23, 42, 0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Ambient Floating Sparkles */}
        <AmbientDecorations variant="showcase" />

        {/* =================================================================== */}
        {/* HERO INTRO SECTION WITH FLOATING 3D CARDS & AMBIENT AURA            */}
        {/* =================================================================== */}
        <section className="relative z-10 w-full pt-12 sm:pt-16 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left Graphic Showcase with Floating Badges */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative group max-w-md w-full"
              >
                {/* Rotating Cosmic Glow Aura */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-tr from-[#00f298]/30 via-cyan-500/25 to-purple-500/30 rounded-[36px] blur-2xl opacity-75 pointer-events-none"
                />

                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden transition-colors duration-500 ${
                    isDark
                      ? "bg-slate-900/80 border-white/10"
                      : "bg-white/95 border-slate-200/90 shadow-xl"
                  }`}
                >
                  <img
                    className="w-full h-auto max-h-80 object-contain mx-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    src={infoGraphics}
                    alt="Our Story Illustration"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Right Story Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6"
                style={{ fontFamily: "Outfit, var(--font-display), sans-serif" }}
              >
                Pioneering the Art of <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-[#00f298] dark:via-teal-300 dark:to-cyan-400">
                  Infotainment
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className={`text-base sm:text-lg leading-relaxed mb-6 font-normal ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <strong className={isDark ? "text-white" : "text-slate-900"}>
                  At Defo,
                </strong>{" "}
                we believe learning should never feel like a chore. Born from a vision
                to transform idle digital scrolling into enriching micro-learning, our
                journey is a testament to perseverance, creative technology, and a
                deep passion for empowering curious minds worldwide.
              </motion.p>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* TIMELINE SECTION HEADER & ERA FILTER TABS WITH SPRING SLIDER        */}
        {/* =================================================================== */}
        <section
          id="timeline-section"
          className="relative z-10 w-full pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              The Journey Through Time
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              From our humble startup beginnings to launching full-scale mobile
              applications and interactive learning studios, explore the defining
              chapters of Defo.
            </motion.p>
          </div>

          {/* Era Filter Pills with Smooth Spring Active Slider */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 relative">
            {ERA_FILTERS.map((era) => {
              const isActive = selectedEra === era.id;
              return (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(era.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "text-white dark:text-slate-950 font-black"
                      : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelineFilter"
                      className="absolute inset-0 rounded-full bg-slate-900 dark:bg-emerald-400 shadow-lg shadow-emerald-500/25"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{era.label}</span>
                </button>
              );
            })}
          </div>

          {/* ================================================================= */}
          {/* THE MODERN TIMELINE (ALTERNATING ZIG-ZAG WITH ZERO OVERLAP)        */}
          {/* ================================================================= */}
          <div ref={timelineRef} className="relative w-full max-w-6xl mx-auto pt-8 pb-32 sm:pb-44">
            {/* Luminous Central Spine Base Guide (Desktop: Center 50% | Mobile: Left 28px) */}
            <div className="absolute top-0 bottom-0 w-[2px] rounded-full left-7 sm:left-8 lg:left-1/2 -translate-x-1/2 bg-slate-200 dark:bg-white/10 pointer-events-none" />

            {/* Dynamic Scroll-Linked Luminous Laser Line */}
            <motion.div
              style={{ scaleY: spineScaleY, originY: 0 }}
              className="absolute top-0 bottom-0 w-[3px] rounded-full left-7 sm:left-8 lg:left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#00f298] via-cyan-400 via-purple-400 to-[#00f298] shadow-[0_0_15px_rgba(0,242,152,0.55)] pointer-events-none"
            />

            {/* Traveling Laser Spark Particle */}
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="absolute w-[8px] h-24 -left-[2.5px] rounded-full bg-gradient-to-b from-transparent via-[#00f298] to-transparent blur-[2px] pointer-events-none left-7 sm:left-8 lg:left-1/2 -translate-x-1/2"
            />

            <div className="space-y-16 sm:space-y-24 relative z-10">
              <AnimatePresence mode="popLayout">
                {filteredMilestones.map((item, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative flex flex-col lg:flex-row items-center justify-between w-full group ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* ======================================================= */}
                      {/* CENTER SPINE NODE WITH ILLUMINATED RING & RADAR PULSE   */}
                      {/* ======================================================= */}
                      <div className="absolute top-8 sm:top-10 lg:top-1/2 lg:-translate-y-1/2 left-7 sm:left-8 lg:left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
                        <motion.div
                          whileHover={{ scale: 1.18, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 380, damping: 20 }}
                          className="cursor-pointer"
                        >
                          <div className="relative flex items-center justify-center">
                            {/* Expanding Radar Ping Waves */}
                            <span
                              className="absolute w-12 h-12 rounded-2xl animate-ping opacity-40 pointer-events-none"
                              style={{ backgroundColor: item.glowColor }}
                            />
                            {/* Outer Glow Halo */}
                            <div
                              className="absolute w-14 h-14 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none"
                              style={{ backgroundColor: item.glowColor }}
                            />
                            {/* Node Circle Frame */}
                            <div
                              className={`relative w-12 h-12 rounded-2xl flex items-center justify-center border-2 shadow-xl transition-all duration-300 ${
                                isDark
                                  ? "bg-slate-950 border-white/20 group-hover:border-emerald-400 shadow-black/60"
                                  : "bg-white border-slate-300 group-hover:border-emerald-500 shadow-md"
                              }`}
                            >
                              <img
                                src={item.icon}
                                alt={item.title}
                                className={`w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110 ${
                                  isDark ? "invert brightness-200" : ""
                                }`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* ======================================================= */}
                      {/* DESKTOP LUMINOUS CONNECTOR BEAMS (SOLID 56PX DUAL ARMS) */}
                      {/* Connects Center Node to BOTH Left Card & Right Card     */}
                      {/* ======================================================= */}
                      {/* Left Horizontal Beam (Spine 50% to Left Card calc(50%-56px)) */}
                      <div className="hidden lg:block absolute left-[calc(50%-56px)] top-1/2 -translate-y-1/2 w-[57px] h-[2.5px] pointer-events-none z-20 group-hover:h-[3px] transition-all duration-300">
                        <div
                          className={`w-full h-full rounded-l-full bg-gradient-to-r ${
                            isEven
                              ? "from-emerald-400 via-teal-300 to-[#00f298] shadow-[0_0_12px_rgba(0,242,152,0.7)]"
                              : "from-cyan-400 via-sky-300 to-blue-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                          }`}
                        />
                        {/* Terminal Node Dot Welded onto Left Card Border */}
                        <span
                          className={`absolute -top-[3px] -left-1 w-2.5 h-2.5 rounded-full animate-ping ${
                            isEven ? "bg-emerald-300 shadow-[0_0_8px_#00f298]" : "bg-cyan-300 shadow-[0_0_8px_#38bdf8]"
                          }`}
                        />
                        <span
                          className={`absolute -top-[3px] -left-1 w-2.5 h-2.5 rounded-full border border-white/80 ${
                            isEven ? "bg-emerald-400" : "bg-cyan-400"
                          }`}
                        />
                      </div>

                      {/* Right Horizontal Beam (Spine 50% to Right Card calc(50%+56px)) */}
                      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-[57px] h-[2.5px] pointer-events-none z-20 group-hover:h-[3px] transition-all duration-300">
                        <div
                          className={`w-full h-full rounded-r-full bg-gradient-to-r ${
                            isEven
                              ? "from-[#00f298] via-teal-300 to-emerald-400 shadow-[0_0_12px_rgba(0,242,152,0.7)]"
                              : "from-blue-400 via-sky-300 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                          }`}
                        />
                        {/* Terminal Node Dot Welded onto Right Card Border */}
                        <span
                          className={`absolute -top-[3px] -right-1 w-2.5 h-2.5 rounded-full animate-ping ${
                            isEven ? "bg-emerald-300 shadow-[0_0_8px_#00f298]" : "bg-cyan-300 shadow-[0_0_8px_#38bdf8]"
                          }`}
                        />
                        <span
                          className={`absolute -top-[3px] -right-1 w-2.5 h-2.5 rounded-full border border-white/80 ${
                            isEven ? "bg-emerald-400" : "bg-cyan-400"
                          }`}
                        />
                      </div>

                      {/* ======================================================= */}
                      {/* TIMELINE CONTENT CARD (EXACT 56PX CLEARANCE FROM SPINE)  */}
                      {/* ======================================================= */}
                      <motion.div
                        whileHover={{ y: -6, scale: 1.012 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="w-full lg:w-[calc(50%-56px)] pl-14 sm:pl-16 lg:pl-0 relative group/card"
                      >
                        {/* Mobile & Tablet Connector Branch (Aligned to Spine Node Center) */}
                        <div className="block lg:hidden absolute left-7 sm:left-8 top-14 sm:top-16 w-7 sm:w-8 h-[2.5px] bg-gradient-to-r from-emerald-400 to-[#00f298] shadow-[0_0_10px_rgba(0,242,152,0.7)] pointer-events-none">
                          <span className="absolute -top-[3px] right-0 w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                          <span className="absolute -top-[3px] right-0 w-2 h-2 rounded-full bg-emerald-400" />
                        </div>

                        {/* The Card */}
                        <div
                          className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${
                            isDark
                              ? "bg-slate-900/90 backdrop-blur-xl border-white/10 hover:border-emerald-400/50 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.65)] hover:shadow-[0_20px_50px_-10px_rgba(0,242,152,0.18)]"
                              : "bg-white border-slate-200/90 hover:border-emerald-500/50 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_45px_-10px_rgba(16,185,129,0.18)]"
                          }`}
                        >
                          {/* Dynamic Specular Sweep Ray */}
                          <div className="absolute inset-0 -translate-x-full group-hover/card:translate-x-[250%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-white/[0.06] to-transparent pointer-events-none -skew-x-12 z-20" />

                          {/* Card Top Accent Glow Line */}
                          <div
                            className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.accentGrad} opacity-80 group-hover/card:opacity-100 transition-opacity`}
                          />

                          {/* Card Header Meta Tags & Interactive Reaction */}
                          <div className="flex flex-wrap items-center gap-2 mb-4 relative z-10">
                            {/* Mobile-friendly Year Pill */}
                            <span className="lg:hidden px-3 py-1 rounded-full text-xs font-mono font-black bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm">
                              {item.year}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${item.tagClass}`}
                            >
                              {item.phase}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                                isDark
                                  ? "bg-white/10 text-slate-300"
                                  : "bg-slate-100 text-slate-700"
                              }`}
                            >
                              📅 {item.date}
                            </span>

                            {/* Interactive Celebrate Reaction Counter with Floating Particle Pop */}
                            <div className="relative ml-auto">
                              <AnimatePresence>
                                {activeCelebration[item.id] && (
                                  <motion.span
                                    initial={{ opacity: 1, y: 0, scale: 0.8 }}
                                    animate={{ opacity: 0, y: -22, scale: 1.3 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.65, ease: "easeOut" }}
                                    className="absolute -top-4 right-1 text-xs font-black text-[#00f298] pointer-events-none select-none drop-shadow-[0_0_8px_#00f298]"
                                  >
                                    +1 ✦
                                  </motion.span>
                                )}
                              </AnimatePresence>
                              <motion.button
                                whileHover={{ scale: 1.12 }}
                                whileTap={{ scale: 0.88 }}
                                onClick={(e) => handleCelebrate(item.id, e)}
                                className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                                  isDark
                                    ? "bg-white/5 hover:bg-emerald-500/20 text-[#00f298] border border-white/10 hover:border-emerald-400/40"
                                    : "bg-slate-100 hover:bg-emerald-50 text-emerald-700 border border-slate-200 hover:border-emerald-300"
                                }`}
                                title="Applaud this milestone"
                              >
                                <span className="text-xs">✦</span>
                                <span>{reactions[item.id] || 42}</span>
                              </motion.button>
                            </div>
                          </div>

                          {/* Card Title */}
                          <h3
                            className="text-xl sm:text-2xl font-black tracking-tight mb-3 text-slate-900 dark:text-white group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-slate-900 group-hover/card:to-emerald-600 dark:group-hover/card:from-white dark:group-hover/card:to-emerald-400 transition-all duration-300"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          >
                            {item.title}
                          </h3>

                          {/* Card Narrative */}
                          <p
                            className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                              isDark ? "text-slate-300" : "text-slate-600"
                            }`}
                          >
                            {item.description}
                          </p>

                          {/* Framed Graphic Illustration Showcase with Floating Hover */}
                          <div
                            className={`relative rounded-2xl overflow-hidden p-4 sm:p-5 border transition-all duration-500 ${
                              isDark
                                ? "bg-slate-950/60 border-white/10 group-hover/card:border-white/20"
                                : "bg-slate-50/80 border-slate-200/80 group-hover/card:border-slate-300"
                            }`}
                          >
                            {/* Futuristic Tech Corner Accents */}
                            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-400/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-400/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-400/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-400/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Blooming Glow Behind Image */}
                            <div
                              className="absolute inset-0 opacity-20 group-hover/card:opacity-45 transition-opacity duration-500 blur-2xl rounded-2xl pointer-events-none"
                              style={{ backgroundColor: item.glowColor }}
                            />
                            <img
                              src={item.image}
                              alt={item.title}
                              className="relative z-10 w-full h-auto max-h-56 sm:max-h-64 object-contain mx-auto rounded-xl drop-shadow-md group-hover/card:scale-105 group-hover/card:-translate-y-1.5 transition-all duration-500"
                            />
                          </div>

                          {/* Mobile & Tablet Milestone Focus Pill (Ensures takeaway & stats are never lost on small devices) */}
                          <div className="lg:hidden mt-4 p-3.5 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 dark:bg-emerald-500/10 flex items-start gap-2.5">
                            <span className="text-sm flex-shrink-0 mt-0.5">✨</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span
                                  className={`text-[10px] font-mono font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${item.accentGrad}`}
                                >
                                  {item.highlightWord}
                                </span>
                              </div>
                              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                                {item.stat}
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                                {item.takeaway}
                              </p>
                            </div>
                          </div>

                          {/* Card Interactive Action Footer */}
                          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
                            {/* Toggle Highlights Drawer Action */}
                            <motion.button
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              onClick={() => toggleMilestone(item.id)}
                              className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer select-none ${
                                expandedMilestones[item.id]
                                  ? "text-[#00f298] dark:text-[#00f298]"
                                  : isDark
                                  ? "text-slate-300 hover:text-white"
                                  : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              <span>
                                {expandedMilestones[item.id]
                                  ? "Hide Highlights"
                                  : "Key Highlights"}
                              </span>
                              <motion.span
                                animate={{
                                  rotate: expandedMilestones[item.id] ? 180 : 0,
                                }}
                                transition={{ duration: 0.25 }}
                              >
                                ▾
                              </motion.span>
                            </motion.button>

                            {/* Direct Chapter Action Link */}
                            <motion.a
                              whileHover={{ scale: 1.05, x: 2 }}
                              whileTap={{ scale: 0.96 }}
                              href={item.actionLink}
                              target={item.actionExternal ? "_blank" : undefined}
                              rel={item.actionExternal ? "noreferrer" : undefined}
                              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                                isDark
                                  ? "bg-emerald-500/15 hover:bg-emerald-500/25 text-[#00f298] border border-emerald-500/30"
                                  : "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200"
                              }`}
                            >
                              <span>{item.actionLabel}</span>
                              <span>→</span>
                            </motion.a>
                          </div>

                          {/* Expandable Key Highlights Drawer */}
                          <AnimatePresence>
                            {expandedMilestones[item.id] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="overflow-hidden relative z-10"
                              >
                                <div
                                  className={`mt-3 pt-3 border-t border-dashed ${
                                    isDark
                                      ? "border-white/10"
                                      : "border-slate-200"
                                  } space-y-2`}
                                >
                                  {item.highlights &&
                                    item.highlights.map((h, hIdx) => (
                                      <motion.div
                                        key={hIdx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: hIdx * 0.08 }}
                                        className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-[#00f298] hover:translate-x-1 transition-all duration-200 cursor-default"
                                      >
                                        <span className="text-[#00f298] font-bold text-sm leading-none mt-0.5">
                                          ✦
                                        </span>
                                        <span>{h}</span>
                                      </motion.div>
                                    ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>

                      {/* ======================================================= */}
                      {/* OPPOSITE SIDE DESKTOP YEAR & SPOTLIGHT CAPSULE          */}
                      {/* ZERO OVERLAP: 56PX+ CLEAN MARGIN FROM CENTER SPINE      */}
                      {/* ======================================================= */}
                      <div
                        className={`hidden lg:flex lg:w-[calc(50%-56px)] flex-col select-none transition-all duration-500 relative ${
                          isEven ? "items-start text-left" : "items-end text-right"
                        }`}
                      >

                        <div className="relative">
                          {/* Milestone Phase & Index Tag */}
                          <div
                            className={`flex items-center gap-2 mb-1.5 ${
                              isEven ? "justify-start" : "justify-end"
                            }`}
                          >
                            <span className="text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-[#00f298] border border-emerald-500/25">
                              Milestone 0{index + 1}
                            </span>
                            <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                              • {item.phase}
                            </span>
                          </div>

                          {/* Prominent Milestone Year Header */}
                          <span
                            className={`text-6xl xl:text-7xl font-black font-mono tracking-tighter transition-all duration-300 block leading-none select-none ${
                              isDark
                                ? "text-slate-500/80 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_20px_rgba(0,242,152,0.35)]"
                                : "text-slate-400 group-hover:text-emerald-600 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                            }`}
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          >
                            {item.year}
                          </span>

                          {/* Floating Glass Spotlight Pill */}
                          <motion.div
                            whileHover={{ y: -6, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 350, damping: 20 }}
                            className={`mt-3 relative z-10 max-w-sm rounded-2xl p-5 border backdrop-blur-xl shadow-lg transition-all duration-300 cursor-pointer group/spotlight text-left ${
                              isDark
                                ? "bg-slate-900/85 border-white/10 shadow-black/40 hover:border-emerald-400/50 hover:shadow-[0_15px_30px_-10px_rgba(0,242,152,0.2)]"
                                : "bg-white/95 border-slate-200/90 shadow-slate-200/60 hover:border-emerald-500/50 hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.2)]"
                            }`}
                            onClick={(e) => handleCelebrate(item.id, e)}
                          >
                            {/* Ambient Shimmer Sheen on Hover */}
                            <div className="absolute inset-0 -translate-x-full group-hover/spotlight:translate-x-[200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-white/[0.05] to-transparent pointer-events-none rounded-2xl -skew-x-12" />

                            <div className="flex items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <span
                                  className="w-2 h-2 rounded-full animate-ping"
                                  style={{
                                    backgroundColor: item.glowColor.replace(
                                      /[\d.]+\)$/g,
                                      "1)"
                                    ),
                                  }}
                                />

                                {/* Mini Dynamic Soundwave Visualizer Bars */}
                                <div className="flex items-end gap-0.5 h-3">
                                  <motion.span
                                    animate={{ height: ["4px", "12px", "6px", "14px", "4px"] }}
                                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-0.5 bg-emerald-400 rounded-full"
                                  />
                                  <motion.span
                                    animate={{ height: ["12px", "4px", "14px", "8px", "12px"] }}
                                    transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                    className="w-0.5 bg-cyan-400 rounded-full"
                                  />
                                  <motion.span
                                    animate={{ height: ["6px", "14px", "4px", "10px", "6px"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                    className="w-0.5 bg-purple-400 rounded-full"
                                  />
                                </div>

                                <span
                                  className={`text-[11px] font-mono font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${item.accentGrad}`}
                                >
                                  {item.highlightWord}
                                </span>
                              </div>

                              {/* Celebration Star Clicker with Animated +1 Pop */}
                              <div className="relative">
                                <AnimatePresence>
                                  {activeCelebration[item.id] && (
                                    <motion.span
                                      initial={{ opacity: 1, y: 0, scale: 0.8 }}
                                      animate={{ opacity: 0, y: -20, scale: 1.25 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.6, ease: "easeOut" }}
                                      className="absolute -top-4 right-0 text-xs font-black text-[#00f298] pointer-events-none select-none drop-shadow-[0_0_8px_#00f298]"
                                    >
                                      +1 ✦
                                    </motion.span>
                                  )}
                                </AnimatePresence>
                                <motion.span
                                  whileHover={{ scale: 1.25 }}
                                  whileTap={{ scale: 0.8 }}
                                  className="text-xs text-amber-400 opacity-80 group-hover/spotlight:opacity-100 transition-opacity ml-1 cursor-pointer"
                                  title="Click to celebrate"
                                >
                                  ✨
                                </motion.span>
                              </div>
                            </div>

                            <div className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-1.5 group-hover/spotlight:text-emerald-500 dark:group-hover/spotlight:text-emerald-300 transition-colors">
                              {item.stat}
                            </div>

                            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-normal">
                              {item.takeaway}
                            </p>

                            {/* Interactive Micro Action Pill */}
                            <div
                              className={`mt-3 pt-2.5 border-t ${
                                isDark ? "border-white/10" : "border-slate-100"
                              } flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400`}
                            >
                              <span>Chapter Focus</span>
                              <span className="text-emerald-500 group-hover/spotlight:translate-x-1 transition-transform">
                                ✦ Explored
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* ================================================================= */}
            {/* BLAST SPARKLE FIREWORKS TERMINUS AT THE END OF THE LASER LINE     */}
            {/* ================================================================= */}
            <TimelineEndSparkle isDark={isDark} spineScaleY={spineScaleY} />
          </div>
        </section>

        {/* =================================================================== */}
        {/* BOTTOM CALL-TO-ACTION BANNER                                        */}
        {/* =================================================================== */}
        <section className="relative z-10 w-full my-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white shadow-2xl">
            {/* Specular Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.25),_transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-xs uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md mb-4 border border-white/25">
                Join The Adventure
              </span>
              <h2
                className="text-2xl sm:text-4xl font-black tracking-tight mb-4 !text-white"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Be Part of Our Next Chapter
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base font-medium mb-8 leading-relaxed">
                Whether you're discovering insightful infotainment daily or sharing
                your creative genius with the world, there's a place for you at Defo.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-black text-white font-bold text-sm shadow-xl transition-all duration-300 cursor-pointer border border-white/20"
                >
                  <span>Download The App</span>
                  <span className="text-[#00f298]">→</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://creator.yesdefo.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <span>Join as Creator</span>
                  <span className="text-emerald-600">→</span>
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
};

export default OurStory;
