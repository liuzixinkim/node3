1、固定大小 一旦声明不可以更改大小
2、和数组存储方式大致相同 buffer存储的是16进制  （10进制逢10进一 逢16进一） 最大的是f 0-9 abcdef 0*ff
3、默认是数据传输时是2进制 存在buffer中变成16进制的


字节
一个汉子utf8编码有几个字节 3个字节  node不支持gbk  一个汉子由24位组成
8bit = 1b  一个字节等于8个位 都是二进制的 由8个2进制组成
1024b = 1Kb
1024kb = 1M


buffer声明的时候 有固定的长度
	1、数字中声明方式 通过长度来创建buffer
	2、通过数组的方式创建 讲十进制除以进制取余数  将10进制转换成任意进制
	3、字符串创建
buffer转换成字符串
	buffer.toString();

buffer 
	forEach
	slice
	toString
	write 像buffer中写内容
	copy 将内容拷贝到buffer中
	concat 链接多个buffer

parseInt 将任意进制转换成10进制
toString 将任意进制转换成任意进制


//常用方法
writeFile writeFileSync 写文件
readFile readFileSync 读文件
mkdir mkdirSync 创建目录
rmdir rmdirSync 删除目录
exists existsSync 判断文件是否存在
readdirSync readdir 读取目录
stat statSync 读取文件的状态
isDirectory() isFile() 判断文件类型
unlink unlinkSync 删除文件
path.join 拼接路径  path.resolve 解析路径
