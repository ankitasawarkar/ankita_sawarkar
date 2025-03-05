import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import portfolio from '@/data/portfolioData.json'
import ProjectCard from '../components/cards/ProjectsCard';


const data = portfolio.projects;
const projectDetails = data.projects;
const ProjectsPage = () => {
  return (
    <>
      <Navbar />

      <div className="grid sm:grid-cols-12 gap-1 m-20 rounded  shdow-xl">
        <div className=" mb-10 sm:col-span-12 text-sky-500">
          <h1 className="text-[56px] font-normal font-google-sans leading-[1.1] text-center">
            {data.title}
          </h1>
          <h3 className="text-[20px] font-normal font-google-sans leading-[1.1] text-center mt-[10px] ">
            {data.subTitle}
          </h3>
        </div>
        <div className="sm:col-span-12">
          <ProjectCard data={projectDetails} />
        </div>
    </div >
      </>

      
  )
}

export default ProjectsPage
