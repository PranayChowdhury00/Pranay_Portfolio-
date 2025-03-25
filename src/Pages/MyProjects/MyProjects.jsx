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
    techStack: "React JS, Firebase Authentication, Express JS, MongoDB, Firebase, Vercel Hosting",
    role: "Designed UI, developed frontend using React, implemented Firebase authentication, and integrated with backend services using Express and MongoDB.",
    impact: "Improved user engagement and streamlined booking processes, resulting in increased user satisfaction and retention.",
    visuals: ["/project1_mockup.png", "/project1_wireframe.png"],
    caseStudy: {
      problem: "Users faced challenges in finding suitable apartments and managing rental agreements efficiently.",
      solution: "Implemented a user-friendly interface with advanced search filters and streamlined booking processes. Developed role-based dashboards for different user categories.",
      designProcess: "Researched user needs, created wireframes, iterated on designs based on feedback, and finalized UI components.",
      results: "Increased user sign-ups by 30% and reduced booking errors by 25%."
    }
  },
  {
    id: 2,
    title: "Gro Skill",
    description: "Gro Skill is a skill development platform where users can browse courses, enroll in training, and track their progress. The system provides different dashboards for Users, Instructors, and Admins with role-based access to features like managing profiles, courses, and payments.",
    imgSrc: "/project2.png",
    liveDemo: "https://gro-skill.web.app/",
    githubRepo: "https://github.com/PranayChowdhury00/Gro-skill-frontend",
    techStack: "React JS, Firebase Authentication, Firestore, Firebase Hosting",
    role: "Led frontend development, collaborated on backend integration, and ensured seamless user experience across different platforms.",
    impact: "Enhanced user engagement through intuitive course navigation and personalized learning recommendations.",
    visuals: ["/project2_mockup.png", "/project2_wireframe.png"],
    caseStudy: {
      problem: "Users struggled to find relevant courses and track their progress effectively.",
      solution: "Implemented a dynamic UI with personalized course recommendations and real-time progress tracking features.",
      designProcess: "Conducted user interviews, prototyped UI designs, conducted usability tests, and iteratively improved UX based on feedback.",
      results: "Increased course enrollment by 40% and improved user retention rates by 35%."
    }
  },
  {
    id: 3,
    title: "Car Rental System",
    description: "A web-based application to manage car rentals, allowing users to book and cancel rentals with ease. The system also supports administrative features like tracking booking counts and updating booking statuses.",
    imgSrc: "/project3.png",
    liveDemo: "https://assignment-11-a1abc.web.app/",
    githubRepo: "https://github.com/PranayChowdhury00/Car-Rental-System",
    techStack: "React JS, Firebase Authentication, Firebase Realtime Database, Firebase Hosting",
    role: "Developed frontend components, integrated Firebase services for real-time data updates, and optimized UI/UX for smooth booking experiences.",
    impact: "Simplified car booking processes, reduced administrative workload, and improved overall system efficiency.",
    visuals: ["/project3_mockup.png", "/project3_wireframe.png"],
    caseStudy: {
      problem: "Users experienced delays in booking confirmations and lacked transparency in rental status updates.",
      solution: "Implemented a responsive UI with real-time booking updates and streamlined cancellation processes. Developed admin dashboard for monitoring and managing bookings.",
      designProcess: "Conducted competitor analysis, created low-fidelity wireframes, iteratively designed UI components, and conducted A/B testing for usability improvements.",
      results: "Reduced booking confirmation time by 50% and increased customer satisfaction ratings by 20%."
    }
  }
];

export default function MyProjects() {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto mb-10 px-5"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#ff014dd9]">My Projects</h1>
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
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
              >
                <div className="text-white text-lg text-center px-4">
                  <p className="text-2xl font-bold mb-2">Technologies:</p>
                  <p>{project.techStack}</p>
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
              {/* Additional Details */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Role:</h3>
                <p>{project.role}</p>
                <h3 className="text-lg font-semibold mb-2 mt-4">Impact:</h3>
                <p>{project.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
