import React from 'react'
import styles from '@/style/common/header/CloseButton.module.css';
import Image from '@/components/common/Image';

export default function CloseButton({ setIsOpenSideBar }) {
  return (
    <button
      onClick={() => setIsOpenSideBar(false)}
      className={styles.closeButton}
      aria-label="close"
    >
      <Image src="/assets/nav/line-md_close.png" alt="close icon" />
    </button>
  );
}
