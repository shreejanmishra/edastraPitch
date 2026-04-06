import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Feature 1',
      description: 'Description of your first key product feature.',
    },
    {
      icon: '⚡',
      title: 'Feature 2',
      description: 'Description of your second key product feature.',
    },
    {
      icon: '🎯',
      title: 'Feature 3',
      description: 'Description of your third key product feature.',
    },
    {
      icon: '💡',
      title: 'Feature 4',
      description: 'Description of your fourth key product feature.',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
        
        {/* Display the actual slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="/images/page_5_img_1.png"
              alt="Product Features Part 1"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <img
              src="/images/page_6_img_1.png"
              alt="Product Features Part 2"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black border border-primary/20 p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex justify-between">
          <Link
            to="/our-approach/traction"
            className="px-6 py-3 bg-black border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/financials"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
