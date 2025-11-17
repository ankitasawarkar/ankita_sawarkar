import React from 'react'
import Navbar from '../components/navbar/NavBarModel'
import ProjectsSection from '../components/sections/ProjectsSection';

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="animate-fadeIn">
        <ProjectsSection />
      </div>
    </>
  )
}

export default ProjectsPage
