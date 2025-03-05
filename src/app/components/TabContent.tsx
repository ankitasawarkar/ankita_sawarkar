'use client'
import React, { useState } from 'react'

const tabs = ["About", "Education", "Experience", "Projects"]; 

export default function TabContent() {
    const [activeTab, setActiveTab] = useState("About");
  return (
   <>
   <main>
        {/* Tab Navigation  className="w-full md:w-3/4 p-6"*/}
        <div className="flex border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${activeTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "About"}
          {activeTab === "Education"}
          {activeTab === "Experience"}
          {activeTab === "Projects"}
        </div>
      </main>
   
   </>
  )
}

