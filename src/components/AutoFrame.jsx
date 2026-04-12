import React, { useRef, useState, useEffect } from 'react';

/**
 * AutoFrame - An iframe wrapper that dynamically resizes to match its content height.
 * Eliminates internal scrollbars and blank space by polling the iframe's content height.
 * 
 * For same-origin iframes only (which is the case for /graphs/*.html files).
 */

// Mobile-responsive CSS to inject into each iframe so graph content adapts to narrow screens.
// These overrides use @media queries so desktop layout remains completely untouched.
const MOBILE_RESPONSIVE_CSS = `
@media (max-width: 600px) {
  /* ── Global resets ── */
  *, *::before, *::after {
    box-sizing: border-box !important;
  }
  body, .wrap, .deck {
    padding: 0 !important;
    overflow-x: hidden !important;
  }
  .wrap {
    padding: 0.75rem !important;
    width: 100% !important;
  }
  .deck {
    padding: 0 !important;
  }
  .panel, .tab-panel {
    padding: 0.75rem !important;
    width: 100% !important;
  }

  /* ── Tab navigation ── */
  .tab-row, .tab-nav, .nav {
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 4px !important;
  }
  .tab-row::-webkit-scrollbar,
  .tab-nav::-webkit-scrollbar,
  .nav::-webkit-scrollbar {
    display: none;
  }
  .tab, .tab-btn, .ntab {
    font-size: 12px !important;
    padding: 6px 10px !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }

  /* ── KPI / Hero/ VR grids: 4-col → 2-col ── */
  .kpi-grid, .hero-grid, .kpi-row {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px !important;
    width: 100% !important;
  }
  .kpi, .hero-card {
    padding: 0.5rem 0.6rem !important;
    min-width: 0 !important;
    overflow: hidden !important;
    word-break: break-word !important;
  }
  .kpi-label, .hero-note, .kpi-s, .kpi-l {
    font-size: 12px !important;
  }
  .kpi-val, .hero-num, .kpi-n {
    font-size: 20px !important;
  }
  .kpi-sub, .hero-label {
    font-size: 12px !important;
  }

  /* ── Two-column → single column ── */
  .two-col, .econ-grid, .cost-grid, .two, .page {
    grid-template-columns: minmax(0, 1fr) !important;
    flex-direction: column !important;
    gap: 0.75rem !important;
    width: 100% !important;
  }
  .cost-left {
    border-right: none !important;
    padding-right: 0 !important;
    border-bottom: 1px solid var(--rule, rgba(42,127,181,0.15)) !important;
    padding-bottom: 1rem !important;
  }
  .cost-right {
    padding-left: 0 !important;
    padding-top: 0.75rem !important;
  }

  /* ── Three-column → single column ── */
  .three-col, .vc-cards, .three {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 8px !important;
    width: 100% !important;
  }

  table {
    display: block !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap !important;
  }

  div[style*="grid-template-columns"] {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 6px !important;
  }

  /* ── Phase grid: 3-col → 1-col ── */
  .phase-grid {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .phase-card {
    padding: 0.65rem 0.8rem !important;
  }
  .phase-name {
    font-size: 16px !important;
  }
  .phase-row {
    font-size: 14px !important;
  }

  /* ── Device row: 3-col → 1-col ── */
  .device-row {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  .device-card {
    padding: 16px !important;
  }
  .device-price {
    font-size: 28px !important;
  }

  /* ── Chart sizes ── */
  .chart-wrap {
    margin-bottom: 0.75rem !important;
  }
  .h260, .h240, .h220, .h200, .h180 {
    height: 180px !important;
  }

  /* ── Legend ── */
  .legend {
    font-size: 11px !important;
    gap: 6px !important;
    margin-bottom: 4px !important;
  }
  .ld, .leg-dot {
    width: 7px !important;
    height: 7px !important;
  }

  /* ── Timeline: horizontal → vertical stack ── */
  .timeline {
    flex-direction: column !important;
    gap: 12px !important;
  }
  .timeline::before {
    display: none !important;
  }
  .t-item {
    padding-top: 0 !important;
    padding-left: 24px !important;
    padding-right: 0 !important;
    border-left: 2px solid var(--sky, #C8E6F7) !important;
    position: relative !important;
  }
  .t-node {
    position: absolute !important;
    top: 4px !important;
    left: -8px !important;
    transform: none !important;
  }
  .t-metric {
    font-size: 22px !important;
  }

  /* ── Milestone row: horizontal → vertical ── */
  .milestone-row {
    flex-direction: column !important;
    gap: 0 !important;
  }
  .ms-item {
    min-width: unset !important;
    border-right: 1px solid var(--sky, #C8E6F7) !important;
    border-bottom: none !important;
  }
  .ms-item:last-child {
    border-bottom: 1px solid var(--sky, #C8E6F7) !important;
  }

  /* ── VR hero grid: 2-col → 1-col ── */
  .hero-grid {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
    min-height: auto !important;
  }
  .vr-scene-wrap {
    padding: 20px !important;
  }
  .vr-scene {
    width: 160px !important;
    height: 160px !important;
  }

  /* ── VC panel ── */
  .vc-panel {
    padding: 20px !important;
    border-radius: 12px !important;
  }
  .vc-headline {
    font-size: 24px !important;
  }
  .vc-stat {
    font-size: 24px !important;
  }
  .vc-card {
    padding: 14px !important;
  }

  /* ── Typography scale-downs ── */
  .section-title, .ptitle {
    font-size: 22px !important;
  }
  .section-sub, .psub {
    font-size: 14px !important;
  }
  .eyebrow {
    font-size: 12px !important;
  }
  .stat-row {
    gap: 20px !important;
    flex-wrap: wrap !important;
  }
  .stat-n {
    font-size: 28px !important;
  }
  .stat-l {
    font-size: 13px !important;
  }
  .insight {
    font-size: 13px !important;
    padding: 0.5rem 0.75rem !important;
  }

  /* ── Proof cards ── */
  .proof-card {
    padding: 0.65rem 0.8rem !important;
  }
  .proof-signal {
    font-size: 15px !important;
  }
  .proof-proves {
    font-size: 13px !important;
  }
  .proof-bench {
    font-size: 12px !important;
  }
  .proof-tag {
    font-size: 11px !important;
    padding: 1px 5px !important;
  }

  /* ── Cap rows (bar charts in traction) ── */
  .cap-label {
    font-size: 12px !important;
    min-width: 100px !important;
  }
  .cap-val {
    font-size: 13px !important;
    min-width: 55px !important;
  }

  /* ── Pricing cards ── */
  .pricing-card {
    padding: 16px !important;
  }
  .pricing-amount {
    font-size: 42px !important;
  }
  .margin-label {
    font-size: 13px !important;
    min-width: 90px !important;
  }
  .margin-pct {
    font-size: 18px !important;
  }

  /* ── Bar chart elements ── */
  .bar-b {
    width: 32px !important;
  }
  .bar-val {
    font-size: 16px !important;
  }
  .bar-label {
    font-size: 12px !important;
  }
  .cost-bar-wrap {
    gap: 8px !important;
  }

  /* ── Tech items ── */
  .tech-name {
    font-size: 15px !important;
  }
  .tech-sub {
    font-size: 13px !important;
  }

  /* ── General float tags ── */
  .float-tag {
    font-size: 11px !important;
    padding: 3px 7px !important;
  }

  /* ── Narrative blocks ── */
  .narr-quote {
    font-size: 15px !important;
  }
  .narr-label {
    font-size: 12px !important;
  }

  /* ── Scrollbar hide for horizontal scrollers ── */
  *::-webkit-scrollbar {
    display: none !important;
  }
  * {
    scrollbar-width: none !important;
  }
}
`;

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

    const injectMobileCSS = (doc) => {
      try {
        if (!doc || !doc.head) return;
        // Only inject once
        if (doc.getElementById('autoframe-mobile-css')) return;
        const style = doc.createElement('style');
        style.id = 'autoframe-mobile-css';
        style.textContent = MOBILE_RESPONSIVE_CSS;
        doc.head.appendChild(style);

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
