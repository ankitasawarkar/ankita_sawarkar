import React from 'react'
import ExperienceCards from '../cards/ExperienceCards';
import portfolioData from "@/data/portfolioData.json";

const experienceData = portfolioData.experience;
const experiences = experienceData.experiences;

const ExperienceSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            {experienceData.title}
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {experienceData.subTitle}
          </p>
        </div>

        <div className="mt-12">
          <ExperienceCards experiences={experiences} />
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
