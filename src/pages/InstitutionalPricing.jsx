import React from 'react'

const InstitutionalPricing = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
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

      
    </div>
  )
}

export default InstitutionalPricing
