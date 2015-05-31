//Set length of command line arguement array for future use ( -2 for 'node' and the program path) 
arrayLength = process.argv.length-2;

//Function accumulate sum
function getSum(theArray){
    if(arrayLength > 0){
        theSum = 0;
        for (i = 2; i < arrayLength+2; i++){
            theSum += Number(theArray[i]);
        }
        console.log(theSum);
    }
}

//Call function
getSum(process.argv);
