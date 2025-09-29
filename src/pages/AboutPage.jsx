import React from "react";
import AboutMePic from "../assets/My Photo/MyPic.jpeg";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="items-center w-full min-h-screen px-4 py-16 mx-auto mt-20 max-w-7xl">
      {/* Title */}
      <h2 className="mb-8 text-center title-text md:text-left">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="flex flex-col items-center justify-between gap-10 text-white md:flex-row">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start md:w-1/2">
          <div className="w-full max-w-xs overflow-hidden shadow-xl sm:max-w-sm md:max-w-md rounded-2xl">
            <img
              src={AboutMePic}
              alt="About Me"
              className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center md:text-left md:w-1/2">
          {/* Description */}
          <p>
            Hello! I'm <span className="font-bold">Kurt Rion</span>, a
            passionate IT graduate eager to create innovative solutions and
            build the future of technology. I enjoy coding, designing, and
            working on creative projects.
          </p>
          <p>
            My expertise includes web development, UI/UX design, and database
            management. I'm committed to writing clean, efficient code and
            designing systems that are both scalable and maintainable.
          </p>

          {/* Download Resume */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/Portfolio/Resume/Kurt_Resume.pdf"
              download="My_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 text-white border border-blue-400 rounded-lg shadow-lg 
             bg-gradient-to-r from-blue-600 to-cyan-500 
             hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
             transition-all duration-300 w-52 text-center"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
