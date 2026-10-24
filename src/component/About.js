import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import { useTheme } from "../context/ThemeContext";

// Brand Assets
import logo from "../component/About_page_Img/Logo.png";
import playstore from "../component/About_page_Img/google-play-badge.svg";
import appstore from "../component/About_page_Img/app-store-badge.svg";
import lowPow from "../component/About_page_Img/lowpow logo.svg";
import exploreLogo from "../component/About_page_Img/Explore.svg";
import infoGraphics from "../component/About_page_Img/infographics.svg";
import dailyDose from "../component/About_page_Img/Daily dose.svg";

function About() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen font-poppins transition-colors duration-300 selection:bg-[#3ECF7A]/30 ${
        isDark ? "bg-[#05070e] text-slate-100" : "bg-[#f8fafc] text-slate-800"
      }`}
    >
      <Navbar />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#3ECF7A]/25 via-[#00f6ff]/15 to-transparent blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-48 right-[-120px] w-96 h-96 bg-[#100C40]/40 blur-[110px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-[-100px] w-80 h-80 bg-[#3ECF7A]/15 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.16]">
              Where Everyday Entertainment Meets{" "}
              <span className="bg-gradient-to-r from-[#3ECF7A] via-[#00f6ff] to-[#3ECF7A] bg-clip-text text-transparent">
                Boundless Curiosity
              </span>
            </h1>
            <p
              className={`mt-6 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Defo transforms ordinary screen time into extraordinary discoveries. We blend the
              dynamism of short-form video with verified knowledge, crisp infographics, and daily
              delight—engineered for curious minds of all generations.
            </p>
          </motion.div>

          {/* Dual Action & Download Badges */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
              target="_blank"
              rel="noreferrer"
              className="group transform hover:-translate-y-1 transition-all duration-300"
              title="Get Defo on Google Play"
            >
              <div
                className={`flex items-center gap-3 px-5 py-2.5 rounded-xl border shadow-sm transition-all ${
                  isDark
                    ? "bg-slate-900/90 hover:bg-slate-800 border-white/10 hover:border-emerald-500/40 hover:shadow-emerald-500/10 shadow-lg"
                    : "bg-white hover:bg-slate-50 border-slate-200/90 hover:border-slate-300 shadow-md"
                }`}
              >
                <img className="h-9 w-auto" src={playstore} alt="Google Play store badge" />
              </div>
            </a>

            <div
              className={`flex items-center gap-3 px-5 py-2.5 rounded-xl border shadow-sm cursor-pointer transform hover:-translate-y-1 transition-all duration-300 ${
                isDark
                  ? "bg-slate-900/90 hover:bg-slate-800 border-white/10 hover:border-cyan-500/40 hover:shadow-cyan-500/10 shadow-lg"
                  : "bg-white hover:bg-slate-50 border-slate-200/90 hover:border-slate-300 shadow-md"
              }`}
              title="Defo on iOS App Store"
            >
              <img className="h-9 w-auto" src={appstore} alt="App Store badge" />
            </div>

            <a
              href="https://lowpow.dev/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Explore LowPow</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SYNERGY SECTION: Defo × LowPow                                         */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span
              className={`text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${
                isDark
                  ? "bg-white/5 text-emerald-400 border-white/10"
                  : "bg-emerald-50 text-emerald-700 border-emerald-200"
              }`}
            >
              THE ECOSYSTEM
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight">
              Crafted by Innovators, Built for You
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              The symbiotic partnership powering the next generation of visual knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Defo Card */}
            <div
              className={`relative rounded-3xl p-8 sm:p-10 border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-white/10 hover:border-emerald-500/40 hover:shadow-emerald-500/5 shadow-[0_8px_30px_rgb(0,0,0,0.45)]"
                  : "bg-white border-slate-200/80 hover:border-emerald-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.12)]"
              }`}
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#3ECF7A]/10 rounded-bl-full blur-2xl group-hover:bg-[#3ECF7A]/20 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div
                    className={`h-12 sm:h-14 px-4 rounded-2xl flex items-center justify-center border transition-all ${
                      isDark
                        ? "bg-white/[0.08] border-white/15 shadow-sm backdrop-blur-md"
                        : "bg-emerald-50/80 border-emerald-100 shadow-sm"
                    }`}
                  >
                    <img src={logo} alt="Defo App" className="h-6 sm:h-7 w-auto object-contain" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#3ECF7A]/15 text-[#3ECF7A] border border-[#3ECF7A]/20">
                    The Platform
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Defo Infotainment App
                </h3>
                <p className={`mt-3 text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  Defo is the ultimate video hub tailored for inquisitive learners. We transform
                  complex theories, historical milestones, and fascinating phenomena into engaging,
                  bite-sized reels so you learn effortlessly while being thoroughly entertained.
                </p>

                {/* Feature Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Short-Form Knowledge", "Infographic Delights", "Curated Feed", "Verified Facts"].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-medium px-3 py-1 rounded-lg border ${
                          isDark
                            ? "bg-white/5 text-slate-300 border-white/10"
                            : "bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/40 dark:border-white/10 flex items-center justify-between">
                <span className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Available on Android & iOS
                </span>
                <a
                  href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3ECF7A] hover:underline"
                >
                  Download Free App →
                </a>
              </div>
            </div>

            {/* LowPow Card */}
            <div
              className={`relative rounded-3xl p-8 sm:p-10 border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-white/10 hover:border-cyan-500/40 hover:shadow-cyan-500/5 shadow-[0_8px_30px_rgb(0,0,0,0.45)]"
                  : "bg-white border-slate-200/80 hover:border-cyan-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.12)]"
              }`}
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-bl-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div
                    className={`h-12 sm:h-14 px-4 rounded-2xl flex items-center justify-center border transition-all ${
                      isDark
                        ? "bg-white/[0.08] border-white/15 shadow-sm backdrop-blur-md"
                        : "bg-blue-50/80 border-blue-100 shadow-sm"
                    }`}
                  >
                    <img
                      src={lowPow}
                      alt="LowPow Studio"
                      className={`h-6 sm:h-7 w-auto object-contain transition-all ${
                        isDark ? "brightness-0 invert opacity-95" : ""
                      } dark:brightness-0 dark:invert dark:opacity-95`}
                    />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                    Product Studio
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  LowPow Digital
                </h3>
                <p className={`mt-3 text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  LowPow is a forward-thinking digital product company dedicated to building intuitive,
                  empowering, and visually captivating software. Our mission is to engineer tools that don't
                  just solve everyday challenges, but delight and inspire millions worldwide.
                </p>

                {/* Feature Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Human-Centered Design", "Scalable Architecture", "Creative Engineering", "Next-Gen UX"].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-medium px-3 py-1 rounded-lg border ${
                          isDark
                            ? "bg-white/5 text-slate-300 border-white/10"
                            : "bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/40 dark:border-white/10 flex items-center justify-between">
                <span className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Visit Official Website
                </span>
                <a
                  href="https://lowpow.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline"
                >
                  Visit lowpow.dev →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE MANIFESTO BANNER                                                   */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#100C40] via-[#09352e] to-[#100C40] border border-emerald-500/25 p-8 sm:p-14 text-white shadow-2xl">
            {/* Background elements */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#3ECF7A]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 mb-6">
                THE MANIFESTO
              </span>
              <blockquote className="text-xl sm:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight text-white drop-shadow-sm">
                "Learning should never feel like a chore, and entertainment should never leave you empty."
              </blockquote>
              <p className="mt-6 text-sm sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
                An Infotainment app bridges the gap between passive consumption and active curiosity.
                We believe that 60 intentional seconds of wonder can teach you more, spark deeper joy,
                and stick with you far longer than hours of mindless scrolling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PILLARS OF DEFO: 3 Deep-Dive Feature Blocks                            */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-20 md:space-y-28">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#3ECF7A] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#3ECF7A]" />
                EXPANSIVE HORIZONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                Explore a Boundless Universe of Knowledge
              </h2>
              <p
                className={`mt-4 text-base sm:text-lg leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                From quantum physics and ancient mysteries to modern psychology, cinema, and smart lifehacks.
                Defo organizes the world's most intriguing concepts into punchy, verified micro-reels that make
                learning effortless and ready to share at any table.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Science & Cosmos", "World History", "Psychology", "Tech & AI", "DIY Lifehacks"].map(
                  (item, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${
                        isDark
                          ? "bg-slate-900 border-white/10 text-slate-300"
                          : "bg-white border-slate-200 text-slate-700 shadow-sm"
                      }`}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div
                className={`relative w-full max-w-md p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
                  isDark
                    ? "bg-gradient-to-br from-slate-900/80 to-slate-950/80 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.45)]"
                    : "bg-white border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.12)]"
                }`}
              >
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#3ECF7A]/15 rounded-full blur-2xl pointer-events-none" />
                <img
                  src={exploreLogo}
                  alt="Explore Knowledge illustration"
                  className="w-full h-auto max-h-72 object-contain mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 (Reversed) */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                className={`relative w-full max-w-md p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
                  isDark
                    ? "bg-gradient-to-br from-slate-900/80 to-slate-950/80 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.45)]"
                    : "bg-white border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.12)]"
                }`}
              >
                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />
                <img
                  src={infoGraphics}
                  alt="Infographics illustration"
                  className="w-full h-auto max-h-72 object-contain mx-auto"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-cyan-400 mb-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                VISUAL MASTERY
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                Infographics & Visual Delights
              </h2>
              <p
                className={`mt-4 text-base sm:text-lg leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Why struggle with dense textbooks when a brilliant visual can explain it in seconds?
                Feast your eyes on handcrafted infographics and motion graphics designed to distill
                intricate systems into crystal-clear, unforgettable visual stories.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
                <div
                  className={`p-3.5 rounded-xl border transition-all ${
                    isDark
                      ? "bg-slate-900/80 border-white/10 shadow-md shadow-black/40"
                      : "bg-white border-slate-200/80 shadow-[0_4px_16px_rgb(0,0,0,0.06)]"
                  }`}
                >
                  <div className="text-xl font-bold text-cyan-400">3x</div>
                  <div className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Higher information retention
                  </div>
                </div>
                <div
                  className={`p-3.5 rounded-xl border transition-all ${
                    isDark
                      ? "bg-slate-900/80 border-white/10 shadow-md shadow-black/40"
                      : "bg-white border-slate-200/80 shadow-[0_4px_16px_rgb(0,0,0,0.06)]"
                  }`}
                >
                  <div className="text-xl font-bold text-[#3ECF7A]">100%</div>
                  <div className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Visual-first clarity
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-amber-400 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                PURE JOY
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                A Daily Dose of Wonder & Fun
              </h2>
              <p
                className={`mt-4 text-base sm:text-lg leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Infotainment doesn't take itself too seriously. Unwind with bizarre animal quirks,
                witty historical ironies, intriguing mind teasers, and uplifting stories crafted to
                brighten your routine and leave you smiling with something new.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Quirky Trivia", "Mind-Bending Curiosities", "Clever Anecdotes", "Bizarre Facts"].map(
                  (item, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${
                        isDark
                          ? "bg-slate-900 border-white/10 text-slate-300"
                          : "bg-white border-slate-200 text-slate-700 shadow-sm"
                      }`}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div
                className={`relative w-full max-w-md p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
                  isDark
                    ? "bg-gradient-to-br from-slate-900/80 to-slate-950/80 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.45)]"
                    : "bg-white border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.12)]"
                }`}
              >
                <div className="absolute -top-10 -left-10 w-44 h-44 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
                <img
                  src={dailyDose}
                  alt="Daily dose illustration"
                  className="w-full h-auto max-h-72 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ========================================================================= */}
      {/* 6. CLASSY DOWNLOAD & ACTION BANNER                                        */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-br from-[#100C40] via-[#0d222d] to-[#041215] text-white border border-emerald-500/25 shadow-2xl text-center">
            {/* Ambient Backlight */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3ECF7A]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 mb-4">
                READY FOR SOMETHING SMARTER?
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Upgrade Your Screen Time With Defo
              </h2>
              <p className="mt-4 text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-xl mx-auto">
                Join our rapidly growing community of thinkers, creators, and curious learners. Available free
                for Android & iOS.
              </p>

              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
                  target="_blank"
                  rel="noreferrer"
                  className="transform hover:scale-105 transition-transform duration-200"
                >
                  <img className="h-11 w-auto" src={playstore} alt="Get it on Google Play" />
                </a>

                <div
                  className="transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                  title="Download on the App Store"
                >
                  <img className="h-11 w-auto" src={appstore} alt="Download on the App Store" />
                </div>

                <Link
                  to="/OurStory"
                  className="px-6 py-3 rounded-xl text-sm font-semibold border border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-200"
                >
                  Read Our Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
