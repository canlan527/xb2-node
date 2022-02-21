import express from 'express';
import * as authController from './auth.controller'

const router = express.Router();

/**
 * 用户登录接口
 */
router.post('/login', authController.login)

export default router;