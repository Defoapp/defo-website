import React from "react";
import "./Footer.css";
import logos from "../footer/social media svg/Logo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <a href="/" className="logo">
              <img src={logos} alt="logo" className="logos" />
            </a>
            <ul>
              <li>
                <a href="https://instagram.com/DefoApp" className="z">
                  <div className="soclogo-insta soclogo"></div>Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com/DefoApp" className="z">
                  <div className="soclogo-fb soclogo"></div>Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/DefoApp" className="z">
                  <div className="soclogo-x soclogo"></div>X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/showcase/defoapp"
                  className="z"
                >
                  <div className="soclogo-in soclogo"></div>Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li>
                <a href="/OurStory" className="z">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/OurTeams" className="z">
                  Our Teams
                </a>
              </li>
              <li>
                <a href="/OurCreators" className="z">
                  Our Creators
                </a>
              </li>
              <li>
                <a href="/about" className="z">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resource</h4>
            <ul>
              <li>
                <a href="https://creator.yesdefo.com/" className="z">
                  Join Creator
                </a>
              </li>
              <li>
                <a href="/#" className="z">
                  Topics
                </a>
              </li>
              <li>
                <a href="/careers" className="z">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy" className="z">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/terms" className="z">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/#" className="z">
                  Report content
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Usefull links</h4>
            <ul>
              <li>
                <a href="/#" className="z">
                  Support
                </a>
              </li>
              <li>
                <a href="/faq" className="z">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <hr />
        <p className="copyright">&copy; 2023 LowPow. All rights reserved.</p>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
