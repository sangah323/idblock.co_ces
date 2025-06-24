import React, { useEffect, useState } from 'react';
import MarkdownRenderer from './common/MarkdownRenderer';
import { translate } from '@/utils/translates';

export default function BlogPost({ slug, lan }) {
  const [content, setContent] = useState('');
  const t = (key) => translate('blog', lan, `${BlogPost.name}.${key}`);

  useEffect(() => {
    fetch(`/posts/${slug}/${lan}.md`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent('# 문서를 찾을 수 없습니다.'));
  }, [slug, lan]);

  return <MarkdownRenderer t={t} content={content} />;
}