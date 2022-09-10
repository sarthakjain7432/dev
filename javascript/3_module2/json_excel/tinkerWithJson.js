// let fs = require("fs");
// // let buffer = fs.readFileSync("./examples.json");
// // console.log(buffer);
// // console.log("````````````````````````````````");
// // let data = JSON.parse(buffer);
// let data = require("./examples.json");
// data.push({
//   name: "thor",
//   "last name": "rogers",
//   isAvenger: true,
//   friends: ["bruce", "peter", "natasha"],
//   age: 45,
//   address: {
//     city: "newyork",
//     state: "manhatten",
//   },
// });
// let stringData = JSON.stringify(data);
// fs.writeFileSync("./examples.json",stringData);

// ----------------------------------------------------------------------------
// ------json to excel--------------
let fs = require("fs");
let xlsx = require("xlsx");
// let data = require("./examples.json");
// // wb - filepath,ws - name,json data
//function excelWriter (filePath,json,sheetName){
  // let newWB = xlsx.utils.book_new(); // new worksheet
  // let newWS = xlsx.utils.json_to_sheet(json); // json data - excel format convert
  // xlsx.utils.book_append_sheet(newWB,newWS,sheetName); // new wb, ws, sheet name
  // xlsx.writeFile(newWB,filePath);
//}
// --------excel to json------------
function excelReader(filePath,sheetName){
  if(fs.existsSync(filePath)==false){
    return [""];
  }
  let wb = xlsx.readFile(filePath); // get wb
  let excelData = wb.Sheets[sheetName]; // sheets
  let ans = xlsx.utils.sheet_to_json(excelData); //sheet data get
  return ans; 
}




