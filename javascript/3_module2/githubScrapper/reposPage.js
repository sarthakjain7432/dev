const request = require("request");
const cheerio = require("cheerio");
const getIssuesPageHtml = require("./issues");
function getReposPageHtml(url,topic){
    request(url, cb);
    function cb(error, response, html) {
      if (error) {
        console.log(error);
      } else if (response.statusCode == 404) {
        console.log("page not found");
      } else {
        getReposLinks(html);
      }
    }
    function getReposLinks(html){
        let $ = cheerio.load(html);
        let headdingArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
        //console.log(topic);
        for(let i=0;i<8;i++){
            let twoAnchors = $(headdingArr[i]).find("a");
            let Links = $(twoAnchors[1]).attr("href");
            let fullLink = `https://github.com${Links}/issues`;
            let repoName = Links.split("/").pop();
            getIssuesPageHtml(fullLink,topic,repoName);
        }
        //console.log("`````````````````````````````");
    }
}
module.exports = getReposPageHtml;