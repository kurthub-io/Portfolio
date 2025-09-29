import React from "react";

export default function FooterComponent() {
  return (
    <footer className="w-full px-6 py-10 bg-[#1a1a27] text-gray-300">
      <div className="flex flex-col items-center mx-auto text-center max-w-7xl">
        {/* Brand */}
        <a
          href="#home"
          className="mb-4 text-xl font-bold tracking-wide text-white transition-colors hover:text-primary"
        >
          Kurt Rion
        </a>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
          <li>
            <a className="transition-colors hover:text-primary" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-primary" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-primary" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-primary" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-primary" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-primary" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-8 mb-6">
          <a
            href="https://github.com/k-rion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors hover:text-primary"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kurt-rion-aquino-90aa22375/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors hover:text-primary"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a
            href="https://www.facebook.com/kurtrion.aquino/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors hover:text-primary"
          >
            <i className="devicon-facebook-plain"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kurt Rion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
