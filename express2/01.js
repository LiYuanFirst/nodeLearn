/**
 * Created by Administrator on 2018/1/29 0029.
 */
var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index")
});
app.listen(3000);