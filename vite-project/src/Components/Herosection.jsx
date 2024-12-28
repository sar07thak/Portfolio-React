import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";

export const Herosection = () => {
  useGSAP(() => {
    gsap.from(".para", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.5,
    });
  }, []);
const handleMouseMove=() =>{

}
  return (
    <>

      {/* ------------hero section ------------ */}
      <div className="py-10 justify-center items-center text-white">
        <div className="flex flex-col justify-center  px-16 py-16 lg:py-20 ">
          <p className="para md:text-5xl text-3xl mb-2 md:mb-5 lg:text-7xl " onMouseMove={handleMouseMove}>Hello 👋</p>
          <p className="para md:text-5xl text-3xl mb-2 md:mb-5 lg:text-7xl ">
            I'm Sarthak Gupta - Curious
          </p>
          <p className="para md:text-5xl text-3xl mb-2 md:mb-5 lg:text-7xl">Frontend Developer</p>
          <p className="para md:text-5xl text-3xl mb-2 md:mb-5 lg:text-7xl">
            based in Noida, India..
          </p>
        </div>
      </div>

      {/* social media links */}

      <div className="flex items-center justify-center md:justify-start gap-8 md:px-16 ">
        <button className="text-white md:text-xl text-sm"><NavLink to="https://github.com/sar07thak">Github</NavLink></button>
        <button className="text-white md:text-xl text-sm"><NavLink to="https://www.linkedin.com/in/sarthak-gupta-508176297/">Linkedin</NavLink></button>
        <button className="text-white md:text-xl text-sm"><NavLink to="https://twitter.com/">Twitter</NavLink></button>
        <button className="text-white md:text-xl text-sm"><NavLink to="mailto:sarthak75220@gmail.com">E-mail</NavLink></button>
        <button className="text-white md:text-xl text-sm"><NavLink to="https://www.instagram.com/">Instagram</NavLink></button>
      </div>

    </>
  );
};
