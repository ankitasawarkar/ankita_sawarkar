"use client";
import React from 'react'
import { getImageUrl } from '../utils';

interface Certificate {

    title: String;
    subtitle: String;
    logo_path: String;
    certificate_link: String;
}

interface CertificateProps {
    data: Certificate[];
}

const Certificates: React.FC<CertificateProps> = ({ certificates }) => {
    // console.log('certificates.length ', certificates.length);
    if (!certificates || certificates.length === 0) {
        return <div>Loading...</div>;
    }
    // console.log('Certificates prop in DegreeCard:', certificates); // Debugging line
    // const backgroundColor = "bg-sky-400";
    // const textColor = "text-blue-950";

    const chunkedCertificates = chunkArray(certificates, 4);
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
                                        <img
                                            src={getImageUrl(`${certificate.logo_path}`)}
                                            alt={certificate.title}
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
function chunkArray(array: Certificate[], chunkSize: number): Certificate[][] {
    const result: Certificate[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export default Certificates
