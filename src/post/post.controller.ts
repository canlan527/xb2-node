import { Request, Response, NextFunction } from 'express';
import { getPosts } from './post.service'

/**
 * 内容列表
 */
export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await getPosts()

    res.send(posts)
  } catch (err) {
    next(err)
  }
}