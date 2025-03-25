import React, { useEffect } from "react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../../public/experiance.json"; // Your Lottie animation file

const EducationItem = ({ title, desc }) => (
  <div
    className="w-full bg-gray-100 p-5 rounded-lg shadow-md relative overflow-hidden 
               border-r-4 border-b-4 border-[#FF014F]"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const educationItems = [
    { title: "Diploma in Computer Science", desc: "moulvibazar polytechnic institute | 2022 - 2026" },
    { title: "Complete Web Development Course With Programming Hero", desc: "Programming Hero | 2024" },
    { title: "Frontend Developer (React) Certificate", desc: "HackerRank | 2025" },
    { title: "JavaScript (Intermediate) Certificate", desc: "HackerRank | 2025" },
  ];

  return (
    <section className="mb-10 max-w-7xl mx-auto px-5">
      <header className="text-center" data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-[#ff014dd9] font-medium text-3xl">Education & Experience</h1>
      </header>

      {/* Education Section */}
      <div className="mt-8">
        <div className="flex items-center mb-10" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-2xl text-gray-800 font-bold mr-5">Education</h1>
          <img src="/custom-line.png" className="h-[2px] w-40 bg-gray-400" alt="divider line" />
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
        <div className="flex items-center mb-0" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-2xl text-gray-800 font-bold mr-5 mb-0">Experience</h1>
          <img src="/custom-line.png" className="h-[2px] w-42 bg-gray-400 mb-0 " alt="divider line" />
        </div>
        {/* Experience Content with Lottie Animation */}
        <div className="flex items-center justify-center flex-col md:flex-row" data-aos="fade-up" data-aos-duration="1000">
          {/* Text Section */}
          <div className="w-1/2">
            <h3 className="text-xl font-semibold">Full-Stack Projects & Web Design</h3>
            <p className="text-gray-600">
              Although I don't have formal job experience, I've worked on 5 full-stack web development projects. I specialize in front-end and back-end technologies, with a focus on UI/UX design. I have been learning web design for 2 years, refining my skills through hands-on projects and real-world applications.
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="w-1/2">
            <div className="md:w-[400px] h-[300px] md:ml-28">
              <Lottie animationData={img} loop={true} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
