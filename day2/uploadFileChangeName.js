/**
 * Created by Administrator on 2018/1/25 0025.
 */
var http = require("http");
var querystring = require("querystring");
var formidable = require("formidable");
var util = require("util");
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path");
 //创建服务器
 var server = http.createServer(function(req,res){
    if(req.url == "/dopost" && req.method.toLowerCase()=="post"){
        //创建一个正在接受的表单
        var form = new formidable.IncomingForm();
        //设置文件上传地址
        form.uploadDir = "./uploads";
        form.parse(req, function(err, fields, files) {
            //所有文本域在fields存放，文件域在files
            console.log(fields);
            console.log(files);
            if(err){
                throw err
            }
            var ttt = sd.format(new Date(),"YYYYMMDDHHmm");
            var ran = parseInt(Math.random()*89999+10000);
            var extname = path.extname(files.img.name);

            var oldpath = __dirname +"/"+ files.img.path;

            var newpath = __dirname +"/uploads/"+ ttt + ran + extname;

            fs.rename(oldpath,newpath,function(err){
                if(err){
                    throw Error("上传出错");
                }
                res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
                res.end("成功");
            });

        });

        return;
    }else{
        fs.readFile("./posr.html",function(err,data){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }
});
server.listen(80,"127.0.0.1");