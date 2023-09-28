import React from "react";
// import logo from "../image/Logo.png"
import instagram from "../image/social media svg/instagram Default.svg";
import facebook from "../image/social media svg/facebook default.svg";
import twitter from "../image/social media svg/X Default.svg";
import linkedin from "../image/social media svg/linkedin Default.svg";
import {Link} from "react-router-dom"


const Footer = () =>{
    return(
        
        <div className="footer">
            <div className="footer_container">
            <div className="social ">
                {/* <img src={logo} className="logo" alt="logo"/> */}
                <div className="flogo"> </div>
                <div className="footer_link icon"><img src={instagram}
                className=" icons" alt="instagram"/>Instagram</div>
                <div className="footer_link icon "><img src={facebook}
                className=" icons" alt="facebook"/>Facebook</div>
                <div className="footer_link icon"><img src={twitter}
                className=" icons" alt="twitter"/>X</div>
                <div className="footer_link icon">
                <img src={linkedin}
                className=" icons" alt="linkedin"/>Linkedin</div>
            </div>
            <div className="about fblock">
            <p className="footer_head">About</p>
            <Link to="/ourstory" className="footer_links">Our Story</Link>
            <p className="footer_links">Our Teams</p>
            <p className="footer_links">Our creator</p>
            <p className="footer_links">About</p>
            </div>
            <div className="resource fblock">
            <p className="footer_head">Resource</p>
            <p className="footer_links">Join Creator</p>
            <p className="footer_links">Topics</p>
            </div>
            <div className="legal fblock">
            <p className="footer_head">Legal</p>
            <p className="footer_links">Privacy policy</p>
            <p className="footer_links">Teams of use</p>
            <p className="footer_links">Report content</p>
            </div>
            <div className="usefull_link fblock">
            <p className="footer_head">Usefull links</p>
            <p className="footer_links">Support</p>
            <p className="footer_links">FAQ</p>
            </div>
        </div>
        <hr/>
        <p className="rights">© 2023 LowPow. All rights reserved. </p>
        <hr/>
        </div>

    
    );
}
export default Footer;
