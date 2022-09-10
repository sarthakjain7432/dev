const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard"
function processScorecard(url) {
    request(url, cb);
}
function cb(error, response, html) {
  if (error) {
    console.log("error");
  } else {
    extractMatchDetails(html);
  }
}
function extractMatchDetails(html)
{
  let $ = cheerio.load(html);
  // ipl
  //    team
  //        player
  //              venue,date,opponent,result,runs,balls,fours,sixes,strike rate
  // venue, date,result will same for both the teams so find them first
  // venue,date - .ds-flex.ds-items-center .ds-grow>.ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid
  // result - .ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title
  let descElem = $(".ds-flex.ds-items-center .ds-grow>.ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
  let result = $(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
  let stringArr = descElem.text().split(",");
  let venue = stringArr[1].trim();
  let date = stringArr[2].trim(); 
  result = result.text();
  let innings = $(".ds-bg-fill-content-prime.ds-rounded-lg");
  //let htmlString = "";
  for(let i=0; i<innings.length; i++)
  {
    //htmlString += $(innings[i]).html();
    //team
    //    player
    //          opponent,runs,balls,fours,sixes,strike rate
    let teamName = $(innings[i]).find(".ds-flex.ds-items-center.ds-cursor-pointer.ds-px-4").text();
    teamName = teamName.split("INNINGS")[0].trim();
    let opponentIndex = i==0 ? 1:0;
    let opponentName = $(innings[opponentIndex]).find(".ds-flex.ds-items-center.ds-cursor-pointer.ds-px-4").text();
    opponentName = opponentName.split("INNINGS")[0].trim();
    console.log(`${venue} | ${date} | ${teamName} | ${opponentName} | ${result}`)
    let cInnings = $(innings[i]);
    let allRows = cInnings.find("tbody tr");
    for(let j=0; j<allRows.length; j++)
    {
      let allCols = $(allRows[j]).find("td");
      //console.log(allCols.length);
      let isWorthy = $(allCols[0]).hasClass("ds-hidden");
      if(allCols.length == 8)
      {
        //console.log(allCols.text());
        let playerName = $(allCols[0]).text().trim();
        let runs = $(allCols[2]).text().trim();
        let balls = $(allCols[3]).text().trim();
        let fours = $(allCols[5]).text().trim();
        let sixes = $(allCols[6]).text().trim();
        let strikeRate = $(allCols[7]).text().trim();
        console.log(`${playerName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${strikeRate}`)
        processPlayer(teamName,playerName,runs,balls,fours,sixes,strikeRate,opponentName,venue,date,result);
      }
    }
  }
  //console.log(htmlString);
}
function processPlayer(teamName,playerName,runs,balls,fours,sixes,strikeRate,opponentName,venue,date,result){
  let teamPath = path.join(__dirname,"ipl",teamName);
  dirCreater(teamPath);
  let palyerPath = path.join(teamPath,playerName + ".xlsx");
  let content = excelReader(palyerPath,playerName);
  let playerObj = {
    teamName,
    playerName,
    runs,
    balls,
    fours,
    sixes,
    strikeRate,
    opponentName,
    venue,
    date,
    result
  }
  content.push(playerObj);
  excelWriter(palyerPath,content,playerName);
}
function dirCreater(filePath) {
  if (fs.existsSync(filePath) == false) {
    fs.mkdirSync(filePath);
  }
}
function excelWriter (filePath,json,sheetName){
   let newWB = xlsx.utils.book_new(); 
   let newWS = xlsx.utils.json_to_sheet(json); 
   xlsx.utils.book_append_sheet(newWB,newWS,sheetName); 
   xlsx.writeFile(newWB,filePath);
}
function excelReader(filePath, sheetName) {
  if (fs.existsSync(filePath) == false) {
    return [""];
  }
  let wb = xlsx.readFile(filePath); // get wb
  let excelData = wb.Sheets[sheetName]; // sheets
  let ans = xlsx.utils.sheet_to_json(excelData); //sheet data get
  return ans;
}
module.exports = {
  ps : processScorecard
}