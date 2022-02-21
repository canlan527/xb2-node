import express from 'express'; // 引入 express
import postRouter from '../post/post.router'; // 导入 post 路由
import userRouter from '../user/user.router'; // 导入 user 路由
import authRouter from '../auth/auth.router'; // 导入 user 路由
import { defaultErrorHandler } from './app.middleware'
/**
 * 创建 express 应用
 */
const app = express();

/**
 * 使用 JSON 中间件
 */
app.use(express.json());

/**
 * app 挂载路由
 */
app.use(postRouter, userRouter, authRouter);

/**
 * 使用通用默认异常处理器
 */
app.use(defaultErrorHandler);

export default app;
