'use client'
import React from 'react'
const resume = "/assets/CV.pdf";
import portfolioData from "@/data/portfolioData.json";
import { getImageUrl } from "../utils";
import styles from './profile.module.css';
import Buttons from '../button/Buttons';

const ProfileContaint = () => {
    return (

        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{portfolioData.name}</h1>

                {/* Profile Info */}
                {/* <h2 className={styles.subTitle}>{portfolioData.title}</h2> */}
                <p className={styles.description}>
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
                    className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 p-2 rounded-lg shadow"
                    download
                >
                    Download Resume
                </a>
            </div>
            {/* Image */}
            <img
                src={getImageUrl("hero-img.png")}
                alt={portfolioData.name}
                className={styles.heroImg}
            />

        </section>
    )
}

export default ProfileContaint
