import React from 'react';
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';

import styles from '@/style/developer/DevAuth.module.css';
import { translate } from '@/utils/translates';

import DevAuthRequest from './DevAuthRequest';
import DevAuthHistory from './DevAuthHistory';
import DevAuthStatus from './DevAuthStatus';
import DevAuthResult from './DevAuthResult';

export default function DevAuth() {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('developer', lan.toLowerCase(), key);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h1>{t('devAuth.title')}</h1>
        <p>{t('devAuth.description')}</p>
      </div>

      <Element name="request">
        <DevAuthRequest />
      </Element>
      <Element name="history">
        <DevAuthHistory />
      </Element>
      <Element name="status">
        <DevAuthStatus />
      </Element>
      <Element name="result">
        <DevAuthResult />
      </Element>
    </div>
  );
}
