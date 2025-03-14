import React from 'react'
import portfolioData from "@/data/portfolioData.json";
import ExperienceCards from '../components/cards/ExperienceCards';
import Navbar from '../components/navbar/NavBarModel';

const experienceData = portfolioData.experience;
const experiences = experienceData.experiences;
const ExperiencePage = () => {
    return (
        <>
            <Navbar />

            <div className="grid sm:grid-cols-12 gap-4 m-20 rounded  shdow-xl">
                <div className=" mb-5 sm:col-span-12 text-center text-indigo-900 dark:text-indigo-400">
                    <h1 className="text-[56px] font-normal font-google-sans leading-[1.1] ">
                        {experienceData.title}
                    </h1>
                    <h3 className="text-[20px] font-normal font-google-sans leading-[1.1] mt-[10px]">
                        {experienceData.subTitle}
                    </h3>
                </div>


                {/* Timeline */}
                <div className="sm:col-span-12 m-20 mt-5 rounded  shdow-xl">
                    <ExperienceCards experiences={experiences} />
                </div>
            </div>

        </>
    )
}

export default ExperiencePage
