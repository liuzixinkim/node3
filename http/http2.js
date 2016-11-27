
var http = require('http');
var fs = require('fs');

//如果html引用了额外的文件 向服务器端再次发送请求
//路由 通过不同的路径 相应不同的内容
http.createServer(function (rep,res){
    // var data = fs.readFileSync('./index.html');
    // res.end(data); //end中
    //
    //
    //
    //
    //有什么内容 就会展示给客户端
    //res.setHeader('Content-Type','text/html;charset=utf8');
    fs.createReadStream('./index.html').pipe(res);
}).listen(8080);




















