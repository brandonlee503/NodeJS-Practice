var http = require("http");

var url = process.argv[2];

http.get(url, function callback0(response){

    //Set encoding to have the node stream (response) return events as strings instead of buffer objects
    response.setEncoding("utf8");
    response.on("data", function callback1(data){
        console.log(data);
    });
});
