/**
 * Created by Administrator on 2018/1/29 0029.
 */
var express = require("express");
var app = express();

app.use("/admin", function (req, res, next) {
    res.write(req.originalUrl+"\n");
    res.write(req.baseUrl+"\n");
    res.write(req.path+"\n");
    res.end("end");
}).listen(3000);