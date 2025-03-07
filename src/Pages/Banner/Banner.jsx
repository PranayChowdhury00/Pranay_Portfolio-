import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const resumeLink = "/resume.pdf";

export default function Banner() {
  const [currentText, setCurrentText] = useState("Web Developer");
  const texts = ["Web Developer", "Freelancer", "UI/UX Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = texts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [texts]);

  return (
    <div id="about" className="mt-10 mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Flex Container for text and image */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text part */}
        <div className="flex-1">
          <h3 className="text-gray-950 font-medium text-xl py-5">Hello</h3>
          <h1 className="text-gray-950 font-bold text-4xl sm:text-5xl lg:text-6xl">
            I'm Pranay Chowdhury
          </h1>
          <div className="text-2xl font-bold text-[#FF0161] py-5">{currentText}</div>
          <p className="text-lg sm:text-xl text-gray-500 leading-8">
            Detail-oriented and innovative MERN stack web developer, passionate
            about building scalable, user-friendly solutions. Eager to learn,
            contribute to impactful projects, and optimize development for
            efficiency.
          </p>
          <motion.a
            href="/resume.pdf"
            download="My_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            className="btn btn-primary mt-5 mb-6"
          >
            Download Resume
          </motion.a>
        </div>

        {/* Image part */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img className="w-[250px] sm:w-[300px] lg:w-[400px] md:ml-10" src="/myphoto2.png" alt="Pranay Chowdhury" />
        </div>
      </div>
    </div>
  );
}
