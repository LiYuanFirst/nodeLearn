var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	
	fs.readFile("./01.html",function(err,data){
		res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
		res.end(data)
	});
});

server.listen(4000,"127.0.0.1")

