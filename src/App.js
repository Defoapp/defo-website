import React from "react";
import '../src/App.css'
import logo from "../src/image/favicon.png"
import playstore from "../src/image/google-play-badge.svg"
import appstore from "../src/image/app-store-badge.svg"

export default function main(){

  return(
    <div className="main-container">
      <h1 className="title">Information<br/> with <br/>Entertainment</h1>
    <p className="disc">Are you looking to have fun and learn at the same time?</p>
    <div>
      <img src={logo} alt="" className="logo" />
    </div>
    <img src={playstore} alt="" className="playstore" />
    <img src={appstore} alt="" className="appstore" />
    </div>
    )
}
