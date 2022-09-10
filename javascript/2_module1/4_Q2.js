// QUESTION --->
// You are given path of a directory It contains n number of text files and n number of 
// directories. Write code in nodejs to read all all the files and create a new file in 
// that directory named summary.txt and dump all the content from these files.

let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
let inputDir = inputArr[0];
let allentities = fs.readdirSync (inputDir); 
let content = "";

for (let i = 0; i < allentities.length; i++) { 
    let enitityName = allentities[i];

// console.log(enitityName);
let fullPath = path.join(inputDir, enitityName);
let statsOfAPath = fs.lstatSync (fullPath);
if (statsOfAPath.isFile()) {
    //let ext = path.extname(fullPath)     
    //console.log(ext);
    //if(ext == ".txt")
    //{
        content += fs.readFileSync(fullPath);
    //}
}
}
let filePath = path.join(inputDir, "summary.txt");
fs.writeFileSync(filePath, content); 
console.log("summary file created");


// 1:6:48