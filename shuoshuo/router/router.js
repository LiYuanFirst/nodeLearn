/**
 * Created by Administrator on 2018/3/7 0007.
 */
var formidable = require("formidable");
var md5 = require("../models/md5.js");
var db = require("../models/db.js");
exports.showIndex = function(req,res,next){
    if(req.session.login){
        res.render("index",{"login":true,"username":req.session.username});
    }else{
        res.render("index",{"login":false});
    }


}
exports.showLogin = function(req,res,next){
    res.render("login");
}
exports.showRegister = function(req,res,next){
    res.render("register");
}
exports.showCenter = function(req,res,next){
    res.render("userCenter");
}




exports.doLogin = function(req,res,next){

}
exports.doRegister = function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
        console.log(fields.username);
        var username = fields.username,
            password = fields.password;
        password = md5(md5(password).substr(4,7) + md5(password));
        db.find("users",{"username":username},function(err,result){
            if(result.length==0){
                db.insertOne("users",{
                    "username":username,
                    "password":password,
                    "time":new Date()
                }, function (err,result) {
                    if(err){
                        res.json({"result":1});
                        return;
                    }
                    req.session.login = true;
                    req.session.username = username;
                    res.json({"result":0});


                })
            }else{
                res.json({"result":-1});
            }
           //1-插入数据出错，0-成功，-1-用户已存在
        });

    });
}