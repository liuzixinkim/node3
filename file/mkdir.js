var fs = require('fs');
//创建目录 必须保证父级存在  不存在无法创建
// fs.mkdirSync('a/b/c');

function mkdirPath(path){
    var arr = path.split('/');

    for(var i=0; i<arr.length; i++)
    {
        var curPath = arr.slice(0,i+1).join('/');
        console.log(curPath);

        //如果文件已经存在  就不需要创建  如果文件不存在  就创建
        if(!fs.existsSync(curPath)) {
            fs.mkdirSync(curPath);

        }
    }
}

mkdirPath('1/2/3/4');

//判断一个文件是否存在
var flag = fs.existsSync(1);
console.log(flag);