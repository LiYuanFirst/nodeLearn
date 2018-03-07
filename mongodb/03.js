/**
 * Created by Administrator on 2018/3/1 0001.
 */
var express = require("express");
var app = express();
//获取post参数
var bodyParser = require("body-parser");
var db = require("./model/db.js");
var formidable = require("formidable");
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/",function(req,res,next){
    db.getAllCount("liuyanben",function(count){
        res.render("index",{
            pageAmount:parseInt(count.toString())
        })
    })

});
app.post("/du",function(req,res,next){
    var page = parseInt(req.body.page);
    console.log(page);
    db.find("liuyanben",{},{"pageamount":5,"page":page,"sort":{"time":-1}},function(err,result){
        res.json({"result":result})
    })
});
app.post("/tijiao",function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
        console.log(fields);
        db.insertOne("liuyanben",{
            "name":fields.xingming,
            "con":fields.liuyan,
            "time":new Date()
        }, function (err,result) {
            if(err){
                res.json({"result":1});
                return;
            }
            res.json({"result":0});
        })
    });
});
app.get("/a",function(req,res){

})
app.listen(3000);