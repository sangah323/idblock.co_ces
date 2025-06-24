import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from '@/style/layout/DevLayout.module.css';
import Header from '@/components/Header';
import DevSidebar from '@/components/developer/DevSidebar';
import DevTabContext from '@/contexts/DevTabContext';

export default function DevLayout() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    navigate('/dev', { replace: true });
  }, [navigate]);

  return (
    <DevTabContext.Provider value={{ currentTab, setCurrentTab }}>
      <Header showLogoOnly={true} />

      <section className={`subSection ${styles.devSection}`}>
        <DevSidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <main className={styles.main}>
          <Outlet />
        </main>
      </section>
    </DevTabContext.Provider>
  );
}
