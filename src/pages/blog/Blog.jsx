import React from 'react';
import BlogMain from '@/components/blog/BlogMain';
import BlogContent from '@/components/blog/BlogContent';
import { TContext } from '@/contexts/TContext';

export default function Blog() {
  const pageKey = 'blog';

  return (
    <TContext.Provider value={{ pageKey }}>
      <BlogMain />
      <BlogContent />
    </TContext.Provider>
  );
}
