import React from 'react'
import styles from '@/style/about/AboutGoal.module.css';
import { useT } from '@/hooks/useT';
import { VALUE_TITLE_LIST, VALUE_IMAGE_LIST } from '@/utils/constants';
import Image from '@/components/common/Image';

export default function AboutGoal() {
  const t = useT('AboutGoal');

  const values = VALUE_TITLE_LIST.map((title, index) => {
    return (
      <div key={index} className={styles.valueCard}>
        <div className={styles.description}>
          <h4>{title}</h4>
          <p>{t(`value.card[${index}].content`)}</p>
        </div>
        <Image src={VALUE_IMAGE_LIST[index]} name="value image" />
      </div>
    );
  });

  return (
    <section className={`subSection ${styles.goalSection}`}>
      <div className={`container ${styles.goalContainer}`}>
        <div className={styles.goal}>
          <div className={styles.goalTitle}>
            <h3>GOAL</h3>
            <div>
              <h2>{t('goal.title[0]')}</h2>
              <h2>{t('goal.title[1]')}</h2>
            </div>
          </div>

          <div className={styles.goalContent}>
            <div className={styles.goalCard}>
              <h4>GOAL</h4>
              <p>{t('goal.card[0].content[0]')}</p>
              <p>{t('goal.card[0].content[1]')}</p>
            </div>
            <div className={styles.goalCard}>
              <h4>VISION</h4>
              <p>{t('goal.card[1].content[0]')}</p>
              <p>{t('goal.card[1].content[1]')}</p>
              <p>{t('goal.card[1].content[2]')}</p>
              <p>{t('goal.card[1].content[3]')}</p>
            </div>
            <div className={styles.goalCard}>
              <h4>MISSION</h4>
              <p>{t('goal.card[2].content[0]')}</p>
              <p>{t('goal.card[2].content[1]')}</p>
              <p>{t('goal.card[2].content[2]')}</p>
              <p>{t('goal.card[2].content[3]')}</p>
            </div>
          </div>
        </div>

        <div className={styles.value}>
          <div className={styles.valueTitle}>
            <h3>VALUE</h3>
            <h2>{t('value.title[0]')}</h2>
            <h2>{t('value.title[1]')}</h2>
          </div>

          <div className={styles.valueContent}>{values}</div>
        </div>
      </div>
    </section>
  );
}
