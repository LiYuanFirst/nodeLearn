/**
 * Created by Administrator on 2018/3/7 0007.
 */
var express = require("express");
var app = express();
var router = require("./router/router.js");


app.set("view engine","ejs");

app.use(express.static("./public"));

app.get("/",router.showIndex);
app.get("/login",router.showLogin);
app.get("/register",router.showRegister);
app.get("/userCenter",router.showCenter);



app.post("/doLogin",router.doLogin);
app.post("/doRegister",router.doRegister);
app.listen(3000);