import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userService from '../user/user.service'
import { PUBLIC_KEY } from '../app/app.config';
import { TokenPayload } from './auth.interface'

 /**
 * 验证用户登录数据
 */
export const validateUserLoginData = async (req: Request, res: Response, next: NextFunction) => {
  console.log('👮🏻 验证用户数据');

  // 准备数据
  const { name, password } = req.body;

  // 验证必填数据
  if(!name) return next(new Error('NAME_IS_REQUIRED'));
  if(!password) return next(new Error('PASSWORD_IS_REQUIRED'));
  
  // 验证用户名
  const user = await userService.getUserByName(name, { password: true });
  if(!user) return next(new Error('USER_DOES_NOT_EXIST'));

  //验证用户密码
  const matched = await bcrypt.compare(password, user.password);
  if(!matched) return next(new Error('PASSWORD_DOSE_NOT_MACTH'))

  // 在请求主体里添加用户
  req.body.user = user;

  // 下一步
  next();
}

/**
 * 验证用户身份
 */
export const authGuard = (req: Request, res: Response, next: NextFunction) => {
  console.log('👮🏻 验证用户身份');

  try {
     // 提取 Authorization
     const authorization = req.header('Authorization');
     if(!authorization) throw new Error();
     
     // 提取 JWT 令牌
     const token = authorization.replace('Bearer ', '');
     if(!token) throw new Error();

     // 验证令牌
     const decoded = jwt.verify(token, PUBLIC_KEY, {
       algorithms: ['RS256'],
     })

     // 在请求里添加当前用户
     req.user = decoded as TokenPayload;

     // 下一步
     next();
  } catch (error) {
    next(new Error('UNAUTHORIZED'))
  }
}