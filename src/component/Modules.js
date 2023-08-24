import React from 'react';
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




function Modules() {
  return (
    <div class="parents">
      
    <h1 className="blocktitle">Discover, Like and Save the useful videos.</h1>
      <h3 className="blockdes">Discover a new way to learn and have fun at the same time!</h3>
      
      <div className='block'>
        
        <div className='first-block'>
      <div class="div1 blocks"> 
<img src={adobe} alt='Adobe' className="module"/> 
      <h3 className="title">Adobe Tools</h3>
      <p className="description">A tools are widely used in the creative industry</p>
      </div>
<div class="div2 blocks">
<img src={uiux} alt='UIUX' className="module"/> 
      <h3 className="title">UI/UX Design Tools</h3>
      <p className="description">Advanced UI/UX Design Videos for Professional Creatives</p>
       </div>
<div class="div3 blocks">
<img src={photoedit}  alt='Photoedit' className="module"/> 
      <h3 className="title">Photo Editing</h3>
      <p className="description">Best photo editing Tips and Tricks<br/>  <br/></p>
       </div>
<div class="div4 blocks">
<img src={videoedit} alt='Videoedit' className="module"/> 
      <h3 className="title">Video Editing</h3>
      <p className="description">Some popular video editing software Tricks</p>
       </div>
       </div>
       <div className='second-block'>
       <div class="div5 blocks">
<img src={papercraft} alt='Papercraft' className="module"/> 
      <h3 className="title">Paper Craft</h3>
      <p className="description">Paper crafts are a great way to learn new skills and have fun.</p>
       </div>
<div class="div6 blocks">
<img src={cardboard} alt='Cardboard' className="module"/> 
      <h3 className="title">Cardboard Craft</h3>
      <p className="description">Cardboard is an excellent medium for craft work.</p>
       </div>
<div class="div7 blocks">
  <img src={decorations} alt='Decorations' className="module"/> 
      <h3 className="title">Decorations</h3>
      <p className="description">Unique Decorations for Every Occasion</p>
       </div>
<div class="div8 blocks">
    <img src={kids} alt='Kids' className="module"/> 
      <h3 className="title">Kids</h3>
      <p className="description">Fun & Educational Activities for Kids  Inspire Learning & Growth</p>
       </div>
       </div>
        <div className='third-block'>
        <div class="div9 blocks">
    <img src={sports} alt='Sports' className="module"/> 
      <h3 className="title">Sports</h3>
      <p className="description">Incredible Sports Videos for Every Athlete and Fan</p>
       </div>
<div class="div10 blocks">
    <img src={languages} alt='Languages' className="module"/> 
      <h3 className="title">Languages</h3>
      <p className="description">Unlock the Power of Language Learning with our Videos</p>
       </div>
<div class="div11 blocks">
    <img src={cooking} alt='Cookings' className="module"/> 
      <h3 className="title">Cooking</h3>
      <p className="description">Delicious Recipes and Step-by-Step Cooking Videos to Inspire You</p>
       </div>
<div class="div12 blocks">
    <img src={womensstyle} alt='Womenstyles' className="module"/> 
      <h3 className="title">Women's Style</h3>
      <p className="description">We have 2,000+ videos of real women.</p>
       </div>

        </div>
      </div>
</div>


  )
}

export default Modules