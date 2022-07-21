const express = require('express')

const app = express()

//调用express.static()
app.use(express.static('../files'))
app.use(express.static('../clock'))


app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})


