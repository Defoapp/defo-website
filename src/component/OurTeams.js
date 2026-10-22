import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import { teamsMembers } from "../constants/map";
import teamIllustration from "../image/ourTeams/teams Illustation.svg";
import TeamMemberCard from "./OurTeams/TeamMemberCard";
import AmbientDecorations from "./Common/AmbientDecorations";

const CATEGORIES = [
  { id: "all", label: "All Members" },
  { id: "Leadership", label: "Leadership" },
  { id: "Tech & Design", label: "Tech & Design" },
  { id: "Growth", label: "Growth & Community" },
];



const OurTeams = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredMembers = useMemo(() => {
    if (selectedCategory === "all") return teamsMembers;
    return teamsMembers.filter(
      (m) => m.roleCategory === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] dark:bg-[#080b11] text-slate-900 dark:text-white transition-colors duration-500 flex flex-col justify-between overflow-x-hidden">
      
      {/* Universal Fixed Navbar */}
      <Navbar />

      {/* Content & Team Grid Section (strictly isolates ambient particles above the footer) */}
      <div className="relative w-full overflow-hidden flex-1">
        {/* =================================================================== */}
        {/* AMBIENT AURORA BACKGROUND MESH                                      */}
        {/* =================================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Center Emerald Brand Glow */}
          <div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[650px] rounded-full blur-[130px] opacity-65 dark:opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(0,242,152,0.4) 0%, rgba(56,189,248,0.2) 50%, transparent 75%)' }}
          />
          {/* Left Side Violet Flare */}
          <div 
            className="absolute top-1/4 -left-20 sm:left-[5%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[120px] opacity-60 dark:opacity-25"
            style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.35) 0%, rgba(236,72,153,0.18) 50%, transparent 75%)' }}
          />
          {/* Right Side Sky Cyan Flare */}
          <div 
            className="absolute top-1/3 -right-20 sm:right-[5%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[120px] opacity-60 dark:opacity-25"
            style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(14,165,233,0.18) 50%, transparent 75%)' }}
          />
          {/* Mesh Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.8) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Ambient Floating Elements strictly inside content section */}
        <AmbientDecorations variant="showcase" />

        {/* Main Content Area */}
        <div className="relative z-10 w-full pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* =================================================================== */}
        {/* HERO HEADER SECTION                                                 */}
        {/* =================================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          
          {/* Trendy Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-[#00f298] text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00f298]" />
            <span>The Minds Behind Defo</span>
          </motion.div>

          {/* Main 3D Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] mb-6 text-slate-900 dark:text-white"
            style={{ fontFamily: 'Outfit, var(--font-display), sans-serif' }}
          >
            Meet the Team Powering <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-[#00f298] dark:via-teal-400 dark:to-cyan-400">
              Information with Entertainment
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Behind every seamless swipe, intuitive interface, and ad-free video is a dedicated team of 
            creators, engineers, and visionaries committed to making learning delightfully fun.
          </motion.p>

          {/* Optional Illustration with Floating Shadow */}
          {teamIllustration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 mb-12 flex justify-center"
            >
              <img
                className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto max-h-56 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                src={teamIllustration}
                alt="Defo Team Illustration"
              />
            </motion.div>
          )}


        </div>

        {/* =================================================================== */}
        {/* INTERACTIVE CATEGORY FILTER TABS                                   */}
        {/* =================================================================== */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-emerald-400 dark:text-slate-950 shadow-md shadow-emerald-500/20 scale-105"
                    : "bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* =================================================================== */}
        {/* 3D HOLOGRAPHIC TEAM MEMBERS GRID                                   */}
        {/* =================================================================== */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto justify-items-center"
            >
              {filteredMembers.map((member, idx) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={idx}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =================================================================== */}
        {/* JOIN OUR MISSION / CAREERS BANNER CTA                              */}
        {/* =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 sm:mt-32 rounded-3xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white shadow-2xl"
        >
          {/* Subtle Ambient Glass Highlights */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.25),_transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md mb-4 border border-white/25">
              We're Always Looking For Talent
            </span>
            <h2 
              className="text-2xl sm:text-4xl font-black tracking-tight mb-3 !text-white"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Want to Build the Future of Infotainment with Us?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base font-medium mb-8 leading-relaxed">
              We're growing fast and looking for curious minds, passionate creators, and skilled engineers who want to make a real impact.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Open Roles</span>
              <span className="text-emerald-600 font-black">→</span>
            </Link>
          </div>
        </motion.div>

      </div>
      </div>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
};

export default OurTeams;
