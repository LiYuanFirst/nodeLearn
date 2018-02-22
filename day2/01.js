/**
 * Created by Administrator on 2018/1/24 0024.
 */
var http = require("http");
var server = http.createServer(function(req,res){
    res.end("SUCCESS");
});
server.listen(80,'127.0.0.1')
