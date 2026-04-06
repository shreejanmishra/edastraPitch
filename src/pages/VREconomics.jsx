import React from 'react'
import { Link } from 'react-router-dom'

const VREconomics = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
        {/* Slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">AI VR Content Economics</h3>
            <img
              src="/images/page_13_img_1.png"
              alt="AI-led VR Content Economics"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">VR Profitability</h3>
            <img
              src="/images/page_14_img_1.png"
              alt="VR Profitability & Revenue Projections"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        {/* Interactive Graph */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">VR Economics Analysis</h3>
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
            <iframe
              src="/graphs/edastra_vr_economics.html"
              title="VR Economics"
              className="w-full h-[600px] bg-white"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 mt-8">
        <div className="flex justify-between">
          <Link
            to="/financials/content-economics"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/financials/pricing"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VREconomics
