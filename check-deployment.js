#!/usr/bin/env node

import https from 'https';

console.log('🔍 Checking GitHub Pages deployment status...\n');

const SITE_URL = 'https://mkdevelopment1312.github.io/pwa-hotel/';
const MANIFEST_URL = 'https://mkdevelopment1312.github.io/pwa-hotel/manifest.json';
const SW_URL = 'https://mkdevelopment1312.github.io/pwa-hotel/service-worker.js';

async function checkUrl(url, name) {
  return new Promise((resolve) => {
    const request = https.get(url, (response) => {
      const status = response.statusCode;
      console.log(`${status === 200 ? '✅' : '❌'} ${name}: ${status}`);
      resolve(status === 200);
    });
    
    request.on('error', (error) => {
      console.log(`❌ ${name}: Error - ${error.message}`);
      resolve(false);
    });
    
    request.setTimeout(10000, () => {
      request.destroy();
      console.log(`❌ ${name}: Timeout`);
      resolve(false);
    });
  });
}

async function main() {
  const results = await Promise.all([
    checkUrl(SITE_URL, 'Main site'),
    checkUrl(MANIFEST_URL, 'PWA Manifest'),
    checkUrl(SW_URL, 'Service Worker')
  ]);
  
  const allGood = results.every(result => result);
  
  console.log('\n' + '='.repeat(50));
  
  if (allGood) {
    console.log('🎉 All endpoints are accessible!');
    console.log(`🌐 Visit: ${SITE_URL}`);
  } else {
    console.log('❌ Some endpoints are not accessible.');
    console.log('💡 Wait a few minutes for GitHub Pages to fully deploy.');
    console.log('🔄 Or check GitHub Actions: https://github.com/mkdevelopment1312/pwa-hotel/actions');
  }
}

main().catch(console.error);
