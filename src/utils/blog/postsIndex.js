import { posts as kor } from './postsIndex.kor.js';
import { posts as eng } from './postsIndex.eng.js';
import { posts as jpn } from './postsIndex.jpn.js';
import { posts as vnm } from './postsIndex.vnm.js';

export const postsIndex = {
  kor,
  eng,
  jpn,
  vnm,
};

export const BLOG_FILE_PATH = {
  INDEX: (lan = 'kor') => `src/utils/blog/postsIndex.${lan}.js`,
  MARKDOWN_PATH: 'public/posts',
};
