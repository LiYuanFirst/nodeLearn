var http = require("http");

var server = http.createServer(function(req,res){
	console.log("服务器接收到请求"+req.url);
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	res.end("success")

});
server.listen(4000,"127.0.0.1")