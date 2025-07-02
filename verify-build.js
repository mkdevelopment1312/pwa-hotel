#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Verifying PWA build...\n');

const distPath = path.join(__dirname, 'dist');
const requiredFiles = [
  'index.html',
  'manifest.json',
  'service-worker.js',
  'favicon.svg',
  'favicon.ico'
];

const requiredDirs = [
  'assets'
];

let allGood = true;

// Check if dist directory exists
if (!fs.existsSync(distPath)) {
  console.error('❌ dist directory does not exist. Run `npm run build` first.');
  process.exit(1);
}

// Check required files
console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allGood = false;
  }
});

// Check required directories
console.log('\n📂 Checking required directories:');
requiredDirs.forEach(dir => {
  const dirPath = path.join(distPath, dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    console.log(`✅ ${dir}/ (${files.length} files)`);
  } else {
    console.log(`❌ ${dir}/ - MISSING`);
    allGood = false;
  }
});

// Check index.html for correct paths
console.log('\n🔗 Checking index.html paths:');
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Check for bundled JS/CSS
  const hasJS = indexContent.includes('/pwa-hotel/assets/') && indexContent.includes('.js');
  const hasCSS = indexContent.includes('/pwa-hotel/assets/') && indexContent.includes('.css');
  const hasManifest = indexContent.includes('/pwa-hotel/manifest.json');
  const hasFavicon = indexContent.includes('/pwa-hotel/favicon');
  
  console.log(`${hasJS ? '✅' : '❌'} Bundled JavaScript referenced`);
  console.log(`${hasCSS ? '✅' : '❌'} Bundled CSS referenced`);
  console.log(`${hasManifest ? '✅' : '❌'} Manifest path correct`);
  console.log(`${hasFavicon ? '✅' : '❌'} Favicon paths correct`);
  
  if (!hasJS || !hasCSS || !hasManifest || !hasFavicon) {
    allGood = false;
  }
}

// Check service worker
console.log('\n⚙️ Checking service worker:');
const swPath = path.join(distPath, 'service-worker.js');
if (fs.existsSync(swPath)) {
  const swContent = fs.readFileSync(swPath, 'utf8');
  const hasCorrectPaths = swContent.includes('/pwa-hotel/');
  const hasVersionBump = swContent.includes('hotel-5star-v2');
  
  console.log(`${hasCorrectPaths ? '✅' : '❌'} Service worker uses correct base paths`);
  console.log(`${hasVersionBump ? '✅' : '❌'} Service worker version updated`);
  
  if (!hasCorrectPaths || !hasVersionBump) {
    allGood = false;
  }
}

console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('🎉 Build verification PASSED! Your PWA is ready for deployment.');
  console.log('\n💡 Next steps:');
  console.log('   1. Push your changes: git push origin main');
  console.log('   2. Wait for GitHub Actions to deploy');
  console.log('   3. Visit: https://mkdevelopment1312.github.io/pwa-hotel/');
  console.log('   4. Clear browser cache if needed (Ctrl+Shift+R)');
} else {
  console.log('❌ Build verification FAILED! Please fix the issues above.');
  process.exit(1);
}
