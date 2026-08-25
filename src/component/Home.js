import React from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { price } from "../constants/map";
import { discover } from "../constants/map";
import Navbar from "../component/Navbar/mainNavbar";
import hero from "../image/startbackground_1.webp";
import screenshot from "../image/tp201-sasi6-presentation43-02_2.png";

import tick from "../image/price_box/Vector.svg";

// ---------------Discover------------------
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";

import GpIcon from "../image/Google_Play-Icon-Logo.wine.svg";

// -----------------------Footer-------------
import Footer from "../component/footer/Footer";

function Home() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* ------------Navbar------------------ */}
      <div className=" w-full mx-auto">
        <Navbar />
        {/* Hero section */}
        <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center bg-black">
          {/* Background Hero Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            src={hero}
            alt="Defo hero background"
          />

          {/* Overlay Content */}
          <div className="relative z-10 w-full text-white px-6 md:px-20 lg:px-40 py-16">
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-bubblegum tracking-wide text-center md:text-left"
            >
              Information
              <br />
              with
              <br />
              Entertainment
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="font-bubblegum text-xl sm:text-2xl lg:text-3xl font-medium text-center md:text-left mt-4"
            >
              Are you looking to have fun and learn at the same time?
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="w-full flex gap-6 my-8 flex-col sm:flex-row justify-center md:justify-start items-center"
            >
              <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1" target="_blank" rel="noreferrer">
                <img
                  className="w-44 lg:w-40 transition-all hover:scale-95"
                  src={playstore}
                  alt="Google Play Store badge"
                />
              </a>
              <img
                className="w-44 lg:w-40 transition-all hover:scale-95"
                src={appstore}
                alt="Apple App Store badge"
              />
            </div>
          </div>
        </div>

        {/* screenshot section */}
        <div className="w-full min-h-fit py-16 flex justify-center items-center flex-col px-4">
          <img className="w-11/12 md:w-4/5 lg:w-3/5 object-contain" src={screenshot} alt="Defo app presentation screenshot" />
          <a
            href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-3 bg-black w-fit px-6 py-3 mt-10 rounded-full transition-all hover:scale-95 shadow-lg">
              <img className="w-8 h-8" src={GpIcon} alt="Google Play icon" />
              <h2 className="text-white text-lg font-bold">
                Download The App
              </h2>
            </div>
          </a>
        </div>

        {/* Description lines */}
        <div className="w-full flex justify-center bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50% py-8 px-4">
          <p className="text-white font-bold text-center w-11/12 sm:w-3/4 md:w-2/3 text-lg sm:text-xl font-poppins">
            "A short video app with a subscription model can offer high-quality
            content and attract a loyal audience."
          </p>
        </div>

        {/* Discover section */}
        <div className="w-full py-16 px-4">
          <h2 className="text-center text-2xl md:text-4xl font-bold">
            Discover, Like and Save the useful videos.
          </h2>
          <p className="text-black text-center my-2 text-lg md:text-2xl font-medium font-poppins">
            Discover a new way to learn and have fun at the same time!
          </p>

          {/* Discover Grid Section */}
          <div className="place-items-center grid gap-8 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl py-10 text-center">
            {discover.map((item) => (
              <div
                data-aos="zoom-in-up"
                data-aos-delay="50"
                key={item.id}
                className="w-56 py-4 flex flex-col items-center"
              >
                <img
                  className="mx-auto w-24 h-24 object-contain"
                  src={item.image}
                  alt={item.title}
                />
                <h3 className="font-medium lg:text-xl pt-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium font-poppins text-sm md:text-base mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          {/* price card scroll id */}
          <div id="price"></div>
        </div>

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
            {price.map((priceItem) => (
              <div
                data-aos="flip-right"
                data-aos-delay="300"
                key={priceItem.id}
                className="bg-white rounded-2xl w-80 min-h-[26rem] p-6 text-center shadow-2xl border-2 flex flex-col justify-between transition-all hover:scale-95"
              >
                <div>
                  <h3 className="mt-4 font-poppins">
                    <span className="font-bold text-4xl text-gray-900">{priceItem.rate}</span>
                  </h3>
                  <p className="font-medium text-gray-600 my-1">{priceItem.valid}</p>
                  <hr className="w-5/6 mx-auto my-4" />
                  <ul className="text-left flex flex-col gap-y-3 font-poppins text-gray-600 px-4">
                    <li className="flex items-center">
                      <img src={tick} alt="check" className="w-4 h-4 mr-2" />
                      <span>{priceItem.spec1}</span>
                    </li>
                    <li className="flex items-center">
                      <img src={tick} alt="check" className="w-4 h-4 mr-2" />
                      <span>{priceItem.spec3}</span>
                    </li>
                    <li className="flex items-center">
                      <img src={tick} alt="check" className="w-4 h-4 mr-2" />
                      <span>{priceItem.spec2}</span>
                    </li>
                    <li className="flex items-center">
                      <img src={tick} alt="check" className="w-4 h-4 mr-2" />
                      <span>{priceItem.spec4}</span>
                    </li>
                  </ul>
                </div>
                <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo" target="_blank" rel="noreferrer">
                  <div className="text-xl font-semibold bg-green-500 hover:bg-green-600 text-white w-fit px-8 py-3 rounded-xl mx-auto mt-6 transition-colors">
                    Get Started
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* store links */}
        <div className="w-full flex justify-center py-16 px-4">
          <div className="mx-auto text-center">
            <h2
              data-aos="zoom-in"
              data-aos-delay="400"
              className="font-bold text-3xl md:text-4xl lg:text-5xl"
            >
              Get the app now!
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="flex gap-5 flex-col sm:flex-row justify-center items-center my-8"
            >
              <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1" target="_blank" rel="noreferrer">
                <img
                  className="w-44 lg:w-40 transition-all hover:scale-95"
                  src={playstore}
                  alt="Google Play Store badge"
                />
              </a>
              <img
                className="w-44 lg:w-40 transition-all hover:scale-95"
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
