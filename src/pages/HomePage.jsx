import React from "react";
import { Link } from "react-scroll";

// Import image
import MyPhoto from "../../src/assets/My Photo/1000115656.jpg";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 mx-auto text-center max-w-7xl">
      {/* Avatar */}
      <div className="mb-6 avatar">
        <div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full 
                        ring ring-offset-base-100 ring-offset-2 
                        animate-[bounce_4s_infinite] overflow-hidden"
        >
          <img
            src={MyPhoto}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
        Kurt Rion
      </h1>

      {/* Description */}
      <p className="max-w-md mb-6 text-sm text-gray-300 sm:max-w-lg md:max-w-xl lg:max-w-2xl sm:text-base md:text-lg">
        Recent Information Technology graduate passionate about creating
        innovative solutions and building the future of technology.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-10 sm:flex-row">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80} // 👈 offset so content isn’t hidden under navbar
          className="cursor-pointer viewProj-btn"
        >
          View Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer contact-btn"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
