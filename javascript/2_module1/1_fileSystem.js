//implementation -> files / directory(folder) interact
// files -> read /write /update delete 
const { DESTRUCTION } = require("dns");
let fs = require("fs");
let content = fs.readFileSync("f1.txt");

// buffer -> video, audio text
// console.log("content: ", content); 
// +-> concatinate -> string => text
console.log("content:" + content); 

// write -> writeFileSync
// file doesn't exist -> file create content put 
//file does exist -> content override 
fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");

// update
fs.appendFileSync("abc.txt", "Bhai khush kyu nhi hai");

// delete
// fs.unlinkSync("abc.txt");
// console.log("File removed");

// *******directory************

// create
// fs.mkdirSync("myDirectory");

// delete
// fs.rmdirSync ("myDirectory");

// path -> check does it exist or not
// let doesExist = fs.existsSync("fs1.js");
// console.log("This path exist ?", doesExist);

// path -> belongs to a directory or file
// let statsOfAPath = fs.1statSync("dir1");    to check create dir1 folder or file in
// console.log("stats", statsOfAPath);                        module1
// console.log("isFile? statsOfAPath.isFile());
// console.log("isDirectory?", statsOfAPath.isDirectory());

// directory -> content
// let address = anything, example module1
// let content = fs.readdirSync(address); 
// console.log("directroy content", content);

//copy
//first param -> src file path and destination file path
// let srcFilePath = address
// let destDir = address
// let toBeCopiedFileName = path.basename(srcFilePath);  path.basename return last portion of the path
// let destPath = path.join(destDir,toBeCopiedFileName);
// fs.copyFileSync(srcFilePath,destPath);