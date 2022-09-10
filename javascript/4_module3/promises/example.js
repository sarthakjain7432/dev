let fs = require("fs")
console.log("before");
// fs.readFile("f1.txt",function (error,data){
//     console.log(data);
// })
let promise = fs.promises.readFile("f1.txt");
console.log(promise);
//fulfiled
promise.then(function(data){
    console.log("" + data);
})
//rejected
promise.catch(function(err){
    console.log(err);
})
console.log("after");