var fs = require("fs");

function getDirectory(callback){
    theDirectory = process.argv[2];
    theFileExtension = process.argv[3];
    fs.readdir(process.argv[2], function returnContent(err, list){
        filteredList = [];
        console.log(list);
        /*
        for (i in list){
            if (list[i].includes("." + process.argv[3]){
                filteredList.push(list[i]);
            }
        }
        */
        callback(filteredList);
    })
}


function printFiles(fileList){
    for (i in fileList){
        console.log(fileList[i]);
    }
}

getDirectory(printFiles);
/*
//Import library
var fs = require("fs");

//Read the file asynchronously
function getFile(callback){
    //Set the command line arguement
    theFilePath = process.argv[2];
    //Read the file async
    fs.readFile(theFilePath, function doneReading(err, fileContents){
        //Convert to string from buffer
        var stringFile = fileContents.toString();
        //Split the string and count newLines
        stringFile.split();
        var theSum = 0;
        for (i in stringFile){
            if (stringFile[i] === "\n"){
                theSum += 1;
            }
        }
        //Invoke callback (printNewLines) when finished with async task
        callback(theSum);
    })
}

//The callback
function printNewLines(theSum){
    console.log(theSum);
}

//Call the function
getFile(printNewLines);
*/
