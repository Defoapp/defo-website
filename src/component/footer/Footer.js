import React from 'react'
import "./Footer.css"
import {Link} from 'react-router-dom'



import logos from "../footer/social media svg/Logo.png"
// import instagram from "../footer/social media svg/instagram Default.svg"
// import facebook from "../footer/social media svg/facebook default.svg"
// import x from "../footer/social media svg/X Default.svg"
// import linkedin from "../footer/social media svg/linkedin Default.svg"



function Footer() {
  return (
    <div class="footer">
     <div class="container">
        <div class="row">
            <div class="footer-col">
            <Link to='' className='logos'><img src={logos} alt='logo' className='logos'/></Link>                
            <ul>
            
            <li><Link to='' className='z'><div className='soclogo-insta soclogo'></div>Instagram</Link></li>
            <li><Link to='' className='z'><div className='soclogo-fb soclogo'></div>Facebook</Link></li>
            <li><Link to='' className='z'><div className='soclogo-x soclogo'></div>X</Link></li>
            <li><Link to='' className='z'><div className='soclogo-in soclogo'></div>Linkedin</Link></li>
            
            </ul>
            </div>
            <div class="footer-col">
                <h4>About</h4>
                <ul>
                    <li><Link to='/ourstory' className='z'>Our Story</Link></li>
                    <li><Link to='/ourteams' className='z'>Our Teams</Link></li>
                    <li><Link to='/ourcreators' className='z'>Our Creators</Link></li>
                    <li><Link to='/about' className='z'>About</Link></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Resource</h4>
                <ul>
                <li><Link to='' className='z'>Join Creator</Link></li>
                <li><Link to='' className='z'>Topics</Link></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Legal</h4>
                <ul>
                <li><Link to='' className='z'>Privacy policy</Link></li>
                <li><Link to='' className='z'>Teams of use</Link></li>
                <li><Link to='' className='z'>Report content</Link></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Usefull links</h4>
                <ul>
                <li><Link to='' className='z'>Support</Link></li>
                <li><Link to='' className='z'>FAQ</Link></li>
                </ul>
            </div>
            
        </div>
     </div>
     <div className='bottom'>
     <hr/>
     <p id='copyright'>&copy; 2019, All rights reserved.</p>
     <hr/>
     </div>
     
  </div>

  )
}

export default Footer