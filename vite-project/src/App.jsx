import { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Resume } from './Pages/Resume'
import { Contact } from './Pages/Contact'
import { Project } from './Pages/Project'
import { AppLayout } from './Pages/AppLayout'
import { use } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/resume',
          element: <Resume/>
        },
        {
          path: '/project',
          element: <Project/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    }
  ])

  const handlemove = (e) => {
    console.log(e);
    gsap.to("#custom-cursor",{
      x:e.clientX,
      y:e.clientY,
      duration:0.5,
      ease:"back.out(2)"
    })
  }
 
  return (
    <>

<div id='custom-cursor' className='h-5 w-5 bg-[#564d62] rounded-full z-10 fixed    ' ></div>
    <div className='bg-gradient-to-b from-custom-start via-custom-mid2 to-custom-end sm:min-w-3 cursor-none' onMouseMove={handlemove} >
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
