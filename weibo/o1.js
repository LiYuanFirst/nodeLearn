/**
 * Created by Administrator on 2018/3/6 0006.
 */
var express = require("express");
var formidable = require('formidable');
var db = require("./model/db.js");
var md5 = require("./model/md5.js");


var app = express();

app.set("view engine","ejs");
app.use(express.static("./public"));
//访问注册页面
app.get("/regist", function (req,res) {
    res.render("regist");
});
//提交注册
app.post("/doregist", function (req,res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        var username = fields.username,
            password = fields.password;
        password = md5(md5(password).substr(4,7) + md5(password));
        db.insertOne("users",{
            "username":fields.username,
            "password":password
        },function(err,result){
            //返回结果0成功，1失败
            if(err){
                res.json({
                    "result":1
                });
                return;
            }
            res.json({
                "result":0
            });

        })
    });
});

//访问登录页面
app.get("/login", function (req,res) {
    res.render("login");
});
//提交注册
app.post("/dologin", function (req,res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        console.log(fields.username);
        var username = fields.username,
            password = fields.password;
        password = md5(md5(password).substr(4,7) + md5(password));
        db.find("users",{"username":username},function(err,result){
            //0-成功，1-密码错误，-1-用户不存在
            if(result.length == 0){
                res.json({"result":-1});
                return;
            }
            var passwordSTR = result[0].password;
            if(passwordSTR === password){
                res.json({"result":0});
            }else{
                res.json({"result":1});
            }
            console.log(passwordSTR);
        });

    });
});



app.listen(3000);