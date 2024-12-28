import React from 'react'

export const Services = () => {
  return (
    <>
    <div className='flex flex-col  py-10 text-white px-16 '>
        <h1 className='text-3xl'>Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 py-5'>
            <div className=' md:w-full p-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-slate-800 hover:scale-105 ' >
                <h1 className='text-3xl'>Art Direction</h1>
                <p className='mt-5 opacity-40 text-xl '>
                    We help with the creation and development of online 
                    advertising ideas , with particular focus on their visual 
                    appearance.
                </p>
            </div>
            <div className=' md:w-full p-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-slate-800 hover:scale-105 ' >
                <h1 className='text-3xl'>Brading</h1>
                <p className='mt-5 opacity-40 text-xl '>
                    We design key brand elements such as the logo , color palette , typography ,
                     and other design components that make your brand stand out from the competitors.
                </p>
            </div>
            <div className=' md:w-full p-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-slate-800 hover:scale-105 ' >
                <h1 className='text-3xl'>Web Design</h1>
                <p className='mt-5 opacity-40 text-xl '>
                    We combine creative design with technical expertise to create 
                    websites that are both visually appealing and functional.
                </p>
            </div>
            <div className=' md:w-full p-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-slate-800 hover:scale-105 ' >
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
