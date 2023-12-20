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
      
        <div className="w-full h-full m-auto ">
          
          <div className="flex justify-center flex-col lg:flex-row ">
            <div className="w-full  lg:mx-10   py-5">
              <img
                className="w-28 mx-auto lg:mx-0 my-5"
                src={logo}
                alt="loading"
              />
      
              <p className=" text-black text-center leading-10 font-medium lg:text-left text-2xl  ">
              Defo is an infotainment video app.<br/>
                Introducing a new infotainment app, the one-top destination for
                all your entertainment and information needs. Stay informed,
                Entertained and connected with Defo!
              </p>
              <div className=" my-16 flex flex-wrap gap-5 justify-center lg:justify-start">
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"
                  }
                >
                  <img className="w-48 lg:w-40 transition-all hover:scale-95" src={playstore} alt="loading" />
                </a>
                <img className="w-48 lg:w-40 transition-all hover:scale-95" src={appstore} alt="loading" />
              </div>
            </div>

            <div className=" w-full lg:mx-10 py-5">
              <img
                className="w-28 mx-auto lg:mx-0 my-5"
                src={lowPow}
                alt="loading"
              />
              <p className="text-black text-center leading-10 font-medium lg:text-left text-2xl  ">
                Lowpow is a digital product company. We to build best apps for
                you. Our products that inspire, empower, and simplify. We're
                here to create tools and experiences that not only meet but
                exceed expectations. Through creativity, expertise, and a
                passion for innovation, we're redefining what's possible.
              </p>
              <a href="https://lowpow.dev/"><h1 className="py-2 w-48 h-12 px-3 tracking-wider font-semibold text-4xl md:text-2xl lg:text-2xl rounded-md my-4 mx-auto md:mx-0 lg:mx-0 bg-blue-950 text-white text-center hover:scale-95 transition-all">Explore</h1></a>
            </div>
          </div>

          <div className="w-full h-full text-white text-center py-10 px-5 my-10 font-semibold lg:px-40 text-2xl bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50%">
            An Infotainment app is a mobile application designed to combine
            elements of education and entertainment to engage, educate, and
            entertain users. These apps are typically created with the goal of
            making learning fun and enjoyable, particularly for children and
            learners of all ages.
          </div>

          <div className="w-full flex flex-wrap my-10">
            <div className="w-full lg:w-1/2 text-center text-2xl px-5 lg:px-32 pt-10">
              <h1 className="text-4xl font-semibold my-10">
                Explore a World of Knowledge
              </h1>
              <h1>
                The videos and interactive content covering an array of
                intriguing topics. From science to history, pop culture to DIY
                hacks, we've got it all. Our informative content keeps you in
                the loop and ready to impress in any conversation.
              </h1>
            </div>
            <div className="w-full mx-auto my-5 lg:my-0 lg:w-1/2">
              <img src={exploreLogo} alt="loading" />
            </div>
          </div>

          <div className="w-full flex flex-wrap my-10 py-10 bg-green-400">
            <div className="w-full  my-5 lg:my-0 lg:w-1/2">
              <img
                className="w-4/6 lg:w-3/6 mx-auto"
                src={infoGraphics}
                alt="loading"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center text-2xl px-5 lg:px-32 pt-10">
              <h1 className="text-4xl font-semibold my-10">
                Infographics and Visual Delights
              </h1>
              <h1 className="text-2xl">
                Feast your eyes on visually stunning infographics that simplify
                complex concepts. Learn, share, and impress with these
                eye-catching visuals.
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-wrap my-10">
            <div className="w-full lg:w-1/2 text-center text-2xl px-5 lg:px-32 pt-10">
              <h1 className="text-4xl font-semibold my-10">
                Daily Dose of Fun
              </h1>
              <h1>
                Infotainment doesn't have to be serious. Enjoy a daily dose of
                humor, weird facts, and intriguing anecdotes to brighten your
                day.
              </h1>
            </div>
            <div className="w-full mx-auto my-5 lg:my-0 lg:w-1/2">
              <img src={dailyDose} alt="loading" />
            </div>
          </div>
        </div>
      
      <Footer />
    </div>
  );
}

export default About;
