import { Request, Response, NextFunction} from 'express';

/**
 * 用户登录接口处理器
 */
export const login = (req: Request, res: Response, next: NextFunction) => {
  // 准备数据
  const { name, password } = req.body;

  // 做出响应
  res.send({message: `欢迎回来 ${name}`});

}