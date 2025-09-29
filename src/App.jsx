import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Skills from "./pages/Skills";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-base-100">
      <section id="navbar">
        {/* Navbar */}
        <Navbar />
      </section>

      <section id="home">
        {/* Homepage */}
        <HomePage />
      </section>

      <section id="about">
        {/* ABout Me */}
        <AboutPage />
      </section>

      <section id="education">
        {/* Education */}
        <EducationPage />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <ProjectPage />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactPage/>
      </section>

      <FooterComponent />
    </div>
  );
}

export default App;
