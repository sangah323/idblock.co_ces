import React from 'react';
import styles from '@/style/home/HomePartner.module.css';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function HomePartner() {
  const t = useT('HomePartner');
  const topImages = Array(3).fill('/assets/home/partner_image1.png');
  const bottomImages = Array(3).fill('/assets/home/partner_image2.png');

  return (
    <section className={`subSection ${styles.partnerSection}`}>
      <div className={`container ${styles.partnerContainer}`}>
        <div className={styles.partnerContent}>
          <h2>{t('title[0]')}</h2>
          <h2>{t('title[1]')}</h2>
        </div>

        <div className={styles.partnerImages}>
          <div className={styles.partnerImageTop}>
            {topImages.map((src, idx) => (
              <Image key={`top-${idx}`} src={src} alt="partner image" />
            ))}
          </div>
          <div className={styles.partnerImageBottom}>
            {bottomImages.map((src, idx) => (
              <Image key={`bottom-${idx}`} src={src} alt="partner image" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
