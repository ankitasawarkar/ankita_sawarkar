import React from 'react'
import DegreeCard from '../cards/DegreesCards';
import Certificates from '../cards/CertificatesCards';
import portfolio from '@/data/portfolioData.json'

const data = portfolio.education;
const degrees = data.degrees;
const certificates = data.certificates;

const EducationSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {data.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {data.subTitle}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            Degrees
          </h2>
          <DegreeCard data={degrees} />
        </div>

        {certificates.length > 0 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
              Certifications
            </h2>
            <Certificates data={certificates} />
          </div>
        )}
      </div>
    </div>
  )
}

export default EducationSection
