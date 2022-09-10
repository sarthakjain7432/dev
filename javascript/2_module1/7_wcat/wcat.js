let fs = require("fs");

let inputArr = process.argv.slice(2);
let optionArr = [];
let filesArr = [];

for(let i=0; i<inputArr.length; i++)
{
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == "-")
    {
        optionArr.push(inputArr[i]);
    }
    else
    {
        filesArr.push(inputArr[i]);
    }
}

for(let i=0; i<filesArr.length; i++)
{
    let fileExist = fs.existsSync(filesArr[i]);
    if(fileExist == false)
    {
        console.log("file does not exist");
        return;
    }
}

let content = "";
for(let i=0; i<filesArr.length; i++)
{
    let cFileContent = fs.readFileSync(filesArr[i]);
    content = content + cFileContent + "\r\n";
}
let contentArr = content.split("\r\n");

// -s check
let isSPresent = optionArr.includes("-s");
if(isSPresent)
{
    for(let i=0; i<contentArr.length; i++)
    {
        if(contentArr[i]=="" && contentArr[i-1]=="")
        {
            contentArr[i] = null;
        }
        else if(contentArr[i]=="" && contentArr[i-1]=="null")
        {
            contentArr[i] = null;
        }
    }

    let tempArr = [];
    for(let i=0; i<contentArr.length; i++)
    {
        if(contentArr[i]!==null)
        {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}

// -n -> idx , -b -> idx
let indexOfN = optionArr.indexOf("-n");
let indexOfB = optionArr.indexOf("-b");
let finalOption = "";

// both are present , solve whether to implement -n or -b
if(indexOfN > -1 && indexOfB > -1)
{
    // smaller idx
    if(indexOfN < indexOfB)
    {
        finalOption = "-n";
    }
    else
    {
        finalOption = "-b";
    }
}

// is there any option
else
{
    if(indexOfN > -1)
    {
        finalOption = "-n";
    }
    else if(indexOfB > -1)
    {
        finalOption = "-b";
    }
}

if(finalOption != "")
{
    if(finalOption == "-n")
    {
        modifyContentByN(contentArr);
    }
    else if(finalOption == "-b")
    {
        modifyContentByB(contentArr);
    }
}

function modifyContentByN(contentArr)
{
    for(let i=0; i<contentArr.length; i++)
    {
        contentArr[i] = (i+1) +" "+ contentArr[i];
    }
}

function modifyContentByB(contentArr)
{
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) 
    {
        if(contentArr[i] != "")
        {
            contentArr[i] =count +" " + contentArr[i];
            count++;
        }
    }
}

console.log(contentArr.join("\r\n"));