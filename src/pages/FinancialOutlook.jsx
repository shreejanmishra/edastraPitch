import React from "react";
import { Link } from "react-router-dom";

const FinancialOutlook = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow flex flex-col justify-center w-full py-8">
        {/* Interactive Graph */}
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4 text-primary text-center">
            Financial Model Dashboard
          </h3>
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl w-full max-w-6xl mx-auto">
            <iframe
              src="/graphs/edastra_financial_model_dashboard.html"
              title="Financial Model Dashboard"
              className="w-full min-h-[650px] bg-white"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 mt-8">
        <div className="flex justify-between">
          <Link
            to="/product/vr"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/financials/content-economics"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinancialOutlook;
