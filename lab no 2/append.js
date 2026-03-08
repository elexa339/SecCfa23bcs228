const fs = require('fs');
const path = require('path');


const content = 'This is some sample content to be written asynchronously.\n';


const filePath = path.resolve(__dirname, 'output.txt');

fs.appendFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File has been written successfully.');
});