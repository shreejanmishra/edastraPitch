import React from 'react'
import { Link } from 'react-router-dom'

const Solution = () => {
  const features = [
    'Key feature or benefit 1',
    'Key feature or benefit 2',
    'Key feature or benefit 3',
    'Key feature or benefit 4',
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 bg-dark-lighter">
      <div className="section-container">
        
        {/* Display the actual slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="/images/page_3_img_1.png"
              alt="Solution Overview"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <img
              src="/images/page_16_img_1.png"
              alt="Technology Stack"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">How We Solve It</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Detailed explanation of your solution and how it addresses the problems mentioned above.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black border border-primary/20 p-12 rounded-xl shadow-lg">
            <div className="bg-dark-lighter h-80 rounded-lg flex items-center justify-center text-gray-500">
              Solution Visual
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            to="/problem"
            className="px-6 py-3 bg-black border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/market"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Solution
