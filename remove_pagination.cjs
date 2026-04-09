const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
let files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Regex to remove the entire pagination footer block at the bottom
  const regexFooter = /<div className="w-full px-4 sm:px-6 lg:px-8 pb-8 mt-8">\s*<div className="flex [^>]+>[\s\S]*?<\/div>\s*<\/div>/g;
  
  // Also catch variations (e.g., if there's no wrapper)
  // But wait, the standard template is always that wrapper!
  
  if (content.match(regexFooter)) {
    content = content.replace(regexFooter, '');
  }

  // Remove the 'react-router-dom' imports for Link since they're unused now
  content = content.replace(/import\s*{\s*Link\s*(?:,\s*useNavigate)?\s*}\s*from\s*['"]react-router-dom['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*useNavigate\s*,\s*Link\s*}\s*from\s*['"]react-router-dom['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?\n?/g, '');
  
  // Some files might still need Link if they link to other major sections, but subpages don't.
  // Actually, we can just remove `{ Link }` from the import line.
  
  fs.writeFileSync(filepath, content, 'utf8');
  console.log('Removed pagination from:', file);
});

console.log('Done.');
