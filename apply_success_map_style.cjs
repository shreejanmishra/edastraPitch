const fs = require('fs');

// Read the Success Map HTML file
const filePath = 'public/graphs/edastra_success_map.html';
let content = fs.readFileSync(filePath, 'utf8');

// Replace dark theme with light theme
content = content
  // Update body/container background from dark to light
  .replace(/\.d\{font-family:'Outfit',sans-serif;background:#050A08;color:#E4EDEA;min-height:100vh;\}/g,
    ".d{font-family:'Outfit',sans-serif;background:var(--white);color:var(--txt);min-height:100vh;}")
  
  // Update navigation background and border
  .replace(/\.nav\{display:flex;background:#050A08;border-bottom:1px solid #0A1410;/g,
    ".nav{display:flex;background:var(--white);border-bottom:1px solid var(--sky);")
  
  // Update tab button colors (inactive state)
  .replace(/color:#102010;cursor:pointer;/g,
    "color:var(--muted);cursor:pointer;")
  
  // Update tab button active state from green to blue
  .replace(/\.nt\.on\{color:#4ADE80;border-bottom-color:#4ADE80;\}/g,
    ".nt.on{color:var(--deep);border-bottom-color:var(--deep);}")
  
  // Update tab button hover state
  .replace(/\.nt:hover:not\(\.on\)\{color:#2A4030;\}/g,
    ".nt:hover:not(.on){color:var(--navy);}")
  
  // Update eyebrow color from green to blue
  .replace(/\.ey\{font-size:10px;font-weight:500;letter-spacing:\.18em;text-transform:uppercase;color:#4ADE80;/g,
    ".ey{font-size:10px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--mid);")
  
  // Update title color to navy
  .replace(/\.ti\{font-size:24px;font-weight:700;line-height:1\.1;color:#E4EDEA;/g,
    ".ti{font-size:24px;font-weight:700;line-height:1.1;color:var(--navy);")
  
  // Update subtitle color
  .replace(/\.sb\{font-size:13px;color:#1A3020;/g,
    ".sb{font-size:13px;color:var(--muted);")
  
  // Update bar color from green to blue
  .replace(/\.bar\{width:44px;height:3px;background:#4ADE80;/g,
    ".bar{width:44px;height:3px;background:var(--mid);")
  
  // Update card backgrounds from dark to light
  .replace(/\.kpi\{background:#0A1410;border:1px solid #102018;/g,
    ".kpi{background:var(--ice);border:1px solid var(--sky);")
  
  // Update highlighted KPI
  .replace(/\.kpi\.hi\{border-color:#4ADE80;background:rgba\(74,222,128,0\.06\);\}/g,
    ".kpi.hi{border-color:var(--mid);background:rgba(123,196,232,0.15);}")
  
  // Update KPI subtitle color
  .replace(/\.kpi-s\{font-size:10px;color:#1A3020;/g,
    ".kpi-s{font-size:10px;color:var(--muted);")
  
  // Update card background
  .replace(/\.card\{background:#0A1410;border:1px solid #102018;/g,
    ".card{background:var(--ice);border:1px solid var(--sky);")
  
  // Update card title color
  .replace(/\.ct\{font-size:12px;font-weight:600;color:#E4EDEA;/g,
    ".ct{font-size:12px;font-weight:600;color:var(--navy);")
  
  // Update list item color
  .replace(/\.li li\{font-size:11px;color:rgba\(228,237,234,0\.55\);/g,
    ".li li{font-size:11px;color:var(--muted);")
  
  // Update list bullet color from green to blue
  .replace(/\.li li::before\{content:'';width:5px;height:5px;border-radius:50%;background:#4ADE80;/g,
    ".li li::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--mid);")
  
  // Update insight box backgrounds
  .replace(/\.ins-g\{background:rgba\(74,222,128,0\.07\);border-left:2px solid #4ADE80;color:rgba\(228,237,234,0\.85\);\}/g,
    ".ins-g{background:var(--color-background-success);border-left:2px solid var(--color-text-success);color:var(--txt);}")
  
  .replace(/\.ins-b\{background:rgba\(96,165,250,0\.07\);border-left:2px solid #60A5FA;color:rgba\(228,237,234,0\.85\);\}/g,
    ".ins-b{background:var(--color-background-info);border-left:2px solid var(--color-text-info);color:var(--txt);}")
  
  .replace(/\.ins-y\{background:rgba\(239,159,39,0\.07\);border-left:2px solid #EF9F27;color:rgba\(228,237,234,0\.85\);\}/g,
    ".ins-y{background:var(--color-background-warning);border-left:2px solid var(--color-text-warning);color:var(--txt);}")
  
  .replace(/\.ins-r\{background:rgba\(248,113,113,0\.07\);border-left:2px solid #F87171;color:rgba\(228,237,234,0\.85\);\}/g,
    ".ins-r{background:rgba(248,113,113,0.07);border-left:2px solid #F87171;color:var(--txt);}")
  
  // Update legend color
  .replace(/\.leg\{display:flex;flex-wrap:wrap;gap:12px;font-size:11px;color:#1A3020;/g,
    ".leg{display:flex;flex-wrap:wrap;gap:12px;font-size:11px;color:var(--muted);")
  
  // Update flywheel item borders
  .replace(/\.fw-item\{flex:1;padding:\.875rem 1rem;border:1px solid #102018;/g,
    ".fw-item{flex:1;padding:.875rem 1rem;border:1px solid var(--sky);")
  
  .replace(/\.fw-item:last-child\{border-right:1px solid #102018;\}/g,
    ".fw-item:last-child{border-right:1px solid var(--sky);}")
  
  // Update flywheel number color from green to blue
  .replace(/\.fw-num\{font-size:10px;font-weight:700;color:#4ADE80;/g,
    ".fw-num{font-size:10px;font-weight:700;color:var(--mid);")
  
  // Update flywheel title color
  .replace(/\.fw-title\{font-size:12px;font-weight:600;color:#E4EDEA;/g,
    ".fw-title{font-size:12px;font-weight:600;color:var(--navy);")
  
  // Update flywheel detail color
  .replace(/\.fw-detail\{font-size:10px;color:rgba\(228,237,234,0\.4\);/g,
    ".fw-detail{font-size:10px;color:var(--muted);")
  
  // Update flywheel arrow color from green to blue
  .replace(/\.fw-arrow\{display:flex;align-items:center;justify-content:center;width:20px;color:#4ADE80;/g,
    ".fw-arrow{display:flex;align-items:center;justify-content:center;width:20px;color:var(--mid);")
  
  // Update risk table header
  .replace(/\.risk-hdr\{background:#0A1410;font-size:10px;font-weight:600;letter-spacing:\.07em;text-transform:uppercase;color:#1A3020;/g,
    ".risk-hdr{background:var(--ice);font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);")
  
  // Update risk row border
  .replace(/\.risk-row\{display:grid;grid-template-columns:1fr 80px 1fr 1fr;gap:10px;padding:9px 10px;border-bottom:1px solid #0A1410;/g,
    ".risk-row{display:grid;grid-template-columns:1fr 80px 1fr 1fr;gap:10px;padding:9px 10px;border-bottom:1px solid var(--rule);")
  
  // Update metric tracker background
  .replace(/\.m-track\{flex:1;height:6px;background:#0A1410;/g,
    ".m-track{flex:1;height:6px;background:var(--ice);")
  
  // Update metric label color
  .replace(/\.m-label\{font-size:11px;color:rgba\(228,237,234,0\.5\);/g,
    ".m-label{font-size:11px;color:var(--muted);");

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✓ Success Map styling updated to match VR Experience theme');
