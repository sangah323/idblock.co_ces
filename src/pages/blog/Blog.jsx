import React from 'react';
import BlogMain from '@/components/blog/BlogMain';
import BlogContent from '@/components/blog/BlogContent';
import { TContext } from '@/contexts/TContext';
import useScrollToTop from '@/hooks/useScrollToTop';

export default function Blog() {
  const pageKey = 'blog';

  // 페이지 이동 시 스크롤을 맨 위로 이동
  useScrollToTop();

  return (
    <TContext.Provider value={{ pageKey }}>
      <BlogMain />
      <BlogContent />
    </TContext.Provider>
  );
}
