import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-89px)] max-h-[calc(100vh-89px)] pt-[65px] overflow-hidden">
      {/* Left panel: text content styled like subnav */}
      <div className="w-full md:w-auto flex-1 bg-dark-lighter border-b md:border-b-0 md:border-r border-primary/20 flex flex-col items-center justify-center p-6 md:p-8 text-center shrink-0 min-h-0 overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Welcome to Our Vision
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Transforming the future, one innovation at a time
        </p>
        <Link
          to="/our-approach"
          className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 transition-all"
        >
          Learn More
        </Link>
      </div>

      {/* Right panel: the image filling the "body" edge-to-edge tightly */}
      <div className="h-full min-w-0 bg-gradient-to-br from-[#F5F2DE] via-[#E8E5D0] to-[#F5F2DE] flex items-center justify-center m-0 p-0 overflow-hidden shrink-0">
        <img
          src="/images/page_1_img_1.png"
          alt="Cover Slide"
          className="w-auto h-full object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
