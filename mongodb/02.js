/**
 * Created by Administrator on 2018/2/24 0024.
 */
var express = require("express");
var app = express();
var db = require("./model/db.js");
app.get("/",function(req,res){
    db.insertOne("teacher",{"name":"小红"},function(err,result){
        if(err){
            console.log("插入失败");
            return;
        }
        res.send("插入成功");
    })


});
app.get("/du",function(req,res){
    var page = parseInt(req.query.page);
    db.find("teacher",{},{"pageamount":3,"page":page},function(err,result){
        console.log(result);
        res.send(result);
    })


});
app.get("/delete",function(req,res){
    var res_id = req.query.id;
    console.log(res_id);
    db.deleteMany("teacher",{"name":res_id},function(err,results){
        if(err){
           console.log(err);
        }
        res.send(results)
    })


});
app.get("/update",function(req,res){
    //var res_id = req.query.id;
    //console.log(res_id);
    db.updateMany("teacher",{"id":"01"},{$set:{"name2":"小夏"}},function(err,results){
        if(err){
            console.log(err);
        }
        res.send(results)
    })


});
app.listen(3000);