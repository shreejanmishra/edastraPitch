const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages');
const indexCssPath = path.join(__dirname, 'src', 'index.css');

const replaceInFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('#EAF4FB') || content.includes('#eaf4fb')) {
      // Replace all instances of the hex color (case-insensitive)
      let newContent = content.replace(/#EAF4FB/gi, '#FAFCFF');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated: ${path.basename(filePath)}`);
    } else {
        console.log(`No change: ${path.basename(filePath)}`);
    }
  }
};

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 
  
  files.forEach((file) => {
    if (file.endsWith('.jsx')) {
      replaceInFile(path.join(directoryPath, file));
    }
  });
});

replaceInFile(indexCssPath);
