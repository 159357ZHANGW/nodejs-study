const fs = require('fs');
fs.readFile('../files/成绩.txt', 'utf-8', function (error, result) {
  if (error) {
    return console.log('文件读取失败:'+ error.message);
  }
  // 如果给split中不加空格打印出来的都是一个个的字符
  const arrold = result.split(' ');
  var newarr = [];
  arrold.forEach(item => {
    newarr.push(item.replace('=',':'));
  })
  const newstr = newarr.join('\r\n');
  fs.writeFile('../files/成绩ok.txt',newstr,function (error) {
    if (error) {
      return console.log('错误：' + error.message);
    }
    console.log('成绩写入成功');
  })
})
