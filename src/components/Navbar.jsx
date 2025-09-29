import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";
import { Dlinks } from "../data/dataLinks";
import LogoDark from "../assets/My Photo/K__1_-removebg-preview.png";
import LogoLight from "../assets/My Photo/K-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "mylight"
  );

  function handleToggleTheme() {
    const newTheme = theme === "mylight" ? "mydark" : "mylight";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-xl bg-base-100 text-base-content">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 cursor-pointer">
          {theme === "mylight" ? (
            <img src={LogoLight} alt="Light Logo" className="w-12 sm:w-16" />
          ) : (
            <img src={LogoDark} alt="Dark Logo" className="w-12 sm:w-16" />
          )}
          <span className="text-lg font-bold">Kurt</span>
        </a>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-10 md:flex">
          <div className="flex gap-6">
            {Dlinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-blue-400"
                className="cursor-pointer navbar-texts"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Dark/Light Toggle */}
          <button type="button" onClick={handleToggleTheme}>
            {theme ? <Sun size={30} /> : <MoonStar size={30} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 py-4 md:hidden bg-[#13131c]">
          {Dlinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-blue-400"
              className="cursor-pointer navbar-texts"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
