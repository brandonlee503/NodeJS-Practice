//Import library
var fs = require("fs");

//Set the command line arguement
theFile = process.argv[2];
console.log("This is the file path: " + theFile); //just test

//Open and read the file
var readFile = fs.readFileSync(theFile);

//Convert to string from buffer
readFile.toString();

//should just print out the string
console.log("This is the buffer to string thing: " + readFile);

//Split string into array of substrings
//readFile.split();

var theSum = 0;

for (i in readFile) {
    if (readFile[i] === "\n"){
        theSum += 1;
    }
}

console.log("This is the total number of newlines: " + theSum);
