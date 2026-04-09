import React from "react";
import AutoFrame from "../components/AutoFrame";

const ContentEconomics = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col w-full border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        {/* Slide image */}

        {/* Interactive Graphs */}
        <div className="space-y-8 w-full">
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Content Economics Visual
            </h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl w-full">
              <AutoFrame
                src="/graphs/edastra_content_economics_visual.html"
                title="Content Economics Visual"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          {/* <div className="w-full">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Content Unit Economics
            </h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl w-full">
              <AutoFrame
                src="/graphs/edastra_content_unit_economics.html"
                title="Content Unit Economics"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div> */}
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Content Unit Economics (Detailed)
            </h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl w-full">
              <AutoFrame
                src="/graphs/edastra_content_unit_economics-2.html"
                title="Content Unit Economics Detailed"
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

export default ContentEconomics;
