import React, { useRef, useState, useEffect } from 'react';

/**
 * AutoFrame - An iframe wrapper that dynamically resizes to match its content height.
 * Eliminates internal scrollbars and blank space by polling the iframe's content height.
 * 
 * For same-origin iframes only (which is the case for /graphs/*.html files).
 */
const AutoFrame = ({ src, title, className = '', style = {}, frameBorder = '0', minHeight = 200, maxHeight = 6000 }) => {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(minHeight);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let intervalId;
    let observer;
    let mutationObserver;
    let measureTimeout;

    const measure = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && doc.body) {
          const bodyScroll = doc.body.scrollHeight;
          const docScroll = doc.documentElement.scrollHeight;

          // Use the tighter of scrollHeight and bounding rect
          let measured = Math.max(bodyScroll, docScroll);

          // getBoundingClientRect gives the actual rendered box size - more accurate
          const rect = doc.body.getBoundingClientRect();
          const rectHeight = Math.ceil(rect.height);
          if (rectHeight > 0 && rectHeight < measured) {
            measured = rectHeight;
          }

          if (measured > 0) {
            const clamped = Math.min(Math.max(measured, minHeight), maxHeight);
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

    const debouncedMeasure = () => {
      clearTimeout(measureTimeout);
      measureTimeout = setTimeout(measure, 80);
    };

    const handleLoad = () => {
      // Multiple delayed measurements to catch Chart.js renders and late layout
      setTimeout(measure, 100);
      setTimeout(measure, 400);
      setTimeout(measure, 1000);
      setTimeout(measure, 2000);

      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && doc.body) {
          // ResizeObserver for body size changes
          observer = new ResizeObserver(debouncedMeasure);
          observer.observe(doc.body);
          
          // MutationObserver catches tab switches (display:none → display:block),
          // new chart canvases being added, etc.
          mutationObserver = new MutationObserver(debouncedMeasure);
          mutationObserver.observe(doc.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style']
          });

          // Click handler for interactive tab switches
          doc.addEventListener('click', () => {
            setTimeout(measure, 100);
            setTimeout(measure, 400);
            setTimeout(measure, 1000);
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
      clearTimeout(measureTimeout);
      if (intervalId) clearInterval(intervalId);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
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
