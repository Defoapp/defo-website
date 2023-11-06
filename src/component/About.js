import React from 'react';
import "./About.css";
import {Navbar} from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer"
import logo from "../component/About_page_Img/Logo.png"
import playstore from "../component/About_page_Img/google-play-badge.svg";
import appstore from "../component/About_page_Img/app-store-badge.svg"
import lowPow from "../component/About_page_Img/lowpow logo.svg"
import exploreLogo from "../component/About_page_Img/Explore.svg"
import infoGraphics from "../component/About_page_Img/infographics.svg"
import dailyDose from "../component/About_page_Img/Daily dose.svg"

function About () {
  return (
    <div>
      <Navbar/>
    <div className='mainContainer'>
      
      <div className='titleContainer'>
      <h1 className='title'>About</h1>
      <div className='mainContent'>
        <div className='leftContainer'>
          <img src={logo} alt='loading'/>
          <p>Defo is an infotainment video app.</p>
          <p>Introducing a new infotainment app, the one-top destination for all your entertainment and information needs. Stay informed, Entertained and connected with Defo!</p>
          <div className='store'>
                <img className='playStore' src={playstore} alt='loading'/>
                <img className='appStore' src={appstore} alt='loading'/>
          </div>
        </div>
        <div className='rightContainer'>
          <img className='lowPow-logo' src={lowPow} alt='loading'/>
          <p>Lowpow is a digital product company. We to build best apps for you. Our products that inspire, empower, and simplify. We're here to create tools and experiences that not only meet but exceed expectations. Through creativity, expertise, and a passion for innovation, we're redefining what's possible.</p>
        </div>
      </div>
      </div>
      <div className='explain'>
        <p>An Infotainment app is a mobile application designed to combine elements of education and entertainment to engage, educate, and entertain users. These apps are typically created with the goal of making learning fun and enjoyable, particularly for children and learners of all ages.</p>
      </div>
      <div className='explore'>
        <div className='leftContainer'>
          <h1>Explore a World of Knowledge</h1>
          <p>The videos and interactive content covering an array of intriguing topics. From science to history, pop culture to DIY hacks, we've got it all. Our informative content keeps you in the loop and ready to impress in any conversation.</p>
        </div>
        <div className='rightContainer'>
          <img className='exploreLogo' src={exploreLogo} alt='loading' />
        </div>
      </div>
      <div className='infoGraphics'>
        <div className='leftContainer'>
          <img src={infoGraphics} alt='Loading'/>
        </div>
        <div className='rightContainer'>
          <h2>Infographics and Visual Delights</h2>
          <p>Feast your eyes on visually stunning infographics that simplify complex concepts. Learn, share, and impress with these eye-catching visuals.</p>
        </div>
      </div>
      <div className='dailyDose'>
        <div className='leftContainer'>
        <h1>Daily Dose of Fun</h1>
        <p>Infotainment doesn't have to be serious. Enjoy a daily dose of humor, weird facts, and intriguing anecdotes to brighten your day.</p>
        </div>
      <div className='rightContainer'>
        <img src={dailyDose} alt='Loading'/>
      </div>
      </div>
      
      <Footer/>
    </div>
    </div>
  )
}

export default About