const puppeteer = require("puppeteer");
const fs = require("fs");
const pdfdoc = require("pdfkit");
let cTab;
let link = "https://www.youtube.com/playlist?list=PLW-S5oymMexXTgRyT3BWVt_y608nt85Uj";
(async function(){
    try {
        let browserOpen = puppeteer.launch({
          headless: false,
          args: ["--start-maximized"],
          defaultViewport: null
        });
        let browserInstance = await browserOpen;
        let allTabsArr = await browserInstance.pages();
        cTab = allTabsArr[0];
        await cTab.goto(link);
        await cTab.waitForSelector("h1#title");
        let name = await cTab.evaluate(function(select){return document.querySelector(select).innerText},"h1#title");
        //console.log(name);
        let allData = await cTab.evaluate(getData,'yt-formatted-string.style-scope.ytd-playlist-sidebar-primary-info-renderer');
        //console.log(name,allData.noOfVideos,allData.noOfViews);
        let totalVideos = allData.noOfVideos.split(" ")[0];
        //console.log(totalVideos);
        let currentVideos = await getCvideosLength();
        //console.log(currentVideos);
        while(totalVideos-currentVideos > 1){
            await scrollToBottom();
            currentVideos = await getCvideosLength();
        }
        let FinalList = await getStats();
        //console.log(FinalList);
        let pdf = new pdfdoc;
        pdf.pipe(fs.createWriteStream('playlist.pdf'));
        pdf.text(JSON.stringify(FinalList));
        pdf.end();
    } catch (error) {
        console.log(error);
    }
})()
function getData(selector){
    let allElems = document.querySelectorAll(selector);
    let noOfVideos = allElems[1].innerText;
    let noOfViews = allElems[2].innerText;
    return{noOfVideos,noOfViews};
}
async function getCvideosLength(){
    let length = await cTab.evaluate(getLength,"#thumbnail.style-scope.ytd-playlist-video-renderer");
    return length;
}  
function getLength(durationSelect){
    let durationElem = document.querySelectorAll(durationSelect);
    return durationElem.length;
} 
async function scrollToBottom(){
    await cTab.evaluate(goToBottom);
    function goToBottom(){
        window.scrollBy(0,window.innerHeight); 
    }
}
function getNameAndDuration(videoSelector,durationSlector){
    let videoElem = document.querySelectorAll(videoSelector);
    let durationElem = document.querySelectorAll(durationSlector);
    let currentList = [];
    for(let i=0; i<durationElem.length; i++){
        let videoTitle = videoElem[i].innerText;
        let duration = durationElem[i].innerText;
        currentList.push({videoTitle,duration});
    }
    return currentList;
}
async function getStats(){
    let list = await cTab.evaluate(getNameAndDuration,
        '#video-title.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer',
        '#text.style-scope.ytd-thumbnail-overlay-time-status-renderer');
    return list;
}