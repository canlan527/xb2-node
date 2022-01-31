const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('🚀 服务已启动');
});

// 定义接口
app.get('/', (req, res) => {
  res.send('hello world');
})

