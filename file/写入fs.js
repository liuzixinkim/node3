var fs = require('fs');

fs.writeFileSync('./name1.js',JSON.stringify({'name':1}),{flag:'a'});
//默认编码格式utf8  存取json格式必须变成json串


function copy(File,targetFile){ //readFileSync  writeFileSync
    fs.writeFileSync(targetFile,fs.readFileSync(File,'utf8'));
}
copy('./name.js','./name0.js');

//异步的方法必须要有回调函数
function copyAsync(File,targetFile){//readFile  writeFile
    fs.readFile(File,function (err,data){
        console.log(data);  //readFile 缺点（淹没可用内存） 会把文件全部读入到内存中 不适合读过大的文件 不超过64k的都可以使用这个方法
        if(err) console.log(err);
        fs.writeFile(targetFile,data,function (){});
    })
}
copyAsync('./name.js','./name2.js');