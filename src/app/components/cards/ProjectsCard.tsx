"use client";
import React, { useState } from 'react'
import { getImageUrl } from '../utils';
import Skills from '../media/Skills';
import Buttons from '../button/Buttons';

interface Project {
    title: string;
    description: string[];
    link: string;
    logo_path: string;
    creation_on: string;
    skills: string[];
}

interface ProjectProps {
    data: Project[]
}

const ProjectCard: React.FC<ProjectProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }
    const [expanded, setExpanded] = useState(false);
    const chunkedCertificates = chunkArray(data, 2);
    return (
        <>
            {chunkedCertificates.map((chunk, chunkIndex) => (
                <div className="m-10  grid sm:grid-cols-12 gap-3 " key={chunkIndex}>
                    {chunk.map((project, index) => (
                        <div className="sm:col-span-6   flex items-center justify-center w-full" key={index}>

                            <div className="bg-sky-100 border border-sky-100 rounded-xl shadow-xl  
                        p-4 overflow-hidden w-full max-w-s">
                                {/* <div className=" bg-gray-200 flex items-center justify-center">
                                    <img
                                        src={getImageUrl(`${certificate.logo_path}`)}
                                        alt={certificate.alt_name}
                                        className="object-contain h-full"
                                    />
                                </div> */}
                                <div className="text-blue-900 " >
                                    <h2 className="text-xl font-semibold  ">{project.title}</h2>
                                    {/* Fixed height with Read More */}
                                    <div className={`relative ${expanded ? "max-h-none" : "max-h-12"} overflow-hidden`}>

                                        <ul>
                                            {project.description.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Show Read More only if content is long */}
                                    {project.description.length > 1 && (
                                        <button
                                            onClick={() => setExpanded(!expanded)}
                                            className="text-blue-600 hover:underline mt-2"
                                        >
                                            {expanded ? "Read Less" : "Read More"}
                                        </button>
                                    )}
                                    <div className='text-gray-500'>
                                        <h2 className="text-md " >
                                            Created on: {project.creation_on}
                                        </h2>
                                    </div>
                                </div>
                                <div className="p-1 self-end">
                                    {/* {project.skills.map((sentence, index) => (
                                        // <span key={index} className="mb-2 mr-2 text-blue-950 ">
                                        //     {sentence} 
                                        // </span> 
                                        
                                    ))} */}
                                    <Skills skills={project.skills} />

                                </div>
                                <div className="self-end">
                                    <Buttons url="https://github.com/myrepo" keyType="viewCode" title="View Code" />
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            ))}
            {/* {certificates.map((certificate, index) => (
            <div className=" m-10 grid sm:grid-cols-12 gap-4" key={index}>
                <div className="sm:col-span-4 flex items-center justify-center">
                    <img
                        src={getImageUrl(`${certificate.logo_path}`)}
                        alt={certificate.title} />
                </div>
            </div>
        ))}; */}
        </>
    )
}

// Utility function to chunk an array into smaller arrays of a specified size
function chunkArray(array: Project[], chunkSize: number): Project[][] {
    const result: Project[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export default ProjectCard
