const fs = require('fs'); 
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log("Please provide exactly one file path.");
  process.exit(1);
}
const filePath = args[0];
if (!fs.existsSync(filePath)) {
  console.log("The specified file does not exist.");
  process.exit(1);
}
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error("Error retrieving file stats:", err.message);
    process.exit(1);
  }

  console.log(`📄 File Statistics for: ${filePath}`);
  console.log(`Size: ${stats.size} bytes`);
  console.log(`Created On: ${stats.birthtime}`);
  console.log(`Last Modified: ${stats.mtime}`);
});
