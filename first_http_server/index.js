// using http module (inbuilt given by node) we can setup a baisc server
const http = require('http');
const PORT = 3000;
/*
*http module containd a function called createServer
*this createServer function takes a callback as the input
* Now inside the callback, we get two arguments
*  - request -> this argument contains all the details about the incoming request
*  - response -> this argument contains functions using which we can prepare the responses
*createServer function returns as the server object
*/

const server = http.createServer(function exec(request,response){
    console.log(request.method);
    if(request.url == '/home'){
        response.end("welcome to home");
    }
    else if(request.url == '/faq'){
        response.end("List of FAQs");
    }
    else{
        response.end("Hello World");
    }
});

server.listen(PORT, function process(){
    // once the server get started then this callback will be executed
    console.log("server started on port", PORT);
});