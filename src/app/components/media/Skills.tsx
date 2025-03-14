import React from 'react';
import { skillIconMap } from '@/data/IconMapper';

interface SkillsProps {
    skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
console.log("Skill text match: ",skills);
    return (
        <div className="flex  flex-wrap space-x-3" >
            {skills.map((skill, index) => (
                <div key={index} className="relative group">
                    <div className="text-sm text-black">{skillIconMap[skill] || <span></span> }</div> 
                    {/* <span>,{skill}<span> */}
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1 bg-black text-white text-sm font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Skills;
