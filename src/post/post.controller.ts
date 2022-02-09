import { Request, Response, NextFunction } from 'express';
import { getPosts, createPost } from './post.service'

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

/**
 * 创建内容
 */
export const store = async (req: Request, res: Response, next: NextFunction) => {
  // 准备数据
  const { title, content } = req.body;
  // 创建内容
  try {
    const data = await createPost({ title, content });
    res.status(201).send(data);
  } catch (err) {
    next(err)
  }

}