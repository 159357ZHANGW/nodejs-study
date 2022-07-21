// 这是包的入口文件
const date = require('./src/dateformat.js')
const escape = require('./src/htmlescape.js')


module.exports = {
  ...date,
  ...escape
}