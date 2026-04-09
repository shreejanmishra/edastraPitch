const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'graphs');

const targetFiles = [
    'edastra_vr_economics.html',
    'edastra_content_economics_visual.html'
];

targetFiles.forEach(file => {
    const filepath = path.join(dir, file);
    if (!fs.existsSync(filepath)) return;
    
    let content = fs.readFileSync(filepath, 'utf8');

    // Remove old :root to prevent duplicate
    content = content.replace(/:root\s*{[^}]*}/m, '');

    // Add correctly formatted vrCssVars if not present or after removing old
    const vrCssVars = `
:root {
  --ice: #EAF4FB;
  --sky: #C8E6F7;
  --mid: #7BC4E8;
  --deep: #2A7FB5;
  --navy: #103A5A;
  --white: #FAFCFF;
  --rule: rgba(42,127,181,0.15);
  --txt: #103A5A;
  --muted: #5A8FAD;
}`;
    if (!content.includes('--ice: #EAF4FB')) {
        content = content.replace(/<style>/i, `<style>\n${vrCssVars}`);
    }

    // Typography
    content = content.replace(/font-family:\s*['"]Syne['"][^;]*;/gi, "font-family:'Cormorant Garamond',serif;");
    content = content.replace(/font-family:\s*['"]Inter['"][^;]*;/gi, "font-family:'Outfit',sans-serif;");
    
    // Backgrounds out of Dark Mode
    content = content.replace(/background:\s*#0F0F0F/gi, "background:var(--white)");
    content = content.replace(/background:\s*#060B0A/gi, "background:var(--white)");
    content = content.replace(/background:\s*#161616/gi, "background:var(--ice)");
    content = content.replace(/background:\s*#0C1410/gi, "background:var(--ice)");
    content = content.replace(/background:\s*#0C1814/gi, "background:var(--rule)");
    
    // Borders out of Dark Mode
    content = content.replace(/#1E1E1E/gi, "var(--sky)");
    content = content.replace(/#102018/gi, "var(--sky)");
    content = content.replace(/#103A5A/gi, "var(--sky)"); // Fix for specific border in content economics
    
    // Text out of Dark Mode
    content = content.replace(/color:\s*#F0EDE8/gi, "color:var(--navy)");
    content = content.replace(/color:\s*#E0EDE8/gi, "color:var(--navy)");
    content = content.replace(/color:\s*#444/gi, "color:var(--muted)");
    content = content.replace(/color:\s*#999/gi, "color:var(--muted)");
    content = content.replace(/rgba\(240,\s*237,\s*232,\s*([\d.]+)\)/gi, "rgba(16, 58, 90, $1)");
    content = content.replace(/rgba\(224,\s*237,\s*232,\s*([\d.]+)\)/gi, "rgba(16, 58, 90, $1)");
    content = content.replace(/color:\s*#1A3028/gi, "color:var(--muted)");
    content = content.replace(/color:\s*#0F2018/gi, "color:var(--muted)");

    // Fix Gold / Yellow -> VR Deep Blue / Mid Blue
    content = content.replace(/#E8C547/gi, "var(--deep)");
    content = content.replace(/rgba\(232,\s*197,\s*71,\s*([\d.]+)\)/gi, "rgba(42, 127, 181, $1)"); // E8C547 to Deep
    content = content.replace(/#F5E48B/gi, "var(--mid)");

    // Specific structural classes standardization
    content = content.replace(/\.d\{([^}]+)\}/g, "body{ \n$1 \nbackground:var(--white); color:var(--txt); overflow-x:hidden;}");
    content = content.replace(/<div class="d">/g, "");
    content = content.replace(/<\/div>\s*<script/g, "<script"); // remove the closing </div> for .d
    
    // Adjust colors for "Green / Success"
    // Leave green hexes alone as they convey positive economics, but fix backgrounds
    content = content.replace(/rgba\(52,\s*211,\s*153,\s*0\.\d+\)/gi, "rgba(29,138,80,0.08)");
    content = content.replace(/#34D399/gi, "#1D8A50");
    
    // Adjust colors for "Red / Caution"
    content = content.replace(/rgba\(248,\s*113,\s*113,\s*0\.\d+\)/gi, "rgba(216,90,48,0.08)");
    content = content.replace(/#F87171/gi, "#D85A30");
    content = content.replace(/#FECACA/gi, "#EF9F27");
    
    // Adjust Blues & Oranges
    content = content.replace(/#60A5FA/gi, "var(--deep)");
    content = content.replace(/#93C5FD/gi, "var(--mid)");
    content = content.replace(/rgba\(96,\s*165,\s*250,\s*0\.\d+\)/gi, "rgba(42, 127, 181, 0.08)");

    // Chart.js grid adjustments for light theme
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.\d+\)/gi, "rgba(16, 58, 90, 0.05)");
    content = content.replace(/color:\s*['"]#1A3028['"]/g, "color:'rgba(16,58,90,0.5)'");
    content = content.replace(/color:\s*['"]#5A8FAD['"]/g, "color:'rgba(16,58,90,0.5)'");

    fs.writeFileSync(filepath, content, 'utf8');
    console.log('Restyled specific dark HTML files:', file);
});
