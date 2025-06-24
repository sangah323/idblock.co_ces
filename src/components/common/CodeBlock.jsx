import { useEffect, useState } from 'react';
import styles from '@/style/common/CodeBlock.module.css';
import { getHighlighterSingleton } from '@/utils/shikiHighlighter';

export default function CodeBlock({ code, lang = 'jsx' }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const load = async () => {
      const highlighter = await getHighlighterSingleton();
      const result = highlighter.codeToHtml(code, {
        lang: lang,
        theme: 'github-dark',
      });
      setHtml(result);
    };

    load();
  }, [code, lang]);

  return <div className={styles.codeBlock} dangerouslySetInnerHTML={{ __html: html }} />;
}
