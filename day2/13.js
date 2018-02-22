/*** Created by Administrator on 2018/1/26 0026.
 */
var http = require("http");
var ejs = require("ejs");
var fs = require("fs");

var server = http.createServer(function(req,res){
    fs.readFile("./views/index.ejs",function(err,data){
        var template = data.toString();
        var dictionary = {a:"变量"};

        //数据绑定
        var html = ejs.render(template,dictionary);
        console.log(html);

        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end(html);
    })
}).listen(80,"127.0.0.1");



