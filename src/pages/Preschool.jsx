import React from "react";

const Preschool = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        <h2 className="text-3xl font-bold mb-8 text-[#103A5A]">
          Preschool Product Design
        </h2>

        {/* Video Section */}
        <div className="mb-16">
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
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div>
            <img
              src="/images/page_5_img_1.png"
              alt="Preschooler's Corner - Content Snippet"
              className="w-full rounded-lg border border-[#C8E6F7] shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          {/* Right: Key Features Cards */}
          <div className="flex flex-col space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C8E6F7]">
              <p className="text-lg text-[#103A5A]">
                Culturally relatable to Indian preschool households with
                familiar accents, dialects, environments, and visual cues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C8E6F7]">
              <p className="text-lg text-[#103A5A]">
                Character design reflects diverse Indian skin tones to foster
                identity recognition and emotional connection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C8E6F7]">
              <p className="text-lg text-[#103A5A]">
                Early childhood psychology principles to minimise
                overstimulation and support sustained attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preschool;
