/**
 * Created by Administrator on 2018/3/7 0007.
 */
var express = require("express");
var app = express();
var router = require("./router/router.js");
app.set("view engine","ejs");

app.use(express.static("./public"));

app.get("/",router.showIndex)
app.listen(3000);