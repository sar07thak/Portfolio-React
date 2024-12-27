import { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Resume } from './Pages/Resume'
import { Contact } from './Pages/Contact'
import { Project } from './Pages/Project'
import { AppLayout } from './Pages/AppLayout'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
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

  return (
    <>
    <div className='bg-gradient-to-b from-custom-start via-custom-mid2 to-custom-end h-screen'>
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
