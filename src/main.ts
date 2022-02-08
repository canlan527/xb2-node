// 应用的入口文件
import app from './app';
import { APP_PORT } from './app/app.config';
import { connection } from './app/database/mysql'
/**
 * 启动服务
 */
app.listen(APP_PORT, () => {
  console.log('🚀 服务已启动');
});

connection.connect(error => {
  if(error) {
    console.log('👻 连接数据服务失败', error.message);
    return;
  }

  console.log('成功连接数据服务');
})