import React from 'react'
import MenuDropdownItem from './MenuDropdownItem';
import styles from '@/style/common/header/MenuDropdown.module.css';

export default function MenuDropdown({ menuPath, items, isOpenSideBar, setIsOpenSideBar }) {
  const dropdownItems = items.map((item) => {
    return (
      <MenuDropdownItem
        key={item.label}
        menuPath={menuPath}
        item={item}
        isOpenSideBar={isOpenSideBar}
        setIsOpenSideBar={setIsOpenSideBar}
      />
    );
  });

  return (
    <div className={`${styles.dropdown} ${isOpenSideBar ? styles.active : ''}`}>
      {dropdownItems}
    </div>
  );
}
