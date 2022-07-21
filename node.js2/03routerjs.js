// 导入express
var express = require('express')

// 创建路由对象
var router = express.Router()

// 挂载具体的路由
router.get('/user/list', (req, res) => {
  res.send('get')
})
router.post('/user/add', (req, res) => {
  res.send('post')
})

// 向外导出路由对象
module.exports=router