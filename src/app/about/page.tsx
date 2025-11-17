import React from 'react'
import Navbar from '../components/navbar/NavBarModel';
import AboutSection from '../components/sections/AboutSection';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="animate-fadeIn">
        <AboutSection />
      </div>
    </>
  )
}

export default AboutPage
