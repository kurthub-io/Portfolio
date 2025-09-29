import React, { useState } from "react";
import { projects } from "../data/projectData";

export default function ProjectCards() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Group tags by type
  const groupTags = (tags) => {
    const groups = {};
    tags.forEach((tag) => {
      if (!groups[tag.type]) groups[tag.type] = [];
      groups[tag.type].push(tag);
    });
    return groups;
  };

  return (
    <section className="px-6 py-20 mx-auto max-w-7xl">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {["All Projects", "Web Development", "Game Development"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105"
                  : "border border-blue-400 text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => {
          const grouped = groupTags(project.tags);

          return (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden bg-[#11111b] rounded-2xl border border-transparent hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              {/* Image */}
              <figure className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full transition-transform duration-500 ease-in-out h-52 hover:scale-110"
                />
              </figure>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <h2 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Grouped Tags */}
                <div className="mt-5 space-y-3">
                  {Object.keys(grouped).map((type) => (
                    <div key={type}>
                      <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        {type}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {grouped[type].map((tag, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-[#1f1f2e] text-gray-200 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm"
                          >
                            {tag.svg && (
                              <img
                                src={tag.svg}
                                alt={tag.name}
                                className="object-contain w-4 h-4"
                              />
                            )}
                            {tag.icon && (
                              <i className={`${tag.icon} text-base`}></i>
                            )}
                            <span>{tag.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Link Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 mt-6 text-sm font-medium text-center text-white transition-all duration-300 rounded-lg shadow bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 hover:opacity-90"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
