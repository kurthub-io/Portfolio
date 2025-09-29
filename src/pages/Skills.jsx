import React, { useState } from "react";
import {languages, frontend, backend, tools} from "../data/skillIconAndSVG";

function SkillCard({ name, icon, svg }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#1a1a27] p-6 rounded-xl shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all hover:scale-105 duration-300 w-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Toggle Devicon ↔ SVG on hover */}
      <div className="mb-3 transition-all duration-300">
        {hovered && svg ? (
          <img src={svg} alt={name} className="object-contain w-14 h-14" />
        ) : (
          <i className={`${icon} text-5xl text-primary`} />
        )}
      </div>
      <span className="text-sm font-medium text-gray-300">{name}</span>
    </div>
  );
}

export default function Skills() {


  return (
    <section className="px-6 py-20 mx-auto max-w-7xl">
      {/* Main Title */}
      <h1 className="mb-12 text-4xl font-bold text-center text-white">
        My <span className="text-primary">Skills</span>
      </h1>

      {/* Language Stack */}
      <div className="mb-20">
        <h2 className="mb-10 text-2xl font-semibold text-start text-primary">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {languages.map((lang, idx) => (
            <SkillCard key={idx} {...lang} />
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div className="mb-20">
        <h2 className="mb-10 text-2xl font-semibold text-start text-primary">
          Frontend
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {frontend.map((fd, idx) => (
            <SkillCard key={idx} {...fd} />
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="mb-20">
        <h2 className="mb-10 text-2xl font-semibold text-start text-primary">
          Backend
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {backend.map((fd, idx) => (
            <SkillCard key={idx} {...fd} />
          ))}
        </div>
      </div>

      {/* Tools Used */}
      <div>
        <h2 className="mb-10 text-2xl font-semibold text-start text-primary">
          Tools Used
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tools.map((tool, idx) => (
            <SkillCard key={idx} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
