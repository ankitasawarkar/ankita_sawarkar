"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { softwareSkillsIcons } from "./iconMapping";
import { SoftwareSkillsProps } from '../../interfaces/ListItems';

const SoftwareSkills: React.FC<SoftwareSkillsProps> = ({ skills }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4  ">
      {skills.length > 0 ? (
        skills.map((skill, index) => {
          const iconData = softwareSkillsIcons[skill.fontAwesomeIcon];
          return (
            <div key={index}  className='w-20 h-20'>
                    
              {iconData?.icon ? (
                <FontAwesomeIcon 
                  icon={iconData.icon}  
                  style={{ color: iconData.color || "white" }} 
                />
              ) : (
                <span style={{ color: "white" }}>{skill.skillName}</span> 
              )}
              {/* <p>{skill.skillName}</p> */}
            </div>
          );
        })
      ) : (
        <p>No software skills available</p>
      )}
    </div>
  );
};

export default SoftwareSkills;
