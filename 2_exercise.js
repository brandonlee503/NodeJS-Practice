arrayLength = process.argv.length-2;

function getSum(theArray){
    if(arrayLength > 0){
        theSum = 0;
        for (i = 2; i < arrayLength+2; i++){
            theSum += Number(theArray[i]);
        }
        console.log(theSum);
    }
}

getSum(process.argv);
