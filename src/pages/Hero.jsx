import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex-1 flex flex-col min-h-0 items-center justify-center bg-gradient-to-br from-[#F5F2DE] via-[#E8E5D0] to-[#F5F2DE] text-black pt-20 pb-4">
      <div className="section-container text-center max-w-5xl w-full flex flex-col flex-1 min-h-0">
        <div className="flex-shrink-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Welcome to Our Vision
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-black">
            Transforming the future, one innovation at a time
          </p>
          <Link
            to="/our-approach"
            className="inline-block bg-primary text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 transition-all"
          >
            Learn More
          </Link>
        </div>
        
        {/* Display the actual slide image */}
        <div className="mt-6 md:mt-8 flex-1 min-h-0 flex items-center justify-center">
          <img
            src="/images/page_1_img_1.png"
            alt="Cover Slide"
            className="max-w-full max-h-[45vh] lg:max-h-[55vh] object-contain mx-auto rounded-lg shadow-2xl shadow-primary/10 border border-primary/20"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
