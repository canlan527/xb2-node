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
    default:
      statusCode = 500;
      message = '服务暂时出了点问题~~ 请见谅~ 🌴'

  }
  res.status(statusCode).send({ message });
}