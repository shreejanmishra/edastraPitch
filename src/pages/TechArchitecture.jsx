import React from "react";
import AutoFrame from "../components/AutoFrame";

const TechArchitecture = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        {/* Interactive Graphs */}
        <div className="flex flex-col">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-2 text-primary">
              Core Architecture (Interactive)
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Use the tabs to explore: Full Stack → Client Layer → Platform
              Services → <strong className="text-primary/80">Infrastructure (Global Expansion)</strong>
            </p>
            <div className="rounded-lg overflow-hidden border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <AutoFrame
                src="/graphs/edastra_tech_arch_fixed.html"
                title="Core Architecture Interactive"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          
          <hr className="border-t border-[#C8E6F7] mb-16 w-3/4 mx-auto" />
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Tech Cost Estimate
            </h3>
            <div className="rounded-lg overflow-hidden border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <AutoFrame
                src="/graphs/edastra_tech_cost_estimate.html"
                title="Tech Cost Estimate"
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

export default TechArchitecture;
