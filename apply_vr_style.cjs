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
`;

const fileExcludes = [
  'edastra_vr_slide.html',
  'edastra_tech_arch_fixed.html',
  'edastra_tech_architecture.html',
  'edastra_tech_cost_estimate.html'
];

let files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !fileExcludes.includes(f));

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
  '#378ADD': '#2A7FB5', // Old blue to VR deep
  '#E24B4A': '#D85A30', // Old red to Coral
  '#1D9E75': '#1D8A50', // Old green to Mint
  '#534AB7': '#7BC4E8', // Old purple to Mid

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

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Inject Google Fonts
  if (!content.includes('Cormorant Garamond')) {
    if (content.match(/<head\s*>/i)) {
      content = content.replace(/<head\s*>/i, `<head>\n  ${googleFonts}`);
    } else if (content.includes('<style>')) {
      content = content.replace('<style>', `${googleFonts}\n<style>`);
    }
  }

  // Rewrite existing imports
  content = content.replace(/@import url\(['"]https:\/\/fonts.googleapis.com[^'"]+['"]\);/g, '');

  content = content.replace(/font-family:\s*['"]DM Sans['"],\s*sans-serif/g, "font-family:'Outfit',sans-serif");
  content = content.replace(/font-family:\s*['"]Fraunces['"],\s*serif/g, "font-family:'Cormorant Garamond',serif");
  content = content.replace(/font-family:\s*['"]Space Grotesk['"],\s*sans-serif/g, "font-family:'Outfit',sans-serif");
  content = content.replace(/font-family:\s*['"]Inter['"],\s*['"]Segoe UI['"],\s*Roboto,\s*sans-serif/g, "font-family:'Outfit',sans-serif");

  // Rewrite :root
  if (content.includes(':root {')) {
    // Replace all existing root definitions
    content = content.replace(/:root\s*{[^}]*}/m, vrCssVars);
  } else if (content.includes('<style>')) {
    content = content.replace('<style>', '<style>\n' + vrCssVars);
  }

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

  // Border fixes
  content = content.replace(/border:\s*0\.5px/gi, "border:1px");
  content = content.replace(/border-bottom:\s*0\.5px/gi, "border-bottom:1px");

  // Background fallbacks 
  content = content.replace(/background:\s*#FAFCFF;/g, "background: var(--white);");
  content = content.replace(/color:\s*#103A5A;/g, "color: var(--navy);");

  // Grid / UI resets
  content = content.replace(/border-radius:\s*10px;/g, "border-radius: 12px;");

  fs.writeFileSync(filepath, content, 'utf8');
  console.log('Restyled:', file);
});

console.log('Conversion complete.');
