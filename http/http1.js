//node中自带一个创建服务的模块 http

var http = require('http');

//创建一个服务 固定的ip 和 端口号  还有请求和相应
http.createServer(function (req,res){
    //req请求 可读流
    //res响应 可写流
    //pending 等待响应
    //写一个相应头  告诉浏览器端 相应的内容是什么类型

    res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
    // res.setHeader('Content-Type','text/html;charset=utf8');
    // res.statusCode=200;
    res.write('hello world');
    res.end('你好');
}).listen(8080,'127.0.0.1',function (){
    console.log('以8080端口启动服务');
})




















