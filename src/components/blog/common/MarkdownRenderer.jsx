import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import matter from 'gray-matter';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

import styles from '@/style/blog/common/MarkdownRenderer.module.css';
import { remarkVideoEmbed } from '@/utils/blog/remark-video-embed';
import { remarkPdfEmbed } from '@/utils/blog/remark-pdf-embed';

import BlogCta from './BlogCta';
import BlogAdjacentPosts from './BlogAdjacentPosts';
import BlogHeader from './BlogHeader';

export default function MarkdownRenderer({ t, content }) {
  const { data, content: markdownBody } = matter(content || '');

  return (
    <div className={`container ${styles.renderContainer}`}>
      <BlogHeader data={data} />

      <div className={styles.markdownWrapper}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkVideoEmbed, remarkPdfEmbed]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          components={{
            a: ({ children, href, ...rest }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="related link"
                {...rest}
              >
                {children}
              </a>
            ),
          }}
        >
          {markdownBody}
        </ReactMarkdown>
      </div>

      <BlogCta t={t} title={data.title} />

      <BlogAdjacentPosts currentSlug={data.slug} />
    </div>
  );
}
