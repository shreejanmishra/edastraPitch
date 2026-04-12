import fs from 'fs';
import path from 'path';
import { minify } from 'html-minifier-terser';

const GRAPHS_DIR = path.resolve('public/graphs');

async function minifyGraphs() {
  const files = fs.readdirSync(GRAPHS_DIR).filter(f => f.endsWith('.html'));
  console.log(`Minifying ${files.length} HTML files in public/graphs...`);

  let totalOriginal = 0;
  let totalMinified = 0;

  for (const file of files) {
    const filePath = path.join(GRAPHS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const originalSize = Buffer.byteLength(content, 'utf8');
    totalOriginal += originalSize;

    try {
      const minified = await minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeOptionalTags: true,
      });

      const newSize = Buffer.byteLength(minified, 'utf8');
      totalMinified += newSize;
      
      fs.writeFileSync(filePath, minified, 'utf8');
      
      const ratio = ((1 - newSize / originalSize) * 100).toFixed(1);
      console.log(`✓ ${file}: ${(originalSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (${ratio}%)`);
    } catch (err) {
      console.error(`✗ Error minifying ${file}:`, err.message);
    }
  }

  console.log(`\nDone! Total size: ${(totalOriginal/1024).toFixed(1)}KB → ${(totalMinified/1024).toFixed(1)}KB`);
  console.log(`Overall savings: ${((1 - totalMinified / totalOriginal) * 100).toFixed(1)}%`);
}

minifyGraphs();
