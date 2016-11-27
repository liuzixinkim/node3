var path = require('path');
//一般情况下 我们会以一个相对路径来解析一个绝对路径

//将多个路径拼接到一起  解析出一个绝对路径
console.log(path.join(__dirname,'/a.js'));

//解析绝对路径 通过不存在的文件名  解析出一个绝对路径
console.log(path.resolve('a.js'));
