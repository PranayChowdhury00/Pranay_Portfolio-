import React, { useEffect } from "react";
import "aos/dist/aos.css";
import aos from "aos";
import { FaRegLightbulb } from "react-icons/fa";
import { LiaBezierCurveSolid, LiaPencilRulerSolid } from "react-icons/lia";

const MyAcive = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const cards = [
    { icon: <LiaPencilRulerSolid />, title: "Web Developer", projects: 15, tooltip: "Building websites and applications" },
    { icon: <LiaBezierCurveSolid />, title: "Figma to website", projects: 10, tooltip: "Converting Figma designs into functional websites" },
    { icon: <FaRegLightbulb />, title: "Web Research", projects: 1, tooltip: "Conducting research on web trends" },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-red-300 bg-red-50 h-[160px] flex flex-col justify-center items-center py-3 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 200}
            title={card.tooltip} // Tooltip on hover
          >
            <div className="text-[#ff014dd9] text-5xl mb-2 transition-transform transform hover:rotate-12">
              {card.icon}
            </div>
            <h1 className="text-xl font-medium text-gray-700 mb-2">{card.title}</h1>
            <p className="text-gray-500">{card.projects} projects</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAcive;
