import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const skillsData = [
  { skill: "JavaScript", level: 60 },
  { skill: "React", level: 55 },
  { skill: "CSS", level: 80 },
  { skill: "HTML", level: 90 },
  { skill: "Tailwind CSS", level: 85 },
  { skill: "GSAP", level: 30 },
];

const Skills = () => {
  const progressRefs = useRef([]);
  const [animate, setAnimate] = useState(false); // State to control animation

  useEffect(() => {
    if (animate) {
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
      setAnimate(false); // Reset animation state
    }
  }, [animate]);

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      setAnimate(true); // Trigger animation on Enter key press
    }
  };

  return (
    <div
      className="text-white px-16 py-10"
      onKeyDown={handleEnterKey}
      tabIndex="0"
    >
      <h2 className="text-3xl mb-5">Skills</h2>
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
      <button
        onClick={() => setAnimate(true)} // Trigger animation on button click
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Animate Skills
      </button>
    </div>
  );
};

export default Skills;
