var fs = require('fs');
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:1});

// console.log(ws);
//默认写入的大小 highWaterMark 16384 = 16*1024
//defaultEncoding 写入的内容默认编码格式 utf8  （读的默认是buffer）
//write end response on('data') on('end') request

//write 和 end 中只能放入buffer或字符串
var flag = ws.write('123',function (){
    console.log('写入成功');
});

console.log(flag); //返回的是一个boolean 告诉内存还能不能再写进去了  highWaterMark也可以规定

ws.on('drain',function (){//抽干 干了
    console.log('干了');
})

ws.end('把之前的内容全部写入后 再写入内容');//关闭掉 将内存中的内容 全部写入
ws.end('1');//如果写的内存已经关闭掉了 就不能再写入了 否则会报错


//write end drain
//喂我饭 会给个反馈 告诉你我是否还能不能吃
//如果吃不下了就不要喂我了 多余的部分扔地下
//等我吃完了 我把地下的再捡起来吃
//等在吃完了 消化完了 再接着喂我

//write end 只能放字符串 end后不能再调用write方法
//drain 方法 吃完了的方法





































