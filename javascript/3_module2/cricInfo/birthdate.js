const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard"
request(url, cb);
function cb(error, response, html) 
{
  if (error) 
  {
    console.log("error");
  } 
  else 
  {
    extractHTML(html);
  }
}

function extractHTML(html)
{
    let $ = cheerio.load(html);
    let inningsArr = $(".ds-bg-fill-content-prime.ds-rounded-lg");
    for(let i=0; i<inningsArr.length; i++)
    {
        let inningsHeading = $(inningsArr[i]).find(".ds-grow");
        let inningsHeadingText = inningsHeading.text();        
        let teamName = inningsHeadingText.split("INNINGS")[0];
        teamName = teamName.trim();       
        
        let BBarr = $(inningsArr[i]).find(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed"); // winning team batting bowling
        let Bat = $(BBarr[0]);
        let allBatsman = $(Bat).find(".ds-border-b.ds-border-line.ds-text-tight-s");
        for(let j=1; j<allBatsman.length; j++)
        {
           let allColsOfBatsman = $(allBatsman[j]).find("td");
           let batsmanName = $(allColsOfBatsman[0]).text(); 
           let href = $(allColsOfBatsman).find("a").attr("href");
           let fullLink = "https://www.espncricinfo.com" + href;
           //console.log(fullLink);
           //console.log(`Teams Name : ${teamName} batsman name: ${batsmanName}`);
           getBirthdate(fullLink,batsmanName,teamName);                             
        }                         
    }
}

function getBirthdate(url,batsmanName,teamName)
{
  request(url, cb);
  function cb(error, response, html) {
    if (error) {
      console.log("error");
    } else {
      extracBirthdate(html,batsmanName,teamName);
    }
  }
}

function extracBirthdate(html,batsmanName,teamName,)
{
  let $ = cheerio.load(html);
  let detailsArr = $(".ds-text-title-s.ds-font-bold.ds-text-ui-typo");
  let birthdate = $(detailsArr[1]).text();
  console.log(`${batsmanName} plays for ${teamName} was born on ${birthdate}`);
}


