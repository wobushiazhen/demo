//  Buffer 实例一般用于表示编码字符的序列，通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换
//  比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。而且Buffer对象提供了很多操作方法来处理数据，比如读取，写入，拷贝，切片等。
const a = require("./base.json");
const buf1 = Buffer.from(a.data);   
console.log(buf1); 
console.log(buf1.toJSON('utf-8'));
// console.log(a.data.toString("utf-8"));
   