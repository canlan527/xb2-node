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

// 演示数据
const data = [
  {
    id: '1',
    title: '关山月',
    content: '明月出天山， 苍茫云海间'
  },
  {
    id: '2',
    title: '望岳',
    content: '会当凌绝顶，一览众山小'
  },
  {
    id: '3',
    title: '忆江南',
    content: '日出江花红胜火，春来江水绿如蓝'
  },
]

// 定义响应JSON 数据的应用接口
app.get('/posts', (req, res) => {
  res.send(data)
})

// 定义带参数的接口
app.get('/posts/:id', (req, res) => {
  const { id } = req.params

  const resultList = data.filter(item => item.id === id)

  res.send(resultList[0])
})