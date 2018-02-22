/**
 * Created by Administrator on 2018/1/26 0026.
 */
var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("你好")
});
app.get("/hh",function(req,res){
    res.send("hahah")
});
app.get("/teacher/:num",function(req,res){
    res.send("老师信息，工号："+req.params.num)
})
app.listen(3000);