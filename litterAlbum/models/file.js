var fs = require("fs");
exports.getAllAlbums = function(callback){
    fs.readdir("./uploads",function(err,files){
        if(err){
            callback("没有找到uploads文件",null);
            return;
        }
        var allAlbums = [];
        console.log(files);
        (function iterator(i){
            if(i == files.length){
                console.log(allAlbums);
                callback(null,allAlbums);
                return;
            }
            fs.stat("./uploads/" + files[i],function(err,stats){
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i+1);
            })
        })(0);

    })
};
exports.getAllImages = function(albumName,callback){
    fs.readdir("./uploads/"+albumName,function(err,files){
        if(err){
            callback("没有找到文件",null);
            return;
        }
        var allImages = [];
        console.log(files);
        (function iterator(i){
            if(i == files.length){
                console.log(allImages);
                callback(null,allImages);
                return;
            }
            fs.stat("./uploads/"+ albumName +"/" + files[i],function(err,stats){
                if(err){
                    callback("找不到文件"+ file[i],allImages);
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i+1);
            })
        })(0);

    })
}