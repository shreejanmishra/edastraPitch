/**
 * fix_iframe_whitespace.cjs
 * Removes `min-height: 100vh` from all HTML graph files that are embedded as iframes.
 * This prevents a feedback loop where the iframe height inflates to maxHeight (6000px).
 */
const fs = require('fs');
const path = require('path');

const graphsDir = path.join(__dirname, 'public', 'graphs');

const files = fs.readdirSync(graphsDir).filter(f => f.endsWith('.html'));

let totalChanges = 0;

files.forEach(file => {
  const filePath = path.join(graphsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace min-height: 100vh (with optional whitespace variations)
  // Pattern handles: min-height:100vh; | min-height: 100vh; | min-height :100vh;
  content = content.replace(/min-height\s*:\s*100vh\s*;?\s*/gi, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file}`);
    totalChanges++;
  } else {
    console.log(`⏭  No change: ${file}`);
  }
});

console.log(`\nDone. Modified ${totalChanges} / ${files.length} files.`);
