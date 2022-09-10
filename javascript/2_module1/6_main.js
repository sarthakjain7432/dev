let helpObj = require("./6_commands/help");
let treeObj = require("./6_commands/tree");
let organiseObj = require("./6_commands/organise");
let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch (command) {
  case "tree":
    treeObj.treefxn(inputArr[1])
    break;
  case "organise":
    organiseObj.organisefxn(inputArr[1])
    break;
  case "help":
    helpObj.helpfxn()
    break;
  default:
    console.log("kindly enter the correct cmd");
    break;
}

// main input
// input -> node main.js tree "path"
// print -> tree command executed with "path"
// input -> node main.js organise "path"
// print -> organise command executed with "path"
// input -> node main.js help
// print -> list of all commands 
// 1) node main.js tree "path"
// 2) node main.js organise "path"
// 3) node main.js help