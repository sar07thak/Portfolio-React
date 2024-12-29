import React from "react";
import { String } from "../Components/String";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  return (
    <>
      <div className="Contact flex flex-col md:flex-row justify-center items-center text-white w-full py-20 lg:px-16 lg:h-screen ">
        <div className="flex flex-col justify-start items-start md:gap-1 lg:gap-5 w-[80%] p-10 lg:p-5  lg:w-1/3">
          <h1 className="text-4xl lg:text-7xl">PLEASE</h1>
          <h1 className="text-4xl lg:text-7xl">REVIEW AND CONNECT</h1>
          <h1 className="text-4xl lg:text-7xl ">WITH US..</h1>
        </div>
        <div className="w-[90%] lg:w-1/2">
          <form className="flex flex-col gap-3 px-16 py-5">
            <h1 className="text-xl">Name :</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-4 py-2 rounded-md border-2 placeholder:text-gray-500 border-gray-400   bg-[#1b1b1b4d]"
            />
            <h1 className="text-xl">Email :</h1>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-md border-2 placeholder:text-gray-500 border-gray-400 bg-[#1b1b1b4d]"
            />
            <h1 className="text-xl">Message :</h1>
            <textarea
              name=""
              id=""
              cols="20"
              rows="10"
              placeholder="Enter Your Message"
              className="px-4 py-2 rounded-md border-2 placeholder:text-gray-500 border-gray-400 bg-[#1b1b1b4d]"
            ></textarea>
            {/* <input type="text" placeholder='Message'  /> */}
            <button
              type="submit"
              className="bg-[#1B1b1b] py-3 text-gray-300 p-1.5 rounded-md  hover:text-gray-500 hover:scale-95 transition-all duration-300"
            >
              Submit
            </button>
          </form>
          <div className="flex items-center justify-center mb-5 gap-10 md:px-16 ">
            <button className="text-white  text-sm">
              <NavLink to="https://github.com/sar07thak">Github</NavLink>
            </button>
            <button className="text-white  text-md  ">
              <NavLink to="https://www.linkedin.com/in/sarthak-gupta-508176297/">
                Linkedin
              </NavLink>
            </button>
            <button className="text-white  text-md  ">
              <NavLink to="https://twitter.com/">Twitter</NavLink>
            </button>
            <button className="text-white text-md  ">
              <NavLink to="mailto:sarthak75220@gmail.com">E-mail</NavLink>
            </button>
            <button className="text-white  text-md  ">
              <NavLink to="https://www.instagram.com/">Instagram</NavLink>
            </button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
