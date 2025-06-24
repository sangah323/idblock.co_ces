import React from 'react'
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import styles from '@/style/developer/DevPayment.module.css';
import { translate } from '@/utils/translates';
import DevPayRequest from './DevPayRequest';
import DevPayInquiry from './DevPayInquiry';
import DevPayCancel from './DevPayCancel';

export default function DevPayment() {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('developer', lan.toLowerCase(), key);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h1>{t("devPayment.title")}</h1>
        <p>{t("devPayment.description")}</p>
      </div>
      <Element name="payRequest">
        <DevPayRequest />
      </Element>
      <Element name="inquiry">
        <DevPayInquiry />
      </Element>
      <Element name="cancel">
        <DevPayCancel />
      </Element>
    </div>
  );
}
