import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaFigma, FaTools, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss, SiExpress, SiWebpack, SiGit } from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode size={28} className="text-pink-500" />,
    skills: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <FaNodeJs size={28} className="text-green-500" />,
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Design Integration",
    icon: <FaFigma size={28} className="text-purple-500" />,
    skills: ["Figma to Website", "Responsive Design", "Cross-browser Support"],
  },
  {
    title: "Other",
    icon: <FaTools size={28} className="text-yellow-500" />,
    skills: ["Git", "Content Writing", "Team Management"],
  },
];

export default function SkillsSection() {
  return (
    <div id="skills" className="max-w-7xl mx-auto mt-20 mb-20 px-4">
      <h2 className="text-3xl font-bold text-center text-[#FF014F] mb-12">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
          >
            <div className="mb-4">{category.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.title}</h3>
            <ul className="text-gray-600 text-center space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-lg font-medium">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
