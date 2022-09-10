const request = require("request");
const cheerio = require("cheerio");
const scorecardObj = require("./scorecard");
function allMatchesLink(url) {
  request(url, function (error, response, html) {
    if (error) {
      console.log("error");
    } else {
      extractAllLinks(html);
    }
  });
}
function extractAllLinks(html) {
  let $ = cheerio.load(html);
  //20,24,28,32,36,------,256.
  let linksElem = $('.ds-inline-flex.ds-items-center.ds-leading-none a[class = "ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block"]');
  for (let i = 32; i < linksElem.length - 4; i = i + 4) {
    let allLinks = $(linksElem[i]).attr("href");
    let fullLinks = "https://www.espncricinfo.com" + allLinks;
    console.log(fullLinks);
    scorecardObj.ps(fullLinks);
  }
}
module.exports = {
    gAllMatches : allMatchesLink
}