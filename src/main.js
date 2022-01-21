const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.headers['user-agent'])
  res.writeHead(200, {
    'Content-Type': 'text/html',
  })
  res.write(`<input />`)

  res.end()
})

server.listen(3000, (err, res) => {
  console.log('🚀服务已启动！');
})