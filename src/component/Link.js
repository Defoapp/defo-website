import React from 'react';
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";

function Link() {
  return (
    <div className='links'>
      
      <h1 className="downloadlink">Get the app now!</h1>
      <div className='downlink'>
      <img src={playstore} alt='Playstore' className="playstorelink"/>
      <img src={appstore} alt='Appstore' className="appstorelink"/>
      </div>
      </div>
  )
}

export default Link;