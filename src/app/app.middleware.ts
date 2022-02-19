import { Request, Response, NextFunction } from 'express'

/**
 * 输出请求地址
 * @param req 
 * @param res 
 * @param next 
 */
export const requestPost = (req: Request, res: Response, next: NextFunction) => {
 console.log(req.url)
 next()
}

/**
 * 默认异常处理器
 */
export const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if(err.message) {
    console.log('🎮', err.message);
  }
  let statusCode: number, message: string;
  // 处理异常
  switch(err.message) {
    case 'NAME_IS_REQUIRED':
      statusCode = 400;
      message = '请提供用户名';
      break;
    case 'PASSWORD_IS_REQUIRED':
      statusCode = 400;
      message = '请提供密码';
      break;
    default:
      statusCode = 500;
      message = '服务暂时出了点问题~~ 请见谅~ 🌴'
      break;
  }
  res.status(statusCode).send({ message });
}