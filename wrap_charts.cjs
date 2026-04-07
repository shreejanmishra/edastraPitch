const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'graphs');

const googleFonts = `<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&family=Outfit:wght@200;300;400;500;600&display=swap" rel="stylesheet">`;

const vrCssVars = `
:root {
  --font-sans: 'Outfit', sans-serif;
  --font-serif: 'Cormorant Garamond', serif;
  --font-mono: 'DM Mono', monospace;
  --ice: #EAF4FB;
  --sky: #C8E6F7;
  --mid: #7BC4E8;
  --deep: #2A7FB5;
  --navy: #103A5A;
  --white: #FAFCFF;
  --rule: rgba(42,127,181,0.15);
  --txt: #103A5A;
  --muted: #5A8FAD;
  --color-text-primary: #103A5A;
  --color-text-secondary: #5A8FAD;
  --color-text-tertiary: #7BC4E8;
  --color-background-primary: #FAFCFF;
  --color-background-secondary: #EAF4FB;
  --color-border-secondary: #C8E6F7;
  --color-border-tertiary: rgba(42,127,181,0.15);
  --color-text-success: #1D8A50;
  --color-text-danger: #D85A30;
  --color-text-warning: #EF9F27;
  --color-text-info: #2A7FB5;
  --color-background-success: #E6F5F0;
  --color-background-warning: #FFF3E0;
  --color-background-info: #E8F0FA;
  --color-border-info: #C8E6F7;
  --border-radius-md: 12px;
  --border-radius-lg: 20px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--white); font-family: 'Outfit', sans-serif; color: var(--txt); overflow-x: hidden; }
`;

const replaceMap = {
  // Dark Backgrounds
  '#0A1628': '#FAFCFF',
  '#06080F': '#FAFCFF',
  '#0A0D1A': '#FAFCFF',
  '#101423': '#FAFCFF',
  '#0F1420': '#C8E6F7',
  
  // Light Text to Navy
  '#EEE8DC': '#103A5A',
  '#E8E4DC': '#103A5A',

  // Gold to Deep
  '#C9A84C': '#2A7FB5',
  '#E8C97A': '#2A7FB5',
  '#FBB724': '#EF9F27',
  '#FCD34D': '#EF9F27',

  // Green adjustments
  '#6EE7B7': '#1D8A50',
  '#A7F3D0': '#15755A',
  '#10B981': '#1D8A50',

  // Cyan to Sky/Mid
  '#67E8F9': '#7BC4E8',
  '#A5F3FC': '#C8E6F7',
  '#7C9EFF': '#2A7FB5',

  // Purple/Orange/Red mapping
  '#A78BFA': '#534AB7',
  '#C4B5FD': '#EDE9F6',
  '#8B5CF6': '#534AB7',
  '#FB923C': '#D85A30',
  '#FCA5A5': '#D85A30',
  '#EF4444': '#D85A30',

  // Chartjs colors
  '#378ADD': '#2A7FB5', 
  '#E24B4A': '#D85A30', 
  '#1D9E75': '#1D8A50', 
  '#534AB7': '#7BC4E8', 

  // Generic Light
  '#1a1a1a': '#103A5A',
  '#555': '#5A8FAD',
  '#888': '#7BC4E8',
  '#fff': '#FAFCFF',
  '#ffffff': '#FAFCFF',
  '#f5f5f4': '#EAF4FB',
  '#ddd': '#C8E6F7',
  '#eee': '#EAF4FB',
  
  // RGBA representations
  '238,232,220': '16,58,90',
  '232,228,220': '16,58,90',
  '201,168,76': '42,127,181',
  '124,158,255': '42,127,181',
  '5,150,105': '29,138,80',
  '16,185,129': '29,138,80',
  '8,145,178': '123,196,232',
  '167,139,250': '83,74,183',
  '139,92,246': '83,74,183',
  '249,115,22': '216,90,48',
  '251,146,60': '216,90,48',
  '220,38,38': '216,90,48',
  '239,68,68': '216,90,48',
  '251,191,36': '239,159,39',
};

const targetFiles = [
    'edastra_traction_preseed_proof.html',
    'edastra_success_map.html',
    'edastra_content_economics_visual.html',
    'edastra_content_unit_economics.html',
    'edastra_content_unit_economics-2.html',
    'vr_content_economics_slide.html',
    'edastra_vr_economics.html',
    'edastra_fund_allocation_burn.html'
];

targetFiles.forEach(file => {
  const filepath = path.join(dir, file);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');

  // Strip arbitrary google fonts
  content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]+>/g, '');
  content = content.replace(/@import url\(['"]https:\/\/fonts.googleapis.com[^'"]+['"]\);/g, '');
  
  // Remove :root if present
  content = content.replace(/:root\s*{[^}]*}/m, '');

  content = content.replace(/font-family:\s*['"]DM Sans['"],\s*sans-serif/gi, "font-family:'Outfit',sans-serif");
  content = content.replace(/font-family:\s*['"]Fraunces['"],\s*serif/gi, "font-family:'Cormorant Garamond',serif");
  content = content.replace(/font-family:\s*['"]Space Grotesk['"],\s*sans-serif/gi, "font-family:'Outfit',sans-serif");
  content = content.replace(/font-family:\s*['"]Inter['"],\s*['"]Segoe UI['"],\s*Roboto,\s*sans-serif/gi, "font-family:'Outfit',sans-serif");

  // Globals
  for (const [key, val] of Object.entries(replaceMap)) {
    if (key.includes(',')) {
      const regex = new RegExp(key, 'g');
      content = content.replace(regex, val);
    } else {
      const regex = new RegExp(key, 'gi');
      content = content.replace(regex, val);
    }
  }
  
  content = content.replace(/border:\s*0\.5px/gi, "border:1px");
  content = content.replace(/border-bottom:\s*0\.5px/gi, "border-bottom:1px");
  content = content.replace(/background:\s*#FAFCFF;/gi, "background: var(--white);");
  content = content.replace(/color:\s*#103A5A;/gi, "color: var(--navy);");
  content = content.replace(/border-radius:\s*10px;/gi, "border-radius: 12px;");

  // Re-wrap if missing <!DOCTYPE
  if (!content.includes('<!DOCTYPE html>')) {
      // Find where styles end and body begin
      // Or just put everything inside body and strip existing style
      // Let's create a solid structure
      let styleContent = '';
      const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
      if (styleMatch) {
          styleContent = styleMatch[1];
          content = content.replace(/<style[^>]*>([\s\S]*?)<\/style>/i, '');
      }
      
      const newHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Edastra Chart</title>
${googleFonts}
<style>
${vrCssVars}
${styleContent}
</style>
</head>
<body>
${content.trim()}
</body>
</html>`;
      fs.writeFileSync(filepath, newHtml, 'utf8');
      console.log('Wrapped and restyled:', file);
  } else {
      // If already wrapped, ensure vrCssVars exist
      if (!content.includes('--ice: #EAF4FB')) {
          content = content.replace(/<style[^>]*>/, '<style>\n' + vrCssVars);
      }
      fs.writeFileSync(filepath, content, 'utf8');
      console.log('Restyled existing wrapper:', file);
  }
});
