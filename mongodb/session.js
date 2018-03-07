/**
 * Created by Administrator on 2018/3/2 0002.
 */
var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
var session = require("express-session");


app.use(session({
    secret:"keyboard cat",
    resave: false,
    saveUninitialized: true
}));

app.get("/",function(req,res,next){
    if(req.session.login){
        res.send("欢迎"+req.session.user);
    }else{
        res.send("请先登入");
    }

});
app.get("/login",function(req,res,next){
    req.session.login = true;
    req.session.user = "阿三";
    res.send("成功登入");
});


app.listen(3000);