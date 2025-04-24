
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../public');
const targetDir = path.join(__dirname, '../public/thumbnails');

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  'AR-Dashboard-v2.png',
  'AU-Screenshot.png',
  'Apogee-Intelligence.png',
  'LSU-Screenshot.png',
  'MetroCU-Screenshot-v2.png',
  'Moden-Marketing-Dashboard.png',
  'Predictive-Analytics-v5.png',
  'Relaxing-Blob-v2.jpg',
  'Shorelight-Screenshot.png',
  'Synaptive-Sounds.png',
  'UIC-Screenshot.png',
  'US-News-Screenshot.png'
];

async function createThumbnails() {
  for (const image of images) {
    const sourcePath = path.join(sourceDir, image);
    const targetPath = path.join(targetDir, image);
    
    try {
      await sharp(sourcePath)
        .resize(350, 255, {
          fit: 'cover',
          position: 'center'
        })
        .toFile(targetPath);
      
      console.log(`Created thumbnail for ${image}`);
    } catch (error) {
      console.error(`Error processing ${image}:`, error);
    }
  }
}

createThumbnails();
