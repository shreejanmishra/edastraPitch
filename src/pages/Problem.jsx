import React from 'react'
import { Link } from 'react-router-dom'

const Problem = () => {
  const problems = [
    {
      title: 'Challenge 1',
      description: 'Description of the first major problem your target market faces.',
    },
    {
      title: 'Challenge 2',
      description: 'Description of the second major problem your target market faces.',
    },
    {
      title: 'Challenge 3',
      description: 'Description of the third major problem your target market faces.',
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 bg-black">
      <div className="section-container">      
        {/* Display the actual slide image */}
        <div className="mb-12">
          <img
            src="/images/page_2_img_1.png"
            alt="Problem Statement"
            className="max-w-full mx-auto rounded-lg shadow-2xl shadow-primary/10 border border-primary/20"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-primary/20 p-8 rounded-xl shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-12">
          <Link
            to="/"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/solution"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Problem
