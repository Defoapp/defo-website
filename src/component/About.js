import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import logo from "../component/About_page_Img/Logo.png";
import playstore from "../component/About_page_Img/google-play-badge.svg";
import appstore from "../component/About_page_Img/app-store-badge.svg";
import lowPow from "../component/About_page_Img/lowpow logo.svg";
import exploreLogo from "../component/About_page_Img/Explore.svg";
import infoGraphics from "../component/About_page_Img/infographics.svg";
import dailyDose from "../component/About_page_Img/Daily dose.svg";

function About() {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <div className="w-full h-full m-auto">
        <div className="w-11/12 max-w-6xl mx-auto py-8">
          <div className="flex justify-center flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 py-5">
              <img
                className="w-24 md:w-28 mx-auto lg:mx-0 my-4"
                src={logo}
                alt="Defo logo"
              />
              <p className="text-black text-center lg:text-left text-lg md:text-xl font-medium leading-relaxed">
                <span className="font-bold">Defo</span> is an infotainment video app.<br />
                Introducing a new infotainment app, the one-stop destination for
                all your entertainment and information needs. Stay informed,
                entertained, and connected with Defo!
              </p>
              <div className="my-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-40 transition-all hover:scale-95" src={playstore} alt="Google Play store badge" />
                </a>
                <img className="w-40 transition-all hover:scale-95" src={appstore} alt="App Store badge" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 py-5">
              <img
                className="w-24 md:w-28 mx-auto lg:mx-0 my-4"
                src={lowPow}
                alt="LowPow logo"
              />
              <p className="text-black text-center lg:text-left text-lg md:text-xl font-medium leading-relaxed">
                <span className="font-bold">Lowpow</span> is a digital product company. We build best apps for
                you. Our products inspire, empower, and simplify. We're
                here to create tools and experiences that not only meet but
                exceed expectations. Through creativity, expertise, and a
                passion for innovation, we're redefining what's possible.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <a href="https://lowpow.dev/" target="_blank" rel="noreferrer">
                  <span className="inline-block py-2.5 px-8 font-semibold text-lg rounded-lg bg-blue-950 text-white text-center hover:scale-95 transition-transform">
                    Explore
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-white text-center py-10 px-6 my-8 font-semibold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50% leading-relaxed">
          An Infotainment app is a mobile application designed to combine
          elements of education and entertainment to engage, educate, and
          entertain users. These apps are typically created with the goal of
          making learning fun and enjoyable, particularly for learners of all ages.
        </div>

        <div className="w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center my-12 gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold my-4">
              Explore a World of Knowledge
            </h2>
            <p className="text-base md:text-xl font-medium text-gray-700 leading-relaxed">
              Videos and interactive content covering an array of
              intriguing topics. From science to history, pop culture to DIY
              hacks, we've got it all. Our informative content keeps you in
              the loop and ready to impress in any conversation.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img className="w-3/4 max-w-sm mx-auto" src={exploreLogo} alt="Explore Knowledge illustration" />
          </div>
        </div>

        <div className="w-full py-12 px-6 bg-slate-500 text-white my-12">
          <div className="w-11/12 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="w-3/4 max-w-sm mx-auto"
                src={infoGraphics}
                alt="Infographics illustration"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-semibold my-4">
                Infographics and Visual Delights
              </h2>
              <p className="text-base md:text-xl font-medium leading-relaxed">
                Feast your eyes on visually stunning infographics that simplify
                complex concepts. Learn, share, and impress with these
                eye-catching visuals.
              </p>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center my-12 gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold my-4">
              Daily Dose of Fun
            </h2>
            <p className="text-base md:text-xl font-medium text-gray-700 leading-relaxed">
              Infotainment doesn't have to be serious. Enjoy a daily dose of
              humor, weird facts, and intriguing anecdotes to brighten your
              day.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img className="w-3/4 max-w-sm mx-auto" src={dailyDose} alt="Daily dose illustration" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
