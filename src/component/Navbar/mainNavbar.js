import React, { useState } from "react";
import close from "../Navbar/image/close.svg";
import menu from "../Navbar/image/menu.svg";
import logo from "../Navbar/image/Logo.png";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

export const navLinks = [
  {
    id: "1",
    title: "Home",
    path: "/",
  },
  { id: "2", title: "Pricing" },
  {
    id: "3",
    title: "Our Story",
    path: "/OurStory",
  },
  {
    id: "4",
    title: "About",
    path: "/about",
  },
  {
    id: "5",
    title: "Our Team",
    path: "/OurTeams",
  },
  {
    id: "6",
    title: "Careers",
    path: "/careers",
  },
  {
    id: "7",
    title: "Learn",
    path: "/learn",
  },
];

const Navbar = () => {
  const { isDark } = useTheme();

  const scrollToContainer = (id) => {
    const container = document.getElementById(id);
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (title, path) => {
    setActive(title);
    if (title === "Pricing") {
      // Scroll to the container with ID "price" for the "Pricing" link
      scrollToContainer("price");
    } else {
      // Scroll to the top for other links
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 w-full flex py-2 justify-between items-center z-50 transition-colors duration-300 ${
        isDark
          ? "bg-black/95 text-white border-b border-white/10"
          : "bg-white/95 text-slate-800 border-b border-slate-200/90 shadow-sm backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img className="ml-4 w-15 h-7" src={logo} alt="logo" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-x-2 md:gap-x-4 mr-4 lg:mr-8">
        <ul className="list-none flex justify-center items-center gap-x-1 md:gap-x-3 py-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins list-none no-underline font-normal cursor-pointer text-xs md:text-sm lg:text-[16px] py-1 px-2 md:px-3 lg:px-4 rounded-md whitespace-nowrap transition-all duration-200 ${
                isDark
                  ? "text-white hover:bg-white hover:text-black"
                  : "text-slate-700 hover:bg-slate-100 hover:text-black"
              } ${active === nav.title ? "font-semibold" : ""}`}
              onClick={() => handleLinkClick(nav.title, nav.path)}
            >
              {nav.path ? <Link to={nav.path}>{nav.title}</Link> : nav.title}
            </li>
          ))}
        </ul>

        {/* Theme Changer Toggle Button */}
        <div className="shrink-0">
          <ThemeToggle />
        </div>

        {/* Join Creator button */}
        <a href="https://creator.yesdefo.com/" target="_blank" rel="noreferrer" className="shrink-0 ml-1 md:ml-2">
          <div className="px-3 md:px-4 py-1.5 text-xs md:text-sm lg:text-base rounded-xl no-underline bg-green-500 font-medium text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-green-500 cursor-pointer whitespace-nowrap">
            <span>Join Creator</span>
          </div>
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden mr-4 my-2 flex flex-1 justify-end items-center gap-2">
        <ThemeToggle />
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`w-[28px] h-[28px] object-contain cursor-pointer transition-all ${
            isDark ? "" : "filter invert brightness-0"
          }`}
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } z-40 p-6 absolute top-16 right-0 mx-2 w-[calc(100vw-2rem)] max-w-xs rounded-2xl sidebar shadow-2xl transition-colors duration-300 ${
            isDark
              ? "bg-black/95 text-white border border-white/10"
              : "bg-white text-slate-900 border border-slate-200"
          }`}
        >
          <ul className="list-none text-center flex flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins list-none text-center no-underline font-medium mx-4 cursor-pointer text-[16px] ${
                  isDark ? "text-white hover:text-cyan-400" : "text-slate-800 hover:text-emerald-600"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  handleLinkClick(nav.title, nav.path);
                  setToggle(false);
                }}
              >
                {nav.path ? <Link to={nav.path}>{nav.title}</Link> : nav.title}
              </li>
            ))}

            {/* Mobile Theme Selector */}
            <ThemeToggle isMobile={true} />

            <a href="https://creator.yesdefo.com/" target="_blank" rel="noreferrer">
              <li
                onClick={() => setToggle(false)}
                className="font-poppins list-none no-underline font-medium cursor-pointer text-[16px] text-white bg-green-500 p-2 rounded-xl mt-2"
              >
                Join Creator
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
