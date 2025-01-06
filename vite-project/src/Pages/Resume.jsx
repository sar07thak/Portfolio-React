import React from "react";
import { NavLink } from "react-router-dom";
import asset from "../assets/resume.pdf" ;

export const Resume = () => {
  return (
    <>
      <div className="flex flex-col items-center  text-white md:p-20 px-12 py-20 ">
        {/* Resume */}
        <div className=" md:w-[60%] w-full rounded-xl shadow-2xl shadow-black  p-5 md:p-16 bg-slate-800">
          {/* Name */}
          <h1 className="text-3xl font-bold">Sarthak Gupta</h1>
          {/* Designation */}
          <h2 className="text-xl mt-5">👋,Frontend Developer</h2>
          {/* About */}
          <h2 className="w-[90%] text-xl mt-5 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptate amet fuga
          </h2>
          {/* Social Links */}
          <div className=" flex md:gap-5 lg:gap-10 flex-wrap gap-3 sm:text-xs text-sm mt-8">
            <button className="text-white cursor-none md:text-md text-sm">
              <NavLink to="https://github.com/sar07thak">Github</NavLink>
            </button>
            <button className="text-white cursor-none md:text-md text-sm  ">
              <NavLink to="https://www.linkedin.com/in/sarthak-gupta-508176297/">
                Linkedin
              </NavLink>
            </button>
            <button className="text-white cursor-none md:text-md text-sm   ">
              <NavLink to="https://twitter.com/">Twitter</NavLink>
            </button>
            <button className="text-white cursor-none md:text-md text-sm  ">
              <NavLink to="mailto:sarthak75220@gmail.com">E-mail</NavLink>
            </button>
            <button className="text-white cursor-none md:text-md text-sm  ">
              <NavLink to="https://www.instagram.com/">Instagram</NavLink>
            </button>
          </div>

          {/* Projects */}
          <div className="mt-10">
            <h1 className="text-2xl font-bold">Projects</h1>
            {/* Project-1 */}
            <div className="mt-5 w-full flex flex-col md:flex-row justify-between">
              <div className="text-lg w-2/5">
                <h2>Project-1:</h2>
                <h3 className="text-sm opacity-50">lorem ipsum</h3>
              </div>
              <div className="w-3/5">
                <h2 className="text-lg font-bold">Lorem ipsum</h2>
                <ul className="list-disc">
                  <li className="text-sm my-1 opacity-70">Bullet One</li>
                  <li className="text-sm my-1 opacity-70">Bullet Two</li>
                </ul>
              </div>
            </div>
            {/* Project-2 */}
            <div className="mt-5 w-full flex flex-col md:flex-row justify-between">
              <div className="text-lg w-2/5">
                <h2>Project-2:</h2>
                <h3 className="text-sm opacity-50">lorem ipsum</h3>
              </div>
              <div className="w-3/5">
                <h2 className="text-lg font-bold">Lorem ipsum</h2>
                <ul className="list-disc">
                  <li className="text-sm my-1 opacity-70">Bullet One</li>
                  <li className="text-sm my-1 opacity-70">Bullet Two</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Education */}
          <h1 className="text-2xl font-bold mt-5">Education</h1>
          <div className="flex  flex-wrap  lg:gap-5 gap-2">
            <div className="mt-2">
              <h2 className="text-lg">
                JSS Academy of Technical Education, Noida
              </h2>
              <h3 className="text-sm opacity-75">2023-2027</h3>
              <p className="text-sm mt-2 opacity-80">
                I'm currently in my 2nd Year with overall cgpa of 8.9.
              </p>
            </div>
            <div className="mt-2">
              <h2 className="text-lg">
                Intermediate | T.P.R.S. Educational Institute
              </h2>
              <h3 className="text-sm opacity-75">2021-2022</h3>
              <p className="text-sm mt-2 opacity-80">Grade:90%</p>
            </div>
            <div className="mt-2">
              <h2 className="text-lg">
                High School | T.P.R.S. Educational Institute
              </h2>
              <h3 className="text-sm opacity-75">2021-2022</h3>
              <p className="text-sm mt-2 opacity-80">Grade:90.1%</p>
            </div>
          </div>
          {/* Skills */}
          <div className="mt-5">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mt-2 sm:mt-5">
                <h2 className="text-lg">Languages</h2>
                <ul className="list-disc">
                  <li className="ml-5 py-2">HTML5</li>
                  <li className="ml-5 py-2">CSS3</li>
                  <li className="ml-5 py-2">JavaScript</li>
                  <li className="ml-5 py-2">C-language</li>
                  <li className="ml-5 py-2">C++</li>
                  <li className="ml-5 py-2">Python</li>
                </ul>
              </div>
              <div className="mt-2 sm:mt-5">
                <h2 className="text-lg">Frameworks</h2>
                <ul className="list-disc">
                  <li className="ml-5 py-2">TailwindCSS</li>
                  <li className="ml-5 py-2">GSAP</li>
                  <li className="ml-5 py-2">ReactJS</li>
                </ul>
              </div>
              <div className="mt-2 sm:mt-5">
                <h2 className="text-lg">Tools</h2>
                <ul className="list-disc">
                  <li className="ml-5 py-2">Git</li>
                  <li className="ml-5 py-2">GitHub</li>
                  <li className="ml-5 py-2">Figma-Basic</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Download Resume */}
          <div className="mt-5">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              <a
                href={asset}
                download
                className="download-button"
              >
                Download PDF
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
