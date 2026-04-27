const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'public', 'images', 'blog');

async function convertPngsToWebp() {
  const files = fs.readdirSync(blogDir);
  const pngFiles = files.filter(f => f.endsWith('.png') && !f.endsWith('_skip.png'));
  
  let totalOriginal = 0;
  let totalConverted = 0;
  let converted = 0;
  let skipped = 0;

  for (const file of pngFiles) {
    const pngPath = path.join(blogDir, file);
    const webpName = file.replace('.png', '.webp');
    const webpPath = path.join(blogDir, webpName);
    
    const stats = fs.statSync(pngPath);
    const sizeKB = Math.round(stats.size / 1024);
    
    // Only convert if > 100KB and webp doesn't already exist
    if (sizeKB < 100) {
      skipped++;
      continue;
    }
    
    // If webp already exists, check if it's newer than png
    if (fs.existsSync(webpPath)) {
      const webpStats = fs.statSync(webpPath);
      if (webpStats.mtimeMs >= stats.mtimeMs) {
        skipped++;
        continue;
      }
    }

    try {
      totalOriginal += stats.size;
      await sharp(pngPath)
        .webp({ quality: 82, effort: 4 })
        .toFile(webpPath);
      
      const webpStats = fs.statSync(webpPath);
      totalConverted += webpStats.size;
      const savings = Math.round((1 - webpStats.size / stats.size) * 100);
      console.log(`✅ ${file} (${sizeKB}KB) → ${webpName} (${Math.round(webpStats.size/1024)}KB) | -${savings}%`);
      converted++;
    } catch (err) {
      console.error(`❌ ${file}: ${err.message}`);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Converted: ${converted} files`);
  console.log(`   Skipped: ${skipped} files`);
  console.log(`   Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   WebP: ${(totalConverted / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Saved: ${((totalOriginal - totalConverted) / 1024 / 1024).toFixed(2)} MB (${Math.round((1 - totalConverted / totalOriginal) * 100)}%)`);
}

convertPngsToWebp().catch(console.error);
