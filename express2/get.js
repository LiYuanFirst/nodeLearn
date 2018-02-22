/**
 * Created by Administrator on 2018/1/29 0029.
 */
var express = require("express");
var app = express();

app.get("/",function(req,res){
    console.log(req.query)
});
app.listen(3000);