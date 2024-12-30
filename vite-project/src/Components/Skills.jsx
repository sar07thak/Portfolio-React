import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skillsData = [
  { skill: "JavaScript", level: 55 },
  { skill: "React", level: 55 },
  { skill: "CSS", level: 75 },
  { skill: "HTML", level: 80 },
  { skill: "Tailwind CSS", level: 85 },
  { skill: "GSAP", level: 30 },
];

const Skills = () => {
  const progressRefs = useRef([]);

  useEffect(() => {
    // Animate each progress bar
    progressRefs.current.forEach((progressBar, index) => {
      gsap.fromTo(
        progressBar,
        { width: "0%" },
        {
          width: `${skillsData[index].level}%`,
          duration: 1,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <div className="text-white px-16 py-10">
      <h2 className="text-3xl  mb-5">Skills</h2>
      <div>
        {skillsData.map((skill, index) => (
          <div key={skill.skill} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{skill.skill}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bg-gray-300 rounded-full h-1">
              <div
                ref={(el) => (progressRefs.current[index] = el)} // Store reference to each progress bar
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full shadow-md transition-all duration-500 ease-in-out"
                style={{ width: "0%" }} // Start width at 0%
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
