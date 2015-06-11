//Import libraries
var fs = require('fs');
var path = require('path')

//Declare command line variables
var folder = process.argv[2];
var ext = '.' + process.argv[3];

//Async function
fs.readdir(folder, function (err, files){
    //Return error message if error
    if (err) return console.error(err);
    //For each file print back if it contains the extension
    files.forEach(function(file){
        if (path.extname(file) === ext){
            console.log(file);
        }});
});

/*
 * Old Method
 *
var fs = require("fs");

function getDirectory(callback){
    theDirectory = process.argv[2];
    theFileExtension = process.argv[3];
    fs.readdir(process.argv[2], function returnContent(err, list){
        filteredList = [];
        //console.log(list);
        //console.log(process.argv[3]);

        for (i in list){
            current = list[i].split(".").pop();
            //console.log(current);
            if (current === process.argv[3]){
                filteredList.push(list[i]);
            }
        }
        callback(filteredList);
    })
}


function printFiles(fileList){
    for (i in fileList){
        console.log(fileList[i]);
    }
}

getDirectory(printFiles);
*/
