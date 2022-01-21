const http = require('http');

const server = http.createServer((req, res) => {
  switch(req.url) {
    case '/': 
      res.write('hello ~ ');
      break;
    case '/posts':
      res.write('posts');
      break;
    case '/signup':
      res.write('signup');
      break;
    default:
      res.writeHead(404)
      res.write('404 Not Found');
      break;
    
  }
  res.end()
})

server.listen(3000, (err, res) => {
  console.log('🚀服务已启动！');
})