import React from 'react'
import { Link } from 'react-router-dom'

const TechArchitecture = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
        {/* Slide image */}
        <div className="mb-12">
          <img
            src="/images/page_17_img_1.png"
            alt="Tech Architecture"
            className="max-w-full mx-auto rounded-lg shadow-2xl shadow-primary/10 border border-primary/20"
          />
        </div>

        {/* Interactive Graphs */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-primary">Core Architecture (Interactive)</h3>
            <p className="text-sm text-gray-400 mb-4">Use the tabs to explore: Full Stack → Client Layer → Platform Services → <strong>Infrastructure (Global Expansion)</strong></p>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_tech_arch_fixed.html"
                title="Core Architecture Interactive"
                className="w-full h-[700px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-primary">Detailed Architecture</h3>
            <p className="text-sm text-gray-400 mb-4">Detailed breakdown with layer labels and expanded service descriptions</p>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_tech_architecture.html"
                title="Detailed Architecture"
                className="w-full h-[700px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Tech Cost Estimate</h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_tech_cost_estimate.html"
                title="Tech Cost Estimate"
                className="w-full h-[700px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 mt-8">
        <div className="flex justify-between">
          <Link
            to="/financials/road-ahead"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/team"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TechArchitecture
