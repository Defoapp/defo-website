import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Navbar/image/Logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="/"><div>Home</div></a>
        </li>
        <li>
          <a href="https://creator.yesdefo.com/" className="join" to="/joincreator">
            Join Creator
          </a>
        </li>
      </ul>
    </nav>
  );
};
