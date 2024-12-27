import React, { useEffect } from 'react'
import { MdClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import {  NavLink } from 'react-router-dom'
import { useState } from 'react'
import { gsap } from 'gsap'
import { useRef } from 'react'


export const Header = () => {

    const [visible, setVisible] = useState(false)

    const handlesidemenu = () => {
        console.log("clicked")
        setVisible(!visible)

        gsap.fromTo(".menu-container .nav-link", {
            x:-300,
            opacity: 0,
            duration: 2,
        }, {
            x:0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1, // Stagger effect
        });
    }

   
  return (
    <>
    <div className='flex px-16 py-10 justify-between items-center p-4   fixed top-0 left-0 w-full text-white'>
        <div className='text-[16px]'>Sarthak.</div>
        <div className=' flex gap-16 text-[16px]'>
            <NavLink to='/' className="hidden md:flex">Home</NavLink>
            <NavLink to='/resume' className="hidden md:flex">Resume</NavLink>
            <NavLink to='/project' className="hidden md:flex">Project</NavLink>
            <NavLink to='/contact' className="hidden md:flex">Contact</NavLink>
            <TiThMenu className='flex md:hidden font-extrabold text-xl ' onClick={handlesidemenu} />
        </div>
    </div>

    {/* for small screen */}

    <div className={`absolute top-0 right-0 px-5 py-14  text-white w-full h-full rounded-lg  flex flex-col justify-center bg-[#201c25] ${visible ? "block" : "hidden"}`}>
      
            <MdClose  className='absolute top-4 right-4 text-3xl' onClick={()=>{setVisible(!visible)}}  />
  
        <div className='menu-container flex flex-col  gap-4'>
            <NavLink to='/' className='nav-link text-[16px] shadow-sm shadow-white  p-3 rounded-xl hover:bg-[#412944] duration-300 ' onClick={handlesidemenu}>Home</NavLink>
            <NavLink to='/resume' className='nav-link text-[16px] shadow-sm shadow-white  p-3 rounded-xl hover:bg-[#412944] duration-300 ' onClick={handlesidemenu}>Resume</NavLink>
            <NavLink to='/project' className='nav-link text-[16px] shadow-sm shadow-white rounded-xl p-3 hover:bg-[#412944] duration-300  ' onClick={handlesidemenu}>Project</NavLink>
            <NavLink to='/contact' className='nav-link text-[16px]  shadow-sm shadow-white rounded-xl hover:bg-[#412944]  p-3 duration-300 ' onClick={handlesidemenu}>Contact</NavLink>
        </div>
    </div>

    </>
  )
}
