/**
 * Created by Administrator on 2018/1/26 0026.
 */
var express = require("express");
var app = express();
app.use(express.static("./static"));

app.listen(3000)