import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-dark-lighter to-black text-white pt-20">
      <div className="section-container text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
          Welcome to Our Vision
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Transforming the future, one innovation at a time
        </p>
        <Link
          to="/problem"
          className="inline-block bg-primary text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 transition-all"
        >
          Learn More
        </Link>
        
        {/* Display the actual slide image */}
        <div className="mt-12">
          <img
            src="/images/page_1_img_1.png"
            alt="Cover Slide"
            className="max-w-full mx-auto rounded-lg shadow-2xl shadow-primary/10 border border-primary/20"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
