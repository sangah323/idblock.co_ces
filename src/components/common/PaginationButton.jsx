import React from 'react'
import styles from '@/style/common/PaginationButton.module.css';

export default function PaginationButton({
  page = false,
  children,
  disabled,
  currentPage,
  onClick,
}) {
  const isActive = page === currentPage;

  return (
    <button
      className={`${styles.paginationButton} ${isActive ? styles.active : ""}`}
      disabled={disabled}
      onClick={() => onClick()}
      aria-label="pagination"
    >
      {children}
    </button>
  );
}
