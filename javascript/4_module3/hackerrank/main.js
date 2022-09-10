const puppeteer = require("puppeteer");
const { answers } = require("./code");
const email = "kumarsamarthya8@gmail.com";
const password = "kumarsamarthya@890"
const codeObj = require("./code");

let browserOpenPromise = puppeteer.launch({
    headless:false,
    args:["--start-maximized"],
    defaultViewport:null
})
let page;
browserOpenPromise
  .then(function (browser) {
    let pageArrPromise = browser.pages(); // currently opened tabs
    return pageArrPromise;
  })
  .then(function (browserPages) {
    page = browserPages[0];
    let hackerRankOpenPromsie = page.goto(
      "https://www.hackerrank.com/auth/login"
    );
    return hackerRankOpenPromsie;
  })
  .then(function () {
    let emailIsEntered = page.type("input[id='input-1']", email, { delay: 50 }); //delay -> to see email typing
    return emailIsEntered;
  })
  .then(function () {
    let passwordIsEntered = page.type("input[type='password']", password, { delay: 50 }); 
    return passwordIsEntered;
  })
  .then(function(){
    let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]',{ delay: 50 });
    return loginButtonClicked;
  })
  .then(function(){
    let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]',page)
    return clickOnAlgoPromise;
  })
  .then(function(){
    let getToWarmup = waitAndClick("input[value='warmup']",page);
    return getToWarmup;
  })
  // .then(function(){
  //   let waitFor3Seconds = page.waitFor(3000)
  //   return waitFor3Seconds;
  // })
  .then(function(){
    let allChalengesPromise = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
    return allChalengesPromise;
  })
  .then(function(questionsArr){
    //console.log("number of questions" , questionsArr.length);
    let questionWillBeSolved = questionSolver(page,questionsArr[0],codeObj.answers);
    return questionWillBeSolved;
  })
  function waitAndClick(selector,cPage){
    return new Promise(function(resolve,reject){
      let waitForModelPromise = cPage.waitForSelector(selector);
      waitForModelPromise.then(function(){
        let clickModel = cPage.click(selector);
        return clickModel;
      }).then(function(){
        resolve();
      }).catch(function(err){
        reject();
      })
    })
  }
  function questionSolver(page,question,answer){
    return new Promise(function(resolve,reject){
      let questionWillBeClicked = question.click();
      questionWillBeClicked
        .then(function () {
          let editorInFocusPromise = waitAndClick(
            ".monaco-editor.no-user-select.vs",
            page
          );
          return editorInFocusPromise;
        })
        .then(function () {
          return waitAndClick(".checkbox-wrap", page);
        })
        .then(function () {
          return page.waitForSelector("textarea.custominput");
        })
        .then(function () {
          return page.type("textarea.custominput", answers, { delay: 40 });
        })
        .then(function () {
          let ctrlIsPressed = page.keyboard.down("Control");
          return ctrlIsPressed;
        })
        .then(function () {
          let AisPressed = page.keyboard.press("A", { delay: 100 });
          return AisPressed;
        })
        .then(function () {
          let XisPressed = page.keyboard.press("X", { delay: 100 });
          return XisPressed;
        })
        .then(function () {
          let ctrlIsUnpressed = page.keyboard.up("Control");
          return ctrlIsUnpressed;
        })
        .then(function () {
          let mainEditorInFocus = waitAndClick(
            ".monaco-editor.no-user-select.vs",
            page
          );
          return mainEditorInFocus;
        })
        .then(function () {
          let ctrlIsPressed = page.keyboard.down("Control");
          return ctrlIsPressed;
        })
        .then(function () {
          let AisPressed = page.keyboard.press("A", { delay: 100 });
          return AisPressed;
        })
        .then(function () {
          let VisPressed = page.keyboard.press("V", { delay: 100 });
          return VisPressed;
        })
        .then(function () {
          let ctrlIsUnpressed = page.keyboard.up("Control");
          return ctrlIsUnpressed;
        })
        .then(function(){
          return page.click(".hr-monaco__run-code"); 
        })
        .then(function(){
          resolve();
        }).catch(function(err){
          reject();
        })
    })
  }