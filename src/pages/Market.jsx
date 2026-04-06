import React from 'react'
import { Link } from 'react-router-dom'

const Market = () => {
  const marketData = [
    {
      label: 'TAM',
      value: '$XXB',
      description: 'Total Addressable Market',
    },
    {
      label: 'SAM',
      value: '$XXB',
      description: 'Serviceable Available Market',
    },
    {
      label: 'SOM',
      value: '$XXM',
      description: 'Serviceable Obtainable Market',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
       
        {/* Display the actual slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Market Size</h3>
            <img
              src="/images/page_4_img_1.png"
              alt="Market Opportunity"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Competition Analysis</h3>
            <img
              src="/images/page_15_img_1.png"
              alt="Competition"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-primary/20 p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{item.label}</h3>
              <p className="text-5xl font-bold text-primary mb-4">
                {item.value}
              </p>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex justify-between">
          <Link
            to="/our-approach/solution"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/our-approach/business-model"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Market
