import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// imported certificates
import SAP from "../assets/Certificates/SAP Certificate.jpeg";
import ReactJS from "../assets/Certificates/simple learn certificate.png";
import JavaCert from "../assets/Certificates/Java Certificate (June 25, 2022).png";
import Symposium from "../assets/Certificates/Symposium Presenter Certificate.jpeg";
import LaminaCert from "../assets/Certificates/Certificate of Completion (Lamina Studios).png";

export default function EducationPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { title: "Java Certificate (June 25, 2022)", img: JavaCert },
    { title: "ReactJS Certificate (Simple Learn)", img: ReactJS },
    { title: "SAP Certificate", img: SAP },
    { title: "Symposium Presenter Certificate", img: Symposium },
    { title: "Certificate of Completion (Lamina Studios)", img: LaminaCert },
  ];

  return (
    <div className="min-h-screen px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      {/* Education Background Section */}
      <section id="education" className="mb-16">
        <h2 className="mb-12 text-center title-text">
          Education <span className="text-primary">Background</span>
        </h2>

        {/* Education Card */}
        <div className="bg-[#1a1a27] p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow duration-300">
          <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="flex items-center justify-center gap-2 text-xl font-semibold sm:text-2xl md:justify-start">
                <FontAwesomeIcon icon={faGraduationCap} />
                STI College San Jose Del Monte
              </h3>
              <p className="text-base text-gray-300 sm:text-lg">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-base text-gray-300 sm:text-lg">
                Cumulative GPA: 1.42 | Cum Laude
              </p>
            </div>
            <p className="text-sm text-center text-gray-400 md:text-right">
              Aug 2021 – Jul 11, 2025
            </p>
          </div>

          {/* Certificates */}
          <div>
            <h4 className="mb-6 text-lg font-medium text-center md:text-left">
              Certificates:
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-[#2a2a3d] px-4 py-6 rounded-lg text-gray-300 text-sm shadow 
                             hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
                             transition-transform hover:scale-105"
                >
                  {cert.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1a1a27] p-4 sm:p-6 rounded-xl shadow-lg max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute text-xl text-gray-400 top-3 right-3 hover:text-white"
            >
              ✕
            </button>
            <h3 className="mb-4 text-base font-semibold text-center text-gray-200 sm:text-lg">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="rounded-lg max-h-[70vh] w-full object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
