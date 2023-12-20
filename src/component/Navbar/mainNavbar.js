import { useState } from "react";
import close from "../Navbar/image/close.svg";
import menu from "../Navbar/image/menu.svg";
import logo from "../Navbar/image/Logo.png";
import { Link } from "react-router-dom";

export const navLinks = [
  {
    id: "1",
    title: "Home",
    path: "/",
  },
  { id: "2",
    title: "Pricing", 
   },
  {
    id: "3",
    title: "OurStory",
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
    title: "Career",
    path: "/career",
  },
];

const Navbar = () => {

  const scrollToContainer = () => {
    const container = document.getElementById('container');
    container.scrollIntoView({ behavior: 'smooth' });
  };

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative top-0 bg-black w-full flex py-2 justify-between items-center ">
      {/* Logo */}
      <Link to="/">
        <img className=" ml-4 w-15 h-7" src={logo} alt="logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex lg:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className={` relative font-poppins list-none no-underline font-normal cursor-pointer text-[16px] text-[white]  hover:bg-[white] hover:text-[black] hover:transition-[0.3s] hover:duration-[ease] hover:rounded-md py-1 px-4  ${
              active === nav.title ? "text-white" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-8" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link onClick={scrollToContainer} to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <a href="https://creator.yesdefo.com/">
          <li className="relative  sm:flex lg:flex hidden  right-16 p-1.5 text-lg rounded-xl no-underline   items-center justify-center overflow-hidden  bg-green-500 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-green-500 hover:shadow-green-500 hover:before:border-[25px]">
            <span className="relative z-10">Join Creator</span>
          </li>
        </a>
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden mr-8   flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] text-black  object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }  z-40 p-6 bg-black-gradient  bg-black absolute top-16 right-0 mx-4  w-96 rounded-xl sidebar`}
        >
          <ul className="list-none text-center flex   flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins  list-none text-center   no-underline font-medium ml-12 mr-12 cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link onClick={scrollToContainer} to={nav.path}>{nav.title}</Link>
              </li>
            ))}
            <li className="font-poppins  list-none no-underline font-medium mr-5  cursor-pointer text-[16px] text-white  bg-green-500 p-1.5 rounded-xl mt-3 ">
              Join Creator
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
