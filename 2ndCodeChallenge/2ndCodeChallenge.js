// Load required module
var http = require('http');
var fs = require('fs'); 
var url = require('url');

http.createServer(function(request,response){
	console.log('request');
var pathname=__dirname+url.parse(request.url).pathname;
fs.exists(pathname,function(exists){
 	if(exists){
 		fs.readFile('index.html', function(err,content){	
        response.end(content);
        });
 	}else{
 		response.writeHead(404, {"Content-Type": "text/html"});
            response.end("<h1>404 File Not Found</h1>");
 	}

});
}).listen(8080);