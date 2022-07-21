## 安装
```js
npm install itheima-tools
```

## 导入

```js
const itheima = require('itheima-tools')
```

## 格式化时间
```js

const dtstr = itheima.dateFormat(new Date())
console.log(dtstr)

```

## 转义 HTML中的特殊字符
```js
const htmlstr = '<h1 title="abc">这是h1标签 <span> 123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlstr);
console.log(str);
```

##  还原html中的特殊字符
```js
const str2 = itheima.htmlunescape(str)
console.log(str2);
```