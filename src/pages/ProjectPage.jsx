import React from "react";
import ProjectCards from "../components/ProjectCards";

export default function ProjectPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen px-6 py-20 mx-auto max-w-7xl ">
        <div className="inline-block py-6 mb-5 text-start">
          <h1 className="mb-2 title-text ">My <span className="text-primary">Projects</span></h1>
          <p className="text-base ">
            Here are some of the projects I've worked on. Each project
            represents unique challenges and creative solutions.
          </p>
        </div>
        <div>
          <ProjectCards />
        </div>
      </div>
    </>
  );
}
