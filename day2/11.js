/**
 * Created by Administrator on 2018/1/25 0025.
 */
var http = require("http");
var querystring = require("querystring");

 //创建服务器
 var server = http.createServer(function(req,res){
    if(req.url == "/dopost" && req.method.toLowerCase()=="post"){
        var alldata = "";
        req.addListener("data",function(chunk){
            alldata +=chunk;
            console.log(chunk)
        });
        req.addListener("end",function(){
            console.log(alldata.toString());
            var datastring = alldata.toString();
            res.end("success");
            var dataObj = querystring.parse(datastring);
            console.log(dataObj.name);
            console.log(dataObj.sex);
        })
    }
});
server.listen(80,"127.0.0.1");