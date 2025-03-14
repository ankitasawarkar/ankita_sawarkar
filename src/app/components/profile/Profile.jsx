'use client'
import React from 'react'
import portfolioData from "@/data/portfolioData.json";
import { getImageUrl } from "../utils";
import Buttons from '../button/Buttons';

const resume = portfolioData.resume;//"/assets/CV.pdf";

const ProfileContent = () => {
    return (

        <section className="relative flex items-center justify-between mt-[49px] z-10 mx-[10%]">{/* {styles.container} */}
            <div className="flex flex-col items-start text-[var(--color-text)] z-10">{/* {styles.content} */}
                <h1 className="text-[72px] font-black mb-[33px] font-roboto bg-gradient-to-r from-white via-white to-transparent bg-[length:130%_100%] bg-clip-text text-transparent">{portfolioData.name}</h1> {/* {styles.title} */}

                {/* Profile Info */}
                <h2 className="text-[30px] font-roboto mb-[20px]">{portfolioData.title}</h2>{/* {styles.subTitle}*/}
                <p className="text-[30px] font-roboto"> {/* {styles.description} */}
                    {portfolioData.description}
                </p>
                {/* Socialmedia Info */}
                <div className="flex space-x-4 mt-4">
                    {/* 1. GitHub Button (Circular) */}
                    <Buttons url="https://github.com" keyType="github" />

                    {/* 2. LinkedIn Button (Circular) */}
                    <Buttons url="https://linkedin.com" keyType="linkedin" />
                </div>
                {/* Resume */}
                {/* 3. Resume Download Button (Normal)
            <Buttons url="/resume.pdf" keyType="download" title="Download Resume" /> */}
                <a
                    href={resume} 
                    target= "_blank"
                    rel="noopener noreferrer" 
                    className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 p-2 rounded-lg shadow"
                    download
                >
                    Download Resume
                </a>
            </div>
            {/* Image */}
            <img
                src={getImageUrl("hero1.jpg")}
                alt={portfolioData.name}
                className="w-1/2 z-10 animate-floating rounded-full shadow-lg"
                // className={styles.heroImg}
            />

        </section>
    )
}

export default ProfileContent
