import React from 'react';
import styles from '@/style/home/HomeAchievement.module.css';
import { useT } from '@/hooks/useT';

export default function HomeAchievement() {
  const t = useT('HomeAchievement');
  const dataList = Array.isArray(t('list')) ? t('list') : [];

  return (
    <section className={styles.achievementSection}>
      <div className={styles.title}>
        <h2 className={styles.sectionTitle}>{t('title[0]')}</h2>
        <h1 className={styles.sectionDesc}>
          {t('description[0]')} <span className={styles.highlight}>{t('description[1]')}</span>{' '}
          {t('description[2]')}
          <span className={styles.sectionYear}> {t('description[3]')}</span>
        </h1>
      </div>

      <div className={styles.statsGrid}>
        {dataList.map((item, i) => {
          if (i === 0) {
            const chunked = [];
            for (let j = 0; j < item.details.length; j += 2) {
              chunked.push(item.details.slice(j, j + 2));
            }

            return (
              <div key={i} className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h4>{item.label}</h4>
                  <h2>{item.value}</h2>
                </div>

                <div className={styles.detailGrid}>
                  {chunked.map((row, rowIndex) => (
                    <ul key={rowIndex} className={styles.detailRow}>
                      {row.map((detail, k) => (
                        <li key={k}>{detail}</li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={i} className={styles.statCard}>
              <div className={styles.statHeader}>
                <h4>{item.label}</h4>
                <h2>{item.value}</h2>
              </div>
              <ul className={styles.detailList}>
                {item.details.map((detail, j) => (
                  <li key={`${i}-${j}`}>{detail}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
