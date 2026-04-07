import React, { useRef, useState, useEffect } from 'react';

/**
 * AutoFrame - An iframe wrapper that dynamically resizes to match its content height.
 * Eliminates internal scrollbars and blank space by polling the iframe's content height.
 * 
 * For same-origin iframes only (which is the case for /graphs/*.html files).
 */
const AutoFrame = ({ src, title, className = '', style = {}, frameBorder = '0', minHeight = 400, maxHeight = 6000 }) => {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(minHeight);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let rafId;
    let intervalId;

    const measure = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && doc.body) {
          // Use scrollHeight as the most reliable measurement of total content height
          const bodyHeight = doc.body.scrollHeight;
          const docHeight = doc.documentElement.scrollHeight;
          const measured = Math.max(bodyHeight, docHeight);

          if (measured > 0) {
            // Clamp between min and max, add small buffer to prevent edge-case scrollbars
            const clamped = Math.min(Math.max(measured + 16, minHeight), maxHeight);
            setHeight(prev => {
              // Only update if the difference is meaningful (>2px) to avoid infinite re-renders
              if (Math.abs(prev - clamped) > 2) return clamped;
              return prev;
            });
          }
        }
      } catch {
        // Cross-origin: fall back to fixed height, no-op
      }
    };

    const handleLoad = () => {
      // Measure immediately on load
      measure();
      // Then poll periodically to catch dynamic content changes (Chart.js rendering, tab switches, etc.)
      intervalId = setInterval(measure, 500);
      // Stop polling after 10 seconds to save resources
      setTimeout(() => {
        if (intervalId) clearInterval(intervalId);
        // Do one final measure
        measure();
      }, 10000);
    };

    iframe.addEventListener('load', handleLoad);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      if (intervalId) clearInterval(intervalId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [src, minHeight, maxHeight]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      className={className}
      style={{ 
        width: '100%', 
        height: `${height}px`, 
        border: 'none',
        overflow: 'hidden',
        ...style 
      }}
      frameBorder={frameBorder}
      scrolling="no"
    />
  );
};

export default AutoFrame;
