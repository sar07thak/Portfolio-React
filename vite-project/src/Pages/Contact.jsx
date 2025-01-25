import React, { useRef, useState } from "react";
import { String } from "../Components/String";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'


export const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "20f804b9-6be8-4048-b516-e5b35dd55cc5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());


    if (res.success) {
      Swal.fire({
        title: "Success ! ",
        text: "Message sent successfully!",
        icon: "success"
      });
      formRef.current.reset();
    }else{
      Swal.fire({
        title: "Error",
        text: "Something went wrong, please try again.",
        icon: "error"
      });
    }


  };


  return (
    <>
      <div className="Contact flex flex-col md:flex-row justify-center items-center text-white w-full py-20 lg:px-16 lg:h-screen bg-[#1B1B1B]">
        <div className="flex flex-col justify-start items-start md:gap-1 lg:gap-5 w-[80%] p-10 lg:p-5 lg:w-1/3">
          <h1 className="text-4xl lg:text-7xl">PLEASE</h1>
          <h1 className="text-4xl lg:text-7xl">REVIEW AND CONNECT</h1>
          <h1 className="text-4xl lg:text-7xl">WITH US..</h1>
        </div>
        <div className="w-[90%] lg:w-1/2">

          <form className="flex flex-col gap-3 px-16 py-5" ref={formRef}   onSubmit={onSubmit} >
            <h1 className="text-xl">Name :</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="px-4 py-2 rounded-md border-2 placeholder:text-gray-500 border-gray-400 bg-[#2A2A2A] transition duration-300 ease-in-out focus:border-blue-500 focus:outline-none"
              
            />
            <h1 className="text-xl">Email :</h1>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-md border-2 placeholder:text-gray-500 border-gray-400 bg-[#2A2A2A] transition duration-300 ease-in-out focus:border-blue-500 focus:outline-none"
            />
            <h1 className="text-xl">Message :</h1>
            <textarea
              cols="20"
              rows="10"
              name="message"
              placeholder="Enter Your Message"
              className="px-4 py-2 rounded-md border-2 placeholder:text-gray-500 border-gray-400 bg-[#2A2A2A] transition duration-300 ease-in-out focus:border-blue-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#3A2152] py-3 text-white rounded-md hover:bg-[#5a637d] transition-all duration-300"
            >
              Submit
            </button>
          </form>

          <div className="flex items-center justify-center mb-5 gap-10 md:px-16 ">
            <button className="text-white text-sm">
              <NavLink to="https://github.com/sar07thak">Github</NavLink>
            </button>
            <button className="text-white text-md">
              <NavLink to="https://www.linkedin.com/in/sarthak-gupta-508176297/">
                Linkedin
              </NavLink>
            </button>
            <button className="text-white text-md">
              <NavLink to="https://twitter.com/">Twitter</NavLink>
            </button>
            <button className="text-white text-md">
              <NavLink to="mailto:sarthak75220@gmail.com">E-mail</NavLink>
            </button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
