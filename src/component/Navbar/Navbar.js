import { useState } from "react";
import close from "../Navbar/image/close.svg";
import menu from "../Navbar/image/menu.svg";
import logo from "../Navbar/image/Logo.png";
import { Link } from "react-router-dom";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
 
  
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" bg-black w-full flex py-3 justify-between items-center navbar">

      {/* Logo */}
      <Link to="/" className="title">
      <img className=" ml-4 w-15 h-7" src={logo} alt="logo"/>
      </Link>
      

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex  mr-10 hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link to="/"><li
            key={nav.id}
            className={`font-poppins list-none no-underline font-normal cursor-pointer text-[16px]  text-[white]  hover:bg-[white] hover:text-[black] hover:transition-[0.3s] hover:duration-[ease] hover:rounded-md hover:p-1 ${
              active === nav.title ? "text-white" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-8" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li></Link>
          // 
        ))}
        <a href="https://creator.yesdefo.com/"><li className="relative flex p-1.5 text-lg rounded-xl no-underline   items-center justify-center overflow-hidden bg-green-500 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-green-500 hover:shadow-green-500 hover:before:border-[25px]"><span class="relative z-10">Join Creator</span></li></a>  
      </ul>


      {/* Mobile Navigation */}
      <div className="sm:hidden mr-8  flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] text-black  object-contain"
          onClick={() => setToggle(!toggle)}
        />


        {/* Sidebar */}
        <div
          className={`${ !toggle ? "hidden" : "flex"} p-6 bg-black-gradient  bg-black absolute mt-56 right-0 mx-4 my-2 w-96 rounded-xl sidebar`}>
          <ul className="list-none text-center flex   flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <Link to="/"><li
                key={nav.id}
                className={`font-poppins list-none text-center   no-underline font-medium ml-12 mr-12 cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li></Link>
            ))}
            <li className="font-poppins list-none no-underline font-medium mr-5  cursor-pointer text-[16px] text-white  bg-green-500 p-1.5 rounded-xl mt-3 ">Join Creator</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;