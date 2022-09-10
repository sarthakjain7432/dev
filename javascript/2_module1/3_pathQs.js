// Question - make a folder of webdev then make 3 folder(js,react,browser) inside webdev
//then make module (1 - 5) folders inside those 3 folders then make file content.md in 
// all these modules having content -> hello

let path = require("path");
let fs = require("fs");

let inputArr = process.argv.slice(2);
let webdev = inputArr[0];
let js = inputArr[1];
let browser = inputArr[2];
let react = inputArr[3];

let cwd = process.cwd();
let webdevpath = path.join(cwd,webdev);
fs.mkdirSync(webdevpath);
// let jspath = path.join(cwd,webdev,js);
// fs.mkdirSync(jspath);
// let browserpath = path.join(cwd, webdev, browser);
// fs.mkdirSync(browserpath);
// let reactpath = path.join(cwd, webdev, react);
// fs.mkdirSync(reactpath);

let topicArr = inputArr.slice(1,4);
for(let i=0; i<topicArr.length; i++)
{
    let Topicpath = path.join(webdevpath,topicArr[i]);
    fs.mkdirSync(Topicpath);
    for(let j=1; j<=5; j++)
    {
        let modulePath = path.join(Topicpath,"module"+ j);
        fs.mkdirSync(modulePath);
        let filePath = path.join(modulePath,"content.md");
        fs.writeFileSync(filePath,"hello");
    }
}





