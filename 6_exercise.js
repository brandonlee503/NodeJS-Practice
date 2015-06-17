//Import module
var myModule = require("./6_module.js");

//Declare command line variables
var folder = process.argv[2];
var ext = process.argv[3];

//Call imported function with above variables and callback
myModule(folder, ext, function printResults(err, files){
	
	//Check for errors during async function
    if(err != null){
        console.error("There was an error in filtering the files: ", err);
    } else {
        for (i in files){
            console.log(files[i]);
        }
    }
});