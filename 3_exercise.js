//Import library
var fs = require("fs");

//Set the command line arguement
theFilePath = process.argv[2];

//Open and read the file
var readFile = fs.readFileSync(theFilePath);

//Convert to string from buffer
var stringFile = readFile.toString();

//Split string into array of substrings
stringFile.split();

var theSum = 0;

for (i in stringFile) {
    if (stringFile[i] === "\n"){
        theSum += 1;
    }
}

//Print out total number of newlines from a file
console.log(theSum);
