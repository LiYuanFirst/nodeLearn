/**
 * Created by Administrator on 2018/1/29 0029.
 */
var express = require("express");
var app = express();

//静态服务
app.use(express.static("./static"));




app.listen(3000)