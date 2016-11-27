//1.数字
var buffer = new Buffer(3);
buffer.fill(0);  //手动清空内存
//如果大于255 则对256取模
//如果为负数 会在256基础上+负值
console.log(buffer);

//2.数组
var buffer2 =  new Buffer([200,2,3]);
console.log(buffer2);

//3.字符串
var buffer3 = new Buffer("珠峰");
console.log(buffer3);

var str = '珠峰';
str[0] = '峰';
console.log(str);
console.log(str[0]); //字符串具有不变性

//数组 slice 克隆一个新的数组
var arr= [1,2,3];
var newArr = arr.slice();
newArr[0] = 100;
console.log(arr);