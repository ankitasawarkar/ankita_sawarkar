import React from 'react'
import ExperienceCards from '../cards/ExperienceCards';
import portfolioData from "@/data/portfolioData.json";

const experienceData = portfolioData.experience;
const experiences = experienceData.experiences;

const ExperienceSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {experienceData.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
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
