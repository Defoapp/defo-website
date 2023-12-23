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

  const titleStyle = "text-white font-medium text-2xl  py-2  w-fit ";
  const subHeadingStyle = `text-2xl font-light text-white w-44 my-3 hover:pl-2 duration-300   `;
  return (
    <div className="w-full h-full bg-black py-14 ">
      <div className="w-fit flex flex-wrap gap-x-20 mx-auto ">
        {/* socialmedia */}
        <div className="mx-16  md:mx-0 lg:mx-0 ">
          {/* logo */}
          <a href="/">
            <img className="w-28" src={logo} alt="loading" />
          </a>
          <div className="my-5  w-fit flex flex-col gap-y-3 ">
            {containersData.map((container, index) => (
              <div key={container.id} className="w-44 hover:pl-2 duration-300 ">
                <a
                  href={container.link}
                  className="flex gap-1 items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={
                      hoveredIndex === index ? container.icon2 : container.icon1
                    }
                    alt={`Icon ${index}`}
                    className="w-6 transition-transform duration-300  transform hover:scale-y-95 font-light"
                  />
                  <h1 className="text-white text-2xl font-light mx-2">
                    {container.text}
                  </h1>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* about section */}
        <div className="mx-16 md:mx-0 lg:mx-0 px-4 ">
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
          &copy; 2023 LowPow. All rights reserved.
        </h1>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
