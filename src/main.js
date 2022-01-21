const { RSA_X931_PADDING } = require('constants');
const http = require('http');

const server = http.createServer((req, res) => {
  const data = {
    id: 1, 
    title: '关山月',
    content: '明月出天山，苍茫云海间'
  }

  const jsonData = JSON.stringify(data);

  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
  })
  
  res.write(jsonData)
  
  res.end()
})

server.listen(3000, (err, res) => {
  console.log('🚀服务已启动！');
})