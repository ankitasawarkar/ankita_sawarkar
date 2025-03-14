import { ListItemsProps } from '@/app/interfaces/ListItems'
import React from 'react'
import { getImageUrl } from '../utils'
import Skills from '../media/Skills'

const AboutCard: React.FC<ListItemsProps> = ({ data }) => {
    return (
        <>
            <div className="grid m-4 sm:grid-cols-12 gap-4 ">
                <div className="sm:col-span-5 ">
                    <img src={getImageUrl("aboutImage.png")}
                        alt="Me sitting with a laptop" 
                        className=' flex items-center justify-center'/></div>
                <div className="p-8 sm:col-span-7 ">
                    {data.map((section, index) => (
                        <div key={index} className='mb-8' >
                            {/* Title */}
                            <h3 className='text-indigo-950 text-3xl font-medium'>{section.title}</h3>
                            <div className='mt-4 mb-4'><Skills skills={section.skills} /></div>
                            <ul className='text-gray-500'>
                                {section.description?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutCard
