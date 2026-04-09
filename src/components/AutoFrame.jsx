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
    let observer;

    const measure = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && doc.body) {
          const bodyHeight = doc.body.scrollHeight;
          const docHeight = doc.documentElement.scrollHeight;
          const measured = Math.max(bodyHeight, docHeight);

          if (measured > 0) {
            const clamped = Math.min(Math.max(measured + 16, minHeight), maxHeight);
            setHeight(prev => {
              if (Math.abs(prev - clamped) > 2) return clamped;
              return prev;
            });
          }
        }
      } catch {
        // Cross-origin fallback
      }
    };

    const handleLoad = () => {
      measure();
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && doc.body) {
          // Monitor size changes continuously
          observer = new ResizeObserver(() => measure());
          observer.observe(doc.body);
          
          // Catch interactive layout changes via clicks
          doc.addEventListener('click', () => {
            setTimeout(measure, 50);
            setTimeout(measure, 350);
          });
        }
      } catch (e) {
        // Cross-origin or unobservable: fallback to interval
        intervalId = setInterval(measure, 1000);
      }
    };

    iframe.addEventListener('load', handleLoad);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      if (intervalId) clearInterval(intervalId);
      if (observer) observer.disconnect();
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
