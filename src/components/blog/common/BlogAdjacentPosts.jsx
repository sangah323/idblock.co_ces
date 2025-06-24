import React from 'react'
import { postsIndex } from '@/utils/blog/postsIndex';
import BlogAdjacentPostItem from './BlogAdjacentPostItem';
import styles from '@/style/blog/common/BlogAdjacentPosts.module.css';
import { useSelector } from 'react-redux';

export default function BlogAdjacentPosts({ currentSlug }) {
  const lan = useSelector((state) => state.lan.ver);
  const posts = postsIndex[lan.toLowerCase()] || [];

  const index = posts.findIndex((post) => post.slug === currentSlug);
  if (index === -1) return null;

  const prevPosts = [];
  const nextPosts = [];

  const hasPrev = index > 0;
  const hasNext = index < posts.length - 1;

  if (!hasPrev && hasNext) {
    nextPosts.push(posts[index + 1]);
    if (posts[index + 2]) nextPosts.push(posts[index + 2]);
  } else if (hasPrev && hasNext) {
    prevPosts.push(posts[index - 1]);
    nextPosts.push(posts[index + 1]);
  } else if (!hasNext && hasPrev) {
    prevPosts.push(posts[index - 1]);
    if (posts[index - 2]) prevPosts.push(posts[index - 2]);
  }

  return (
    <div className={styles.postsWrapper}>
      {prevPosts.length > 0 &&
        prevPosts.map((post) => {
          return <BlogAdjacentPostItem key={post.slug} data={post} />;
        })}
      {nextPosts.length > 0 &&
        nextPosts.map((post) => {
          return <BlogAdjacentPostItem key={post.slug} data={post} />;
        })}
    </div>
  );
}
