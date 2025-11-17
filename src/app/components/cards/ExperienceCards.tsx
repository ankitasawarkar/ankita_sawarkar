import React from 'react'
import { getImageUrl } from '../utils'
import {ListExperiences} from '../../interfaces/ListItems';
import Image from 'next/image';

const ExperienceCards: React.FC<ListExperiences> = ({ experiences }) => {

    if (!experiences || experiences.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <ol className="relative border-s border-gray-300 dark:border-gray-700">
            {experiences.map((experience, index) => (
                    <li key={`${experience.company}-${index}`} className="mb-10 ms-6">

                        <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-400 dark:border-white dark:bg-gray-100"></div>

                        <div className='flex items-starts'>
                            <a href={experience.company_url} target="_blank" rel="noopener noreferrer">
                                <Image className='w-20 h-20 mb-3 me-3 rounded-lg sm:mb-0' width={100} height={100}
                                    src={getImageUrl(`${experience.logo_path}`)}
                                    alt={experience.title} />
                            </a>
                            <div className="p-4 bg-indigo-100 border border-indigo-100 rounded-lg shadow-lg  
                        dark:bg-indigo-100 dark:border-indigo-100 w-full">


                                <div className="flex flex-col md:flex-row items-center justify-between w-full p-2 mr-13 ">
                                    <div>
                                        <h2 className="text-xl font-medium text-blue-900" >
                                            {experience.title}
                                        </h2>
                                        <h3 className="text-lg font-medium text-blue-950">
                                            {experience.company}
                                        </h3>
                                    </div>
                                    <div className='text-gray-500'>
                                        <h2 className="text-md " >
                                            {experience.duration}
                                        </h2>
                                        <h3 className="text-md ">
                                            {experience.location}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-1 ">
                                    {experience.description.map((sentence, index) => (
                                        <p key={index} className="text-blue-950 ">
                                            {sentence}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
            ))}
        </ol>
    )
}

export default ExperienceCards
