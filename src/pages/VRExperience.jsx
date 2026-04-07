import React from "react";
import AutoFrame from "../components/AutoFrame";

const VRExperience = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow">
        {/* Slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              VR at Edastra
            </h3>
            <img
              src="/images/page_10_img_1.png"
              alt="VR at Edastra — Devices & Cost"
              className="w-full rounded-lg border border-primary/20 shadow-xl"
            />
          </div> */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              VR Scalability
            </h3>
            <img
              src="/images/page_11_img_1.png"
              alt="VR at Edastra — Scalability"
              className="w-full rounded-lg border border-primary/20 shadow-xl"
            />
          </div>
        </div>

        {/* Interactive Graphs */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              VR Experience Overview
            </h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <AutoFrame
                src="/graphs/edastra_vr_slide.html"
                title="VR Slide"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">VR Visual</h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <AutoFrame
                src="/graphs/edastra_vr_visual.html"
                title="VR Visual"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRExperience;
