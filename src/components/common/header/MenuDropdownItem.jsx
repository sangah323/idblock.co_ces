import React from 'react';
import styles from '@/style/common/header/MenuDropdownItem.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateLan } from '@/store/slices/lanSlice';
import Image from '@/components/common/Image';

export default function MenuDropdownItem({
  menuPath = false,
  item,
  isOpenSideBar,
  setIsOpenSideBar,
}) {
  const dispatch = useDispatch();
  const isExternal = !!item.path;
  const isLanguage = !item.path && !menuPath;

  const handleMenuClick = (section) => {
    if (isOpenSideBar) {
      setIsOpenSideBar(false);
    }
    sessionStorage.setItem('scrollTarget', section);
  };

  const updateLanguage = (e) => {
    e.preventDefault();
    if (isOpenSideBar) {
      setIsOpenSideBar(false);
    }
    dispatch(updateLan(item.label));
  };

  return (
    <Link
      to={menuPath || item.path}
      className={styles.dropdownItem}
      onClick={
        isLanguage ? (e) => updateLanguage(e) : () => handleMenuClick(item.path)
      }
      aria-label="dropdown menu"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {item.icon && <Image src={item.icon} alt="icon" />}
      <p>{item.label}</p>
    </Link>
  );
}
