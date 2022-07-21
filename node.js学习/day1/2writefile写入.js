const fs = require('fs');
fs.writeFile('../files/1.txt', 'sdfghjkhgsasdfghjasdfgh', function (error) {
  // 如果读取失败error是错误对象
  if (error) {
    return console.log('文件写入失败：' + error.message);;
  }
})
// const m1 = require('./text.js');
// console.log(m1);