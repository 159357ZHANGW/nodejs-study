const fs = require('fs');
// fs.readFile('../files/1.txt', 'utf-8', function (error, datastr) {
//   console.log(error);
//   console.log('----------');
//   console.log(datastr);
// })
fs.readFile('../files/1.txt', 'utf-8', function (error, result) {
  // 如果读取成功error是null
  //         失败error返回的是错误对象    
  // console.log(error);
  console.log(result);
  // if (error) {
  //   return console.log('文件读取失败'+error.message);
  // }
  // console.log('文件读取成功,内容是:'+result);
})