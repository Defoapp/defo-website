import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";

import { teamsMembers } from "../constants/map";

import team from "../image/ourTeams/teams Illustation.svg";
import linkedInImg from "../image/ourTeams/icon-park-outline_linked in.svg";

const OurTeams = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full mx-auto">
        <Navbar />
        {/* hero section */}
        <div className="relative w-11/12 md:w-5/6 mx-auto flex flex-col justify-center items-center py-12 md:py-16">
          <div className="text-center w-full">
            <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center font-bubblegum">
              Our Team
            </h1>
            <img className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto" src={team} alt="Defo Team Illustration" />
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-black text-center text-lg md:text-xl lg:text-2xl font-semibold mt-8 leading-relaxed">
              Behind every success story, there's a dedicated team of
              individuals who are passionate about making a difference. Meet the
              incredible people who make up Defo's team – a diverse group of
              talents, united by a shared commitment to our mission.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="w-full h-full pb-16">
          <h2 className="my-10 py-5 text-center w-full text-white text-2xl md:text-3xl lg:text-4xl font-bubblegum bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50%">
            Team Members
          </h2>

          <div className="place-items-center gap-y-12 gap-x-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-6">
            {teamsMembers.map((member) => (
              <div key={member.id} className="w-full max-w-xs text-center flex flex-col items-center">
                <img
                  className="mx-auto w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-md"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mt-5">
                  {member.name}
                </h3>
                <p className="font-semibold text-gray-600 text-base md:text-lg mt-1">
                  {member.designation}
                </p>
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-block hover:scale-110 transition-transform">
                  <img
                    className="w-7 h-7 mx-auto"
                    src={linkedInImg}
                    alt={`${member.name} LinkedIn`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OurTeams;
