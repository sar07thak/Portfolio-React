import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' 
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export const Services = () => {


  return (
    <>
    <div className='flex flex-col  py-10 text-white px-16 services-container '>
        <h1 className='text-3xl'>Services</h1>
        {/* grid container */}
        <div className='grid-container grid grid-cols-1  md:grid-cols-2 gap-6 md:p-10 py-5 h-screen'>
            {/* container-1 */}
            <div  className='container md:w-full p-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-slate-800 hover:scale-105 ' >
                <h1 className='text-3xl'>Art Direction</h1>
                <p className='mt-5 opacity-40 text-xl '>
                    We help with the creation and development of online 
                    advertising ideas , with particular focus on their visual 
                    appearance.
                </p>
            </div>
            {/* container-2 */}
            <div  className='container  md:w-full p-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-slate-800 hover:scale-105 ' >
                <h1 className='text-3xl'>Brading</h1>
                <p className='mt-5 opacity-40 text-xl '>
                    We design key brand elements such as the logo , color palette , typography ,
                     and other design components that make your brand stand out from the competitors.
                </p>
            </div>
            {/* container-3 */}
            <div  className='container md:w-full p-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-slate-800 hover:scale-105 ' >
                <h1 className='text-3xl'>Web Design</h1>
                <p className='mt-5 opacity-40 text-xl '>
                    We combine creative design with technical expertise to create 
                    websites that are both visually appealing and functional.
                </p>
            </div>
            {/* container-4 */}
            <div  className='container md:w-full p-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-slate-800 hover:scale-105 ' >
                <h1 className='text-3xl'>Animation & 3D design</h1>
                <p className='mt-5 opacity-40 text-xl '>
                    We create engaging animations and 3D designs that bring your brand to life.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
