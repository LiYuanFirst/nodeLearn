
var express = require("express");
var app = express();
app.set('views', './views' );
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
router.get('/', function(req, res, next) {
    res.render('index', { title: '测试11111' });
});
app.listen(3000);