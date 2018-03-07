/**
 * Created by Administrator on 2018/2/24 0024.
 */
var express = require("express");
var app = express();
const MongoClient = require('mongodb').MongoClient;


app.get("/",function(req,res){
    //数据库地址
    const url = 'mongodb://localhost:27017';
    //数据库名字
    const dbName = 'haha';

    MongoClient.connect(url, function(err, client) {

        console.log("Connected correctly to server");

        const db = client.db(dbName);

        db.collection("student").insertOne({
            "name":"小李"
        },function(err,result){
            client.close();
        })
    });



}).listen(3000);