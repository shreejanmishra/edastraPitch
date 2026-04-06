import React from 'react'

const ContentEconomics = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow">
        {/* Slide image */}
        <div className="mb-12">
          <img
            src="/images/page_15_img_1.png"
            alt="Content Production Structural Advantage"
            className="max-w-full mx-auto rounded-lg shadow-2xl shadow-primary/10 border border-primary/20"
          />
        </div>

        {/* Interactive Graphs */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Content Economics Visual</h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_content_economics_visual.html"
                title="Content Economics Visual"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Content Unit Economics</h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_content_unit_economics.html"
                title="Content Unit Economics"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Content Unit Economics (Detailed)</h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_content_unit_economics-2.html"
                title="Content Unit Economics Detailed"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">VR Content Economics</h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/vr_content_economics_slide.html"
                title="VR Content Economics Slide"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default ContentEconomics
