import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from '@/style/common/Footer.module.css';
import { translate } from '@/utils/translates';
import {
  AUTH_LOGO_LIST,
  SOCIAL_LINK_LIST,
  SOCIAL_ICON_LIST,
  FILE_LINK_LIST,
} from '@/utils/constants/footer';
import Image from './common/Image';

export default function Footer() {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('common', lan.toLowerCase(), `Footer.${key}`);
  const locationList = translate('common', lan.toLowerCase(), `Footer.bottom.location`);

  const locations = locationList.map((loc, index) => {
    return (
      <li key={index}>
        <h1>{loc.name}</h1>
        <p>{loc.address}</p>
      </li>
    );
  });

  const logos = AUTH_LOGO_LIST.map((url, index) => {
    return (
      <li key={index}>
        <Image src={url} name={'auth logo'} className={styles.authLogo} />
      </li>
    );
  });

  const socialIcons = SOCIAL_ICON_LIST.map((url, index) => {
    return (
      <Link
        key={index}
        to={SOCIAL_LINK_LIST[index]}
        className={styles.socialIcon}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="social link"
      >
        <Image src={url} name={'social icon'} />
      </Link>
    );
  });

  const files = FILE_LINK_LIST.map((url, index) => {
    return (
      <Link key={index} to={url} target="_blank" rel="noopener noreferrer" aria-label="file link">
        {t(`top.context[${index}]`)}
      </Link>
    );
  });

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.footerLeft}>
          <ul className={styles.contact}>
            <li>{t('bottom.company')}</li>
            <li>
              <a href="tel:+82269759999" aria-label="전화번호: +82-2-6975-9999">
                TEL : +82 2-6975-9999
              </a>
            </li>
            <li>
              <a href="fax:+8260085040" aria-label="팩스번호: +82-2-6008-5040">
                FAX : +82 2-6008-5040
              </a>
            </li>
            <li>
              <a
                href="mailto:crosshub@crosshub.kr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="email"
              >
                E-mail : crosshub@crosshub.kr
              </a>
            </li>
          </ul>

          <ul className={styles.authLogoBox}>{logos}</ul>

          <p>© 2025 Crosshub. All rights reserved.</p>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerLinkBox}>
            <nav className={styles.footerLinks} aria-label="Footer navigation">
              {files}
            </nav>

            <div className={styles.socialIcons}>{socialIcons}</div>
          </div>

          <ul className={styles.address}>{locations}</ul>
        </div>
      </div>
    </footer>
  );
}
