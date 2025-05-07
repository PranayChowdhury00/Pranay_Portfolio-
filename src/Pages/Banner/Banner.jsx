import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const resumeLink = "/resume.pdf";

export default function Banner() {
  const [currentText, setCurrentText] = useState("Web Developer");
  const texts = ["Web Developer", "Freelancer", "UI/UX Developer"];

  useEffect(() => {
    AOS.init();
  }, []);

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
    <div
      id="about"
      className="mt-10 mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Flex Container for text and image */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text part */}
        <div className="flex-1">
          <h3 className="text-gray-950 font-medium text-lg sm:text-xl tracking-wide uppercase">
            Hello
          </h3>
          <h1 className="text-gray-950 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mt-2">
            I'm Pranay Chowdhury
          </h1>
          <motion.div
            key={currentText}
            className="text-2xl sm:text-3xl font-semibold text-[#FF0161] py-4 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentText}
          </motion.div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mt-3">
            Detail-oriented and innovative MERN stack web developer, passionate
            about building scalable, user-friendly solutions. Eager to learn,
            contribute to impactful projects, and optimize development for
            efficiency.
          </p>
          <motion.a
            href={resumeLink}
            download="My_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            className="btn btn-primary mt-6 inline-block text-base font-medium"
          >
            Download Resume
          </motion.a>
        </div>

        {/* Image part */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            className="w-[250px] sm:w-[300px] lg:w-[400px] md:ml-10 object-cover"
            src="/myphoto2.png"
            alt="Pranay Chowdhury's Photo"
          />
        </div>
      </div>
    </div>
  );
}
