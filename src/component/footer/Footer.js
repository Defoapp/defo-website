import React, { useState } from "react";

// imported - images
import logo from "./socialMediaSvg/Logo.png";
import insta from "./socialMediaSvg/instagram_Default.svg";
import instaHover from "./socialMediaSvg/instagram_hover.svg";
import fb from "./socialMediaSvg/facebook_Default.svg";
import fbHover from "./socialMediaSvg/facebook_hover.svg";
import x from "./socialMediaSvg/X_Default.svg";
import xHover from "./socialMediaSvg/x_hover.svg";
import In from "./socialMediaSvg/linkedin_Default.svg";
import InHover from "./socialMediaSvg/linkedin_hover.svg";

const ImageSwapOnHover = ({ image1, image2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block bg-black">
      <img
        src={isHovered ? image2 : image1}
        alt="loading"
        className=" w-6 transition-transform duration-300  transform hover:scale-110 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

function Footer() {
  const titleStyle =
    "text-white font-medium text-2xl  py-2 border-b-2 border-green-500 w-fit ";
  const subHeadingStyle = `text-2xl font-light text-white w-44 my-3 hover:pl-2 duration-300   `;
  return (
    <div className="w-full h-full bg-black py-14 ">
      <div className="w-fit flex flex-wrap gap-x-20 mx-auto ">
        {/* socialmedia */}
        <div className="mx-16 md:mx-0 lg:mx-0">
          {/* logo */}
          <a href="/">
            <img src={logo} alt="loading" />
          </a>
          <div className="my-5">
            <a
              href="https://instagram.com/DefoApp"
              className="text-white text-2xl flex gap-1 items-center font-light"
            >
              <ImageSwapOnHover image1={insta} image2={instaHover} />
              Instagram
            </a>
            <a
              href="https://facebook.com/DefoApp"
              className="text-white text-2xl font-light flex gap-1 items-center my-3"
            >
              <ImageSwapOnHover image1={fb} image2={fbHover} />
              Facebook
            </a>
            <a
              href="https://twitter.com/DefoApp"
              className="text-white text-2xl font-light flex gap-1 items-center my-3"
            >
              <ImageSwapOnHover image1={x} image2={xHover} />X
            </a>
            <a
              href="https://www.linkedin.com/showcase/defoapp"
              className="text-white text-2xl font-light flex gap-1 items-center my-3"
            >
              <ImageSwapOnHover image1={In} image2={InHover} />
              LinkedIn
            </a>
          </div>
        </div>
        {/* about section */}
        <div className="mx-16 md:mx-0 lg:mx-0 px-4">
          <h1 className={titleStyle}>About</h1>
          <div className="mt-5">
            <a href="/OurStory">
              <h1 className={subHeadingStyle}>Our Story</h1>{" "}
            </a>
            <a href="/OurTeams">
              <h1 className={subHeadingStyle}>Our Teams</h1>
            </a>
            <a href="/OurCreators" className="z">
              <h1 className={subHeadingStyle}>Our Creators</h1>
            </a>
            <a href="/about">
              <h1 className={subHeadingStyle}>About</h1>
            </a>
          </div>
        </div>
        {/* Resource section */}
        <div className=" mx-16 md:mx-0 lg:mx-0 px-2">
          <h1 className={titleStyle}>Resource</h1>
          <div className="mt-5">
            <a href="https://creator.yesdefo.com/">
              <h1 className={subHeadingStyle}>Join Creator</h1>
            </a>
            <a href="/topics">
              <h1 className={subHeadingStyle}>Topics</h1>
            </a>
            <a href="/careers">
              <h1 className={subHeadingStyle}>Careers</h1>
            </a>
          </div>
        </div>
        {/* legal section */}
        <div className="mx-16 md:mx-0 lg:mx-0 px-2">
          <h1 className={titleStyle}>Legal</h1>
          <div className="mt-5">
            <a href="/privacy">
              <h1 className={subHeadingStyle}>Privacy policy</h1>
            </a>

            <a href="/terms">
              <h1 className={subHeadingStyle}>Terms of use</h1>
            </a>
            <a href="/reportContent">
              <h1 className={subHeadingStyle}>Report content</h1>
            </a>
          </div>
        </div>
        {/* Usefull links section */}
        <div className="mx-16 md:mx-0 lg:mx-0 px-2">
          <h1 className={titleStyle}>Usefull Links</h1>
          <div className="mt-1">
            <a href="/#">
              <h1 className={subHeadingStyle}>Support</h1>
            </a>
            <a href="/faq">
              <h1 className={subHeadingStyle}>FAQ</h1> FAQ
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
}

export default Footer;
