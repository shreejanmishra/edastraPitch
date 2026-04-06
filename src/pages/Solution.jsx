import React from 'react'

const Solution = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow">
        {/* Solution Features slide */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Solution Features</h3>
            <img
              src="/images/page_3_img_1.png"
              alt="Solution Features — Scholarship, 4K Library, VR, OTT, Storytelling"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">The Edastra Solution</h3>
            <img
              src="/images/page_8_img_1.png"
              alt="The Edastra Solution — Defining Solution"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Solution
