import React from 'react'
import { getImageUrl } from '../utils'
import { theme } from '../theme/theme'

interface Experience {
    title: String,
    company: String,
    company_url: String,
    logo_path: String,
    duration: String,
    location: String,
    description: String[],
    color: String
}

interface ListExperiences {
    experiences?: Experience[]
}
const ExperienceCards: React.FC<ListExperiences> = ({ experiences }) => {

    if (!experiences || experiences.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>  {experiences.map((experience, index) => (
            <div className=" m-10 grid sm:grid-cols-12 gap-4" key={index}>

                {/* Logo */}
                <div className="sm:col-span-2 flex items-center justify-center">
                    <img
                        src={getImageUrl(`${experience.logo_path}`)}
                        alt={experience.title} />
                </div>

                {/* Details */}
                <div className="rounded-lg shdow-xl border-2 border-gray bg-sky-100 sm:col-span-10">
                    <div className="flex flex-col md:flex-row items-center w-full p-2 mr-13 justify-between ">
                        <div>
                            <h2 className="text-xl font-medium text-blue-900" >
                                {experience.title}
                            </h2>
                            <h3 className="text-lg font-medium mb-2 text-blue-950">
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
                            <p key={index} className="mb-2 text-blue-950 ">
                                {sentence}
                            </p>
                        ))}
                    </div>

                </div>
            </div>

        ))}</>

    )
}

export default ExperienceCards
