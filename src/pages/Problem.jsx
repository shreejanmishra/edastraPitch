import React from "react";

const Problem = () => {
  const problems = [
    "Quality education remains inaccessible for millions of children in Tier-2/3 India.",
    "Premium EdTech platforms are boring, cost-prohibitive and cognitively exhausting.",
    "Existing OTT platforms prioritise passive consumption, not learning.",
    "Parents lack safe, value-aligned entertainment choices.",
    "Students increasingly disengage from static formats."
  ];

  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col w-full border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        <h2 className="text-3xl font-bold mb-8 text-[#103A5A]">
          The Problem We Wish to Solve
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="flex items-center justify-center">
            <img
              src="/images/page_2_img_1.webp"
              alt="Problem Statement"
              className="w-full rounded-lg border border-primary/20 shadow-xl"
            />
          </div>

          {/* Right: Problem Cards */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md border border-[#C8E6F7] hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 text-center mt-12 font-medium">
          INSIGHT: Over 80% of digital consumption is video-based, yet less than
          30% of rural learners have access to high-quality educational content.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Problem);
