import React from 'react'
import Navbar from '../components/navbar/NavBarModel';
import ExperienceSection from '../components/sections/ExperienceSection';

const ExperiencePage = () => {
    return (
        <>
            <Navbar />
            <div className="animate-fadeIn">
                <ExperienceSection />
            </div>
        </>
    )
}

export default ExperiencePage
