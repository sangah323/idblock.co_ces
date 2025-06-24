import React from 'react'
import styles from '@/style/common/header/MenuContainer.module.css';
import MenuItem from './MenuItem';
import DownloadButton from './DownloadButton';
import LanguageButton from './LanguageButton';
import { useMenuData } from './useMenuData';

export default function MenuContainer() {
  const menuData = useMenuData();
  const menus = menuData.map((item) => {
    return <MenuItem key={item.key} item={item} />;
  });

  return (
    <div className={styles.menuContainer}>
      {menus}
      <DownloadButton />
      <LanguageButton />
    </div>
  );
}
