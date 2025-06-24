import { useSelector } from 'react-redux';
import { usePageKey } from '@/contexts/TContext';
import { translate } from '@/utils/translates';

export function useT(componentName) {
  const pageKey = usePageKey();
  const lan = useSelector((state) => state.lan.ver);

  return (key) => {
    const lang = lan.toLowerCase();
    return translate(pageKey, lang, `${componentName}.${key}`);
  };
}
