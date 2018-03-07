/**
 * Created by Administrator on 2018/3/2 0002.
 */
var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());
app.get("/",function(req,res,next){

    res.send(req.cookies.his);
});
app.get("/ss",function(req,res,next){
    var his = req.query.id;
    var hisArry = req.cookies.his || [];
    hisArry.push(his);
    res.cookie("his",hisArry,{maxAge:10000000,httpOnly:true});
    res.send();
});

app.listen(3000);