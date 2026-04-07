import React from "react";
import AutoFrame from "../components/AutoFrame";

const TechArchitecture = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow">
        {/* Slide image */}
        <div className="mb-12">
          <img
            src="/images/page_17_img_1.png"
            alt="Tech Architecture"
            className="max-w-full mx-auto rounded-lg border border-primary/20 shadow-xl"
          />
        </div>

        {/* Interactive Graphs */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-primary">
              Core Architecture (Interactive)
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Use the tabs to explore: Full Stack → Client Layer → Platform
              Services → <strong>Infrastructure (Global Expansion)</strong>
            </p>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <AutoFrame
                src="/graphs/edastra_tech_arch_fixed.html"
                title="Core Architecture Interactive"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          {/* <div>
            <h3 className="text-2xl font-bold mb-2 text-primary">Detailed Architecture</h3>
            <p className="text-sm text-gray-400 mb-4">Detailed breakdown with layer labels and expanded service descriptions</p>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <AutoFrame
                src="/graphs/edastra_tech_architecture.html"
                title="Detailed Architecture"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div> */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Tech Cost Estimate
            </h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
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
