import React from "react";
import logo from "./social media svg/Logo.png";

import insta from "./social media svg/instagram Default.svg";
import fb from "./social media svg/facebook default.svg";
import x from "./social media svg/X Default.svg";
import In from "./social media svg/linkedin Default.svg";

const Footer = () => {
  return (
    // main div
    <div className="w-full h-full bg-black py-14">
      <div className="w-fit flex flex-wrap gap-x-32 mx-auto ">
        {/* socialmedia */}
        <div className="mx-16 md:mx-0 lg:mx-0">
          {/* logo */}
          <img src={logo} alt="loading" />
          <div className="my-5">
            <a href="https://instagram.com/DefoApp" className="text-white text-2xl font-light flex my-3">
              <img className="w-5 mx-2" src={insta} alt="loading" />
              Instagram
            </a>
            <a href="https://facebook.com/DefoApp" className="text-white text-2xl font-light flex my-3">
              <img className="w-5 mx-2" src={fb} alt="loading" />
              Facebook
            </a>
            <a href="https://twitter.com/DefoApp" className="text-white text-2xl font-light flex my-3">
              <img className="w-5 mx-2" src={x} alt="loading" />X
            </a>
            <a href="https://www.linkedin.com/showcase/defoapp" className="text-white text-2xl font-light flex my-3">
              <img className="w-5 mx-2" src={In} alt="loading" />
              LinkedIn
            </a>
          </div>
        </div>
        {/* about section */}
        <div className="mx-16 md:mx-0 lg:mx-0 ">
          <h1 className="text-white font-medium text-2xl my-3">About</h1>
          <div className="mt-5">
            <a href="/OurStory">
              <h1 className="text-2xl font-light text-white my-3">Our Story</h1>{" "}
            </a>
            <a href="/OurTeams">
              <h1 className="text-2xl font-light text-white my-3">Our Teams</h1>
            </a>
            <a href="/OurCreators" className="z">
              <h1 className="text-2xl font-light text-white my-3">
                Our Creators
              </h1>
            </a>
            <a href="/about">
              <h1 className="text-2xl font-light text-white my-3">About</h1>
            </a>
          </div>
        </div>
        {/* Resource section */}
        <div className=" mx-16 md:mx-0 lg:mx-0">
          <h1 className="text-white font-medium text-2xl my-3">Resource</h1>
          <div className="mt-5">
            <a href="https://creator.yesdefo.com/">
              <h1 className="text-2xl font-light text-white my-3">
                Join Creator
              </h1>
            </a>
            <a href="/#">
              <h1 className="text-2xl font-light text-white my-3">Topics</h1>
            </a>
            <a href="/careers">
              <h1 className="text-2xl font-light text-white my-3">Careers</h1>
            </a>
          </div>
        </div>
        {/* legal section */}
        <div className="mx-16 md:mx-0 lg:mx-0 ">
          <h1 className="text-white font-medium text-2xl my-3">Legal</h1>
          <div className="mt-5">
            <a href="/privacy">
              <h1 className="text-2xl font-light text-white my-3">
                Privacy policy
              </h1>
            </a>

            <a href="/terms">
              <h1 className="text-2xl font-light text-white my-3">
                Terms of use
              </h1>
            </a>
            <a href="/reportContent">
              <h1 className="text-2xl font-light text-white my-3">
                Report content
              </h1>
            </a>
          </div>
        </div>
        {/* Usefull links section */}
        <div className="mx-16 md:mx-0 lg:mx-0 ">
          <h1 className="text-white font-medium text-2xl my-3">
            Usefull Links
          </h1>
          <div className="mt-1">
            <a href="/#">
              <h1 className="text-2xl font-light text-white my-3">Support</h1>
            </a>
            <a href="/faq">
              <h1 className="text-2xl font-light text-white my-3">FAQ</h1> FAQ
            </a>
          </div>
        </div>
      </div>
      {/* copywrite bar */}
      <div className="mt-10 w-5/6 mx-auto">
        <hr />
        <h1 className="text-white text-center my-3">
          &copy; 2023 Lowpow. All rights reserved.
        </h1>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
