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
      <h1 className="heading pb-5" >
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
              className="flex-shrink-0 w-64 md:w-72 mx-4"
            >
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={cert.image.includes('drive.google.com') ? `https://drive.google.com/uc?export=view&id=${cert.image.split('/')[5]}` : cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </a>
              <h2 className="mt-2 text-lg font-semibold">{cert.title}</h2>
              <p className="text-sm text-gray-500">{cert.institution}</p>
              <p className="text-xs text-gray-400">{cert.year}</p>
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
