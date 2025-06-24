import React, { useState } from 'react';
import styles from '@/style/common/header/DownloadButton.module.css';
import MenuDropdown from './MenuDropdown';
import { DOWNLOAD_ITEM_LIST } from '@/utils/constants/header';

import { useSelector } from 'react-redux';
import { translate } from '@/utils/translates';

export default function DownloadButton({ isOpenSideBar, setIsOpenSideBar }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('common', lan.toLowerCase(), `Header.${key}`);

  const handleMenuClick = () => {
    if (isOpenSideBar) {
      setIsOpenDropDown(!isOpenDropDown);
    }
  };

  let dropdownStyle = undefined;

  if (isOpenSideBar) {
    dropdownStyle = {
      display: isOpenDropDown ? 'flex' : 'none',
    };
  }

  return (
    <button
      className={styles.downloadButton}
      onClick={handleMenuClick}
      aria-label="download"
    >
      <p>{t("download")}</p>
      <div className={styles.dropdownWrapper} style={dropdownStyle}>
        <MenuDropdown
          items={DOWNLOAD_ITEM_LIST}
          isOpenSideBar={isOpenSideBar}
          setIsOpenSideBar={setIsOpenSideBar}
        />
      </div>
    </button>
  );
}
