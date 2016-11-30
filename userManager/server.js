var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var qs=require('querystring');

var users = [
    {name:'张三',password:'8156',id:1},
    {name:'张四',password:'120',id:2},
    {name:'王二',password:'65445',id:3}
];

//创建服务
http.createServer(function (req,res){
    // console.log(req.url);
    var utlObj = url.parse(req.url,true);
    var pathname = utlObj.pathname;

    if(pathname == '/'){
        res.setHeader('Content-Type',"text/html;charset=utf8");
        fs.createReadStream('./index.html').pipe(res);
    }
    else if(pathname == '/getUsersDate'){
        //获取数据库里的数据 渲染到页面中
        res.setHeader('content-Type',mime.lookup(pathname)+';charset=utf8');
        res.end(JSON.stringify(users));
    }
    else if(pathname == '/addUsersDate'){
        //往数据库里添加数据 再渲染到页面中
        res.setHeader('content-Type',mime.lookup(pathname)+';charset=utf8');
        var result = '';
        req.on('data',function (data) {
            result+=data;
        });
        req.on('end',function () {
            var user = qs.parse(result);
            //var user = JSON.parse(result);
            user.id = Math.random();
            users.push(user);
            res.end(JSON.stringify(users));
        });
    }
    else if(pathname == '/deleteUsersDate'){
        //删除数据库里的数据 渲染到页面中
        res.setHeader('content-Type',mime.lookup(pathname)+';charset=utf8');
        var resultid = '';
        req.on('data',function (data){
            resultid += data;
        });
        req.on('end',function (){
            for(var i=0; i<users.length; i++)
            {
                if(users[i].id == qs.parse(resultid).id){
                    users.splice(i,1);
                }
            }
            res.end(JSON.stringify(users));
        })
    }
    else {
        fs.exists('.'+pathname,function (exists){
            if(exists){
                //存在
                res.setHeader('content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);//将可读流 导入到 可写流中
            }
            else {
                //不存在 返回错误信息
                res.statusCode = 404;
                res.end('not Found');
            }
        });
    }
}).listen(8080,function (){
    console.log('监听8080端口');
});










