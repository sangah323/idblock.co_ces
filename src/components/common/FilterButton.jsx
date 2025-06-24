import React from 'react'
import styles from '@/style/common/FilterButton.module.css';
import { useSelector } from 'react-redux';
import { translate } from '@/utils/translates';

export default function FilterButton({ isActive, onClick, title }) {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('blog', lan.toLowerCase(), `FilterButton.${key}`);

  return (
    <button
      className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      aria-label="filter"
    >
      <p className={styles.buttonTitle}>{t(`${title}`)}</p>
    </button>
  );
}
