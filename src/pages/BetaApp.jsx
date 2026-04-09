import React from "react";

const BetaApp = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow w-full">
        <h2 className="text-3xl font-bold mb-8 text-[#103A5A]">Beta App</h2>

        <div className="mb-12">
          <img
            src="/images/beta_app.png"
            alt="Edastra Beta App Interface"
            className="w-full rounded-lg border border-[#C8E6F7] shadow-xl object-cover hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-[#C8E6F7]">
          <h3 className="text-2xl font-bold mb-4 text-[#103A5A]">
            Beta App is hosted here:{" "}
            <a
              href="https://edastrain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://edastrain.vercel.app/
            </a>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Beta App was made without any funding. The aim was to visualize the
            concept and take initial feedback from select potential users. A
            basic backend was made using Node.js, Express.js and MongoDB to
            collect and store feedback from users. This Beta App is deployed on
            the vercel free tier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetaApp;
