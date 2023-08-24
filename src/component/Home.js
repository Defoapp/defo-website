import React from "react";
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";
import logo from "../image/Logo.png"


const Home = () =>{
    return(
        
          <div className="home">
            <div>
      <img src={logo} alt="" className="logo" />
    </div>
      <h1 className="title">Information<br/> with <br/>Entertainment</h1>
    <p className="disc">Are you looking to have fun and learn at the same time?</p>
    
    <div className="link">
    <img src={playstore} alt="" className="playstore" />
    <img src={appstore} alt="" className="appstore" />
    </div>
    </div>

    
    );
}

export default Home;
