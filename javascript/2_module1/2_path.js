let path = require("path");
let fs = require("fs");

// path.join()

// input
let inputArr = process.argv.slice(2);        // dir1 -> hello.txt -> hello how are you
let fileName = inputArr[0];
let content = inputArr[1];
// console.log("fileName", fileName);
// console.log("content", content);

fs.mkdirSync("dir1");
//current path of directory
let currentpath = process.cwd();
// console.log("currentPath", currentpath);
// path -> paths -> platform independent
let filePath = path.join(currentpath, "dir1", fileName);
// console.log("filePath", filePath);
fs.writeFileSync(filePath, content);    

// 2:38:09 jul 24   