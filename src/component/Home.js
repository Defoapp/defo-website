import React from "react";
import "../App.css";

import Navbar from "../component/Navbar/mainNavbar"

// ---------------Discover------------------
// import playstore from "../image/google-play-badge.svg";
// import appstore from "../image/app-store-badge.svg";
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
    <div className="mainDiv">
              {/* ------------Navbar------------------ */}
       <Navbar/>

      
      <Footer />
    </div>
  );
}

export default Home;
