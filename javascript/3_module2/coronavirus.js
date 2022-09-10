let request = require('request');
let cheerio = require('cheerio');
//let chalk = require('chalk');
request("https://www.worldometers.info/coronavirus", cb);
function cb(error, response, html) {
  if (error) 
  {
    console.log("error"); // print the error if one occurred
  } 
  else 
  {
    handlehtml(html); // print the html for the google homepage
  }
}
// npm i cheerio
function handlehtml(html)
{
    let selTool = cheerio.load(html);
    //let h1s = selTool("h1");
    //console.log(h1s.length);
    let contentArr = selTool(".maincounter-number");
    // [i] -> wrap selTool
    // for(let i=0; i<contentArr.length;i++)
    // {
    //   let data = selToll(contentArr[i]).text();
    //   console.log("data" , data);
    // }
    let total = selTool(contentArr[0]).text();
    let deaths = selTool(contentArr[1]).text();
    let recovered = selTool(contentArr[2]).text();
// npm i chalk
    console.log("total cases: " + total);
    console.log("total deaths: " + deaths);
    console.log("total recovered cases: " + recovered);
}


