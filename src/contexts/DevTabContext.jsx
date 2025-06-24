import { createContext, useContext } from 'react';

const DevTabContext = createContext(null);

export const useDevTab = () => {
  const context = useContext(DevTabContext);
  if (!context) throw new Error('useDevTab must be used within DevTabProvider');
  return context;
};

export default DevTabContext;