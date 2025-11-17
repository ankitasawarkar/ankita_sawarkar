"use client";

import React from 'react';
import portfolioData from "@/data/portfolioData.json";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 text-gray-700 mt-20 border-t border-gray-200">
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">{portfolioData.name}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {portfolioData.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            Building scalable solutions with modern technologies
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { href: "/about", label: "About" },
                                { href: "/education", label: "Education" },
                                { href: "/experience", label: "Experience" },
                                { href: "/projects", label: "Projects" }
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <a 
                                        href={href} 
                                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">Connect</h4>
                        <div className="flex space-x-4">
                            {portfolioData.socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <i className={`${social.fontAwesomeIcon} text-white`}></i>
                                </a>
                            ))}
                        </div>
                        <div className="pt-4">
                            <a
                                href={portfolioData.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-300 pt-8 text-center">
                    <p className="text-gray-600 text-sm">
                        © {currentYear} {portfolioData.name}. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        Built with Next.js, React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
