import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    rotateX: -24,
    rotateY: 12,
    y: -20,
    transformPerspective: 1000,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    y: 0,
    transformPerspective: 1000,
    transition: {
      type: "spring",
      stiffness: 360,
      damping: 24,
      mass: 0.8,
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    rotateX: -18,
    rotateY: 10,
    y: -15,
    transformPerspective: 1000,
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8, rotateX: -10, transformPerspective: 600 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transformPerspective: 600,
    transition: { type: "spring", stiffness: 420, damping: 26 },
  },
  exit: { opacity: 0, y: -4, transition: { duration: 0.12 } },
};

const Navbar = () => {
  const { isDark } = useTheme();

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (title) => {
    setActive(title);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 w-full flex py-2 justify-between items-center z-50 transition-colors duration-300 ${
        isDark
          ? "bg-black text-white border-b border-white/10"
          : "bg-white text-slate-800 border-b border-slate-200/90 shadow-sm"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center relative z-50">
        <img className="ml-4 w-15 h-7" src={logo} alt="logo" />
      </Link>

      {/* Desktop Navigation (Centered) */}
      <ul className="list-none sm:flex lg:flex hidden justify-center items-center flex-1 gap-x-1 md:gap-x-2 lg:gap-x-3 py-1">
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

      {/* Desktop Actions (Right Side) */}
      <div className="hidden sm:flex items-center gap-2 md:gap-3 mr-4 lg:mr-8 shrink-0">
        {/* Theme Changer Toggle Button */}
        <div className="shrink-0">
          <ThemeToggle />
        </div>

        {/* Join Creator button */}
        <a href="https://creator.yesdefo.com/" target="_blank" rel="noreferrer" className="shrink-0 ml-1">
          <div className="px-3 md:px-4 py-1.5 text-xs md:text-sm lg:text-base rounded-xl no-underline bg-green-500 font-medium text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-green-500 cursor-pointer whitespace-nowrap">
            <span>Join Creator</span>
          </div>
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden mr-3 sm:mr-4 my-2 flex flex-1 justify-end items-center">
        {/* Hamburger / Close Button (100% visible across all mobile widths) */}
        <button
          type="button"
          aria-label={toggle ? "Close menu" : "Open menu"}
          onClick={() => setToggle(!toggle)}
          className={`relative z-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer focus:outline-none ${
            toggle
              ? isDark
                ? "bg-white/20 text-white ring-2 ring-white/30 shadow-lg"
                : "bg-slate-200 text-slate-950 ring-2 ring-slate-300 shadow-sm"
              : isDark
              ? "text-white hover:bg-white/10 active:bg-white/20"
              : "text-slate-900 hover:bg-slate-100 active:bg-slate-200"
          }`}
        >
          {toggle ? (
            /* Close 'X' Icon */
            <svg
              className="w-6 h-6 stroke-current transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* 3-Bar Hamburger Icon */
            <svg
              className="w-6 h-6 stroke-current transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* 3D Animated Dropdown and Backdrop */}
        <AnimatePresence>
          {toggle && (
            <>
              {/* Backdrop overlay when mobile menu is open (anchored below top navbar at top-16) */}
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed top-16 inset-x-0 bottom-0 z-40 bg-black/40 backdrop-blur-[2px] sm:hidden"
                onClick={() => setToggle(false)}
              />

              {/* 3D Perspective Flip Dropdown Menu */}
              <motion.div
                key="mobile-dropdown"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  transformOrigin: "top right",
                  transformStyle: "preserve-3d",
                }}
                className={`fixed z-50 p-6 top-[72px] right-3 sm:right-4 w-[calc(100vw-1.5rem)] max-w-xs rounded-2xl sidebar shadow-2xl flex flex-col ${
                  isDark
                    ? "bg-slate-950 text-white border border-white/10 shadow-black/80"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-slate-300/60"
                }`}
              >
                <motion.ul className="list-none text-center flex flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      variants={itemVariants}
                      className={`font-poppins list-none text-center no-underline font-medium mx-4 cursor-pointer text-[16px] ${
                        isDark ? "text-white hover:text-cyan-400" : "text-slate-800 hover:text-emerald-600"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => {
                        handleLinkClick(nav.title, nav.path);
                        setToggle(false);
                      }}
                    >
                      {nav.path ? <Link to={nav.path}>{nav.title}</Link> : nav.title}
                    </motion.li>
                  ))}

                  {/* Mobile Theme Selector (Dark, Bright, Auto) */}
                  <motion.li variants={itemVariants} className="list-none">
                    <ThemeToggle isMobile={true} />
                  </motion.li>

                  <motion.li variants={itemVariants} className="list-none">
                    <a href="https://creator.yesdefo.com/" target="_blank" rel="noreferrer">
                      <div
                        onClick={() => setToggle(false)}
                        className="font-poppins text-center font-medium cursor-pointer text-[16px] text-white bg-green-500 p-2.5 rounded-xl mt-2 transition-transform active:scale-95 shadow-md shadow-green-500/30"
                      >
                        Join Creator
                      </div>
                    </a>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;