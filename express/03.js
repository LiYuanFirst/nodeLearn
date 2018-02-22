/**
 * Created by Administrator on 2018/1/26 0026.
 */
var express = require("express");
var app = express();

app.get("/AAb",function(req,res){
    res.send("你好")
});
app.get("/aaa/:id",function(req,res){
    var id = req.params["id"];
    res.end(id);
})
app.listen(3000);