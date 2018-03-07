var express = require("express");
var app = express();

var bodyParser = require("body-parser");//获取post参数插件

var db = require("./model/db.js");
var formidable = require("formidable");
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login",function(req,res){
    res.render("login");
});
app.post("/checklogin",function(req,res){

});
app.listen(3000);

