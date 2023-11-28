import React from "react";
import "../App.css";

import Navbar from "../component/Navbar/mainNavbar"
import hero from "../image/startbackground_1.webp"

// ---------------Discover------------------
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";
// import adobe from "../image/adobe.png";
// import uiux from "../image/paper-crafts.png";
// import photoedit from "../image/image-editing.png";
// import videoedit from "../image/video-editing.png";
// import papercraft from "../image/web-design.png";
// import cardboard from "../image/box.png";
// import decorations from "../image/decorations.png";
// import kids from "../image/playtime.png";
// import sports from "../image/sports.png";
// import languages from "../image/presentation.png";
// import cooking from "../image/cooking.png";
// import womensstyle from "../image/hair-styling.png";

// -----------------------Footer-------------
import Footer from "../component/footer/Footer";

function Home() {
 
  
  return (
    <div className="relative w-full h-full">
              {/* ------------Navbar------------------ */}
       <div className=" w-full mx-auto">
        <div className="h-full relative">
        <Navbar/>
          {/* Overlay */}
          <div className="absolute w-full h-full text-white top-60 sm:top-26 md:top-20 lg:top-48  pl-4 md:pl-20 lg:pl-40 ">
            <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl
             font-bold font-bubblegum tracking-wide">Information<br/>with<br/>Entertainment</h1>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl text-left font-medium">Are you looking to have fun and learn at the same time?</p>
            <div className="flex gap-10 mt-10 flex-col md:flex-row">
              <img className="w-32" src={playstore} alt="loading"/>
              <img className="w-32" src={appstore} alt="loading"/>
            </div>
          </div>
          <img className="w-full h-screen object-cover" src={hero} alt="loading"/>
        </div>
       </div>
      
      <Footer />
    </div>
  );
}

export default Home;
