import React from 'react'
import { Link } from 'react-router-dom'

const InstitutionalPricing = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
        {/* Slide image */}
        <div className="mb-12">
          <img
            src="/images/page_12_img_1.png"
            alt="Bulk Pricing Schedule"
            className="max-w-full mx-auto rounded-lg shadow-2xl shadow-primary/10 border border-primary/20"
          />
        </div>

        {/* Interactive Graph */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Institutional Pricing Engine</h3>
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
            <iframe
              src="/graphs/institutional_pricing_engine.html"
              title="Institutional Pricing Engine"
              className="w-full h-[600px] bg-white"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 mt-8">
        <div className="flex justify-between">
          <Link
            to="/financials/vr-economics"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/financials/road-ahead"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InstitutionalPricing
