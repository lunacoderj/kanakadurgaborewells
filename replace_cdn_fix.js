const fs = require('fs');
const path = require('path');

const CDN_BASE = 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Regex to match the CDN base, followed by any subdirectories, and ending with a filename.
  // We want to capture the filename and throw away the subdirectories.
  // Matches: https://.../about/visitingcard.jpeg
  // Replaces with: https://.../visitingcard.jpeg
  const regex = new RegExp(CDN_BASE.replace(/\//g, '\\/') + '(?:[a-zA-Z0-9_-]+\\/)+([a-zA-Z0-9_\\.-]+\\.[a-zA-Z0-9]+)', 'g');
  
  content = content.replace(regex, `${CDN_BASE}$1`);

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Total files updated: ${changedCount}`);
