let fs = require("fs");
let path = require("path");

function treefn(src)
{
   if(src == undefined)
   {
      src = process.cwd();
   } 
  let content = fs.readdirSync(src);
  let parenrFolderName = path.basename(src);
  let completePath = "|_" + parenrFolderName;
  for(let i=0; i<content.length; i++)
  {
    completePath = completePath + "\n\t" + "|--" + content[i];
  }
  console.log(completePath);  
}

module.exports = 
{
    treefxn : treefn
}