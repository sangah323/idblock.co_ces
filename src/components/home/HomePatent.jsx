import React from 'react';
import styles from '@/style/home/HomePatent.module.css';
import { useT } from '@/hooks/useT';

export default function HomePatent() {
  const t = useT('HomePatent');

  return (
    <section className={`subSection ${styles.patentSection}`}>
      <div className={`container ${styles.patentContainer}`}>
        <div className={styles.patentContent}>
          <p>{t('description')}</p>
          <h2>{t('title[0]')}</h2>
          <h2>{t('title[1]')}</h2>
        </div>

        <ul className={styles.patentImages}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
