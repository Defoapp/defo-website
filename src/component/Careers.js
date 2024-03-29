import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "../component/footer/Footer";
import carrerimg1 from "../image/careers/OBJECTS.svg";
import carrerimg2 from "../image/careers/image 3.svg";
import { Vacancies } from "../constants/map";
import arrow from "../image/careers/formkit_arrowdown.svg";
import location from "../image/careers/location.svg";
import time from "../image/careers/carbon_time.svg";

const Carrers = () => {
  const scrollToContainer = () => {
    const container = document.getElementById("container");
    container.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-full">
      <Navbar />
      <div className="w-full h-full">
        {/* hero section */}
        <div className="w-full h-screen  flex   items-center justify-center  flex-col lg:flex-row">
          <div className="w-5/6 lg:w-2/6 h-4/6 mt-10 md:mt-0 lg:mt-0 ">
            <h1 className="border-black border-2 w-fit py-2 px-4 rounded-lg my-5 font-semibold ">
              We Hiring!
            </h1>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold">
              Be part of our mission
            </h1>
            <p className="text-black text-left text-lg ">
              We are looking for passionate people to join us on our mission. We
              values flat hierarchies, clear comunication and full ownership and
              responsibility.
            </p>
            <div
              onClick={scrollToContainer}
              className="flex gap-x-2 border-black border-2 rounded-3xl py-1 px-3 w-fit font-semibold my-8 cursor-pointer transition-all hover:scale-95"
            >
              View Openings{" "}
              <span className="font-bold ">
                <img className="w-3 h-7" src={arrow} alt="loading" />
              </span>{" "}
            </div>
          </div>

          <div className="w-full md:w-1/6 md:mb-10  lg:w-2/6 h-4/6 ">
            <img className="w-5/6 mx-auto" src={carrerimg1} alt="loading" />
          </div>
        </div>
        <div id="container" className=""></div>
        {/* Vacancies */}
        <div className="w-full h-full ">
          <div className="w-5/6 h-full mx-auto">
            <hr className="w-full h-0.5 mx-auto  bg-gray-100 border-0 rounded md:my-7 dark:bg-gray-700" />

            {Vacancies.map((Vacancies) => (
              <div className="" key={Vacancies.id}>
                <div className="flex flex-col md:flex-row lg:flex-row justify-between my-6">
                  <div className="flex">
                    <div>
                      <img
                        className="w-28 lg:w-12 mx-0 lg:mx-4 my-1 lg:my-5"
                        src={Vacancies.img}
                        alt="loading"
                      />
                    </div>
                    <div className="mx-5 lg:mx-0">
                      <h1 className="font-bold text-2xl  md:text-left">
                        {Vacancies.title}
                      </h1>
                      <p className="text-black text-xl  text-left my-2 lg:my-0">
                        {Vacancies.desc}
                      </p>
                      <div className="flex gap-x-5 my-3">
                        <span className="border-2 border-black rounded-3xl flex justify-between gap-2 px-2 py-1 font-medium">
                          <img className="w-3" src={location} alt="loading" />
                          <h1 className="text-sm">{Vacancies.location}</h1>
                        </span>
                        <span className="border-2 border-black rounded-3xl flex justify-between gap-x-2 gap-y-0 px-2 py-1 lg:py-1 font-medium">
                          <img className="w-3" src={time} alt="loading" />
                          <h1 className="text-sm">{Vacancies.jobType}</h1>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" flex lg:items-center  justify-center transition-all hover:scale-90 my-4">
                    <a href={Vacancies.link}>
                      <span className="w-5 rounded-xl font-bold bg-blue-950 text-white py-2 lg:py-2 px-8 lg:px-8  ">
                        Apply
                      </span>
                    </a>
                  </div>
                </div>
                <hr className="w-full h-0.5 mx-auto  bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Desctiption */}
        <div className="w-full py-6 mt-10 bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50%">
          <h1 className="flex  items-center text-center  font-semibold text-white text-4xl w-4/6  py-10 mx-auto">
            Defo truly values work life balance. We work hard and deliver, but
            at the end of the day you can switch off.
          </h1>
        </div>

        {/* image */}
        <div className="my-10">
          <img
            className="mx-auto w-4/6 md:w-2/6 lg:w-1/6"
            src={carrerimg2}
            alt="loading"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Carrers;
