//node中的核心模块 文件系统
var fs= require('fs');
//读取 写入 同步和异步同时出现
//有没有返回值  有没有回调函数
//fs.readFile();  //异步方法
//fs.readFileSync(); //同步方法

var name = fs.readFileSync('./name.txt','utf8');
console.log(name);