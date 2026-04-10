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
      <div className="section-container flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Video */}
          <div className="sticky top-24">
            <div
              className="relative w-full overflow-hidden rounded-lg border border-[#C8E6F7] shadow-xl"
              style={{ paddingTop: "177.78%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/wFHR2_ag1uk"
                title="Edastra Ecosystem"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md border border-[#C8E6F7] hover:shadow-lg transition-shadow flex gap-4"
              >
                {(feature.title.includes("AI") || feature.title.toUpperCase().includes("VR") || feature.title.toLowerCase().includes("scholarship") || feature.title.toUpperCase().includes("4K") || feature.title.toLowerCase().includes("curriculum") || feature.title.toLowerCase().includes("analytics")) && (
                  <div className="flex-shrink-0">
                    <img 
                      src={
                        feature.title.toLowerCase().includes("analytics")
                          ? "/images/test_icon.png"
                          : feature.title.toLowerCase().includes("curriculum")
                          ? "/images/book_icon.png"
                          : feature.title.toUpperCase().includes("4K")
                          ? "/images/4k_icon.png"
                          : feature.title.toLowerCase().includes("scholarship") 
                          ? "/images/scholarship_icon.png" 
                          : feature.title.toUpperCase().includes("VR") 
                          ? "/images/vr_icon.png" 
                          : "/images/AI_icon.png"
                      } 
                      alt={
                        feature.title.toLowerCase().includes("analytics")
                          ? "Testing"
                          : feature.title.toLowerCase().includes("curriculum")
                          ? "Book"
                          : feature.title.toUpperCase().includes("4K")
                          ? "4K"
                          : feature.title.toLowerCase().includes("scholarship") 
                          ? "Scholarship" 
                          : feature.title.toUpperCase().includes("VR") 
                          ? "VR" 
                          : "AI"
                      } 
                      className="w-12 h-12" 
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#103A5A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
