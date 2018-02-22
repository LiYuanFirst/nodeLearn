/**
 * Created by Administrator on 2018/1/29 0029.
 */
var express = require("express");
var app = express();
app.set('views', './views')
app.set("view engine","jade");
app.get("/",function (req,res) {
    res.render("news",{
        "news":["新闻1","新闻2","新闻3"]
    })
}).listen(3000);