//基于文件的操作
var fs = require('fs');
var rs = fs.createReadStream('./name.txt',{highWaterMark:4,start:0,end:5});

//hightWaterMark  最高水位线  64*1024 = 64k
//econding:null 编码格式为null => buffer
//start end 读取的开始位置 和 结束位置 !包前包后!
//flags:'r' 默认为可读
//非流动模式 切换到 流动模式
//highWaterMark 不能小于编码格式的最小值
//默认打开水管后  水会以最快的速度 流出来  不停的出发data事件




var arr =[];
rs.on('data',function (data){//node不断的出发data时间 将内容放入到回调函数中
    // console.log(data); //buffer类型
    arr.push(data);
});

rs.on('end',function (){
    //获取所有结果
    console.log(Buffer.concat(arr).toString());
});
















