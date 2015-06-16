//Import libraries
var fs = require('fs');
var path = require('path')

//Declare command line variables
var folder = process.argv[2];
var ext = '.' + process.argv[3];

console.log("The Folder: " + folder);
console.log("The ext: " + ext);

filterFiles(folder, ext, printResult);
/*
function filterFiles(folder, ext, callback){
    //Async function
    fs.readdir(folder, function (err, files){
        //Return error message if error
        //if (err) return callback(err);
        // Append '.' and create array
        //ext = "." + ext;
        var data = [];
        //For each file print back if it contains the extension
        files.forEach(function(file){
            if (path.extname(file) === ext){
                data.push(file);
                console.log(file);
                console.log("data: " + data);
            }});
        callback(null, data);
    });
}
*/
/*
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
*/

//Async function
function filterFiles (folder, ext, callback){
    fs.readdir(folder, function (err, files){
        //Return error message if error
        //if (err) return console.error(err);
        if (err) {callback(err)}
        var data = []
        //For each file print back if it contains the extension
        files.forEach(function(file){
            if (path.extname(file) === ext){
                data.push(file);
                console.log("data: " + data);
            }
        });
    callback(null, data);
    });
}

function printResult(err, data){
    if(err != null){
        console.log("There was an error");
    } else {
        for (i in data){
            console.log(data[i]);
        }
    }
}
