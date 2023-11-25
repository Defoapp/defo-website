import React from "react";
import "../App.css";

import Navbar from "../component/Navbar/mainNavbar"

// ---------------Discover------------------
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";
import adobe from "../image/adobe.png";
import uiux from "../image/paper-crafts.png";
import photoedit from "../image/image-editing.png";
import videoedit from "../image/video-editing.png";
import papercraft from "../image/web-design.png";
import cardboard from "../image/box.png";
import decorations from "../image/decorations.png";
import kids from "../image/playtime.png";
import sports from "../image/sports.png";
import languages from "../image/presentation.png";
import cooking from "../image/cooking.png";
import womensstyle from "../image/hair-styling.png";

// -----------------------Footer-------------
import Footer from "../component/footer/Footer";

function Home() {
 
  
  return (
    <div className="mainDiv">
              {/* ------------Navbar------------------ */}
       <Navbar/>

      <div className="home">
        <h1 className="topic">
          Information
          <br /> with <br />
          Entertainment
        </h1>
        <p className="disc">
          Are you looking to have fun and learn at the same time?
        </p>

        <div className="linka">
          <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"><img src={playstore} alt="playstore" className="playstore" /></a>
          <img src={appstore} alt="appstore" className="appstore" />
        </div>
      </div>
      {/* ----------------------------------------- */}
      <div id="discover" className="discover">
        <h1 className="blocktitle">
          Discover, Like and Save the useful videos.
        </h1>
        <h3 className="blockdes">
          Discover a new way to learn and have fun at the same time!
        </h3>

        <div className="block">
          <div className="first-block">
            <div className="div1 blocks">
              <img src={adobe} alt="Adobe" className="module" />
              <h3 className="title">Adobe Tools</h3>
              <p className="description">
                A tools are widely used in the creative industry
              </p>
            </div>
            <div className="div2 blocks">
              <img src={uiux} alt="UIUX" className="module" />
              <h3 className="title">UI/UX Design Tools</h3>
              <p className="description">
                Advanced UI/UX Design Videos for Professional Creatives
              </p>
            </div>
            <div className="div3 blocks">
              <img src={photoedit} alt="Photoedit" className="module" />
              <h3 className="title">Photo Editing</h3>
              <p className="description">
                Best photo editing Tips and Tricks
                <br /> <br />
              </p>
            </div>
            <div className="div4 blocks">
              <img src={videoedit} alt="Videoedit" className="module" />
              <h3 className="title">Video Editing</h3>
              <p className="description">
                Some popular video editing software Tricks
              </p>
            </div>
          </div>
          <div className="second-block">
            <div className="div5 blocks">
              <img src={papercraft} alt="Papercraft" className="module" />
              <h3 className="title">Paper Craft</h3>
              <p className="description">
                Paper crafts are a great way to learn new skills and have fun.
              </p>
            </div>
            <div className="div6 blocks">
              <img src={cardboard} alt="Cardboard" className="module" />
              <h3 className="title">Cardboard Craft</h3>
              <p className="description">
                Cardboard is an excellent medium for craft work.
              </p>
            </div>
            <div className="div7 blocks">
              <img src={decorations} alt="Decorations" className="module" />
              <h3 className="title">Decorations</h3>
              <p className="description">
                Unique Decorations for Every Occasion
              </p>
            </div>
            <div className="div8 blocks">
              <img src={kids} alt="Kids" className="module" />
              <h3 className="title">Kids</h3>
              <p className="description">
                Fun & Educational Activities for Kids Inspire Learning & Growth
              </p>
            </div>
          </div>
          <div className="third-block">
            <div className="div9 blocks">
              <img src={sports} alt="Sports" className="module" />
              <h3 className="title">Sports</h3>
              <p className="description">
                Incredible Sports Videos for Every Athlete and Fan
              </p>
            </div>
            <div className="div10 blocks">
              <img src={languages} alt="Languages" className="module" />
              <h3 className="title">Languages</h3>
              <p className="description">
                Unlock the Power of Language Learning with our Videos
              </p>
            </div>
            <div className="div11 blocks">
              <img src={cooking} alt="Cookings" className="module" />
              <h3 className="title">Cooking</h3>
              <p className="description">
                Delicious Recipes and Step-by-Step Cooking Videos to Inspire You
              </p>
            </div>
            <div className="div12 blocks">
              <img src={womensstyle} alt="Womenstyles" className="module" />
              <h3 className="title">Women's Style</h3>
              <p className="description">
                We have 2,000+ videos of real women.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------ */}
      <div className="pricing">
        <div>
          <p className="abouts">
            "A short video app with a subscription model can offer high-
            <br />
            quality content and attract a loyal audience."
          </p>
        </div>
        <div id="pricing" className="ratecard-des">
          <p className="ratetitle">Ready to get started?</p>
          <p className="ratedes">
            The only app you need for a complete Entertainment
          </p>
        </div>
        <div className="card-container">
          <div className="freetrial card">
            <p className="cardtitle">FREE TRIAL</p>
            <p className="price">
              ₹0 <span className="validity">/1 Month</span>
            </p>
            <hr />
            <div>
              <ul className="cardlist">
                <li>Single User</li>
                <li>No Ads</li>
                <li>Unlimited Videos</li>
              </ul>
            </div>
          </div>
          <div className="onemonth card">
            <p className="cardtitle">SUBSCRIPTION</p>
            <p className="price">
              ₹99 <span className="validity">/1 month</span>
            </p>
            <hr />
            <div>
              <ul className="cardlist">
                <li>Single User</li>
                <li>No Ads</li>
                <li>Unlimited Videos</li>
              </ul>
            </div>
          </div>
          <div className="sixmonth card">
            <p className="cardtitle">SUBSCRIPTION</p>
            <p className="price">
              ₹499 <span className="validity">/6 Month</span>
            </p>
            <hr />
            <div>
              <ul className="cardlist">
                <li>Single User</li>
                <li>No Ads</li>
                <li>Unlimited Videos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------- */}

      <div className="links">
        <h1 className="downloadlink">Get the app now!</h1>
        <div className="downlink">
          <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"><img src={playstore} alt="Playstore" className="playstorelink" /></a>
          <img src={appstore} alt="Appstore" className="appstorelink" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
