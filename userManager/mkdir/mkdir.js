var fs = require('fs');

function mkdirPath(p){
    var aPath = p.split('\\');
    for(var i=0; i<aPath.length; i++)
    {
        var current = aPath.slice(0,i+1).join('\\');
        console.log(current);
        fs.mkdir(current,function (err){

        });
    }

}


mkdirPath('1\\2\\3\\4\\5\\6\\7');
// fs.mkdir('a',function (err) {});
// fs.exists('a',function (exists) {
//     //exists 是否存在
// });


