import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Resume } from './Pages/Resume';
import { Contact } from './Pages/Contact';
import { Project } from './Pages/Project';
import { AppLayout } from './Pages/AppLayout';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { About } from './Components/About';
import { Herosection } from './Components/Herosection';
import { ProjectDetails } from './Components/ProjectDetails';
import './index.css'; // Ensure your styles are imported

function App() {
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = (e) => {
    const cursor = document.getElementById("custom-cursor");
    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/resume',
          element: <Resume />
        },
        {
          path: '/project',
          element: <Project />
        },
        {
          path: '/project/:id',
          element: <ProjectDetails />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <>
      {cursorVisible && (
        <div id='custom-cursor' className='custom-cursor'></div>
      )}
      <div className='bg-violet-gradient sm:min-w-3' onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;