const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
let files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'Hero.jsx');

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Find any block starting with <div className="w-full px-4 sm:px-6 lg:px-8 pb-8
  // that contains <Link
  
  const badFooterRegex = /<div className="w-full px-4 sm:px-6 lg:px-8 pb-8(?: mt-8)?">\s*<div className="flex [^>]+>[\s\S]*?<Link[\s\S]*?<\/div>\s*<\/div>/g;
  
  if (content.match(badFooterRegex)) {
    content = content.replace(badFooterRegex, '');
    fs.writeFileSync(filepath, content, 'utf8');
    console.log('Fixed undefined Link in:', file);
  }
});
