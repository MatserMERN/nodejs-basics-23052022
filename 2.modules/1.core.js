const http = require("http")

http.createServer(function(request, response){
    if(request.url == "/"){
        response.end("This is default end point")
    } else if(request.url=="/user") {
        response.end("Here is the user information")
    } else {
        response.end("Please contact administartor")
    }
   
}).listen(8080) 