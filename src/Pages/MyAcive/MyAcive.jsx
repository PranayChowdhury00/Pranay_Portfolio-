import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { LiaBezierCurveSolid, LiaPencilRulerSolid } from "react-icons/lia";

const MyAcive = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Web Developer Card */}
        <div className="border-red-300 bg-red-50 h-[160px] flex flex-col justify-center items-center py-3 rounded-2xl shadow-xl">
          <LiaPencilRulerSolid className="text-[#ff014dd9] text-5xl mb-2" />
          <h1
            className="relative text-2xl font-bold text-gray-900 mb-4 hover:text-[#ff014dd9] 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
            after:bg-[#ff014dd9] after:transition-all after:duration-300 hover:after:w-full"
          >
            Web Developer
          </h1>
          <p className="text-gray-500">15 projects</p>
        </div>

        {/* UI/UX Design Card */}
        <div className="border-red-300 bg-red-50 h-[160px] flex flex-col justify-center items-center py-3 rounded-2xl shadow-xl">
          <LiaBezierCurveSolid className="text-[#ff014dd9] text-5xl mb-2" />
          <h1
            className="relative text-2xl font-bold text-gray-900 mb-4 hover:text-[#ff014dd9] 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
            after:bg-[#ff014dd9] after:transition-all after:duration-300 hover:after:w-full"
          >
            UI/UX Design
          </h1>
          <p className="text-gray-500">5 projects</p>
        </div>

        {/* Web Research Card */}
        <div className="border-red-300 bg-red-50 h-[160px] flex flex-col justify-center items-center py-3 rounded-2xl shadow-xl">
          <FaRegLightbulb className="text-[#ff014dd9] text-5xl mb-2" />
          <h1
            className="relative text-2xl font-bold text-gray-900 mb-4 hover:text-[#ff014dd9] 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
            after:bg-[#ff014dd9] after:transition-all after:duration-300 hover:after:w-full"
          >
            Web Research
          </h1>
          <p className="text-gray-500">0 projects</p>
        </div>
      </div>
    </div>
  );
};

export default MyAcive;
