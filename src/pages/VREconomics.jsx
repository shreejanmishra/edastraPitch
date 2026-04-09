import React from "react";
import AutoFrame from "../components/AutoFrame";

const VREconomics = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col w-full border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        {/* Slide images */}

        {/* Interactive Graph */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">
            VR Economics Analysis
          </h3>
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
  );
};

export default VREconomics;
