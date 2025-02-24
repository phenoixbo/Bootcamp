const fs = require('fs');
const path = require('path');
const [,, command, filename] = process.argv; 
const showUsage = () => {
  console.log(`
🚀 Usage:
  my-tool create <filename>  - Create a new file
  my-tool delete <filename>  - Delete a file
  my-tool read <filename>    - Read file contents
  my-tool list               - List all files in current directory
`);
};

switch (command) {
  case 'create':
    if (!filename) return console.log('❗ Please provide a filename.');
    if (fs.existsSync(filename)) return console.log('⚠️ File already exists.');
    fs.writeFileSync(filename, 'Hello, world! 🌍');
    console.log(`✅ File '${filename}' created.`);
    break;

  case 'delete':
    if (!filename) return console.log('❗ Please provide a filename.');
    if (!fs.existsSync(filename)) return console.log('❌ File does not exist.');
    fs.unlinkSync(filename);
    console.log(`🗑️ File '${filename}' deleted.`);
    break;

  case 'read':
    if (!filename) return console.log('❗ Please provide a filename.');
    if (!fs.existsSync(filename)) return console.log('❌ File does not exist.');
    const content = fs.readFileSync(filename, 'utf-8');
    console.log(`📄 Contents of '${filename}':\n${content}`);
    break;

  case 'list':
    const files = fs.readdirSync(process.cwd()).filter(file => fs.statSync(file).isFile());
    if (files.length === 0) return console.log('📂 No files found.');
    console.log('📃 Files:\n' + files.map(f => `- ${f}`).join('\n'));
    break;

  default:
    console.log('❓ Unknown command.');
    showUsage();
}
