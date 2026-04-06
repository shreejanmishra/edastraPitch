import React from 'react'
import { Link } from 'react-router-dom'

const VRExperience = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
        {/* Slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">VR at Edastra</h3>
            <img
              src="/images/page_10_img_1.png"
              alt="VR at Edastra — Devices & Cost"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">VR Scalability</h3>
            <img
              src="/images/page_11_img_1.png"
              alt="VR at Edastra — Scalability"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        {/* Interactive Graphs */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">VR Experience Overview</h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_vr_slide.html"
                title="VR Slide"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">VR Visual</h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_vr_visual.html"
                title="VR Visual"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 mt-8">
        <div className="flex justify-between">
          <Link
            to="/product/scholarships"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
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

export default VRExperience
