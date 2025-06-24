import React from 'react'
import styles from '@/style/common/header/LanguageButton.module.css';
import MenuDropdown from './MenuDropdown';
import { LANGUAGE_ITEM_LIST } from '@/utils/constants/header';
import Image from '@/components/common/Image';

export default function LanguageButton() {
  return (
    <button className={styles.languageButton} aria-label="language">
      <div className={styles.imageBox}>
        <Image
          className={styles.inActive}
          src="/assets/nav/nav_lang.png"
          alt="언어"
        />
        <Image
          className={styles.active}
          src="/assets/nav/nav_lang_active.png"
          alt="언어"
        />
      </div>

      <div className={styles.dropdownWrapper}>
        <MenuDropdown items={LANGUAGE_ITEM_LIST} />
      </div>
    </button>
  );
}




