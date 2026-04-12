import React, { useRef, useState, useEffect } from 'react';

/**
 * AutoFrame - An iframe wrapper that dynamically resizes to match its content height.
 * Eliminates internal scrollbars and blank space by polling the iframe's content height.
 * Lazy loads the iframe when it enters the viewport.
 * 
 * For same-origin iframes only (which is the case for /graphs/*.html files).
 */

const AutoFrame = ({ src, title, className = '', style = {}, frameBorder = '0', minHeight = 200, maxHeight = 6000 }) => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(minHeight);
  const [shouldLoad, setShouldLoad] = useState(false);

  // IntersectionObserver to lazy load the iframe
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect(); // Only need to trigger once
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it comes into view
    );
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    
    const iframe = iframeRef.current;
    if (!iframe) return;

    let intervalId;
    let observer;
    let mutationObserver;

    const measure = () => {
      // Use requestAnimationFrame to avoid layout thrashing
      requestAnimationFrame(() => {
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
      });
    };

    let measureTimeout;
    const debouncedMeasure = () => {
      clearTimeout(measureTimeout);
      measureTimeout = setTimeout(measure, 150); // Increased debounce to 150ms
    };

    const injectMobileCSS = (doc) => {
      try {
        if (!doc || !doc.head) return;
        // Only inject once
        if (doc.getElementById('autoframe-mobile-css')) return;
        
        // Use external stylesheet instead of inline string
        const link = doc.createElement('link');
        link.id = 'autoframe-mobile-css';
        link.rel = 'stylesheet';
        link.href = '/graphs/mobile-responsive.css';
        doc.head.appendChild(link);

        // Also ensure viewport meta is present
        if (!doc.querySelector('meta[name="viewport"]')) {
          const meta = doc.createElement('meta');
          meta.name = 'viewport';
          meta.content = 'width=device-width, initial-scale=1.0';
          doc.head.appendChild(meta);
        }
      } catch {
        // Cross-origin, can't inject
      }
    };

    const handleLoad = () => {
      // Inject mobile responsive CSS into the iframe
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          injectMobileCSS(doc);
        }
      } catch {
        // cross-origin
      }

      // Reduced timeouts (2 instead of 4)
      setTimeout(measure, 200);
      setTimeout(measure, 800);

      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && doc.body) {
          // ResizeObserver for body size changes
          observer = new ResizeObserver(debouncedMeasure);
          observer.observe(doc.body);
          
          // MutationObserver catches tab switches (display:none → display:block)
          // Removed tracking of 'style', focus heavily on class toggles which is what tab logic uses
          mutationObserver = new MutationObserver(debouncedMeasure);
          mutationObserver.observe(doc.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
          });
          
          // Removed manual click event listener to prevent duplicate polling (mutationObserver handles this)
        }
      } catch (e) {
        // Cross-origin or unobservable: fallback to interval
        intervalId = setInterval(measure, 2000); // 2s instead of 1s
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
  }, [src, minHeight, maxHeight, shouldLoad]);

  return (
    <div ref={containerRef} style={{ width: '100%', minHeight: `${minHeight}px` }}>
      {shouldLoad ? (
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
            transition: 'height 0.2s ease-out',
            ...style 
          }}
          frameBorder={frameBorder}
          scrolling="no"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded animate-pulse" style={{ height: `${height}px` }}>
           <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default AutoFrame;
