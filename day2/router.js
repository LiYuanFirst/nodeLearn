/**
 * Created by Administrator on 2018/1/25 0025.
 */
function showIndex(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("首页");
}
function showStudent(req,res){
    var id = req.url.substr(9,6);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("学生页面" + id);
}
function show404(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("404");
}
exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;
