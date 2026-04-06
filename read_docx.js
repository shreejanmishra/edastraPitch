const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Use unzipper approach - extract docx as zip
const AdmZip = require('adm-zip');

try {
  const zip = new AdmZip(path.join(__dirname, 'public', 'graphs', 'pitchdeck text.docx'));
  const doc = zip.readAsText('word/document.xml');
  
  // Extract text from XML
  const textMatches = doc.match(/<w:t[^>]*>([^<]*)<\/w:t>/g);
  if (textMatches) {
    let fullText = '';
    for (const match of textMatches) {
      const text = match.replace(/<w:t[^>]*>/, '').replace(/<\/w:t>/, '');
      fullText += text;
    }
    // Split on patterns that look like headings
    console.log(fullText);
  }
} catch(e) {
  console.error(e.message);
  
  // Fallback: Just try to unzip manually
  const JSZip = require('jszip');
}
