import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../Api/Projectdetail.json";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="text-white px-16 py-20">
      <button
        onClick={() => navigate(-1)}
        className="bg-[#3A2152] text-white text-lg px-4 py-2 rounded-lg hover:bg-[#5a637d] transition-all ease-in-out duration-300 mb-5"
      >
        Back to Projects
      </button>

      <h1 className="text-4xl font-bold">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 rounded-lg object-cover shadow-lg mt-5"
      />
      <p className="mt-5 text-lg">{project.description}</p>

      <h2 className="text-3xl mt-10">Project Overview</h2>
      <p className="mt-2">
        This project showcases an innovative approach to web design, focusing on
        user experience and accessibility. It integrates modern technologies to
        create a responsive and dynamic web application.
      </p>

      <h3 className="text-2xl mt-5">Key Features</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Responsive Design</li>
        <li>Interactive Elements</li>
        <li>Accessibility Focused</li>
        <li>Modern Technologies</li>
      </ul>

      <h3 className="text-2xl mt-5">Technologies Used</h3>
      <p className="mt-2">HTML, CSS, JavaScript, React, GSAP</p>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-5">
        "This project demonstrates the integration of animations and interactive
        elements to enhance user engagement."
      </blockquote>

      <h2 className="text-3xl mt-10">GitHub Repository</h2>
      <p className="mt-2">
        You can find the source code for this project on GitHub:
      </p>
      <a
        href="https://github.com/yourusername/your-repository"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View on GitHub
      </a>

      <h2 className="text-3xl mt-10">Conclusion</h2>
      <p className="mt-2">
        This project not only meets the requirements but also exceeds
        expectations by providing a seamless user experience. It is a testament
        to the capabilities of modern web development practices.
      </p>

      <div className="mt-10">
        <h2 className="text-3xl">Contact</h2>
        <p>
          If you have any questions or would like to collaborate, feel free to
          reach out!
        </p>
        <button className="bg-[#3A2152] text-white text-lg mt-5 px-4 py-2 rounded-lg hover:bg-[#5a637d] transition-all ease-in-out duration-300">
          <a href="mailto:sarthak75220@gmail.com">Send a Mail</a>
        </button>
      </div>
    </div>
  );
};
