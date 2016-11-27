//write
var buffer = new Buffer(12);
var str  = '珠';
var str1 = '峰培训';
//string 写入的内容
//offset 偏移量 默认从0开始
//length   多少个 可以不写 默认全部写入
//encoding  编码格式 可以不写 默认utf8
//buffer.write(str,0,3,'utf8');
//buffer.write(str1,3,9,'utf8');
buffer.write(str);
buffer.write(str1,3);
console.log(buffer.toString());

//copy
var buffer1 = new Buffer(12);
var buffer2 = new Buffer('珠');
var buffer3 = new Buffer('峰培训');
//targetBuffer 目标buffer
//targetStart   目标的开始
//sourceStart   源的开始
//sourceEnd     源的结束
//buffer2.copy(buffer1,0,0,3);
//buffer3.copy(buffer1,3,0,9);
buffer2.copy(buffer1,0);
buffer3.copy(buffer1,3);
console.log(buffer1.toString());

//concat
var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰培训');
//list
//totalLength
console.log(Buffer.concat([buf1,buf2]).toString());
//可以不写长度 全部拷贝到一个中
//写长度过短 写不进去就不要了
//长度过长  如果过程就不要过长的内容 只要有效内容(截取有效长度)
Buffer.myConcat = function (list,totalLength){
    //判断时候传递length
    if( typeof totalLength === 'undefined'){
        //如果没有传递  算出一个总长度
        totalLength = 0;
        list.forEach(function (item){
            totalLength += item.length;

        })
    } //获得一个长度

    var buffer = new Buffer(totalLength);

    var index = 0;
    list.forEach(function (item){ //将每一个buffer拷贝到大buffer上
        item.copy(buffer,index);

        index += item.length; //index最后一次结束后 就是拷贝的总内容的长度
        console.log(index);
    });
    return buffer.slice(0,index);
}
console.log(Buffer.myConcat([buf1,buf2],6).toString());
//???为什么写入长度后  就按写入的长度进行截取了？？？

var buf0 = new Buffer('珠峰');
console.log(buf0.length); //6
