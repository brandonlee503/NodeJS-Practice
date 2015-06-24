var http = require("http");

var urlList = process.argv.slice(2);
var resultList = []

//Fill list of results with null for all the urls 
for (i = 0; i < urlList.length; i++){
    resultList[i] = null;
}

//Perform a get request for each url
for (i = 0; i < urlList.length; i++){

    //Place into a function
    (function(i){
        http.get(urlList[i], function callback0(response){
            var result = "";

            //Set encoding to have the node stream (response) return events as strings instead of buffer objects
            response.setEncoding("utf8");

            //Listen to and collect all data from stream and append to result as string
            response.on("data", function callback1(data){
                result += data;
            });

            //Listen for end event to determine the end of data events, print data length and strings
            response.on("end", function callback2(){
                resultList[i] = result;

                //Calculate the results that have came back from the async function
                var resultCount = 0;
                for (i = 0; i < resultList.length; i++){
                    if (resultList[i] != null)
                        resultCount++;
                }

                //Count if all requests have came back, if so then we're done
                if(resultCount == resultList.length){
                   for(i = 0; i < resultList.length; i++){
                    console.log(resultList[i]);
                   } 
                }
            });
        });
    })(i);
}