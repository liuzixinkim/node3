//将10个数 写入到一个文件内
var fs = require('fs');
var ws = fs.createWriteStream('./name2.txt',{highWaterMark:1});

// for(var i=0; i<10; i++){
//     var flag = ws.write(i+'');
//     console.log(flag);
// };


//用1b来完成这件事
function write(){
    var flag = true;

    while(flag&&i<10){
        var flag = ws.write(i+++'');
    };

    if(i==10) {
        ws.end();
    }
}
write();
ws.on('drain',function (){
    write();
})