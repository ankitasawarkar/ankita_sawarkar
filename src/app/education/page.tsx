import React from 'react'
import NavbarModel from '../components/navbar/NavBarModel';
import EducationSection from '../components/sections/EducationSection';

const EducationPage = () => {
  return (
    <>
      <NavbarModel />
      <div className="animate-fadeIn">
        <EducationSection />
      </div>
    </>
  )
}

export default EducationPage
