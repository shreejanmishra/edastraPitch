import React from 'react'
import AutoFrame from '../components/AutoFrame'

const VREconomics = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow">
        {/* Slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">AI VR Content Economics</h3>
            <img
              src="/images/page_13_img_1.png"
              alt="AI-led VR Content Economics"
              className="w-full rounded-lg border border-primary/20 shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">VR Profitability</h3>
            <img
              src="/images/page_14_img_1.png"
              alt="VR Profitability & Revenue Projections"
              className="w-full rounded-lg border border-primary/20 shadow-xl"
            />
          </div>
        </div>

        {/* Interactive Graph */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">VR Economics Analysis</h3>
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
            <AutoFrame
                src="/graphs/edastra_vr_economics.html"
                title="VR Economics"
                className="bg-white"
                frameBorder="0"
              />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default VREconomics
