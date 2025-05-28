import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 z-50 flex flex-wrap justify-between w-full px-10 pt-6 text-black bg-white bg-opacity-90 backdrop-blur-md md:items-center md:px-20"
    >
      <span className="text-4xl font-bold -tracking-wide">
        JOURNEY JUNCTION
      </span>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } mx-24 mt-4 font-semibold md:mt-5 bg-black px-4 py-2 rounded-xl bg-opacity-30 md:bg-transparent md:static md:mx-0 md:flex gap-6 items-center text-center`}
      >
        <li className="p-1 transition-all duration-300 cursor-pointer text-md md:p-0">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="p-1 transition-all duration-300 cursor-pointer text-md md:p-0">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="p-1 transition-all duration-300 cursor-pointer text-md md:p-0">
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li className="p-1 transition-all duration-300 cursor-pointer text-md md:p-0">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li className="mt-2 md:mt-0">
          <RouterLink
            to="/LoginRegister"
            state={{register: true}}
            className="inline-block px-4 py-2 text-white transition-colors duration-300 bg-green-400 rounded-3xl hover:bg-green-500"
          >
            Sign Up
          </RouterLink>
        </li>
      </ul>

      <div className="absolute transition-all duration-300 md:hidden right-10 top-6">
        {menuOpen ? (
          <RiCloseLine size={30} onClick={toggleMenu} />
        ) : (
          <RiMenu2Line size={30} onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
}

export default Navbar; 