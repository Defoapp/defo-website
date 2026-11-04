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

  // Smoothly scroll to the top of the page when clicking any footer link
  // especially when clicking the link of the currently active page
  const handleLinkClick = (targetPath) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    try {
      if (targetPath) {
        sessionStorage.removeItem(`defo_scroll_${targetPath}`);
      }
      sessionStorage.removeItem(`defo_scroll_${window.location.pathname}`);
    } catch (e) {
      // ignore
    }
  };

  const socialLinks = [
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

  const titleStyle =
    "text-white stay-white footer-title font-bold text-sm sm:text-lg md:text-xl mb-2 sm:mb-4 block tracking-wide";
  const subHeadingStyle =
    "footer-link text-xs sm:text-sm md:text-base font-normal text-slate-400 hover:text-white my-1 sm:my-1.5 block hover:pl-1.5 duration-200 transition-all cursor-pointer";

  return (
    <footer
      className="relative z-30 w-full bg-black py-8 sm:py-12 md:py-14 text-white overflow-hidden"
      style={{ backgroundColor: "#000000", isolation: "isolate" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: On mobile, 1 branding column + 2-column link grid. On desktop: 5-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand & Social Column */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link to="/" onClick={() => handleLinkClick("/")}>
              <img className="w-24 sm:w-28 mb-4" src={logo} alt="Defo logo" />
            </Link>

            {/* Social Media Links: Horizontal on mobile, vertical list with labels on desktop */}
            <div className="flex flex-row flex-wrap sm:flex-col gap-2.5 sm:gap-3">
              {socialLinks.map((container, index) => (
                <a
                  key={container.id}
                  href={container.link}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link flex gap-2 items-center text-slate-400 hover:text-white transition-colors duration-200 p-1.5 sm:p-0 rounded-lg hover:bg-white/5 sm:hover:bg-transparent"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  title={container.text}
                >
                  <img
                    src={
                      hoveredIndex === index ? container.icon2 : container.icon1
                    }
                    alt={`${container.text} icon`}
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 transform hover:scale-110"
                  />
                  <span className="text-xs sm:text-sm md:text-base font-light hidden sm:inline">
                    {container.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Grid: 2 columns on mobile, 4 columns on desktop */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
            {/* About section */}
            <div>
              <h2 className={titleStyle}>About</h2>
              <div className="flex flex-col">
                <Link
                  to="/OurStory"
                  onClick={() => handleLinkClick("/OurStory")}
                  className={subHeadingStyle}
                >
                  Our Story
                </Link>
                <Link
                  to="/OurTeams"
                  onClick={() => handleLinkClick("/OurTeams")}
                  className={subHeadingStyle}
                >
                  Our Teams
                </Link>
                <Link
                  to="/OurCreators"
                  onClick={() => handleLinkClick("/OurCreators")}
                  className={subHeadingStyle}
                >
                  Our Creators
                </Link>
                <Link
                  to="/about"
                  onClick={() => handleLinkClick("/about")}
                  className={subHeadingStyle}
                >
                  About
                </Link>
              </div>
            </div>

            {/* Resources section */}
            <div>
              <h2 className={titleStyle}>Resources</h2>
              <div className="flex flex-col">
                <Link
                  to="/learn"
                  onClick={() => handleLinkClick("/learn")}
                  className={subHeadingStyle}
                >
                  Learn
                </Link>
                <a
                  href="https://creator.yesdefo.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={subHeadingStyle}
                >
                  Join Creator
                </a>
                <Link
                  to="/topics"
                  onClick={() => handleLinkClick("/topics")}
                  className={subHeadingStyle}
                >
                  Topics
                </Link>
                <Link
                  to="/careers"
                  onClick={() => handleLinkClick("/careers")}
                  className={subHeadingStyle}
                >
                  Careers
                </Link>
              </div>
            </div>

            {/* Legal section */}
            <div>
              <h2 className={titleStyle}>Legal</h2>
              <div className="flex flex-col">
                <Link
                  to="/privacy"
                  onClick={() => handleLinkClick("/privacy")}
                  className={subHeadingStyle}
                >
                  Privacy policy
                </Link>
                <Link
                  to="/terms"
                  onClick={() => handleLinkClick("/terms")}
                  className={subHeadingStyle}
                >
                  Terms of use
                </Link>
                <Link
                  to="/reportContent"
                  onClick={() => handleLinkClick("/reportContent")}
                  className={subHeadingStyle}
                >
                  Report content
                </Link>
              </div>
            </div>

            {/* Useful Links section */}
            <div>
              <h2 className={titleStyle}>Useful Links</h2>
              <div className="flex flex-col">
                <Link
                  to="/#"
                  onClick={() => handleLinkClick("/")}
                  className={subHeadingStyle}
                >
                  Support
                </Link>
                <Link
                  to="/faq"
                  onClick={() => handleLinkClick("/faq")}
                  className={subHeadingStyle}
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            &copy; 2023 LowPow. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link
              to="/privacy"
              onClick={() => handleLinkClick("/privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy
            </Link>
            <span>•</span>
            <Link
              to="/terms"
              onClick={() => handleLinkClick("/terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms
            </Link>
            <span>•</span>
            <Link
              to="/reportContent"
              onClick={() => handleLinkClick("/reportContent")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Report
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
