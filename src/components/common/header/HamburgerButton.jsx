import React from 'react'
import styles from '@/style/common/header/HamburgerButton.module.css';
import Image from '@/components/common/Image';

export default function HamburgerButton({ onClick }) {
  return (
    <button
      className={styles.hamburgerButton}
      onClick={onClick}
      aria-label="mobile menu"
    >
      <Image
        className={styles.inActive}
        src="/assets/nav/cil_hamburger-menu.png"
        alt="hamburger menu icon"
      />
      <Image
        className={styles.active}
        src="/assets/nav/cil_hamburger-menu_active.png"
        alt="hamburger menu icon"
      />
    </button>
  );
}
