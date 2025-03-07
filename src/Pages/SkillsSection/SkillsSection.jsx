import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "Node.js", percentage: 70 },
    { name: "Express", percentage: 65 },
    { name: "Mongo db", percentage: 50 },
    { name: "Next.js", percentage: 40 },
    { name: "Typescript", percentage: 40 },
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    setTimeout(() => {
      setProgress(skills.map(skill => skill.percentage));
    }, 500);
  }, []);

  return (
    <div id="services" className="max-w-5xl mx-auto mt-20 mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">My Skills</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="w-24 h-24">
              <CircularProgressbar
                value={progress[index]}
                text={`${progress[index]}%`}
                styles={buildStyles({
                  textColor: "#ff014dd9",
                  pathColor: "#ff014dd9",
                  trailColor: "#e5e7eb",
                  textSize: "16px",
                })}
              />
            </div>
            <span className="text-lg font-medium mt-3">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
