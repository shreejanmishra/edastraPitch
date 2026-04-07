/**
 * Batch script to replace all plain <iframe> graph embeds with <AutoFrame> components.
 * This gives each iframe auto-height behavior (no internal scrollbar, no blank space).
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

// Pages that use iframes for graphs
const graphPages = [
  'ContentEconomics.jsx',
  'FinancialOutlook.jsx',
  'InstitutionalPricing.jsx',
  'VREconomics.jsx',
  'VRExperience.jsx',
  'Traction.jsx',
  'TechArchitecture.jsx',
  'RoadAhead.jsx',
];

graphPages.forEach(file => {
  const filepath = path.join(dir, file);
  if (!fs.existsSync(filepath)) {
    console.log('SKIP (not found):', file);
    return;
  }
  
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Add AutoFrame import if not already present
  if (!content.includes('AutoFrame')) {
    content = content.replace(
      /import React from ['"]react['"];?\r?\n/,
      `import React from 'react'\nimport AutoFrame from '../components/AutoFrame'\n`
    );
  }
  
  // Replace <iframe ... className="w-full h-[600px] bg-white" ... /> with <AutoFrame ... />
  // and <iframe ... className="w-full h-[700px] bg-white" ... /> with <AutoFrame ... />
  // and <iframe ... className="w-full min-h-[650px] bg-white" ... /> with <AutoFrame ... />
  content = content.replace(
    /<iframe\s*\n\s*src="([^"]+)"\s*\n\s*title="([^"]+)"\s*\n\s*className="w-full (?:h-\[\d+px\]|min-h-\[\d+px\]) bg-white"\s*\n\s*frameBorder="0"\s*\n\s*\/>/g,
    '<AutoFrame\n                src="$1"\n                title="$2"\n                className="bg-white"\n                frameBorder="0"\n              />'
  );

  // Also handle single-indented variants
  content = content.replace(
    /<iframe\s*\n\s*src="([^"]+)"\s*\n\s*title="([^"]+)"\s*\n\s*className="w-full (?:h-\[\d+px\]|min-h-\[\d+px\]) bg-white"\s*\n\s*frameBorder="0"\s*\n\s*\/>/g,
    '<AutoFrame\n              src="$1"\n              title="$2"\n              className="bg-white"\n              frameBorder="0"\n            />'
  );

  fs.writeFileSync(filepath, content, 'utf8');
  console.log('Updated:', file);
});

console.log('Done — all graph iframes now use AutoFrame.');
