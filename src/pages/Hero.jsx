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
    <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100svh-65px)] lg:min-h-[calc(100vh-89px)] lg:max-h-[calc(100vh-89px)] pt-[65px] lg:overflow-hidden">
      {/* Left panel: text content styled like subnav */}
      <div className="w-full md:w-auto flex-1 bg-[#EAF4FB] border-b md:border-b-0 md:border-r border-primary/20 flex flex-col items-center justify-center p-6 md:p-8 text-center shrink-0 min-h-0 overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Welcome to Our Vision
        </h1>
        <div className="min-h-[4rem] md:min-h-[2rem] flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl text-gray-700 font-mono tracking-wide">
            {displayText}
            <span className="animate-pulse text-primary font-bold drop-shadow-[0_0_8px_#103A5A]">
              |
            </span>
          </p>
        </div>
        <Link
          to="/our-approach"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 transition-all"
        >
          Learn More
        </Link>
      </div>

      {/* Right panel: the image filling the "body" edge-to-edge tightly */}
    </div>
  );
};

export default Hero;
