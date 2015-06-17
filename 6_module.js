//Import libraries
var fs = require('fs');
var path = require('path');

//The exported function
module.exports = function filterFiles(folder, ext, callback){

    //The async part of the function with callback
    fs.readdir(folder, function (err, files){

        //Return error message if error
        if (err) {return callback(err)}

        //For each file print back if it contains the extension, filter initiates callback
        //for every array index and returns index contents if true is returned
        files = files.filter(function(file){
            return path.extname(file) === "." + ext;
        });
    callback(null, files);
    });
}