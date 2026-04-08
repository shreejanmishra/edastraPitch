import React from 'react'

const Ecosystem = () => {
  const features = [
    {
      title: "AI-Driven Story Learning",
      content: "Academic concepts delivered through cinematic, AI-generated storytelling instead of passive textbook learning."
    },
    {
      title: "Scholarship-Integrated Learning Ecosystem",
      content: "Students discover and apply for scholarships directly within the platform, creating a powerful engagement loop."
    },
    {
      title: "VR & Immersive Education Modules",
      content: "Virtual learning experiences that make complex subjects interactive, visual, and memorable."
    },
    {
      title: "Curriculum-Aligned Video Learning",
      content: "Syllabus-centric content designed to complement or replace traditional tutoring for boards like CBSE."
    },
    {
      title: "Progress Analytics & Interactive Testing",
      content: "In-app assessments and performance dashboards help students track learning outcomes in real time."
    }
  ];

  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="flex items-center justify-center">
            <img
              src="/images/page_4_img_1.png"
              alt="Edastra Ecosystem"
              className="w-full rounded-lg border border-primary/20 shadow-xl"
            />
          </div>

          {/* Right: Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md border border-[#C8E6F7] hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-[#103A5A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
