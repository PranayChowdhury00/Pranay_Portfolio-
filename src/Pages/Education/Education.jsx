import React, { useEffect } from "react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../../public/experiance.json"; // Your Lottie animation file

const EducationItem = ({ title, desc }) => (
  <div
    className="w-full bg-gray-100 p-6 rounded-lg shadow-lg relative overflow-hidden 
               border-l-4 border-b-4 border-[#FF6F61] transition-all duration-300 transform hover:scale-105 hover:border-t-4 hover:border-r-4 hover:border-[#FF6F61] hover:shadow-xl"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h2 className="text-xl font-semibold text-[#FF6F61]">{title}</h2>
    <p className="text-gray-700 mt-2">{desc}</p>
  </div>
);

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const educationItems = [
    { title: "Diploma in Computer Science", desc: "Moulvibazar Polytechnic Institute | 2022 - 2026" },
    { title: "Complete Web Development Course", desc: "Programming Hero | 2024" },
    { title: "Frontend Developer (React) Certificate", desc: "HackerRank | 2025" },
    { title: "JavaScript (Intermediate) Certificate", desc: "HackerRank | 2025" },
  ];

  return (
    <section className="mb-20 max-w-7xl mx-auto px-5">
      <header className="text-center mb-12" data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-[#FF6F61] font-semibold text-4xl">Education & Experience</h1>
      </header>

      {/* Education Section */}
      <div className="mt-8">
        <div className="flex items-center mb-6 mt-5" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-2xl text-gray-800 font-semibold mr-5">Education</h2>
          <img src="/custom-line.png" className="h-[2px] w-40 bg-gray-400 mt-2" alt="divider line" />
        </div>

        {/* Grid Layout for Education Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <EducationItem key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-16">
        <div className="flex items-center mb-6" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-2xl text-gray-800 font-semibold mr-5 mb-0">Experience</h2>
          <img src="/custom-line.png" className="h-[2px] w-42 bg-gray-400 mb-0 mt-2" alt="divider line" />
        </div>
        
        {/* Experience Content with Lottie Animation */}
        <div className="flex flex-col md:flex-row items-center justify-center" data-aos="fade-up" data-aos-duration="1000">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-[#FF6F61]">Full-Stack Projects & Web Design</h3>
            <p className="text-gray-700 mt-3">
              Although I don't have formal job experience, I've worked on 5 full-stack web development projects. I specialize in front-end and back-end technologies, focusing on creating responsive and user-friendly websites. 
              I've been learning web design for 2 years and continue to refine my skills through hands-on projects.
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 md:ml-10">
            <div className="md:w-[400px] h-[300px] border-4 border-[#FF6F61] rounded-lg p-4 shadow-lg">
              <Lottie animationData={img} loop={true} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
