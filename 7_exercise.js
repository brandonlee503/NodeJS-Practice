var http = require("http");

var url = process.argv[2];

http.get(url, function callback(response){
    console.log("Got response: " + response.statusCode);
}).on("data", function (data){
    console.log("Got data: " + data.message);
});
