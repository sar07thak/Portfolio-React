import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export const About = () => {

    

    useGSAP(() => {

        const tl = gsap.timeline()

        gsap.to(".circle1", {
            x: 350,
            opacity: 1,
            duration: 1.5,
            repeat: -1,
            // rotate: 360,
            yoyo: true,
            ease: "power1.inOut",
        });

        gsap.from(".circle2", {
            x: 300,
            opacity: 1,
            duration: 1.5,
            repeat: -1,
            ease: "power1.inOut",
            yoyo: true,
        });
    }, []);



  return (
    <>
    <div className='flex flex-col py-10 text-white px-16 '>
        <h1 className='text-3xl'>About</h1>
        <div className='flex md:flex-row flex-col gap-5'>
        <p className='mt-5 opacity-40 text-xl  lg:w-[60%] '>
        I'm a dynamic Frontend Developer who specializes in creating interactive, visually engaging, and user-friendly web experiences. With a strong foundation in HTML, CSS,JavaScript, and modern frameworks like React,not only delivers responsive and accessible websites but also enhances them with captivating animations to bring designs to life. 
Always pushing the boundaries of creativity ,seamlessly integrates functionality and motion, ensuring every project is both innovative and memorable. Dedicated to continuous learning, they stay ahead of trends to craft experiences that captivate users and elevate brands.
        </p>
        <div className='circle-container mt-5 hidden md:flex items-center  h-40 w-36 rounded-full bg-[#2A1E36]  lg:w-[40%] circle-container'>
            <div className='circle1 ml-5 h-24 w-24 rounded-full bg-[#3A2152] flex justify-center items-center '>
                <div className='h-10 w-10 rounded-full bg-[#6e6969f6]'>

                </div>
            </div>
            <div className='circle2 mr-5 h-24 w-24 rounded-full bg-[#3A2152] flex justify-center items-center '>
                <div className='h-10 w-10 rounded-full bg-[#6e6969f6]'></div>
            </div>
        </div>
        </div>
    </div>
    <div className='heading-container flex flex-col text-white justify-center py-10 px-16 '>
        <h1 className='work-heading md:text-8xl text-6xl '>
            LET'S WORK
        </h1>
        <h1 className='work-heading md:text-8xl text-6xl'>
            TOGETHER..
        </h1>
    </div>
    <button className='bg-[#3A2152] text-white text-lg mx-16 px-14 py-3 rounded-lg hover:bg-[#5a637d] transition-all ease-in-out duration-300 hover:scale-105 '><NavLink to='mailto:sarthak75220@gmail.com'>send a Mail</NavLink></button>
    </>
  )
}
