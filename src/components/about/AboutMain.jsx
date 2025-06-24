import React from 'react'
import styles from '@/style/about/AboutMain.module.css';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function AboutMain() {
  const t = useT('AboutMain');

  return (
    <section className={`subSection ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutTitle}>
            <h1>{t('title[0]')}</h1>
            <h1>{t('title[1]')}</h1>
          </div>
          <div className={styles.aboutDescription}>
            <p>{t('description[0]')}</p>
            <p>{t('description[1]')}</p>
            <p>{t('description[2]')}</p>
          </div>
        </div>

        <div className={styles.aboutImages}>
          <Image src="/assets/about/about_main.png" alt="about main image" />
        </div>
      </div>
    </section>
  );
}
