import React from 'react';
import styles from '@/style/devcenter/DevCenterInfo.module.css';
import { translate } from '@/utils/translates';
import { CARD_IMAGE_LIST } from '@/utils/constants/devcenter';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function DevCenterInfo({ lan }) {
  const t = useT('DevCenterInfo');
  const cardList = translate('devcenter', lan.toLowerCase(), `DevCenterInfo.cards`);

  const cards = cardList.map((card, index) => {
    return (
      <div key={index} className={styles.card}>
        <Image src={CARD_IMAGE_LIST[index]} alt="service info icon" />
        <p className={styles.cardName}>{card}</p>
      </div>
    );
  });

  return (
    <section className={`subSection ${styles.infoSection}`}>
      <div className={`container ${styles.infoContainer}`}>
        <div className={styles.contents}>
          <h2 className={styles.title}>{t('title')}</h2>
          <div className={styles.subTitle}>
            <p>{t('subTitle[0]')}</p>
            <p>{t('subTitle[1]')}</p>
          </div>
        </div>

        <div className={styles.cards}>{cards}</div>
      </div>
    </section>
  );
}
