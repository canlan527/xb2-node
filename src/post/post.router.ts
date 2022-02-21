import express from 'express';
import * as postController from './post.controller';
import { requestPost } from '../app/app.middleware';
import { authGuard } from '../auth/auth.middleware';

const router = express.Router(); // 定义接口路由

router.get('/posts', requestPost, postController.index); // 定义 post 接口

router.post('/posts', authGuard, postController.store); // 创建内容

router.patch('/posts/:postId', postController.update); // 更新内容接口

router.delete('/posts/:postId', postController.destroy); // 删除内容接口
export default router; // 默认导出路由