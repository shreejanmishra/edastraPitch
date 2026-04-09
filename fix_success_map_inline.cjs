const fs = require('fs');

// Read the Success Map HTML file
const filePath = 'public/graphs/edastra_success_map.html';
let content = fs.readFileSync(filePath, 'utf8');

// Replace inline styles - backgrounds and borders
content = content
  // Update pillar card backgrounds from dark to light
  .replace(/background:#0A1410;border:1px solid rgba\(74,222,128,0\.25\);/g,
    "background:var(--ice);border:1px solid rgba(123,196,232,0.3);")
  
  .replace(/background:#0A1410;border:1px solid #102018;/g,
    "background:var(--ice);border:1px solid var(--sky);")
  
  // Update text colors in inline styles
  .replace(/color:#E4EDEA/g, "color:var(--navy)")
  
  .replace(/color:rgba\(228,237,234,0\.5\)/g, "color:var(--muted)")
  
  .replace(/color:rgba\(228,237,234,0\.6\)/g, "color:var(--muted)")
  
  .replace(/color:rgba\(228,237,234,0\.35\)/g, "color:var(--muted)")
  
  .replace(/color:rgba\(228,237,234,0\.4\)/g, "color:var(--muted)")
  
  .replace(/color:rgba\(228,237,234,0\.45\)/g, "color:var(--muted)")
  
  .replace(/color:rgba\(228,237,234,0\.55\)/g, "color:var(--muted)")
  
  .replace(/color:rgba\(228,237,234,0\.85\)/g, "color:var(--txt)")
  
  .replace(/color:rgba\(228,237,234,0\.9\)/g, "color:var(--txt)")
  
  // Update green accent colors to blue in inline styles
  .replace(/color:#4ADE80/g, "color:var(--mid)")
  
  .replace(/color:#86EFAC/g, "color:var(--sky)")
  
  // Update border colors in inline styles
  .replace(/border:1px solid rgba\(74,222,128,0\.2\);/g,
    "border:1px solid var(--sky);")
  
  .replace(/border-color:rgba\(74,222,128,0\.2\);/g,
    "border-color:var(--sky);")
  
  .replace(/border-color:rgba\(74,222,128,0\.25\);/g,
    "border-color:var(--sky);")
  
  // Update background colors in flywheel items
  .replace(/background:rgba\(74,222,128,0\.06\);border-color:rgba\(74,222,128,0\.2\);/g,
    "background:rgba(123,196,232,0.1);border-color:var(--sky);")
  
  .replace(/background:rgba\(74,222,128,0\.07\);border:1px solid rgba\(74,222,128,0\.2\);/g,
    "background:var(--color-background-success);border:1px solid var(--color-border-info);")
  
  // Update table header background
  .replace(/background:#0A1410;font-size:10px;font-weight:600;letter-spacing:\.07em;text-transform:uppercase;color:#1A3020;/g,
    "background:var(--ice);font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);")
  
  // Update risk row backgrounds
  .replace(/border-top:1px solid #0A1410;/g,
    "border-top:1px solid var(--rule);")
  
  .replace(/background:rgba\(74,222,128,0\.04\);/g,
    "background:rgba(123,196,232,0.05);")
  
  .replace(/background:rgba\(248,113,113,0\.04\);/g,
    "background:rgba(248,113,113,0.04);")
  
  // Update border in tables
  .replace(/border:1px solid #102018;margin-bottom:1\.5rem;/g,
    "border:1px solid var(--sky);margin-bottom:1.5rem;")
  
  .replace(/border-radius: 12px;overflow:hidden;border:1px solid #102018;/g,
    "border-radius: 12px;overflow:hidden;border:1px solid var(--sky);");

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✓ Success Map inline styles updated');
