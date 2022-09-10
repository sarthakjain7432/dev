// team name,palyer name,venue,date,opponent,result,runs,balls,fours,sixes,strike rate
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const allMatchObj = require("./allMatch");
const iplPath = path.join(__dirname,"ipl");
dirCreater(iplPath);
request(url, cb);
function cb(error, response, html) {
  if (error) {
    console.log("error");
  } else {
    extractLink(html);
  }
}
function extractLink(html)
{
    let $ = cheerio.load(html);
    let anchorElem = $('a[href="/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results"]');
    let link = anchorElem.attr("href");
    let fullLink = "https://www.espncricinfo.com" + link;
    allMatchObj.gAllMatches(fullLink);
}
function dirCreater(filePath){
  if(fs.existsSync(filePath)==false){
    fs.mkdirSync(filePath);
  }
}

