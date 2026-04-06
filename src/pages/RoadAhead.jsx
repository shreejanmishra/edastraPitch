import React from "react";
import { Link } from "react-router-dom";

const RoadAhead = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
        {/* Slide image */}
        <div className="mb-12">
          <img
            src="/images/page_16_img_1.png"
            alt="Our Road Ahead — ₹20 Cr Funding"
            className="max-w-full mx-auto rounded-lg shadow-2xl shadow-primary/10 border border-primary/20"
          />
        </div>

        {/* Interactive Graphs */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Fund Allocation & Burn
            </h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_fund_allocation_burn.html"
                title="Fund Allocation & Burn"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              18-Month Milestones
            </h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_18month_milestones.html"
                title="18-Month Milestones"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Pre-Seed Narrative
            </h3>
            <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <iframe
                src="/graphs/edastra_preseed_narrative.html"
                title="Pre-Seed Narrative"
                className="w-full h-[600px] bg-white"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 mt-8">
        <div className="flex justify-between">
          <Link
            to="/financials/pricing"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/financials/tech"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoadAhead;
