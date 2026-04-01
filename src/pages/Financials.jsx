import React from 'react'
import { Link } from 'react-router-dom'

const Financials = () => {
  const highlights = [
    'Year 1: $XXM revenue',
    'Year 2: $XXM revenue',
    'Year 3: $XXM revenue',
    'Break-even: Month XX',
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 bg-dark-lighter">
      <div className="section-container">
        
        {/* Display the actual slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Financial Projections</h3>
            <img
              src="/images/page_13_img_1.png"
              alt="Financial Projections"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Revenue Model</h3>
            <img
              src="/images/page_14_img_1.png"
              alt="Revenue Model"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 bg-black border border-primary/20 p-12 rounded-xl shadow-lg">
            <div className="bg-dark-lighter h-80 rounded-lg flex items-center justify-center text-gray-500">
              Revenue Growth Chart
            </div>
          </div>
          <div className="bg-black border border-primary/20 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Key Metrics</h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-300 border-l-4 border-primary pl-4 py-2"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            to="/team"
            className="px-6 py-3 bg-black border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Financials
