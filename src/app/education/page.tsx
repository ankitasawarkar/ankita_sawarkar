import React from 'react'
//import "./Education.module.css"
import portfolio from '@/data/portfolioData.json'
import DegreeCard from '../components/cards/DegreesCards';
import Certificates from '../components/cards/CertificatesCards';
import NavbarModel from '../components/navbar/NavBarModel';

const data = portfolio.education;
const degrees = data.degrees;
const certificates = data.certificates;
const EducationPage = () => {
  return (
    <>
      <NavbarModel />

      <div className="grid sm:grid-cols-12 gap-4 m-20 rounded shadow-xl">
        <div className=" mb-5 sm:col-span-12">
          <h1 className="text-[56px] font-normal font-google-sans leading-[1.1] text-center text-blue-500">
            {data.title}
          </h1>
          <h3 className="text-[20px] font-normal font-google-sans leading-[1.1] text-center mt-[10px] text-blue-300">
          {data.subTitle}
          </h3>
        </div>
        <div className=" sm:col-span-12">
          <h1 className="text-[56px] font-normal font-google-sans leading-[1.1] text-center text-blue-500">
            Degree
          </h1>
        </div>
        <div className="sm:col-span-12">
          <DegreeCard data={degrees} />
        </div>

        {certificates.length > 0 && (
          <>
            <div className=" sm:col-span-12">
              <h1 className="text-[56px] font-normal font-google-sans leading-[1.1] text-center text-blue-500">
                Certificates
              </h1>
            </div>

            <div className="sm:col-span-12">
              <Certificates data={certificates} />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default EducationPage
