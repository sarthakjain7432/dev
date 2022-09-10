const request = require("request");
const cheerio = require("cheerio");
const url = "https://github.com/topics";
const getReposPageHtml = require("./reposPage");
request(url,cb);
function cb(error,response,html){
    if (error) {
      console.log(error);
    } else if (response.statusCode == 404) {
      console.log("page not found");
    } else {
      getTopicLinks(html);
    }
}
function getTopicLinks(html){
    let $ = cheerio.load(html);
    let linksElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i=0; i<linksElemArr.length; i++){
        let href = $(linksElemArr[i]).attr("href");
        let topic = href.split("/").pop();
        let topicLinks = "https://github.com" + href;
        getReposPageHtml(topicLinks,topic);
    }
}