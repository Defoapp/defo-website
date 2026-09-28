import { useState } from "react";
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
  {
    id: "2",
    title: "Our Story",
    path: "/OurStory",
  },
  {
    id: "3",
    title: "About",
    path: "/about",
  },
  {
    id: "4",
    title: "Our Team",
    path: "/OurTeams",
  },
  {
    id: "5",
    title: "Careers",
    path: "/careers",
  },
  {
    id: "6",
    title: "Learn",
    path: "/learn",
  },
];

const Navbar = () => {
  const { isDark } = useTheme();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`sticky top-0 w-full flex h-16 justify-between items-center z-50 transition-colors duration-300 ${
        isDark
          ? "bg-black/95 text-white border-b border-white/10"
          : "bg-white/95 text-slate-800 border-b border-slate-200/90 shadow-sm backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="title">
        <img className="ml-4 w-15 h-7" src={logo} alt="logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex lg:flex hidden ml-5 justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins list-none no-underline font-normal cursor-pointer text-[16px] py-1 px-4 rounded-md transition-all duration-200 ${
              isDark
                ? "text-white hover:bg-white hover:text-black"
                : "text-slate-700 hover:bg-slate-100 hover:text-black"
            } ${active === nav.title ? "font-semibold" : ""} ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Actions */}
      <div className="hidden sm:flex items-center gap-3 mr-4 lg:mr-8">
        <ThemeToggle />
        <a href="https://creator.yesdefo.com/" target="_blank" rel="noreferrer">
          <div className="px-3 md:px-4 py-1.5 text-xs md:text-sm lg:text-base rounded-xl no-underline bg-green-500 font-medium text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-green-500 cursor-pointer whitespace-nowrap">
            <span>Join Creator</span>
          </div>
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden mr-4 flex flex-1 justify-end items-center gap-2">
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
          } absolute z-40 p-6 top-16 right-0 mx-2 my-2 w-[calc(100vw-2rem)] max-w-xs rounded-2xl sidebar shadow-2xl transition-colors duration-300 ${
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
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <Link to={nav.path}>{nav.title}</Link>
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
