const http = require('http');

const server = http.createServer((req, res) => {
  res.write('hello world')
  res.end()
})

server.listen(3000, (err, res) => {
  console.log('🚀服务已启动！');
})