import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '@/style/common/Header.module.css';
import MenuContainer from './common/header/MenuContainer';
import MobileMenu from './common/header/MobileMenu';
import MobileContainer from './common/header/MobileContainer';
import Image from './common/Image';

export default function Header({ showLogoOnly = false }) {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" onClick={handleScrollToTop} aria-label="home">
          <Image
            src="/assets/nav/logo.png"
            name="logo"
            className={styles.logo}
          />
        </Link>

        <MenuContainer
          style={showLogoOnly ? { display: "none" } : { display: "flex" }}
        />

        <MobileContainer
          isOpenSideBar={isOpenSideBar}
          setIsOpenSideBar={setIsOpenSideBar}
        />
      </div>
      <MobileMenu
        isOpenSideBar={isOpenSideBar}
        setIsOpenSideBar={setIsOpenSideBar}
      />
    </header>
  );
}
