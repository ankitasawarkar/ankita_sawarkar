import React from 'react'
import ProjectCard from '../cards/ProjectsCard';
import portfolio from '@/data/portfolioData.json'

const data = portfolio.projects;
const projectDetails = data.projects;

const ProjectsSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {data.title}
          </h1>
          <p 
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl"
            dangerouslySetInnerHTML={{ __html: data.subTitle }}
          />
        </div>
        
        <div>
          <ProjectCard data={projectDetails} />
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
