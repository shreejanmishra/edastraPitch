const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'graphs');

let files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Fix the regex over-eager matching issues
  content = content.replace(/#FAFCFF3E0/g, '#FFF3E0');
  content = content.replace(/#FAFCFFfff/g, '#ffffff'); // if any
  
  fs.writeFileSync(filepath, content, 'utf8');
});

console.log('Fixed over-eager hex replacements.');
