const fs = require('fs');


const command = process.argv[2]; 
const file = process.argv[3];  
const text = process.argv[4];   

if (command === "create") {
    if (fs.existsSync(file)) {
        console.log("File already exists!");
    } else {
        fs.writeFileSync(file, text);
        console.log("Note created successfully.");
    }
}

else if (command === "view") {
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, "utf8");
        console.log(`Contents of ${file}:\n${data}`);
    } else {
        console.log("File does not exist.");
    }
}

else if (command === "append") {
    if (fs.existsSync(file)) {
        fs.appendFileSync(file, "\n" + text);
        console.log("Content appended successfully.");
    } else {
        console.log("File does not exist.");
    }
}

else if (command === "delete") {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log("File deleted successfully.");
    } else {
        console.log("File does not exist.");
    }
}

else {
    console.log("Invalid command! Use create/view/append/delete.");
}