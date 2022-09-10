const puppeteer = require("puppeteer");
const browserOpenPromise = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    args:["--start-maximized"]
});
let page;
browserOpenPromise
.then(function(browser){
    let pageArrPromise = browser.pages();// currently opened tabs
    return pageArrPromise;
}).then(function(browserPages){
    page = browserPages[0];
    let gotoPromsie = page.goto("https://www.google.com/");
    return gotoPromsie;
}).then(function(){
    // waiting for the element to appear on the page
    let elementWaitPromise = page.waitForSelector("input[type='text']",{visible : true});
    return elementWaitPromise;
})
.then(function(){
    //console.log("reached google homepage");
    // type anything on that page -> selector
    let keysWillBeSendPromise = page.type("input[type='text']","pepcoding");
    return keysWillBeSendPromise;
}).then(function(){
    // page.keyboard is used to type special characters
    let enterWillBePressed = page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
    let elementWaitPromise = page.waitForSelector(".LC20lb.MBeuO.DKV0Md", {visible: true,});
    return elementWaitPromise;
}).then(function(){
    let keysWillBeSendPromise = page.click(".LC20lb.MBeuO.DKV0Md");
    return keysWillBeSendPromise;
}).catch(function(err){
    console.log("err");
})