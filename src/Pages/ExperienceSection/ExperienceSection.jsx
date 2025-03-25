import React, { useEffect } from "react";
import "aos/dist/aos.css";
import aos from "aos";
import CountUp from "react-countup";

export default function ExperienceSection() {
  useEffect(() => {
    aos.init({ duration: 1000 }); // Initialize AOS with 1s duration
  }, []);

  const experiences = [
    { end: 2, label: "Years of Learning Experience" },
    { end: 200, label: "Happy Customers" },
    { end: 50, label: "Client Reviews" },
  ];

  return (
    <div className="mb-10 mt-20">
      <div className="max-w-7xl mx-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-red-50 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h2 className="text-5xl font-bold text-[#ff014dd9] mb-3">
              <CountUp start={0} end={exp.end} duration={3} />+
            </h2>
            <p className="text-lg font-medium text-gray-700">{exp.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
