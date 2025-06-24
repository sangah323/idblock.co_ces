import React, { useState } from 'react';
import MenuDropdown from './MenuDropdown';
import styles from '@/style/common/header/MenuItem.module.css';
import { useNavigate } from 'react-router-dom';

export default function MenuItem({ item, isOpenSideBar, setIsOpenSideBar }) {
  const navigate = useNavigate();
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleMenuClick = (e) => {
    e.preventDefault();

    if (isOpenSideBar && !item.children) {
      setIsOpenSideBar(false);
    } else if (isOpenSideBar && item.children) {
      setIsOpenDropDown(!isOpenDropDown);
    }

    navigate(item.path);
    handleScrollToTop();
  };

  let dropdownStyle = undefined;

  if (isOpenSideBar) {
    dropdownStyle = {
      display: isOpenDropDown ? 'flex' : 'none',
    };
  }

  return (
    <button
      className={styles.menuItem}
      onClick={(e) => handleMenuClick(e)}
      aria-label="menu"
    >
      <p>{item.label}</p>

      {item.children && (
        <div className={styles.dropdownWrapper} style={dropdownStyle}>
          <MenuDropdown
            menuPath={item.path}
            items={item.children}
            isOpenSideBar={isOpenSideBar}
            setIsOpenSideBar={setIsOpenSideBar}
          />
        </div>
      )}
    </button>
  );
}
