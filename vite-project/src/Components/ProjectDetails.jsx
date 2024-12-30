import React from 'react';
import { useParams } from 'react-router-dom';
import  projects from "../Api/Projectdetail.json"

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-white text-4xl font-bold'>{project.title}</h1>
        <p className='text-white text-lg mt-4'>{project.description}</p>
      </div>
    </div>
  );
};