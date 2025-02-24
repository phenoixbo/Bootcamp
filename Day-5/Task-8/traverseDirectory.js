

const fs = require('fs');         
const path = require('path');     

function traverseDirectory(dirPath) {

  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    const fullPath = path.join(dirPath, item); 

    const stats = fs.statSync(fullPath);     

    if (stats.isDirectory()) {
      console.log(`📁 Directory: ${fullPath}`);
      traverseDirectory(fullPath);             
    } else if (stats.isFile()) {
      console.log(`📄 File: ${fullPath}`);
    }
  });
}

// Get directory from command-line argument or default to current directory
const dir = process.argv[2] || __dirname;

console.log(`🔍 Traversing directory: ${dir}\n`);
traverseDirectory(dir);
