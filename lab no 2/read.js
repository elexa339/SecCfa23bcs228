const fs = require('fs'); const path = require('path');

// Construct the absolute path to the file
const filePath = path.resolve(  __dirname, 'sample.txt');


fs.readFile(filePath, 'utf8', (err, data) => { if (err) {
console.error('Error reading file:', err); return;
}
console.log('File contents:', data);
});
