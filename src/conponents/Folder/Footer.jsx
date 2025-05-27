import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-scroll";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-white bg-slate-900 md:px-20">
      <div className="flex flex-col items-start justify-between mx-auto space-y-6 max-w-7xl md:flex-row md:items-center md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold">Journey Junction</h2>
          <p className="mt-2 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 text-gray-300">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex flex-col items-center transition hover:text-green-400"
          >
            <i className="text-xl fas fa-home"></i>
            <span className="mt-1 text-sm">Home</span>
          </Link>

          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex flex-col items-center transition hover:text-green-400"
          >
            <i className="text-xl fas fa-concierge-bell"></i>
            <span className="mt-1 text-sm">Service</span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex flex-col items-center transition hover:text-green-400"
          >
            <i className="text-xl fas fa-envelope"></i>
            <span className="mt-1 text-sm">Contact</span>
          </Link>
        </div>

        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="transition hover:text-green-400"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="transition hover:text-green-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="transition hover:text-green-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
