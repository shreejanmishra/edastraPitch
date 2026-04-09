const fs = require('fs');
const path = require('path');

const dirPath = 'd:/practice/edastraPitch/public/graphs';

// Files to skip based on user instruction
const skipFiles = [
  'edastra_tech_architecture.html',
  'edastra_tech_arch_fixed.html'
];

function processFile(filePath) {
  const fileName = path.basename(filePath);
  if (skipFiles.includes(fileName)) {
    console.log('Skipped ' + filePath);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Match font-size: 10px; or font-size:10px
  content = content.replace(/font-size:\s*(\d+(?:\.\d+)?)px/gi, (match, val) => {
    return 'font-size:' + (parseFloat(val) + 6) + 'px';
  });
  
  // Match in case there are any inline style fontSizes like fontSize: "10px"
  content = content.replace(/fontSize:\s*['"]?(\d+(?:\.\d+)?)px['"]?/gi, (match, val) => {
    return 'fontSize:"' + (parseFloat(val) + 6) + 'px"';
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
}

function traverseDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.html')) {
      processFile(fullPath);
    }
  }
}

traverseDir(dirPath);
console.log('Done');
