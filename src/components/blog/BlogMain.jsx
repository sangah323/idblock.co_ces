import React from 'react';
import styles from '@/style/blog/BlogMain.module.css';
import { useT } from '@/hooks/useT';

export default function BlogMain() {
  const t = useT('BlogMain');

  return (
    <section className={`subSection ${styles.heroSection}`}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.motionImages}>
        {[...Array(7)].map((_, i) => (
          <img
            key={i}
            className={`${styles.motionImage} ${styles[`motionImage${i + 1}`]}`}
            src={`/assets/blog/motion_${i + 1}.png`}
            alt={`motion image ${i + 1}`}
          />
        ))}
      </div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subTitle}>{t('subTitle')}</p>
        </div>
      </div>
    </section>
  );
}
