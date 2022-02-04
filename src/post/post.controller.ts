import { Request, Response, NextFunction } from 'express';
import { getPosts } from './post.service'

/**
 * 内容列表
 */
export const index = (req: Request, res: Response, next: NextFunction) => {
  // 测试使用异常处理器
  if(req.headers.authorization !== 'SECRET') {
    return next(new Error())
  }
  const posts = getPosts()
  res.send(posts)
}