const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-yellow-400': 'bg-brand-gold',
  'text-yellow-400': 'text-brand-gold',
  'text-yellow-300': 'text-brand-gold-light',
  'text-yellow-500': 'text-brand-gold-dark',
  'bg-yellow-500': 'bg-brand-gold-dark',
  'bg-yellow-600': 'bg-brand-gold-dark',
  'border-yellow-400': 'border-brand-gold',
  'border-yellow-500': 'border-brand-gold-dark',
  'ring-yellow-400': 'ring-brand-gold',
  
  'bg-blue-900': 'bg-brand-navy',
  'bg-blue-950': 'bg-brand-navy',
  'bg-blue-800': 'bg-brand-navy-light',
  'text-blue-900': 'text-brand-navy',
  'text-blue-600': 'text-brand-navy-light',
  
  'bg-black': 'bg-brand-charcoal',
  'text-gray-900': 'text-brand-charcoal',
  'text-gray-800': 'text-brand-charcoal',
  
  'text-gray-50': 'text-brand-offwhite',
  'bg-gray-50': 'bg-brand-offwhite',
  'bg-white': 'bg-brand-surface',
  'text-white': 'text-brand-offwhite',
  
  'bg-black/90': 'bg-brand-navy/95',
  'bg-black/40': 'bg-brand-navy/60',
  'bg-black/50': 'bg-brand-navy/70',
  'bg-black/60': 'bg-brand-navy/80',
  
  // Specific gradient replacements
  'from-yellow-400': 'from-brand-gold',
  'to-yellow-200': 'to-brand-gold-light',
  'to-yellow-500': 'to-brand-gold-dark',
  
  'from-blue-900': 'from-brand-navy',
  'to-blue-800': 'to-brand-navy-light',
};

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let filepath = path.join(dir, file);
    let stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walk(filepath, callback);
    } else if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
      callback(filepath);
    }
  });
}

const dirToWalk = path.join(__dirname, 'src');

walk(dirToWalk, (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let original = content;
  
  for (const [key, value] of Object.entries(replacements)) {
    // We want to replace exactly the tailwind class, so we should ideally use regex boundaries
    // But since tailwind classes are space/quote separated, we can use a basic regex.
    const regex = new RegExp(`(?<=['"\\s\\`])` + key.replace(/\//g, '\\/') + `(?=['"\\s\\`])`, 'g');
    content = content.replace(regex, value);
    
    // Also handle template literals without quotes directly preceding
    const regex2 = new RegExp(`\\b${key.replace(/\//g, '\\/')}\\b`, 'g');
    content = content.replace(regex2, value);
  }
  
  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated ${filepath}`);
  }
});
