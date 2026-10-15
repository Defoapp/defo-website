import React, { useState, useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { price as staticPrices } from "../constants/map";
import Navbar from "../component/Navbar/mainNavbar";
import HeroSection from "./Hero/HeroSection";
import AppFunnelSection from "./AppFunnel/AppFunnelSection";
import RotatingShowcase from "./Showcase/RotatingShowcase";
import { MOCK_MONGODB_DATA } from "../data/screensData";
import CategoriesSection from "./Categories/CategoriesSection";
import PricingSection from "./Pricing/PricingSection";
import AmbientDecorations from "./Common/AmbientDecorations";

// ---------------Discover------------------
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";
import GpIcon from "../image/Google_Play-Icon-Logo.wine.svg";


// -----------------------Footer-------------
import Footer from "../component/footer/Footer";

function Home() {
  // Start with static data so price cards always show
  const [prices, setPrices] = useState(staticPrices);

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 500,
      easing: "ease-out",
      delay: 50,
      once: true,
    });
    AOS.refresh();
  }, []);

  // Try to load live data from MongoDB with fast timeout fallback
  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    fetch("http://localhost:5000/api/prices", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPrices(data);
          console.log("Prices loaded from MongoDB:", data.length);
        }
      })
      .catch((err) => console.warn("Using static prices:", err.message))
      .finally(() => clearTimeout(timeoutId));

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const scrollToShowcase = () => {
    const el = document.getElementById("funnel-section") || document.getElementById("showcase-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* ------------Navbar------------------ */}
      <div className="relative w-full mx-auto">
        <Navbar />
        {/* Hero section */}
        <HeroSection onExploreClick={scrollToShowcase} />

        {/* 2. Apple App Store Style Inverted Pyramid Funnel Showcase */}
        <AppFunnelSection />

        {/* 3. 3D Rotating Phone Showcase Section */}
        <section 
          id="showcase-section"
          className="relative z-10 w-full showcase-section-bg flex flex-col items-center justify-center pt-16 sm:pt-20 pb-16 px-3 sm:px-6 overflow-hidden transition-colors duration-500"
        >
          {/* Ambient Colorful Light Aurora Blobs behind 3D rotating stage */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Center-Top Emerald Spotlight behind active phone */}
            <div 
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[750px] h-[400px] sm:h-[550px] rounded-full blur-[110px] sm:blur-[140px] opacity-75 dark:opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(0,242,152,0.45) 0%, rgba(52,211,153,0.22) 50%, transparent 75%)' }}
            />
            {/* Left Stage Cyan / Azure Aura */}
            <div 
              className="absolute top-1/3 -left-16 sm:left-[5%] w-[420px] sm:w-[600px] h-[420px] sm:h-[550px] rounded-full blur-[100px] sm:blur-[130px] opacity-70 dark:opacity-35"
              style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(14,165,233,0.2) 50%, transparent 75%)' }}
            />
            {/* Right Stage Violet / Magenta Aura */}
            <div 
              className="absolute top-1/3 -right-16 sm:right-[5%] w-[420px] sm:w-[600px] h-[420px] sm:h-[550px] rounded-full blur-[100px] sm:blur-[130px] opacity-70 dark:opacity-35"
              style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.45) 0%, rgba(236,72,153,0.2) 50%, transparent 75%)' }}
            />
            {/* Floor Stage Pedestal Glow under phones */}
            <div 
              className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[520px] sm:w-[750px] h-[320px] sm:h-[400px] rounded-full blur-[90px] sm:blur-[120px] opacity-60 dark:opacity-25"
              style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(52,211,153,0.2) 50%, transparent 75%)' }}
            />
            {/* Delicate Modern Mesh Dots Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.035] dark:opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.8) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          {/* Interactive Responsive Colorful Designs & Parallax Elements */}
          <AmbientDecorations variant="showcase" />

          {/* Section title */}
          <div className="relative z-10 text-center mb-8">
            <h2 
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-white tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-[#00f298] dark:to-cyan-400">Entertainment</span> in Motion
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto mt-2 font-poppins">
              Experience our 3D hardware-accelerated carousel. Swipe or click on any phone to rotate perspective.
            </p>
          </div>

          {/* 3D Rotating Phones with auto-rotation */}
          <div className="relative z-10 w-full flex justify-center">
            <RotatingShowcase 
              items={MOCK_MONGODB_DATA} 
              initialSpeed={2000}
            />
          </div>

          {/* Download App CTA */}
          <a
            href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
            target="_blank"
            rel="noreferrer"
            className="relative z-10 mt-8 inline-block"
          >
            <div className="flex items-center gap-3 bg-neutral-950 hover:bg-black dark:bg-black dark:hover:bg-neutral-900 border border-white/20 hover:border-[#00f298]/60 px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_35px_rgba(0,242,152,0.3)] cursor-pointer group">
              <img className="w-7 h-7 sm:w-8 sm:h-8 object-contain" src={GpIcon} alt="Google Play icon" />
              <span className="!text-white text-base sm:text-lg font-bold tracking-wide group-hover:!text-[#00f298] transition-colors whitespace-nowrap">
                Download The App
              </span>
            </div>
          </a>
        </section>

        {/* 4. 3D Categories Section: Discover, Like and Save */}
        <CategoriesSection />
        {/* price card scroll anchor */}
        <div id="price"></div>

        {/* 5. 3D Pricing Section with Scroll Effects & "Get Started" emerging from down */}
        <PricingSection prices={prices} />

        {/* store links */}
        <div className="w-full flex justify-center py-16 px-4">
          <div className="mx-auto text-center">
            <h2
              data-aos="zoom-in"
              data-aos-delay="400"
              className="font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl"
            >
              Get the app now!
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="flex gap-4 sm:gap-5 flex-col xs:flex-row justify-center items-center my-8"
            >
              <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1" target="_blank" rel="noreferrer">
                <img
                  className="w-36 xs:w-40 sm:w-44 transition-all hover:scale-95"
                  src={playstore}
                  alt="Google Play Store badge"
                />
              </a>
              <img
                className="w-36 xs:w-40 sm:w-44 transition-all hover:scale-95"
                src={appstore}
                alt="Apple App Store badge"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
