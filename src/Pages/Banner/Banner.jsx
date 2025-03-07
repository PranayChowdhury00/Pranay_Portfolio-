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
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [texts]);

  return (
    <div className="mt-10 mb-20 max-w-7xl mx-auto flex justify-between items-center">
      {/* Text part */}
      <div className="w-1/2 ">
        <h3 className="text-gray-950 font-medium text-xl py-5">Hello</h3>
        <h1 className="text-gray-950 font-bold text-5xl">
          I'm Pranay Chowdhury
        </h1>
        <div className="text-2xl font-bold text-[#FF0161] py-5">
          {currentText}
        </div>
        <p className="text-[18px] text-gray-500 leading-8">
          Detail-oriented and innovative MERN stack web developer, passionate
          about building scalable, user-friendly solutions.Eager to learn,
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

      {/* img part */}
      <div className="w-1/2 justify-end">
        <img className="w-[400px] ml-36" src="/myphoto2.png" alt="" />
      </div>
    </div>
  );
}
