const express = require('express')
const app = express()

// 模块化挂载路由

// 1.导入路由模块
const userouter = require('./03routerjs.js')
// 2.注册路由模块
app.use('/api',userouter);
//注意：app.use()函数的作用，就是来注册全局中间件的

app.listen(80, () => {
  console.log('http://127.0.0.1');
})