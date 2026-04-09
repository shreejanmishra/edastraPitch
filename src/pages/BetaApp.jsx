import React from "react";

const BetaApp = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        <h2 className="text-3xl font-bold mb-8 text-[#103A5A]">
          Prototype App
        </h2>
        <h3 className="text-2xl font-bold mb-4 text-[#103A5A]">
          <a
            href="https://edastrain.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://edastrain.vercel.app/
          </a>
        </h3>

        <div className="mb-12">
          <img
            src="/images/beta_app.png"
            alt="Edastra Prototype App Interface"
            className="w-full rounded-lg border border-[#C8E6F7] shadow-xl object-cover hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-[#C8E6F7] mb-4 flex gap-4">
          <div className="flex-shrink-0">
            <img src="/images/prototype_icon.png" alt="Prototype" className="w-12 h-12" />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">
              Prototype App was made without any funding. The aim was to visualize
              the concept and take initial feedback from future users.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-[#C8E6F7] mb-4 flex gap-4">
          <div className="flex-shrink-0">
            <img src="/images/under_construction_icon.png" alt="Under Construction" className="w-12 h-12" />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">
              It only represents approximately 10% of the envisioned final
              product.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-[#C8E6F7] mb-4 flex gap-4">
          <div className="flex-shrink-0">
            <img src="/images/spotify_icon.svg" alt="Spotify" className="w-12 h-12" />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">
              The complete solution will include a comprehensive feature set like
              Spotify/Youtube Music integration, customizable themes, AI generated
              unique quizzes, notes, etc. and a highly engaging, interactive
              interface.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-[#C8E6F7] flex gap-4">
          <div className="flex-shrink-0">
            <img src="/images/android_icon.png" alt="Android" className="w-12 h-12" />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">
              The app will be available across Android, iOS, and PC platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaApp;
