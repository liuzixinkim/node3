
var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');


http.createServer(function (req,res){

    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    //console.log(pathname); /  /index.css  /index.js

    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else {
        //在设置之前 要先判断文件是否存在  不存在404
        fs.exists('.'+pathname,function (exists){
            if(exists){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end();
            }
        })

    }
}).listen(3000);





















