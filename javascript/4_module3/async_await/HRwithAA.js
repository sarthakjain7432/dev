const puppeteer = require("puppeteer");
//const { answers } = require("./code");
const email = "kumarsamarthya8@gmail.com";
const password = "kumarsamarthya@890";
//const codeObj = require("./code");

(async function(){
    try {
        let browserInstance = await puppeteer.launch({
          headless: false,
          args: ["--start-maximized"],
          defaultViewport: null,         
        })
        let newTab =await await browserInstance.newPage();
        await newTab.goto("https://www.hackerrank.com/auth/login");
        await newTab.type("input[id='input-1']", email, { delay: 50 });
        await newTab.type("input[type='password']", password, { delay: 50 });
        await newTab.click('button[data-analytics="LoginPassword"]', {delay: 50});
        await waitAndClick('.topic-card a[data-attr1="algorithms"]',newTab);
        await waitAndClick("input[value='warmup']",newTab);
        let allChallenges = await newTab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
        console.log(allChallenges.length);
    } catch (error) {
        console.log("error");
    }
})();
async function waitAndClick(selector,cPage){
    await cPage.waitForSelector(selector);
    let selectorClicked = cPage.click(selector);
    return selectorClicked;
}
