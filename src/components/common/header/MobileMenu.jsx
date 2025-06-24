import React, { useEffect } from 'react';
import MenuItem from './MenuItem';
import styles from '@/style/common/header/MobileMenu.module.css';
import DownloadButton from './DownloadButton';
import CloseButton from './CloseButton';
import { useMenuData } from './useMenuData';

export default function MobileMenu({ isOpenSideBar, setIsOpenSideBar }) {
  const menuData = useMenuData();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setIsOpenSideBar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const menus = menuData.map((item) => {
    return (
      <MenuItem
        key={item.key}
        item={item}
        isOpenSideBar={isOpenSideBar}
        setIsOpenSideBar={setIsOpenSideBar}
      />
    );
  });

  return (
    <div
      className={styles.MobileMenu}
      style={isOpenSideBar ? { display: 'flex' } : { display: 'none' }}
    >
      <CloseButton setIsOpenSideBar={setIsOpenSideBar} />

      <div className={styles.menuItems}>
        {menus}
        <DownloadButton isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
      </div>
    </div>
  );
}
