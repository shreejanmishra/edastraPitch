const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages');

const replaceInFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Standardize to VR Experience Overview frame's exact shadows
    // VR Experience Overview frame: "rounded-lg overflow-hidden border border-primary/20 shadow-xl"
    
    // Replace shadow-2xl and shadow-primary/10 variants on images
    if (content.includes('shadow-2xl shadow-primary/10 border border-primary/20')) {
      content = content.replace(/shadow-2xl shadow-primary\/10 border border-primary\/20/g, 'border border-primary/20 shadow-xl');
      changed = true;
    }
    
    // Replace shadow-xl shadow-primary/10 variants
    if (content.includes('shadow-xl shadow-primary/10 border border-primary/20')) {
      content = content.replace(/shadow-xl shadow-primary\/10 border border-primary\/20/g, 'border border-primary/20 shadow-xl');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated shadows: ${path.basename(filePath)}`);
    }
  }
};

fs.readdir(directoryPath, (err, files) => {
  if (err) return console.log('Unable to scan directory: ' + err);
  files.forEach((file) => {
    if (file.endsWith('.jsx')) {
      replaceInFile(path.join(directoryPath, file));
    }
  });
});
