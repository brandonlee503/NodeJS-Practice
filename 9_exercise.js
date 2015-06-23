var http = require("http");

var urlList = process.argv.slice(2);
var resultList = []

for (i = 0; i < urlList.length; i++){
    resultList[i] = null;
}

for (i = 0; i < urlList.length; i++){
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
            console.log(result);
        });

    });
}

http.get(url0, function callback0(response){
    var result = "";

    //Set encoding to have the node stream (response) return events as strings instead of buffer objects
    response.setEncoding("utf8");

    //Listen to and collect all data from stream and append to result as string
    response.on("data", function callback1(data){
        result += data;
    });

    //Listen for end event to determine the end of data events, print data length and strings
    response.on("end", function callback2(){
        console.log(result);
    });
});