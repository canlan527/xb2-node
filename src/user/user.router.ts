import express from 'express';
import * as userController from './user.controller';
import { validateUserData, hashpassword } from './user.middleware'
const router = express.Router();


// 创建用户接口
router.post('/users', validateUserData, hashpassword, userController.store);


export default router;