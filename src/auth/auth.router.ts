import express from 'express';
import * as authController from './auth.controller'
import { validateUserLoginData, authGuard } from './auth.middleware'
const router = express.Router();

/**
 * 用户登录接口
 */
router.post('/login', validateUserLoginData, authController.login)
router.post('/auth/validate', authGuard, authController.validate)
export default router;