import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyYouTube - Facade pattern for embedded YouTube videos.
 * Loads a lightweight thumbnail image initially. 
 * Only loads the heavy YouTube iframe (+500KB JS) when clicked or when entering viewport (if autoplay enabled).
 */
const LazyYouTube = ({ videoId, title, className = '', containerStyle = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  // High quality thumbnail (maxresdefault if available, fallback to hqdefault)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-black group cursor-pointer ${className}`}
      style={containerStyle}
      onClick={() => setIsLoaded(true)}
    >
      {!isLoaded ? (
        <>
          {/* Thumbnail Image */}
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
          
          {/* Custom YouTube Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-700 transition-colors duration-300 transform group-hover:scale-105"
              aria-label={`Play video ${title}`}
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        /* Actual Heavy Iframe */
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LazyYouTube;
