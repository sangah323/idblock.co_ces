import React from 'react';
import FilterButton from './FilterButton';
import { FILTER_BUTTON_LIST } from '@/utils/constants/blog';
import styles from '@/style/common/FilterBar.module.css';

export default function FilterBar({ selectedFilter, setSelectedFilter }) {
  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const buttons = FILTER_BUTTON_LIST.map((button) => {
    return (
      <FilterButton
        key={button}
        title={button}
        isActive={selectedFilter === button}
        onClick={() => handleFilter(button)}
      />
    );
  });

  return (
    <div className={styles.filterBarWrapper}>
      <div className={styles.filterBar}>{buttons}</div>
    </div>
  );
}
