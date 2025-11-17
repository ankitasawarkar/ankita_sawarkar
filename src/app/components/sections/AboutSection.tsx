import React from 'react'
import AboutCard from '../cards/AboutCard';
import portfolioData from "@/data/portfolioData.json";

const skillsData = portfolioData.about;

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            What I Do
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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
