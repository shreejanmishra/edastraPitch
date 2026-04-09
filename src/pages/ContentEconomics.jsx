import React from "react";
import AutoFrame from "../components/AutoFrame";

const ContentEconomics = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        {/* Slide image */}

        {/* Interactive Graphs */}
        <div className="flex flex-col w-full">
          <div className="w-full mb-16">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Content Economics Visual
            </h3>
            <div className="rounded-lg overflow-hidden border border-[#C8E6F7] shadow-xl w-full hover:shadow-2xl transition-shadow duration-300">
              <AutoFrame
                src="/graphs/edastra_content_economics_visual.html"
                title="Content Economics Visual"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          
          <hr className="border-t border-[#C8E6F7] mb-16 w-3/4 mx-auto" />
          
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Content Unit Economics (Detailed)
            </h3>
            <div className="rounded-lg overflow-hidden border border-[#C8E6F7] shadow-xl w-full hover:shadow-2xl transition-shadow duration-300">
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
