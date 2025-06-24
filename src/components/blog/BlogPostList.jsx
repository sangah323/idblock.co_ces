import React from 'react';
import BlogPostItem from './BlogPostItem';
import styles from '@/style/blog/BlogPostList.module.css';

export default function BlogPostList({ visiblePosts }) {
  const blogPosts = visiblePosts.map((post, index) => {
    return <BlogPostItem key={index} post={post} />;
  });

  return <div className={styles.blogPostList}>{blogPosts}</div>;
}
