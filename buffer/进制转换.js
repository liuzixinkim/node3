console.log(parseInt('111',2));
console.log(parseInt('0xff',16)); //前面编码格式必须是字符串类型的
//把16进制的10  转换成10进制
console.log(parseInt('10',16));


console.log((0xff).toString(2));//16进制转换成2进制


//如何将一个汉子转换成base64编码
//二进制转换成10进制 最大的值不能超过64 00111111 永远不会大于64  0-63之间有64个数  可见编码
var buffer = new Buffer('珠');
console.log(buffer);//'珠'的16进制

var baseEncoding = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
baseEncoding+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
baseEncoding+="0123456789";
baseEncoding+="+/";


//1.将16进制转换成2进制
console.log((0xe7).toString(2)); //11100111
console.log((0x8f).toString(2)); //10001111
console.log((0xa0).toString(2)); //10100000
//2.将3个八位  转换成4个  6位按前面补两个0
//00111001  00111000 00111110  00100000
//3.将转换后的值 在转换成10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//4.取 baseEncoding 中取值
console.log(baseEncoding[57]+baseEncoding[56]+baseEncoding[62]+baseEncoding[32]);



