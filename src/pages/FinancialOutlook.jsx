import React from 'react'
import AutoFrame from '../components/AutoFrame'

const FinancialOutlook = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow flex flex-col justify-center w-full py-8">
        {/* Interactive Graph */}
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4 text-primary text-center">
            Financial Model Dashboard
          </h3>
          <div className="rounded-lg overflow-hidden border border-primary/20 shadow-xl w-full max-w-6xl mx-auto">
            <AutoFrame
                src="/graphs/edastra_financial_model_dashboard.html"
                title="Financial Model Dashboard"
                className="bg-white"
                frameBorder="0"
              />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FinancialOutlook;
