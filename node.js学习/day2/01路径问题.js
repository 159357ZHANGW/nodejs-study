console.log(__dirname);
const fs = require('fs');
fs.readFile(__dirname + '/成绩ok.txt', 'utf8', function (error, result) {
  if (error) {
   return console.log('出错了:' + error.message);
  }
  console.log(result);
})