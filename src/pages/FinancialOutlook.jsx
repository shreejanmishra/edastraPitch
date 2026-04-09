import React from 'react'
import AutoFrame from '../components/AutoFrame'

const FinancialOutlook = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        {/* Interactive Graph */}
        <div className="w-full mb-16">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Financial Model Dashboard
          </h3>
          <div className="rounded-lg overflow-hidden border border-[#C8E6F7] shadow-xl w-full hover:shadow-2xl transition-shadow duration-300">
            <AutoFrame
                src="/graphs/edastra_financial_model_dashboard.html"
                title="Financial Model Dashboard"
                className="bg-white"
                frameBorder="0"
              />
          </div>
        </div>
        
        <hr className="border-t border-[#C8E6F7] mb-16 w-3/4 mx-auto" />
        
        {/* Supporting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Card 1: Financial Outlook & Scale */}
          <div className="bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl group">
            <div className="bg-gradient-to-r from-primary to-[#2A7FB5] px-6 py-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h4 className="text-xl font-semibold text-white tracking-wide">Financial Outlook & Scale</h4>
            </div>
            <div className="p-6 md:p-8">
              <ul className="space-y-4 text-primary/80">
                <li className="flex items-start">
                  <span className="text-[#EF9F27] mr-3 font-bold mt-0.5 text-lg">•</span>
                  <span><strong className="text-primary font-semibold text-lg">₹2,445 Cr</strong> projected revenue by 2031</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF9F27] mr-3 font-bold mt-0.5 text-lg">•</span>
                  <span>Growth driven by scalable distribution and strong user expansion (~16.5M users)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF9F27] mr-3 font-bold mt-0.5 text-lg">•</span>
                  <span>Profitability expected from <strong className="text-primary font-medium">2028 onwards</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF9F27] mr-3 font-bold mt-0.5 text-lg">•</span>
                  <span>Strong long-term margin profile <strong className="text-primary font-medium">(~59.9% by 2031)</strong></span>
                </li>
                <li className="pt-2 border-t border-primary/5 mt-5">
                  <span className="font-semibold text-primary block mb-4 mt-2">Key profitability drivers:</span>
                  <ul className="space-y-3 ml-2 border-l-2 border-[#7BC4E8]/30 pl-4 text-[0.95rem]">
                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#7BC4E8] mr-3"></div>Ad-led monetisation</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#7BC4E8] mr-3"></div>Efficient infrastructure</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#7BC4E8] mr-3"></div>Low marginal cost scaling</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#7BC4E8] mr-3"></div>Fast CAC payback efficiency</li>
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#7BC4E8] mr-3 mt-2 flex-shrink-0"></div><span className="leading-snug">Burn multiple improves to <strong className="text-primary font-medium">0.5x</strong> by 2031, indicating high capital efficiency</span></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Growth Drivers */}
          <div className="bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl group">
            <div className="bg-gradient-to-r from-primary to-[#1D8A50] px-6 py-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <h4 className="text-xl font-semibold text-white tracking-wide">Growth Drivers</h4>
            </div>
            <div className="p-6 md:p-8">
              <ul className="space-y-4 text-primary/80">
                <li className="flex items-start">
                  <span className="text-[#1D8A50] mr-3 font-bold mt-0.5 text-lg">•</span>
                  <span>Rapid user growth → <strong className="text-primary font-medium">~15M users</strong> by 2031</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D8A50] mr-3 font-bold mt-0.5 text-lg">•</span>
                  <span>Expansion through school partnerships + B2C channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D8A50] mr-3 font-bold mt-0.5 text-lg">•</span>
                  <span>Strong revenue acceleration post scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1D8A50] mr-3 font-bold mt-0.5 text-lg">•</span>
                  <span>Post-PMF scaling from <strong className="text-primary font-medium">2028</strong> drives exponential growth</span>
                </li>
                <li className="pt-2 border-t border-primary/5 mt-5">
                  <div className="mb-4 mt-2">
                    <span className="font-semibold text-primary block mb-3">Multi-stream monetisation:</span>
                    <div className="flex gap-2 flex-wrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#1D8A50]/10 text-[#1D8A50] border border-[#1D8A50]/20">Subscriptions</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#1D8A50]/10 text-[#1D8A50] border border-[#1D8A50]/20">Ads</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#1D8A50]/10 text-[#1D8A50] border border-[#1D8A50]/20">Institutional</span>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-2 border-l-2 border-[#1D8A50]/30 pl-4 text-[0.95rem]">
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#1D8A50] opacity-80 mr-3 mt-2 flex-shrink-0"></div><span className="leading-snug">ARPU expansion over time (pricing power improves)</span></li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#1D8A50] opacity-80 mr-3"></div>Increasing blended ARPU with maturity</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#1D8A50] opacity-80 mr-3"></div>Tiered pricing strategy</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#1D8A50] opacity-80 mr-3"></div>VR integration as an upside lever</li>
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#1D8A50] opacity-80 mr-3 mt-2 flex-shrink-0"></div><span className="leading-snug">Institutional (school) contracts as a stable revenue base</span></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOutlook;
