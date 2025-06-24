import { createContext, useContext } from 'react';

export const TContext = createContext(null);

export const usePageKey = () => {
  const context = useContext(TContext);
  if (!context) throw new Error('TContext not found');
  return context.pageKey;
};
