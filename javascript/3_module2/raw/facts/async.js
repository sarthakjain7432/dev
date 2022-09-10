let fs = require("fs"); 

console.log("before");
// you don't know when it will be completely read

// file read network request -> sync way 
// let content = fs.readFileSync("cyberpunk, txt");
// console.log("content" + content);
// console.log("after"); 
// --------------------------------------------------
// nodejs -> async function
// function callback function
// main app that does depend on file 
// async function -> created by the enviornment

fs.readFile("cyberpunk.txt", cb);
function cb(err, data) 
{

    if (err) 
    {
        console.log(err);
    } else
    { 
        console.log("content" + data);
    }
}

console.log("after");