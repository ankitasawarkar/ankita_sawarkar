"use client";
import React from 'react'
import { getImageUrl } from '../utils';
import {ListCertificates, chunkArray} from '../../interfaces/ListItems'
import Image from 'next/image';

const Certificates: React.FC<ListCertificates> = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    const chunkedCertificates = chunkArray(data, 4);
    return (
        <>

            {chunkedCertificates.map((chunk, chunkIndex) => (
                <div className="m-10  grid sm:grid-cols-12 gap-4 " key={chunkIndex}>
                    {chunk.map((certificate, index) => (
                        <div className="sm:col-span-3  flex items-center justify-center" key={index}>
                            
                            <a  href={certificate.certificate_link || "#"}
                                target={certificate.certificate_link ? "_blank" : ""}
                                rel={certificate.certificate_link ? "noopener noreferrer" : ""}
                                onClick={(e) => {
                                    if (!certificate.certificate_link) {
                                        e.preventDefault(); // Prevent navigation
                                        alert("Certificate link is not available.");
                                    }
                                }}
                            >
                                <div className="bg-white shadow-md border border-indigo-100 rounded-2xl max-h-[200px] overflow-hidden w-full max-w-xs">
                                    <div className=" bg-gray-200 flex items-center justify-center">
                                        <Image
                                            src={getImageUrl(`${certificate.logo_path}`)}
                                            alt={certificate.title}
                                            width={330} height={150}
                                            className="object-contain h-full max-h-[100px]"
                                        />
                                    </div>
                                    <div className="bg-sky-50 p-4 text-center  max-h-[100px]">
                                        <h2 className="text-xl font-semibold text-blue-900 ">{certificate.title}</h2>
                                        <h3 className="text-gray-500">{certificate.subtitle}</h3>
                                    </div>
                                </div>
                            </a>

                        </div>
                    ))}
                </div>
            ))}
            
        </>
    )
}

export default Certificates
