import React from 'react'
import { getImageUrl } from '../utils';
import {ListDegrees} from '../../interfaces/ListItems';

const DegreeCard: React.FC<ListDegrees> = ({ data }) => {

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>  {data.map((degree, index) => (
            <div className=" m-10 grid sm:grid-cols-12 gap-4" key={index}>
                {/* Logo */}
                <div className="sm:col-span-2 flex items-center justify-center">
                    <a href={degree.website_link}>
                        <img src={getImageUrl(`${degree.logo_path}`)} alt={degree.title} 
                        className='rounded-full'/>
                    </a>
                </div>
                {/* Details */}
                <div className="rounded-lg shdow-xl border-2 border-gray bg-blue-100 sm:col-span-10">

                    <div className="flex flex-col md:flex-row items-center w-full rounded-t-lg p-2 bg-blue-300 mr-13 justify-between">
                        <div>
                            <h2 className="text-xl font-medium text-blue-950" >
                                {degree.title}
                            </h2>
                            <h3 className="text-lg font-medium mt-1 mb-2 text-blue-950">
                                {degree.subtitle}
                            </h3>
                        </div>
                        <div>
                            <h3 className="text-md text-gray-500">
                                {degree.duration}
                            </h3>
                        </div>
                    </div>
                    <div className="p-2 ">
                        {degree.descriptions.map((sentence, index) => (
                            <p key={index} className="mb-2 text-blue-950 ">
                                {sentence}
                            </p>
                        ))}
                        {/* <div className="flex justify-end">
                            {degree.document_link && (
                                <Buttons url={degree.document_link} keyType="viewCertificates" title="View Certificate" />
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
        ))}
        </>
    );
};



export default DegreeCard;