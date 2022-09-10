// npm i request
let request = require("request");
console.log("before");
request('http://www.google.com',cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log("error"); // print the error if one occurred
    }
    else if(response.statuscode == 404)
    {
        console.log("page not found");
    }
    else
    {
        console.log(html); // print the html for the google homepage
    }
}
console.log("after");
// 50:5
