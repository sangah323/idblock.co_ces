import React from 'react'
import styles from '@/style/common/header/MobileContainer.module.css';
import LanguageButton from './LanguageButton';
import HamburgerButton from './HamburgerButton';

export default function MobileContainer({ isOpenSideBar, setIsOpenSideBar }) {
  return (
    <div className={styles.mobileContainer}>
      <LanguageButton />
      <HamburgerButton onClick={() => setIsOpenSideBar(!isOpenSideBar)} />
    </div>
  );
}
