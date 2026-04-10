import React from "react";

const Preschool = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        <h2 className="text-3xl font-bold mb-8 text-[#103A5A]">
          Content Design
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Visuals (Sticky) */}
          <div className="lg:sticky lg:top-24 flex flex-col space-y-6">
            <div
              className="relative w-full overflow-hidden rounded-lg border border-[#C8E6F7] shadow-xl"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/1rV9uoSKBSI"
                title="Product Demonstration"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div
              className="relative w-full overflow-hidden rounded-lg border border-[#C8E6F7] shadow-xl"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/fnvynAIQe9k"
                title="Preschool Content Example"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Column: Features Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/india_icon.png"
                  alt="India"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  Culturally relatable to Indian preschool households with
                  familiar accents, dialects, environments, and visual cues.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/indian_icon.png"
                  alt="India"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  Character design reflects diverse Indian skin tones to foster
                  identity recognition and emotional connection. We are no
                  longer forced to use the fair skinned characters that were
                  prevalent in the Indian market.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/child_icon.png"
                  alt="Child"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  Early childhood psychology principles to minimise
                  overstimulation and support sustained attention.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/moviescript_icon.png"
                  alt="Movie Script"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  Script was written by our team and video was generated using
                  free-tier AI. A dedicated script writer can come with a much
                  more engaging script and use of AI can make the video
                  production much more efficient.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-[#C8E6F7] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/cdn_icon.png"
                  alt="CDN"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#103A5A]">
                  Using Youtube as a temporary CDN for video streaming since it
                  is free and reliable, but not scalable for large scale
                  operations. It forces the free users to watch ads before the
                  content and leaves us at the mercy of YouTube's terms and
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preschool;
