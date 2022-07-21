const path = require('path');
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath);
console.log(fullName);  //index.html
const name = path.basename(fpath, '.html');  //basename 的第二个参数‘.html’ 是用于去掉文件名的后缀
console.log(name);    //index