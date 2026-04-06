import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Transforming the future, one innovation at a time";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
      }
    }, 40); // 40ms per character for a fast futuristic feel

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-89px)] max-h-[calc(100vh-89px)] pt-[65px] overflow-hidden">
      {/* Left panel: text content styled like subnav */}
      <div className="w-full md:w-auto flex-1 bg-dark-lighter border-b md:border-b-0 md:border-r border-primary/20 flex flex-col items-center justify-center p-6 md:p-8 text-center shrink-0 min-h-0 overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Welcome to Our Vision
        </h1>
        <div className="min-h-[4rem] md:min-h-[2rem] flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl text-gray-300 font-mono tracking-wide">
            {displayText}
            <span className="animate-pulse text-primary font-bold drop-shadow-[0_0_8px_rgba(229,195,2,0.8)]">|</span>
          </p>
        </div>
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
