import React, { useState } from "react";
import { Link } from "react-router-dom";

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

function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containersData = [
    {
      id: "1",
      icon1: insta,
      icon2: instaHover,
      text: "Instagram",
      link: "https://instagram.com/DefoApp",
    },
    {
      id: "2",
      icon1: fb,
      icon2: fbHover,
      text: "Facebook",
      link: "https://facebook.com/DefoApp",
    },
    {
      id: "3",
      icon1: x,
      icon2: xHover,
      text: "X",
      link: "https://twitter.com/DefoApp",
    },
    {
      id: "4",
      icon1: In,
      icon2: InHover,
      text: "LinkedIn",
      link: "https://www.linkedin.com/showcase/defoapp",
    },
  ];

  const titleStyle = "text-white font-semibold text-xl md:text-2xl py-2 md:py-4 block";
  const subHeadingStyle = "text-lg md:text-xl font-light text-white my-1 block hover:pl-2 duration-300";

  return (
    <footer className="w-full bg-black py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* socialmedia */}
        <div>
          {/* logo */}
          <Link to="/">
            <img className="w-28 mb-4" src={logo} alt="Defo logo" />
          </Link>
          <div className="my-3 flex flex-col gap-y-3">
            {containersData.map((container, index) => (
              <div key={container.id} className="hover:pl-2 duration-300">
                <a
                  href={container.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 items-center text-white"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={
                      hoveredIndex === index ? container.icon2 : container.icon1
                    }
                    alt={`${container.text} icon`}
                    className="w-6 transition-transform duration-300 transform hover:scale-95"
                  />
                  <span className="text-lg font-light">{container.text}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* about section */}
        <div>
          <h2 className={titleStyle}>About</h2>
          <div className="mt-2 flex flex-col">
            <Link to="/OurStory" className={subHeadingStyle}>
              Our Story
            </Link>
            <Link to="/OurTeams" className={subHeadingStyle}>
              Our Teams
            </Link>
            <Link to="/OurCreators" className={subHeadingStyle}>
              Our Creators
            </Link>
            <Link to="/about" className={subHeadingStyle}>
              About
            </Link>
          </div>
        </div>
        {/* Resource section */}
        <div>
          <h2 className={titleStyle}>Resources</h2>
          <div className="mt-2 flex flex-col">
            <a href="https://creator.yesdefo.com/" target="_blank" rel="noreferrer" className={subHeadingStyle}>
              Join Creator
            </a>
            <Link to="/topics" className={subHeadingStyle}>
              Topics
            </Link>
            <Link to="/careers" className={subHeadingStyle}>
              Careers
            </Link>
          </div>
        </div>
        {/* legal section */}
        <div>
          <h2 className={titleStyle}>Legal</h2>
          <div className="mt-2 flex flex-col">
            <Link to="/privacy" className={subHeadingStyle}>
              Privacy policy
            </Link>
            <Link to="/terms" className={subHeadingStyle}>
              Terms of use
            </Link>
            <Link to="/reportContent" className={subHeadingStyle}>
              Report content
            </Link>
          </div>
        </div>
        {/* Useful links section */}
        <div>
          <h2 className={titleStyle}>Useful Links</h2>
          <div className="mt-2 flex flex-col">
            <Link to="/#" className={subHeadingStyle}>
              Support
            </Link>
            <Link to="/faq" className={subHeadingStyle}>
              FAQ
            </Link>
          </div>
        </div>
      </div>
      {/* copyright bar */}
      <div className="mt-10 w-5/6 mx-auto">
        <hr className="border-gray-800" />
        <p className="text-white text-center my-3 text-sm md:text-base">
          &copy; 2023 LowPow. All rights reserved.
        </p>
        <hr className="border-gray-800" />
      </div>
    </footer>
  );
}

export default Footer;
