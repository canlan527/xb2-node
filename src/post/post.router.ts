import express from 'express';
import * as postController from './post.controller';
import { requestPost } from '../app/app.middleware'

const router = express.Router(); // 定义接口路由

router.get('/posts', requestPost, postController.index); // 定义 post 接口

router.post('/posts', postController.store); // 创建内容

router.patch('/posts/:postId', postController.update); // 更新接口
export default router; // 默认导出路由