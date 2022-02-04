// 应用的入口文件
import app from './app';
import { APP_PORT } from './app/app.config';

/**
 * 启动服务
 */
app.listen(APP_PORT, () => {
  console.log('🚀 服务已启动');
});
