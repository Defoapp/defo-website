import React from "react";
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";
import logo from "../image/favicon.png"
import adobe from "../image/adobe.png"
import uiux from "../image/paper-crafts.png"
import photoedit from "../image/image-editing.png"
import videoedit from "../image/video-editing.png"
import papercraft from "../image/web-design.png"
import cardboard from "../image/box.png"
import decorations from "../image/decorations.png"
import kids from "../image/playtime.png"
import sports from "../image/sports.png"
import languages from "../image/presentation.png"
import cooking from "../image/cooking.png"
import womensstyle from "../image/hair-styling.png"




const Home = () =>{
    return(
        <div className="container">
          <div className="main">
      <h1 className="title">Information<br/> with <br/>Entertainment</h1>
    <p className="disc">Are you looking to have fun and learn at the same time?</p>
    <div>
      <img src={logo} alt="" className="logo" />
    </div>
    <img src={playstore} alt="" className="playstore" />
    <img src={appstore} alt="" className="appstore" />
    </div>





    <div class="parent">
    <h1 className="blocktitle">Discover, Like and Save the useful videos.</h1>
      <h3 className="blockdes">Discover a new way to learn and have fun at the same time!</h3>
<div class="div1 blocks"> 
<img src={adobe} className="Modules"/> 
      <h3 className="moduletitle">Adobe Tools</h3>
      <p className="moduledes">A tools are widely used in the creative industry</p>
      </div>
<div class="div2 blocks">
<img src={uiux} className="Modules"/> 
      <h3 className="moduletitle">UI/UX Design Tools</h3>
      <p className="moduledes">Advanced UI/UX Design Videos for Professional Creatives</p>
       </div>
<div class="div3 blocks">
<img src={photoedit} className="Modules"/> 
      <h3 className="moduletitle">Photo Editing</h3>
      <p className="moduledes">Best photo editing Tips and Tricks</p>
       </div>
<div class="div4 blocks">
<img src={videoedit} className="Modules"/> 
      <h3 className="moduletitle">Video Editing</h3>
      <p className="moduledes">Some popular video editing software Tricks</p>
       </div>
<div class="div5 blocks">
<img src={papercraft} className="Modules"/> 
      <h3 className="moduletitle">Paper Craft</h3>
      <p className="moduledes">Paper crafts are a great way to learn new skills and have fun.</p>
       </div>
<div class="div6 blocks">
<img src={cardboard} className="Modules"/> 
      <h3 className="moduletitle">Cardboard Craft</h3>
      <p className="moduledes">Cardboard is an excellent medium for craft work.</p>
       </div>
<div class="div7 blocks">
  <img src={decorations} className="Modules"/> 
      <h3 className="moduletitle">Decorations</h3>
      <p className="moduledes">Unique Decorations for Every Occasion</p>
       </div>
<div class="div8 blocks"><img src={kids} className="Modules"/> 
      <h3 className="moduletitle">Kids</h3>
      <p className="moduledes">Fun & Educational Activities for Kids  Inspire Learning & Growth</p>
       </div>
<div class="div9 blocks"><img src={sports} className="Modules"/> 
      <h3 className="moduletitle">Sports</h3>
      <p className="moduledes">Incredible Sports Videos for Every Athlete and Fan</p>
       </div>
<div class="div10 blocks"><img src={languages} className="Modules"/> 
      <h3 className="moduletitle">Languages</h3>
      <p className="moduledes">Unlock the Power of Language Learning with our Videos</p>
       </div>
<div class="div11 blocks"><img src={cooking} className="Modules"/> 
      <h3 className="moduletitle">Cooking</h3>
      <p className="moduledes">Delicious Recipes and Step Of Cooking Videos to Inspire You</p>
       </div>
<div class="div12 blocks"><img src={womensstyle} className="Modules"/> 
      <h3 className="moduletitle">Women's Style</h3>
      <p className="moduledes">We have 2,000+ videos of real women.</p>
       </div>
</div>
      <div className="thirdcontainer">
      <p className="des">"A short video app with a subscription model can offer high-<br/>quality content and attract a loyal audience."</p>
      <div className="ratecard">
        <p className="ratetitle">Ready to get started?</p>
        <p className="ratedes">The only app you need for a complete Entertainment</p>
      <div className="freetrial card">
        <p className="cardtitle">FREE TRIAL</p>
        <h1>₹0<p>/1 Month</p></h1>
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
        <h1>₹99<p>/1 Month</p></h1>
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
        <h1>₹499<p>/6 Month</p></h1>
        <div>
          <ul className="cardlist">
            <li>Single User</li>
            <li>No Ads</li>
            <li>Unlimited Videos</li>
          </ul>
        </div>
      </div>
      </div>
      <div>
      <h1 className="downloadlink">Get the app now!</h1>
      <img src={playstore} className="playstorelink"/>
      <img src={appstore} className="appstorelink"/>
      </div>
      
      </div>

    </div>
    
    
    );
}

export default Home;
