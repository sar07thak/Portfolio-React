import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Footer = () => {
  const pathRef = useRef(null);

  // Define the initial and final path
  const initialPath = "M 10 80 Q 750 80 1500 80";
  let finalPath = "M 10 80 Q 750 80 1500 80";

  // Update path on mouse move
  const handleMouseMove = (e) => {
    const mouseY = e.clientY; // Get the mouse Y position
    const newPath = `M 10 80 Q 750 ${mouseY} 1500 80`; // Dynamically change the curve

    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  // Reset path on mouse leave
  const handleMouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 0.3,
      ease: "elastic.out(1,0.2)"
      
    });
  };

  return (
    <div className='w-full h-full flex justify-center  items-center' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <svg width="1500" height="200">
        <path
          ref={pathRef}
          d={initialPath} // Set the initial path
          stroke="white"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};
