"use client";

import React, { useState } from "react";
import { certifications } from "@/data";

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length
    );
  };

  return (
    <section id="certifications" className="py-20">
      <h1 className="heading pb-5">
        My <span className="text-purple">Certifications</span>
      </h1>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex-shrink-0 w-64 md:w-72 mx-4 relative group"
            >
              <a
                href={cert.link || cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={cert.image.includes('drive.google.com') ? `https://drive.google.com/uc?export=view&id=${cert.image.split('/')[5]}` : cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded-md shadow-md"
                />
                {cert.link && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4 font-bold">
                    <p>View Certificate</p>
                  </div>
                )}
              </a>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{cert.title}</h2>
                <p className="text-sm text-gray-500">{cert.institution}</p>
                <p className="text-xs text-gray-400">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Certifications;
