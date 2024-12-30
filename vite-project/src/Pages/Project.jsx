import React from "react";
import { NavLink } from "react-router-dom";
import projects from "../Api/Projectdetail.json";

export const Project = () => {
  return (
    <>
      <div className="text-white md:p-20 px-12 py-20 ">
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-7xl lg:text-8xl font-[600] opacity-100">Blog.</h1>
          <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-between gap-10">
            {projects.map((project) => (
              <div key={project.id}>
                <img
                  src={project.image}
                  className="w-full h-60 rounded-lg object-cover shadow-lg"
                  alt={project.title}
                />
                <h2 className="mt-5 text-4xl">{project.title}</h2>
                <p className="mt-2 text-lg opacity-50">{project.description}</p>
                <button className="bg-blue-500 mt-5 text-white px-4 py-2 md:w-1/3 rounded-lg">
                  <NavLink to={`/project/${project.id}`}>View Project</NavLink>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
