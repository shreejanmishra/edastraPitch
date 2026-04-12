import React from 'react'

const TenthBoard = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        <h2 className="text-3xl font-bold mb-8 text-[#103A5A]">School & High School Product Design</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Visuals (Sticky) */}
          <div className="lg:sticky lg:top-24">
            <img
              src="/images/school_2.webp"
              alt="10th Board - Teenager Content"
              className="w-full rounded-lg border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          {/* Right Column: Features Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img src="/images/book_icon.webp" alt="Book" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-[#103A5A] mb-2 leading-tight">
                  Unified Academic Ecosystem
                </h4>
                <p className="text-lg text-[#103A5A]">
                  One platform for ICSE, IB, SSC & CBSE curriculum
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img src="/images/brain_icon.webp" alt="Brain" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-[#103A5A] mb-2 leading-tight">
                  Reinforced Learning Architecture
                </h4>
                <p className="text-lg text-[#103A5A]">
                  Every module ends with structured assessments for better retention
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img src="/images/career_icon.webp" alt="Career" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-[#103A5A] mb-2 leading-tight">
                  Built-in Career Guidance
                </h4>
                <p className="text-lg text-[#103A5A]">
                  On-demand specialist consultations inside the app
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img src="/images/family_icon.webp" alt="Family" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-[#103A5A] mb-2 leading-tight">
                  Social Academic Layer
                </h4>
                <p className="text-lg text-[#103A5A]">
                  Native peer groups and parent communities for collaborative learning
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img src="/images/AI_icon.webp" alt="AI" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-[#103A5A] mb-2 leading-tight">
                  Psychology + AI-Optimized Design
                </h4>
                <p className="text-lg text-[#103A5A]">
                  UI and learning flows designed for maximum focus and retention
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img src="/images/subscription_icon.webp" alt="Subscription" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-[#103A5A] mb-2 leading-tight">
                  Single Subscription Model
                </h4>
                <p className="text-lg text-[#103A5A]">
                  No app fragmentation, no complexity — one simple subscription
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default TenthBoard
