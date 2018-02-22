/**
 * Created by Administrator on 2018/1/29 0029.
 */
var express = require("express");
var app = express();
var router = require("./controller");
app.set("view engine","ejs");

//静态文件夹
app.use(express.static("./public"));
app.use(express.static("./uploads"));
//路由
app.get("/",router.showIndex);
app.get("/:albumName",router.showAlbum);
app.get("/up",router.showUp);
app.use(function(req,res){
    res.render("err",{
        "baseurl" : req.pathname
    })
});
app.listen(3000);