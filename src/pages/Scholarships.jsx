import React from "react";

const Scholarships = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        <h2 className="text-3xl font-bold mb-8 text-[#103A5A]">Scholarships</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Visuals (Sticky) */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <img
              src="/images/scholarship.png"
              alt="Scholarship"
              className="w-full rounded-lg border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
            <img
              src="/images/scholarship_test.png"
              alt="Scholarship Test"
              className="w-full rounded-lg border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          {/* Right Column: Features Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/1st_icon.png"
                  alt="First"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  Edastra is not merely a platform, it is designed to become the
                  world's first socially impactful edutainment ecosystem.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/mission_icon.png"
                  alt="Mission"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  Our mission is to democratise high-quality education and
                  family-safe entertainment by building a culturally relevant,
                  impact-driven edutainment eco-system that empowers young
                  learners to thrive.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/dollar_icon.png"
                  alt="Dollar"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  Looped-in Scholarship application within the app that retains
                  user engagement. 0.08% of EDASTRA'S annual earnings are
                  diverted to scholarships.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/power_icon.png"
                  alt="Power"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  We intentionally move away from deficit-based storytelling and
                  instead use an empowerment-led design language that reflects
                  ambition, self-worth, and upward mobility.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/scholarship_icon.png"
                  alt="Scholarship"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  All grades covered to maximize opportunities. Easy-to-apply
                  scholarships for qualified students:
                  <p>1. Eligibility</p>
                  <p>2. Income Limit</p>
                  <p>3. Category (standard/grade they belong to)</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
