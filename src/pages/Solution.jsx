import React from "react";

const Solution = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        {/* Solution Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-[#103A5A]">
            Solution Features
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="sticky top-24">
              <img
                src="/images/page_3_img_2.png"
                alt="Solution Features — Scholarship, 4K Library, VR, OTT, Storytelling"
                className="w-full rounded-lg border border-[#C8E6F7] shadow-xl"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/scholarship_icon.png" alt="Scholarship" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-[#103A5A] mb-2">
                    Integrated Scholarship Engine
                  </h4>
                  <p className="text-gray-700">
                    Subscription and ad revenue funds engagement-linked
                    scholarships by NGOs & CSR partners.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/4k_icon.png" alt="4K" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-[#103A5A] mb-2">
                    4K Edutainment Library
                  </h4>
                  <p className="text-gray-700">
                    4,000+ cinematic educational and narrative-led videos
                    (Pre-School to Grade 10), built 4K and future VR integration.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/vr_icon.png" alt="VR" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-[#103A5A] mb-2">
                    VR-Powered Learning
                  </h4>
                  <p className="text-gray-700">
                    Virtual classrooms, immersive science labs, historical
                    reconstructions and career simulations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/family_icon.png" alt="Family" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-[#103A5A] mb-2">
                    Family-Safe, Purpose-First OTT
                  </h4>
                  <p className="text-gray-700">
                    A zero-toxic, parent-approved ecosystem combining learning and
                    trust on unified platform.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/book_icon.png" alt="Storytelling" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-[#103A5A] mb-2">
                    Interactive Storytelling
                  </h4>
                  <p className="text-gray-700">
                    Alternative endings and decision-based narratives that promote
                    learning through participation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-[#C8E6F7] mb-16 w-3/4 mx-auto" />

        {/* The Edastra Solution */}
        <div>
          <div className="text-left mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#103A5A]">
              The Edastra Solution
            </h3>
            <p className="text-lg text-left text-gray-700  mx-auto">
              Dramatically increasing learning outcomes and career clarity
              without adding complexity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: The Graph */}
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-white to-[#FAFCFF] rounded-xl border border-[#C8E6F7] shadow-lg p-4 md:p-8 flex flex-col justify-end">
              <svg
                viewBox="0 0 450 350"
                className="w-full h-full overflow-visible"
              >
                {/* Grid lines */}
                <g
                  stroke="#C8E6F7"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.6"
                >
                  <line x1="50" y1="50" x2="400" y2="50" />
                  <line x1="50" y1="110" x2="400" y2="110" />
                  <line x1="50" y1="170" x2="400" y2="170" />
                  <line x1="50" y1="230" x2="400" y2="230" />

                  <line x1="120" y1="20" x2="120" y2="290" />
                  <line x1="190" y1="20" x2="190" y2="290" />
                  <line x1="260" y1="20" x2="260" y2="290" />
                  <line x1="330" y1="20" x2="330" y2="290" />
                </g>

                {/* Axes */}
                <g stroke="#103A5A" strokeWidth="3">
                  {/* Y-axis */}
                  <line
                    x1="50"
                    y1="290"
                    x2="50"
                    y2="20"
                    markerEnd="url(#arrow-axis)"
                  />
                  {/* X-axis */}
                  <line
                    x1="50"
                    y1="290"
                    x2="420"
                    y2="290"
                    markerEnd="url(#arrow-axis)"
                  />
                </g>

                {/* Labels Axes */}
                <text
                  x="20"
                  y="155"
                  transform="rotate(-90 20 155)"
                  fill="#103A5A"
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  Performance Growth
                </text>
                <text
                  x="235"
                  y="330"
                  fill="#103A5A"
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  User Complexity
                </text>

                {/* Black User Friction Arrow */}
                <g>
                  <line
                    x1="50"
                    y1="290"
                    x2="390"
                    y2="170"
                    stroke="#103A5A"
                    strokeWidth="5"
                    markerEnd="url(#arrow-black)"
                  />
                  <text
                    x="390"
                    y="210"
                    fill="#103A5A"
                    fontSize="14"
                    fontWeight="bold"
                    textAnchor="end"
                  >
                    <tspan x="450" dy="0">
                      User Friction &
                    </tspan>
                    <tspan x="450" dy="18">
                      Fragmentation
                    </tspan>
                  </text>
                </g>

                {/* Red Learning Outcomes Arrow (Dashed) */}
                <g>
                  <line
                    x1="50"
                    y1="290"
                    x2="330"
                    y2="40"
                    stroke="#EF4444"
                    strokeWidth="7"
                    strokeDasharray="12 12"
                    markerEnd="url(#arrow-red)"
                  />
                  <text
                    x="310"
                    y="70"
                    fill="#103A5A"
                    fontSize="15"
                    fontWeight="bold"
                    textAnchor="end"
                  >
                    <tspan x="250" dy="0">
                      Learning Outcomes
                    </tspan>
                    <tspan x="250" dy="18">
                      & Career Clarity
                    </tspan>
                  </text>
                </g>

                <defs>
                  <marker
                    id="arrow-axis"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#103A5A" />
                  </marker>
                  <marker
                    id="arrow-black"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#103A5A" />
                  </marker>
                  <marker
                    id="arrow-red"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                  </marker>
                </defs>
              </svg>
            </div>

            {/* Right: The Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-[#C8E6F7] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/book_icon.png" alt="Book" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#103A5A] mb-2 leading-tight">
                    Unified Academic Ecosystem
                  </h4>
                  <p className="text-sm text-gray-600">
                    ICSE / IB / SSC / CBSE under one platform.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-[#C8E6F7] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/brain_icon.png" alt="Brain" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#103A5A] mb-2 leading-tight">
                    Reinforced Learning Architecture
                  </h4>
                  <p className="text-sm text-gray-600">
                    Every module concludes with structured assessment.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-[#C8E6F7] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/career_icon.png" alt="Career" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#103A5A] mb-2 leading-tight">
                    Built-in Career Guidance
                  </h4>
                  <p className="text-sm text-gray-600">
                    On-demand specialist consultations within the app.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-[#C8E6F7] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/family_icon.png" alt="Family" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#103A5A] mb-2 leading-tight">
                    Social Academic Layer
                  </h4>
                  <p className="text-sm text-gray-600">
                    Peer groups & parent communities embedded natively.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-[#C8E6F7] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/AI_icon.png" alt="AI" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#103A5A] mb-2 leading-tight">
                    Psychology + AI-Validated Design
                  </h4>
                  <p className="text-sm text-gray-600">
                    Optimized UI and learning flows for focus & retention.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-[#C8E6F7] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/subscription_icon.png" alt="Subscription" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#103A5A] mb-2 leading-tight">
                    Single Subscription Model
                  </h4>
                  <p className="text-sm text-gray-600">
                    No fragmentation. No multi-app dependency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
