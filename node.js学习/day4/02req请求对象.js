const http = require('http');
const server = http.createServer();
server.on('request', (req,res)=> {
  const url = req.url;
  const methods = req.method;
  const str = `you request url is ${url},and request methods is ${methods}`;
  console.log(str);
  res.end(str);
}) 
server.listen(8080, ()=>{
  console.log('http server running at http://127.0.0.1:8080');
})