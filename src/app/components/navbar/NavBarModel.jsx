"use client"; // Ensure this is a client component

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getImageUrl } from '../utils';

const NavbarModel = () => {
    const pathname = usePathname(); // Get the current route

    return (
        <nav>
            {/* className="bg-white border-gray-500 dark:bg-gray-500" */}
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <img src={getImageUrl('navbar_logo.jpg')} className="h-8 w-3xs" alt="Self Logo" />
                                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                                        </a>
                                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                            <span className="sr-only">Open main menu</span>
                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                            </svg>
                                        </button>
                                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex space-x-4">
                {[
                    { href: "/about", label: "About" },
                    { href: "/education", label: "Education" },
                    { href: "/experience", label: "Experience" },
                    { href: "/projects", label: "Projects" }
                ].map(({ href, label }) => (
                    <li key={href}>
                        <Link 
    href={href} 
    className={`px-3 py-2 rounded-md ${
        pathname === href
            ? "bg-gray-200 text-gray-900"  /* Ensure visibility */
            : "text-white hover:bg-blue-200"
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
