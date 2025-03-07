import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "BuildingSphere",
    description: "BuildingSphere is an apartment booking platform where users can browse apartments, apply for bookings, and make monthly payments. The system provides different dashboards for Users, Members, and Admins with role-based access to features like managing profiles, agreements, and payments.",
    imgSrc: "/project1.png",
    liveDemo: "https://assignment-12-77319.web.app/",
    githubRepo: "https://github.com/PranayChowdhury00/BuildingSphere",
  },
  {
    id: 2,
    title: "Gro Skill",
    description: "Gro Skill is a skill development platform where users can browse courses, enroll in training, and track their progress. The system provides different dashboards for Users, Instructors, and Admins with role-based access to features like managing profiles, courses, and payments.",
    imgSrc: "/project2.png",
    liveDemo: "https://gro-skill.web.app/",
    githubRepo: "https://github.com/PranayChowdhury00/Gro-skill-frontend",
  },
  {
    id: 3,
    title: "Car Rental System",
    description: "A web-based application to manage car rentals, allowing users to book and cancel rentals with ease. The system also supports administrative features like tracking booking counts and updating booking statuses.",
    imgSrc: "/project3.png",
    liveDemo: "https://assignment-11-a1abc.web.app/",
    githubRepo: "https://github.com/PranayChowdhury00/Car-Rental-System",
  },
];

export default function MyProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto mb-10 px-5"
    >
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-[#ff014dd9]">My Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="card bg-base-200 shadow-xl flex flex-col h-full relative"
          >
            {/* Image Section (Fixed Height for Consistency) */}
            <figure className="h-[700px] w-full overflow-hidden p-3 relative group">
              <img
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                src={project.imgSrc}
                alt={`${project.title} Screenshot`}
              />
              {/* Transparent Technology Overlay (only visible on hover over the image) */}
              <div
                className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // Custom opacity here (0.3)
              >
                <div className="text-white text-lg text-center px-4">
                  <p className="text-2xl font-bold mb-2">Technologies:</p>
                  <p>Tailwind CSS, React JS, Firebase Authentication, Express JS, MongoDB, Firebase, Vercel Hosting</p>
                </div>
              </div>
            </figure>

            {/* Content Section */}
            <div className="card-body flex flex-col flex-grow">
              <h2 className="card-title">{project.title}</h2>
              <p className="flex-grow">{project.description}</p>
              <div className="card-actions justify-end mt-4">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="btn btn-primary"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
