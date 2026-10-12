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
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Try to load live data from MongoDB — updates prices if successful
  useEffect(() => {
    fetch("http://localhost:5000/api/prices")
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
      .catch((err) => console.warn("Using static prices — MongoDB unavailable:", err.message));
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
      <div className=" w-full mx-auto">
        <Navbar />
        {/* Hero section */}
        <HeroSection onExploreClick={scrollToShowcase} />

        {/* 2. Apple App Store Style Inverted Pyramid Funnel Showcase */}
        <AppFunnelSection />

        {/* 3. 3D Rotating Phone Showcase Section */}
        <section 
          id="showcase-section"
          className="relative z-10 w-full bg-[#07090e] flex flex-col items-center justify-center pt-16 sm:pt-20 pb-16 px-3 sm:px-6"
        >
          {/* Section title */}
          <div className="text-center mb-8">
            <h2 
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Explore Entertainment in Motion
            </h2>
            <p className="text-xs sm:text-base text-slate-400 max-w-lg mx-auto mt-2 font-poppins">
              Experience our 3D hardware-accelerated carousel. Swipe or click on any phone to rotate perspective.
            </p>
          </div>

          {/* 3D Rotating Phones with auto-rotation */}
          <RotatingShowcase 
            items={MOCK_MONGODB_DATA} 
            initialSpeed={2000}
          />

          {/* Download App CTA */}
          <a
            href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block"
          >
            <div className="flex items-center gap-3 bg-neutral-950 hover:bg-black border border-white/20 hover:border-[#00f298]/60 px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_35px_rgba(0,242,152,0.25)] cursor-pointer group">
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
