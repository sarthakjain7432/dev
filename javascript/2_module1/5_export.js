// we have to import functions and variables from a file name lib to file name client
// --------------------file - client-----------------------------------
// require - path of the file from where you want to import
let libExportObj = require("./5_export");
console.log("i am a client file");
console.log(libExportObj.varName);
console.log(libExportObj.fxn());
//------------------file - lib-----------------------------------------
let a = 10;
function fn(){
    console.log("hello i am fn");
    return "hello";
}

function notTobeExported(){
    console.log("i don't want to be exported");
}

module.exports = { 
    varName: a,
    fxn: fn
}
//------------------------------------------------------------------------