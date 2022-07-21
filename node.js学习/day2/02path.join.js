const path = require('path');
const fs = require('fs');
const pathstr = path.join('/a', '/b/c', '../', './d', 'e');
console.log(pathstr);
fs.readFile(path.join(__dirname,'/成绩ok.txt'), 'utf-8', function (error, result) {
  console.log(result);
})

