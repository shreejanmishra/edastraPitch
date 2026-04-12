import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.resolve('public/images');

// Icons are used at w-12 h-12 (48px) — generate at 2x for retina
const ICON_FILES = new Set([
  '1st_icon.png', '4k_icon.png', 'AI_icon.png', 'android_icon.png',
  'book_icon.png', 'brain_icon.png', 'career_icon.png', 'cdn_icon.png',
  'child_icon.png', 'dollar_icon.png', 'family_icon.png', 'india_icon.png',
  'indian_icon.png', 'mission_icon.png', 'moviescript_icon.png', 'power_icon.png',
  'prototype_icon.png', 'scholarship_icon.png', 'subscription_icon.png',
  'test_icon.png', 'under_construction_icon.png', 'vr_icon.png'
]);

// Team photos — used at small sizes
const TEAM_FILES = new Set([
  'CEO.jpeg', 'FoundingEngineer.jpg', 'creativeDirector.jpg',
  'childPsychologist.png', 'financial.jpg', 'marketing.png', 'Backend.png'
]);

async function optimizeImage(filePath) {
  const filename = path.basename(filePath);
  const ext = path.extname(filename).toLowerCase();
  
  // Skip SVG and already-webp files
  if (ext === '.svg' || ext === '.webp') return;
  
  const nameWithoutExt = path.basename(filename, ext);
  const outputPath = path.join(IMAGES_DIR, `${nameWithoutExt}.webp`);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    let maxWidth;
    let quality = 80;
    
    if (ICON_FILES.has(filename)) {
      maxWidth = 96;  // 2x retina for 48px display
      quality = 85;
    } else if (TEAM_FILES.has(filename)) {
      maxWidth = 400;
      quality = 80;
    } else {
      maxWidth = 1200; // Hero/section images — displayed max ~600px, 2x for retina
      quality = 80;
    }
    
    const pipeline = image.resize({
      width: Math.min(metadata.width, maxWidth),
      withoutEnlargement: true,
    }).webp({ quality });
    
    await pipeline.toFile(outputPath);
    
    const originalSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✓ ${filename} → ${nameWithoutExt}.webp  (${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB, ${savings}% smaller)`);
    
    // Remove original if conversion succeeded and it's not the same file
    if (filePath !== outputPath) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error(`✗ ${filename}: ${err.message}`);
  }
}

async function main() {
  const files = fs.readdirSync(IMAGES_DIR)
    .filter(f => /\.(png|jpg|jpeg)$/i.test(f))
    .map(f => path.join(IMAGES_DIR, f));
  
  console.log(`Optimizing ${files.length} images...\n`);
  
  for (const file of files) {
    await optimizeImage(file);
  }
  
  console.log('\nDone!');
}

main();
