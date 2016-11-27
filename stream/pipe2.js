var fs = require('fs');

function copy(source,target){
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);//直接将可读流 导入到可写流中 自动保持读写平衡 会防止淹没可用内存
}


copy('./name.txt','./name3.txt');

