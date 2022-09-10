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
    let elemsArr = $(".ds-text-tight-l.ds-font-bold");
    let wTeamName = $(elemsArr[1]).text().trim();
    //console.log(wTeamName);
    let inningsArr = $(".ds-bg-fill-content-prime.ds-rounded-lg");
    //let htmlStr = "";
    for(let i=0; i<inningsArr.length; i++)
    {
        //let cHtml = $(inningsArr[i]).html();
        //htmlStr += cHtml;
        let inningsHeading = $(inningsArr[i]).find(".ds-grow");
        let inningsHeadingText = inningsHeading.text();
        
        let teamName = inningsHeadingText.split("INNINGS")[0];
        teamName = teamName.trim();
        //console.log(teamName);
        let hwtname = "";
        let hw = 0;
        if(wTeamName != teamName)
        {
          //console.log(teamName);
          let WTBBarr = $(inningsArr[i]).find(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed"); // winning team batting bowling
          let WTBow = $(WTBBarr[1]);
          //let WTBowHtml = $(WTBow).html();
          //console.log(WTBowHtml);
          let allBowlers = $(WTBow).find(".ds-border-b.ds-border-line.ds-text-tight-s");
          for(let j=1; j<allBowlers.length; j++)
          {
            let allColsOfBowlers = $(allBowlers[j]).find("td");
            let bowlersName = $(allColsOfBowlers[0]).text();
            let noOfWikets = $(allColsOfBowlers[4]).text();
            if(noOfWikets>hw)
            {
              hw = noOfWikets;
              hwtname = bowlersName;
            }                      
          } 
          console.log(`palyer name: ${hwtname} wickets: ${hw}`);         
        }
    }
    // console.log(htmlStr);
} 
