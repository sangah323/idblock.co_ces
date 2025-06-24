import { createHighlighter } from 'shiki';

let highlighterPromise = null;

export const getHighlighterSingleton = () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      langs: ['jsx', 'tsx', 'json', 'js', 'java', 'typescript', 'bash'],
      themes: ['github-dark'],
    });
  }
  return highlighterPromise;
};
