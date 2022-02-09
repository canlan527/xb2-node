import { Request, Response, NextFunction } from 'express';
import { getPosts, createPost, updatePost } from './post.service'
import _ from 'lodash';
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

/**
 * 更新内容
 */
export const update = async (req: Request, res: Response, next: NextFunction) => {
  // 获取更新内容的ID
  const { postId } = req.params;

  // 准备数据
  // const { title, content } = req.body;
  const post = _.pick(req.body, ['title','content']);
  // 更新
  try {
    const data = await updatePost(post, parseInt(postId, 10));
    res.send(data);
  }catch (err) {
    next(err);
  }
}