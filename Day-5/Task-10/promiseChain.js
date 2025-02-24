const fs = require('fs').promises;
const readFile = (filePath) => {
  return fs.readFile(filePath, 'utf-8');
};
const processContent = (content) => {
  return content.toUpperCase();
};
const writeFile = (filePath, data) => {
  return fs.writeFile(filePath, data);
};
readFile('input.txt')
  .then((content) => {
    console.log('✅ File read successfully.');
    const processed = processContent(content);
    console.log('🔄 Content processed.');
    return writeFile('output.txt', processed);
  })
  .then(() => {
    console.log('📄 Processed content written to output.txt.');
  })
  .catch((err) => {
    console.error('❌ Error:', err.message);
  });
