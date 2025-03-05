"use client";
import React from "react";

const Button = ({ url, keyType, title = "" }) => {
    // Define button styles based on `keyType`
    const buttonStyles = {
        github: "bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-[#24292F]/50", // "#181717"
        linkedin: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300", // "#0077B5"
        download: "bg-gray-700 hover:bg-gray-800 focus:ring-gray-300",
        viewCode: "bg-gray-700 hover:bg-gray-800 focus:ring-gray-300",
        viewCertificates: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800",
        // "bg-sky-400 text-white hover:bg-blue-600 focus:ring-gray-300"
    };

    // Define button shape (rounded or circular)
    const isCircular = keyType === "github" || keyType === "linkedin";

    return (
        <button
            type="button"
            className={`text-white font-medium text-sm text-center me-2 mb-2 focus:outline-none focus:ring-4 
                flex items-center justify-center transition-all duration-300 
                ${isCircular ? "rounded-full w-14 h-14 p-2" : "rounded-lg px-5 py-2.5"} 
                ${buttonStyles[keyType] || "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400"}
            `}
            onClick={() => window.open(url, "_blank")}
        >
            {/* Show SVG icons for GitHub & LinkedIn */}
            {keyType === "github" && (
                <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
            )}
            {keyType === "linkedin" && (
                <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.63a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM20.44 20.45h-3.56v-5.8c0-1.38-.03-3.17-1.94-3.17s-2.24 1.52-2.24 3.07v5.9h-3.56V9h3.42v1.56h.05c.48-.92 1.66-1.88 3.42-1.88 3.66 0 4.34 2.4 4.34 5.52v6.25z" />
                </svg>
            )}

            {/* Show text for non-circular buttons */}
            {!isCircular && title && <span>{title}</span>}
        </button>
    );
};

export default Button;
