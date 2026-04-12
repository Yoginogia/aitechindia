const fs = require('fs');

const path = 'src/app/best-phones/BestPhonesClient.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update Interface
if (!content.includes('useCases?: string[];')) {
    content = content.replace('verdict: string;', 'verdict: string;\n  useCases?: string[];');
}

// Map of phone ID to Use Cases
const useCaseMap = {
  'redmi-14c': "['All-Rounder', 'Battery']",
  'realme-c61': "['Battery']",
  'samsung-a06': "['Trust & Brand']",
  'realme-narzo-70-pro': "['All-Rounder', 'Battery']",
  'redmi-note-14': "['Camera', 'Display']",
  'samsung-m15-5g': "['Battery', 'Long-term']",
  'iqoo-z9x': "['Gaming', 'Battery']",
  'oneplus-nord-5': "['Clean Software', 'All-Rounder']",
  'redmi-note-15-pro': "['Camera']",
  'iqoo-neo-10': "['Gaming', 'Battery']",
  'motorola-edge-60-pro': "['Display', 'Clean Software']",
  'samsung-a56': "['Long-term', 'Trust & Brand']",
  'realme-gt-7-pro': "['Gaming']",
  'oneplus-15r': "['Battery', 'Clean Software']",
  'iqoo-15r': "['Gaming']",
  'nothing-4a-pro': "['Design', 'Clean Software']",
  'oneplus-15': "['Camera', 'Charging']",
  'samsung-s26-ultra': "['Camera', 'Premium']"
};

// Replace each object to include useCases
for (const id in useCaseMap) {
    const cases = useCaseMap[id];
    // Find the verdict line for this phone by finding the id first, then looking for the next verdict line
    const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?verdict:\\s*'.*?'),\\n`);
    content = content.replace(regex, `$1,\n    useCases: ${cases},\n`);
}

fs.writeFileSync(path, content);
console.log('Use Cases injected successfully.');
