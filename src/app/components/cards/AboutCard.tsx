import { ListItemsProps } from '@/app/interfaces/ListItems'
import React from 'react'
import Skills from '../media/Skills'

const AboutCard: React.FC<ListItemsProps> = ({ data }) => {
    return (
        <div className="space-y-12">
            {data.map((section, index) => (
                <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Icon or Image Section */}
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm border border-blue-100">
                                <span className="text-4xl font-bold">
                                    {index === 0 ? '💻' : index === 1 ? '🤖' : '☁️'}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                {section.title}
                            </h3>
                            
                            <div className="mb-6">
                                <Skills skills={section.skills} platform='about' />
                            </div>

                            <ul className="space-y-3 text-gray-700">
                                {section.description?.map((point, idx) => (
                                    <li 
                                        key={`${section.title}-${idx}`}
                                        className="flex items-start leading-relaxed"
                                    >
                                        <span className="text-blue-900 mr-2 mt-1 font-bold">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AboutCard
