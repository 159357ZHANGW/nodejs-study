const fs = require('fs');
const path = require('path');

// 定义正则表达式，分别匹配<style></style>和 <script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function (error, dataStr) {
  if (error) return console.log('读取文件失败' + error.message);
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// 定义处理css样式的方法
function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  // console.log(r1);
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  fs.writeFile(path.join(__dirname, 'index.css'), newCSS, function (err) {
    if(err) return console.log('写入失败'+ err.message);
    console.log('写入样式成功！');
  }
  )
}

// 定义处理js脚本的方法
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, 'index.js'), newJS, function (err) {
    if (err) return console.log('写入javascript脚本失败' + err.message); 
     console.log('js写入成功');
  })
}

// 定义处理html文件
function resolveHTML(htmlStr) {
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="index.css">').replace
    (regScript, '<script src="index.js"></script>')
  fs.writeFile(path.join(__dirname, 'index.html'), newHTML, function (err) {
    if (err) return console.log('写入HTML文件失败!' + err.message);
    console.log('写入HTML成功');
  })
}