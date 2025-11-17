import React from 'react'
import ProjectCard from '../cards/ProjectsCard';
import portfolio from '@/data/portfolioData.json'

const data = portfolio.projects;
const projectDetails = data.projects;

const ProjectsSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            {data.title}
          </h1>
          <p 
            className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
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
