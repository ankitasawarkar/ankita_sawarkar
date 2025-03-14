import React from 'react'
import portfolioData from "@/data/portfolioData.json";

import AboutCard from '../components/cards/AboutCard';
import Navbar from '../components/navbar/NavBarModel';
const skillsData = portfolioData.about;


const AboutPage = () => {
  return (
    <>
      <Navbar />

      <div className="grid sm:grid-cols-12 gap-1 m-20 bg-blue-200 rounded shadow-xl">
        <div className="pt-8 sm:col-span-12">
          <h1 className="text-[56px] font-normal font-google-sans leading-[1.1] text-center text-blue-900">
            What I do?
          </h1>
        </div>
        <div className="sm:col-span-12 ">
        <AboutCard data = {skillsData} />
        </div>
        </div>


    </>
  )
}

export default AboutPage
