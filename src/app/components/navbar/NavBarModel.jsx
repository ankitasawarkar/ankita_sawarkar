"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getImageUrl } from '../utils';

const NavbarModel = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/education", label: "Education" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" }
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3">
                    <img 
                        src={getImageUrl('navbar_logo.jpg')} 
                        className="h-10 w-auto rounded-full shadow-md" 
                        alt="Logo" 
                    />
                </Link>

                {/* Mobile menu button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors" 
                    aria-controls="navbar-default" 
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Desktop & Mobile Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-2 md:mt-0 rounded-lg md:border-0 bg-gray-50 md:bg-transparent border border-gray-200">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link 
                                    href={href} 
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-2.5 rounded-md font-medium transition-all duration-300 ${
                                        pathname === href
                                            ? "bg-blue-900 text-white shadow-md"
                                            : "text-gray-700 hover:bg-gray-100 hover:text-blue-900"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarModel;
