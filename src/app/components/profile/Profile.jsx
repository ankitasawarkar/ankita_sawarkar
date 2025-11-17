'use client'
import React from 'react'
import portfolioData from "@/data/portfolioData.json";
import { getImageUrl } from "../utils";
import Buttons from '../button/Buttons';

const resume = portfolioData.resume;

const ProfileContent = () => {
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between mt-12 lg:mt-20 z-10 mx-[5%] lg:mx-[10%] gap-8 lg:gap-12 mb-20">
            <div className="flex flex-col items-start z-10 w-full lg:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 lg:mb-8 font-roboto text-gray-900">
                    {portfolioData.name}
                </h1>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-roboto mb-4 text-blue-900 font-semibold">
                    {portfolioData.title}
                </h2>

                <p className="text-base md:text-lg lg:text-xl font-roboto leading-relaxed text-gray-600 mb-6">
                    {portfolioData.description}
                </p>

                {/* Social Media Links */}
                <div className="flex space-x-4 mt-4">
                    <Buttons url={portfolioData.socialMedia[0].link} keyType="github" />
                    <Buttons url={portfolioData.socialMedia[1].link} keyType="linkedin" />
                </div>

                {/* Resume Download Button */}
                <a
                    href={resume} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="mt-6 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                    download
                >
                    Download Resume
                </a>
            </div>

            {/* Profile Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img
                    src={getImageUrl("hero1.jpg")}
                    alt={portfolioData.name}
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-blue-100 animate-floating"
                />
            </div>
        </section>
    )
}

export default ProfileContent
