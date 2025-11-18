import React from 'react'
import AboutCard from '../cards/AboutCard';
import portfolioData from "@/data/portfolioData.json";

const skillsData = portfolioData.about;

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            What I Do
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Passionate about creating innovative solutions across multiple technology domains
          </p>
        </div>
        
        <div className="space-y-8">
          <AboutCard data={skillsData} />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
