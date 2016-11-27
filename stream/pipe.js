//默认读取64k  4K
//默认写入16k   1k

//100k
//读一会  写一会  等写完后 再去读
//防止淹没可用内存

//可读 可写 createWriteStream createReadStream rs.on('data') rs.pause() ws.write() ws.drain() rs.resume() rs.on('end') ws.end

var fs = require('fs');

var rs = fs.createReadStream('./name1.txt',{highWaterMark:4});
var ws = fs.createWriteStream('./name.txt',{highWaterMark:1});

rs.on('data',function (data){
    var flag = ws.write(data); //向可写流中写入内容
    if(!flag){//如果无法写入
        rs.pause();//先不读
    }
});

ws.on('drain',function (){//写完后 出发事件
    console.log('干了');
    rs.resume();//恢复可读流
});

rs.on('end',function (){ //读取完成后 将可写流关闭
    ws.end();
})


