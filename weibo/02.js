/**
 * Created by Administrator on 2018/3/6 0006.
 */
var fs = require('fs'),
    gm = require('gm');
gm('./timg.jpg')
    .resize(240, 240)
    .noProfile()
    .write('./out.png', function (err) {
        if (!err) console.log('done');
    });
