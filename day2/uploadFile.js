/**
 * Created by Administrator on 2018/1/25 0025.
 */
var http = require("http");
var querystring = require("querystring");
var formidable = require("formidable");

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

            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end("成功");
        });

        return;
    }
});
server.listen(80,"127.0.0.1");