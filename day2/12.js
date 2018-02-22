/**
 * Created by Administrator on 2018/1/26 0026.
 */

var ejs = require("ejs");

var string = "啦啦啦，我是一个模板<%= a %>";

//数据
var data = {
    a:6
};
//数据绑定
var html = ejs.render(string,data);

console.log(html);