console.log(process.argv);

arrayLength = process.argv.length - 2;

console.log(arrayLength);

function getSum(theArray){
    if(arrayLength > 0){
        arrayLength = process.argv.length - 2;
        theSum = 0;
        for (i = 2; i < arrayLength; i++){
            theSum += Number(theArray[i]);
            console.log("derp: " + theSum);
            console.log("i is: " + i);
        }
        console.log("The sum is: " + theSum);
    }
}

getSum(process.argv);
