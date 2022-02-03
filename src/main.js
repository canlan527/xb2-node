const express = require('express');
const app = express();
const port = 3000;

// 使用 JSON 中间件
app.use(express.json())

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

app.post('/posts', (req, res) => {
  const { content } = req.body

  // 设置响应状态吗
  // res.statusCode = 201
  res.status(201)

  // 输出请求头部的 Sing-Along 数据
  console.log(req.headers['sing-along']);
  console.log(req.headers['content-type']);


  // 设置响应的头部数据
  res.set('Sing-Along', 'How I Wonder Waht u are')
  res.send({
    message: `结果是${content}`
  })
})