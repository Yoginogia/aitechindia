const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'public', 'images', 'phones');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

// Official manufacturer CDN links that allow hotlinking
const phones = [
  // Samsung S25 Ultra - Samsung News CDN
  { file: 'samsung-s26-ultra.png', url: 'https://image.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-ultra-s938-sm-s938bzkgins-thumb-544283270' },
  // iPhone 16 Pro Max - Apple CDN  
  { file: 'iphone-16-pro-max.png', url: 'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909.jpg.og.jpg?202503201718' },
  // Xiaomi 15 Ultra  
  { file: 'xiaomi-17-ultra.png', url: 'https://i02.appmifile.com/mi-com/thread/20250219202047637/2025021920205048749.jpg' },
  // Google Pixel 9 Pro
  { file: 'google-pixel-10-pro.png', url: 'https://lh3.googleusercontent.com/1v_-VvFXIq6bUhTZEiWYbNW-rE2-SjTN-QBV1cQR_F4FtEhvU-ePTrJq02sUgZMBL7K8ZJQ9lTe2N9Pk7V6WFCixlSbMj97-g=s1000' },
  // Vivo X300 Ultra
  { file: 'vivo-x300-ultra.png', url: 'https://www.vivo.com/content/dam/vivo/in/products/vivo-x200-ultra/gallery/vivo_x200_ultra_titanium_gray_01.png' },
  // OnePlus 15
  { file: 'oneplus-15.png', url: 'https://oasis.opstatics.com/content/dam/oasis/page/2024/cn/community/OnePlus-13/OnePlus-13-Black.png' },
  // Nothing Fold 1
  { file: 'nothing-fold-1.png', url: 'https://nothing.tech/cdn/shop/files/Phone2aBlue_Desktop_4d028f53-bd27-4ea5-a1da-d44ecd52a754.png?v=1744024906&width=720' },
  // Realme GT 7 Pro
  { file: 'realme-gt-7-pro.png', url: 'https://image01.realme.net/general/20241024/1729779046073_2160X4080.png' },
  // Motorola Edge 60 Pro
  { file: 'motorola-edge-60-pro.png', url: 'https://mobilesegment.com/wp-content/uploads/2025/02/motorola-edge-60-pro-png.png' },
  // iQOO Neo 10
  { file: 'iqoo-neo-10.png', url: 'https://images-cdn.ubuy.co.in/634fe74f48e4b23a7c0d2893-iqoo-neo-6-5g-smartphone-8gb-256gb.jpg' },
  // Samsung Galaxy A56
  { file: 'samsung-galaxy-a56.png', url: 'https://image.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-a55-5g-sm-a556-sm-a556ezkains-thumb-539415832' },
  // OnePlus 15R
  { file: 'oneplus-15r.png', url: 'https://oasis.opstatics.com/content/dam/oasis/page/2025/cn/oneplus-ace5/overview/oneplus-ace5-titanium.png' },
  // iQOO 15R
  { file: 'iqoo-15r.png', url: 'https://images-cdn.ubuy.co.in/66e6e89a2ccf4e7f27141de7-iqoo-z9-turbo-5g-12gb-256gb.jpg' },
  // Redmi Note 15 Pro
  { file: 'redmi-note-15-pro.png', url: 'https://i02.appmifile.com/mi-com/thread/20241203184041268/2024120318404127699.jpg' },
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://aitechnews.co.in/',
      }
    };
    const req = protocol.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadImage(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function run() {
  for (const phone of phones) {
    const dest = path.join(destDir, phone.file);
    try {
      await downloadImage(phone.url, dest);
      const stat = fs.statSync(dest);
      if (stat.size < 5000) {
        fs.unlinkSync(dest);
        console.log(`SKIP (too small): ${phone.file}`);
      } else {
        console.log(`OK: ${phone.file} (${Math.round(stat.size/1024)}KB)`);
      }
    } catch (e) {
      console.log(`FAIL: ${phone.file} - ${e.message}`);
    }
  }
}

run();
