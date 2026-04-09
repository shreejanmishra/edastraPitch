import React from "react";
import AutoFrame from "../components/AutoFrame";

const InstitutionalPricing = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        {/* Interactive Graph */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Institutional Pricing Engine
          </h3>
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl">
            <AutoFrame
              src="/graphs/institutional_pricing_engine.html"
              title="Institutional Pricing Engine"
              className="bg-white"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalPricing;
