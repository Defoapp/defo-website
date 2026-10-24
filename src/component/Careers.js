import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "../component/footer/Footer";
import carrerimg2 from "../image/careers/image 3.svg";
import { Vacancies } from "../constants/map";
import arrow from "../image/careers/formkit_arrowdown.svg";
import location from "../image/careers/location.svg";
import time from "../image/careers/carbon_time.svg";
import { useTheme } from "../context/ThemeContext";
import HangingHiringBanner from "./Careers/HangingHiringBanner";

const Careers = () => {
  const { isDark } = useTheme();

  const scrollToContainer = () => {
    const container = document.getElementById("container");
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`relative w-full h-full min-h-screen transition-colors duration-300 ${isDark ? "bg-[#06080e] text-white" : "bg-white text-slate-900"}`}>
      <Navbar />
      <div className="w-full h-full">
        {/* hero section */}
        <div className="w-11/12 md:w-5/6 mx-auto min-h-fit py-12 md:py-20 flex items-center justify-between flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <span className={`inline-block border-2 py-1 px-4 rounded-lg mb-4 font-semibold text-sm ${isDark ? "border-emerald-400 text-emerald-300 bg-emerald-500/10" : "border-slate-800 text-slate-800 bg-slate-100"}`}>
              We're Hiring!
            </span>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Be part of our mission
            </h1>
            <p className={`text-left text-base md:text-lg leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              We are looking for passionate people to join us on our mission. We
              value flat hierarchies, clear communication, and full ownership and
              responsibility.
            </p>
            <button
              onClick={scrollToContainer}
              className={`flex items-center gap-x-2 border-2 rounded-3xl py-2 px-5 font-semibold cursor-pointer transition-all hover:scale-95 bg-transparent ${isDark ? "border-white/40 text-white hover:border-white hover:bg-white/10" : "border-slate-800 text-slate-800 hover:bg-slate-100"}`}
            >
              <span>View Openings</span>
              <img className={`w-3 h-4 object-contain ${isDark ? "invert brightness-200" : ""}`} src={arrow} alt="arrow down" />
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <HangingHiringBanner onExploreClick={scrollToContainer} />
          </div>
        </div>
        <div id="container"></div>

        {/* Vacancies */}
        <div className="w-full h-full py-6">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <hr className={`w-full h-0.5 mx-auto border-0 rounded my-6 ${isDark ? "bg-white/10" : "bg-gray-200"}`} />

            {Vacancies.map((vacancy) => (
              <div key={vacancy.id}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <img
                      className="w-12 h-12 object-contain"
                      src={vacancy.img}
                      alt={vacancy.title}
                    />
                    <div>
                      <h2 className={`font-bold text-xl md:text-2xl text-left ${isDark ? "text-white" : "text-slate-900"}`}>
                        {vacancy.title}
                      </h2>
                      <p className={`text-base md:text-lg text-left my-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {vacancy.desc}
                      </p>
                      <div className="flex flex-wrap gap-3 my-2">
                        <span className={`border rounded-3xl flex items-center gap-2 px-3 py-1 font-medium ${isDark ? "border-white/20 text-slate-200 bg-white/5" : "border-slate-300 text-slate-700 bg-slate-50"}`}>
                          <img className={`w-3 h-3 ${isDark ? "invert brightness-200" : ""}`} src={location} alt="location icon" />
                          <span className="text-xs md:text-sm">{vacancy.location}</span>
                        </span>
                        <span className={`border rounded-3xl flex items-center gap-2 px-3 py-1 font-medium ${isDark ? "border-white/20 text-slate-200 bg-white/5" : "border-slate-300 text-slate-700 bg-slate-50"}`}>
                          <img className={`w-3 h-3 ${isDark ? "invert brightness-200" : ""}`} src={time} alt="time icon" />
                          <span className="text-xs md:text-sm">{vacancy.jobType}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="my-2 md:my-0 self-end md:self-center">
                    <a href={vacancy.link} target="_blank" rel="noreferrer">
                      <span className="inline-block rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white py-2.5 px-8 transition-colors shadow-md">
                        Apply
                      </span>
                    </a>
                  </div>
                </div>
                <hr className={`w-full h-0.5 mx-auto border-0 rounded my-6 ${isDark ? "bg-white/10" : "bg-gray-200"}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Description Banner */}
        <div className="w-full py-12 px-4 bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50%">
          <p className="text-center font-semibold text-white text-2xl md:text-4xl max-w-4xl mx-auto leading-relaxed">
            Defo truly values work-life balance. We work hard and deliver, but
            at the end of the day you can switch off.
          </p>
        </div>

        {/* Illustration */}
        <div className="my-12 px-4">
          <img
            className="mx-auto w-1/2 sm:w-1/3 md:w-1/4 max-w-xs"
            src={carrerimg2}
            alt="Work life balance illustration"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
