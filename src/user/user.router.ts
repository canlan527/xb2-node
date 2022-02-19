import express from 'express';
import * as userController from './user.controller';
import { validateUserData } from './user.middleware'
const router = express.Router();


// 创建用户接口
router.post('/users', validateUserData, userController.store);


export default router;