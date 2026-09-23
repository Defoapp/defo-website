import React, { useState, useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { price as staticPrices } from "../constants/map";
import Navbar from "../component/Navbar/mainNavbar";
import HeroSection from "./Hero/HeroSection";
import RotatingShowcase from "./Showcase/RotatingShowcase";
import CategoriesSection from "./Categories/CategoriesSection";
import { MOCK_MONGODB_DATA } from "../data/screensData";

import tick from "../image/price_box/Vector.svg";

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
    const el = document.getElementById("showcase-section");
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

        {/* 2. 3D Rotating Phone Showcase Section */}
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
            className="mt-8"
          >
            <div className="flex items-center gap-3 bg-black hover:bg-neutral-900 border border-white/15 px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer group">
              <img className="w-8 h-8" src={GpIcon} alt="Google Play icon" />
              <h2 className="text-white text-lg font-bold group-hover:text-[#00f298] transition-colors">
                Download The App
              </h2>
            </div>
          </a>
        </section>

        {/* 3. 3D Categories Section: Discover, Like and Save */}
        <CategoriesSection />
        {/* price card scroll anchor */}
        <div id="price"></div>

        {/* Price Section */}
        <div className="w-full bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50% py-12 px-4">
          <h2 className="text-white text-2xl sm:text-4xl font-medium text-center">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-2xl text-center font-medium text-gray-200 font-poppins my-2">
            The only app you need for complete Entertainment
          </p>

          {/* Cards */}
          <div className="flex justify-center gap-8 flex-wrap my-12 max-w-6xl mx-auto">
            {prices.map((priceItem, index) => {
              const specsList = Array.isArray(priceItem.specs) && priceItem.specs.length > 0
                ? priceItem.specs
                : [priceItem.spec1, priceItem.spec2, priceItem.spec3, priceItem.spec4].filter(Boolean);

              return (
                <div
                  data-aos="flip-right"
                  data-aos-delay="300"
                  key={priceItem._id || priceItem.id || index}
                  className="bg-white rounded-2xl w-full max-w-[20rem] min-h-[26rem] p-6 text-center shadow-2xl border-2 flex flex-col justify-between transition-all hover:scale-95 mx-auto"
                >
                  <div>
                    <h3 className="mt-4 font-poppins">
                      <span className="font-bold text-4xl text-gray-900">{priceItem.rate}</span>
                    </h3>
                    <p className="font-medium text-gray-600 my-1">{priceItem.valid}</p>
                    <hr className="w-5/6 mx-auto my-4" />
                    <ul className="text-left flex flex-col gap-y-3 font-poppins text-gray-600 px-4">
                      {specsList.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center">
                          <img src={tick} alt="check" className="w-4 h-4 mr-2" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo" target="_blank" rel="noreferrer">
                    <div className="text-xl font-semibold bg-green-500 hover:bg-green-600 text-white w-fit px-8 py-3 rounded-xl mx-auto mt-6 transition-colors">
                      Get Started
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

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
