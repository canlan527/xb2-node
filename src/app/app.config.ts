import dotenv from 'dotenv';

// 默认会载入根目录下 .env 里设置的环境变量
dotenv.config();

/**
 * 应用配置
 */
export const { APP_PORT } = process.env;
