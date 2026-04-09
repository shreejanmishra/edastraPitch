import React from 'react'
import AutoFrame from '../components/AutoFrame'

const RoadAhead = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow flex flex-col justify-center w-full py-8">
        {/* Interactive Graphs */}
        <div className="flex flex-col w-full">
          <div className="w-full mb-16">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Fund Allocation & Burn
            </h3>
            <div className="rounded-lg overflow-hidden border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <AutoFrame
                src="/graphs/edastra_fund_allocation_burn.html"
                title="Fund Allocation & Burn"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          
          <hr className="border-t border-[#C8E6F7] mb-16 w-3/4 mx-auto" />
          
          <div className="w-full mb-16">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              18-Month Milestones
            </h3>
            <div className="rounded-lg overflow-hidden border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <AutoFrame
                src="/graphs/edastra_18month_milestones.html"
                title="18-Month Milestones"
                className="bg-white"
                frameBorder="0"
              />
            </div>
          </div>
          
          <hr className="border-t border-[#C8E6F7] mb-16 w-3/4 mx-auto" />
          
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Pre-Seed Narrative
            </h3>
            <div className="rounded-lg overflow-hidden border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <AutoFrame
                src="/graphs/edastra_preseed_narrative.html"
                title="Pre-Seed Narrative"
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

export default RoadAhead;
