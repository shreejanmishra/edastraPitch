import React from 'react'
import { Link } from 'react-router-dom'

const Traction = () => {
  const milestones = [
    {
      label: 'Users',
      value: 'XX,XXX+',
      description: 'Active users on platform',
    },
    {
      label: 'Revenue',
      value: '$XXM',
      description: 'Annual recurring revenue',
    },
    {
      label: 'Growth',
      value: 'XX%',
      description: 'Month-over-month growth',
    },
    {
      label: 'Customers',
      value: 'XXX+',
      description: 'Paying customers',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
        
        {/* Display the actual slide images */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Traction</h3>
            <img
              src="/images/page_9_img_1.png"
              alt="Traction"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Milestones</h3>
            <img
              src="/images/page_10_img_1.png"
              alt="Milestones"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Roadmap</h3>
            <img
              src="/images/page_17_img_1.png"
              alt="Roadmap"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-black border border-primary/20 p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{milestone.label}</h3>
              <p className="text-4xl font-bold text-primary mb-4">
                {milestone.value}
              </p>
              <p className="text-gray-300">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex justify-between">
          <Link
            to="/our-approach/business-model"
            className="px-6 py-3 bg-black border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/product"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Traction
