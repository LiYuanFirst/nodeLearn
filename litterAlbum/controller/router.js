/**
 * Created by Administrator on 2018/1/29 0029.
 */
var file = require("../models/file.js");
exports.showIndex = function(req,res,next){

    file.getAllAlbums(function(err,state){
        if(err){
            next();
            return;
        };
        res.render("index",{
            "albums": state
        });
    })
};
exports.showAlbum = function(req,res,next){
    var albumname = req.params.albumName;
    file.getAllImages(albumname,function(err,imagesArray){
        if(err){
            next();
            return;
        };
        res.render("album",{
            "albumname" : albumname,
            "images" : imagesArray
        })
    })

};
exports.showUp = function(req,res){
    res.render("up")
}