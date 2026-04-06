const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'graphs');

const cssVarBlock = `
:root {
  --font-sans: 'Inter', 'Segoe UI', Roboto, sans-serif;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #555;
  --color-text-tertiary: #888;
  --color-text-success: #166534;
  --color-text-danger: #991b1b;
  --color-text-warning: #92400e;
  --color-text-info: #1e40af;
  --color-background-primary: #ffffff;
  --color-background-secondary: #f5f5f4;
  --color-background-success: #dcfce7;
  --color-background-warning: #fef3c7;
  --color-background-info: #dbeafe;
  --color-border-secondary: #ddd;
  --color-border-tertiary: #eee;
  --color-border-info: #93c5fd;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
}
body { margin: 0; padding: 0; background: #fff; font-family: 'Inter', 'Segoe UI', Roboto, sans-serif; }
`;

const svgColorClasses = `
/* SVG color classes */
.th{font-size:13px;font-weight:700;fill:#1a1a1a;}
.ts{font-size:11px;fill:#555;}
.c-purple rect{fill:#EDE9F6;stroke:#7F77DD;} .c-purple text.th{fill:#4A3FA0;}
.c-teal rect{fill:#E6F5F0;stroke:#1D9E75;} .c-teal text.th{fill:#15755A;}
.c-blue rect{fill:#E8F0FA;stroke:#378ADD;} .c-blue text.th{fill:#1E5FAA;}
.c-amber rect{fill:#FFF3E0;stroke:#BA7517;} .c-amber text.th{fill:#8B5A10;}
.c-coral rect{fill:#FBEAE4;stroke:#D85A30;} .c-coral text.th{fill:#A04020;}
.c-gray rect{fill:#F0F0EE;stroke:#888780;} .c-gray text.th{fill:#555550;}
.c-green rect{fill:#E8F5E9;stroke:#2E7D32;} .c-green text.th{fill:#1B5E20;}
`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Skip if already has :root definition
  if (content.includes(':root')) {
    console.log(`SKIP (already fixed): ${file}`);
    return;
  }
  
  // Check if it uses CSS variables
  if (!content.includes('var(--')) {
    console.log(`SKIP (no CSS vars): ${file}`);
    return;
  }
  
  // Check if it uses SVG color classes
  const needsSvgColors = content.includes('c-purple') || content.includes('c-blue') || content.includes('c-teal');
  
  // Insert CSS variables right after the opening <style> tag
  const styleRegex = /<style>/i;
  if (styleRegex.test(content)) {
    const insertBlock = needsSvgColors ? cssVarBlock + svgColorClasses : cssVarBlock;
    content = content.replace(styleRegex, '<style>' + insertBlock);
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`FIXED: ${file}` + (needsSvgColors ? ' (+ SVG colors)' : ''));
  } else {
    // No <style> tag, prepend one
    const insertBlock = needsSvgColors ? cssVarBlock + svgColorClasses : cssVarBlock;
    content = '<style>' + insertBlock + '</style>\n' + content;
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`FIXED (prepended style): ${file}`);
  }
});

console.log('\nDone!');
