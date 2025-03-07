import React from "react";
import Lottie from "lottie-react";
import img from "../../../public/experiance.json";  // Your Lottie animation file

// EducationItem Component
const EducationItem = ({ title, desc }) => (
  <div
    className="w-full bg-gray-100 p-5 rounded-lg shadow-md relative overflow-hidden 
               border-r-4 border-b-4 border-[#FF014F] 
               hover:border-transparent group"
  >
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-600">{desc}</p>

    {/* Border effect container */}
    <div className="absolute top-0 left-0 w-full h-full">
      {/* Current visible borders */}
      <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-[#FF014F] transition-all duration-500"></div>
      <div className="absolute bottom-0 right-0 w-[3px] h-[3px] bg-[#FF014F] transition-all duration-500"></div>

      {/* Hover effect borders (from top to left) */}
      <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></div>
      <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#FF014F] transition-all duration-500 group-hover:h-full"></div>

      {/* Opposite hover effect borders (from bottom to right) */}
      <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></div>
      <div className="absolute bottom-0 right-0 w-[3px] h-0 bg-[#FF014F] transition-all duration-500 group-hover:h-full"></div>
    </div>
  </div>
);

// Education Component
const Education = () => {
  const educationItems = [
    { title: "Diploma in Computer Science", desc: "moulvibazar polytechnic institute | 2022 - 2026" },
    { title: "Complete Web Development Course With Programming Hero", desc: "Programming Hero | 2024" },
    { title: "Frontend Developer (React) Certificate", desc: "HackerRank | 2025" },
    { title: "JavaScript (Intermediate) Certificate", desc: "HackerRank | 2025" },
  ];

  return (
    <section className="mb-10 max-w-7xl mx-auto px-5">
      <header className="text-center">
        <h1 className="text-[#ff014dd9] font-medium text-xl">Education & Experience</h1>
      </header>

      {/* Education Section */}
      <div className="mt-8">
        <div className="flex items-center mb-10">
          <h1 className="text-2xl text-gray-800 font-bold mr-5">Education</h1>
          <img
            src="/custom-line.png"
            className="h-[2px] w-40 bg-gray-400"
            alt="divider line"
          />
        </div>

        {/* Grid Layout for Education Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {educationItems.map((item, index) => (
            <EducationItem key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-10">
  <div className="flex items-center mb-0">
    <h1 className="text-2xl text-gray-800 font-bold mr-5 mb-0">Experience</h1>
    <img
      src="/custom-line.png"
      className="h-[2px] w-42 bg-gray-400 mb-0 "
      alt="divider line"
    />
  </div>
  {/* Experience Content with Lottie Animation */}
  <div className="flex items-center justify-center">
    {/* Text Section */}
    <div className="w-1/2">
      <h3 className="text-xl font-semibold">Full-Stack Projects & Web Design</h3>
      <p className="text-gray-600">
        Although I don't have formal job experience, I've worked on 5 full-stack web development projects. I specialize in front-end and back-end technologies, with a focus on UI/UX design. I have been learning web design for 2 years, refining my skills through hands-on projects and real-world applications.
      </p>
    </div>

    {/* Lottie Animation */}
    <div className="w-1/2">
      <div className="w-[400px] h-[300px] md:ml-28">
        <Lottie animationData={img} loop={true} className="w-full h-full" />
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Education;
