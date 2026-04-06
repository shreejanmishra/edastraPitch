const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
let files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Fix background mismatch and add padding to bottom to prevent overlap/cramped UI
  // The layout wrapper used to be:
  // <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
  // Or similar.
  // We want to force it to:
  // <div className="min-h-screen py-24 bg-[#FAFCFF] flex flex-col">
  
  if (content.match(/min-h-screen/)) {
    content = content.replace(/className="min-h-screen\s+pt-20\s+bg-\[#F5F2DE\]\s+flex\s+flex-col"/g, 'className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]"');
  }

  fs.writeFileSync(filepath, content, 'utf8');
});

// Update global CSS
const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/bg-\[#F5F2DE\]/g, 'bg-[#FAFCFF]');
fs.writeFileSync(cssPath, cssContent, 'utf8');

console.log('React layout fixed.');
