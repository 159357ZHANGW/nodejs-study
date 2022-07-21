const express = require('express')
const app = express()

// // 定义一个最简单的中间件函数
// const mv = function (req, res, next) {
//   console.log('这是最简单的中间件函数');
//   // 吧流转关系,转交给下一个中间件或路由
//   next();
// }

// // 将mv注册为全局生效的中间件
// app.use(mv)

// 定义全局中间件的简化形式
app.use((req, res, next)=>{
  console.log('中间件函数');
  const time = Date.now()
  req.starttime = time
  next();
})

app.get('/', (req, res) => {
  console.log('/');
  res.send('Home Page.'+req.starttime)
})
app.get('/user', (req, res) => {
  console.log('/user');
  res.send('User page.'+req.starttime)
})


app.listen(80,()=>{
  console.log('http://127.0.0.1');
})