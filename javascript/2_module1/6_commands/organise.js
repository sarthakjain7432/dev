let fs = require("fs");
let path = require("path");

let types =
{
media: ["mp4", "mkv"],
archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf','txt',
           'ps','tex'], 
app: ['exe', 'dmg', 'pkg', "deb"],
}

function organiseFn(src)
{
    if(src == undefined)
    {
        src = process.cwd();
    }
// 1) make organised_files directory
    let organisedFilePath = path.join(src,"organised_files");
    if(fs.existsSync(organisedFilePath) == false)
    {
        fs.mkdir(organisedFilePath);
    }   

// 2) scan whole src
    let allTheFiles = fs.readdirSync(src);

// 3) check extension and give folder name (media,document --) ,
//    copy file to foler in organised_files folder
    for(let i=0; i<allTheFiles.length; i++)
    {
        let fullOriginalPath = path.join(src,allTheFiles[i]);
        if(fs.lstatSync(fullOriginalPath).isFile == true)
        {
            let folderName = checkExtNTellFolder(allTheFiles[i]);
            copyFileToDest(folderName,fullOriginalPath,src);
        }
    }
}


function checkExtNTellFolder(file)
{
    let extName = path.extname(file);
    extName = extName.slice(1);

    for(let key in types)
    {
        for(let i=0; i<types[key].length; i++)
        {
            if(types[key][i] == extName)
            {
                return key;
            }
        }
    }
    return "others";
}

function copyFileToDest(folderName,fullOriginalPath,src)
{
    let destFolderPath = path.join(src,"organised_files",folderName);
    if(fs.existsSync(destFolderPath) == false)
    {
        fs.mkdirSync(destFolderPath);
    }

    let originalFileName = path.basename(fullOriginalPath);
    let destFilePath = path.join(destFolderPath,originalFileName);
    fs.copyFileSync(fullOriginalPath,destFilePath); 
}
module.exports = 
{
    organisefxn : organiseFn
}

