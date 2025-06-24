import React from 'react';
import { Link } from 'react-router-dom';

import styles from '@/style/home/HomeMain.module.css';
import { DOWNLOAD_ICON_LIST, DOWNLOAD_LINK_LIST } from '@/utils/constants/home';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function HomeMain() {
  const t = useT("HomeMain");

  return (
    <section className="subSection">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <h1>{t("title[0]")}</h1>
            <h1>{t("title[1]")}</h1>
          </div>

          <div className={styles.heroDescription}>
            <p>{t("description[0]")}</p>
            <p>{t("description[1]")}</p>
            <p>{t("description[2]")}</p>
          </div>

          <div className={styles.downloadButtons}>
            <Link
              className={styles.downloadButton}
              to={DOWNLOAD_LINK_LIST.ANDROID}
              role="button"
              target="_blank"
              aria-label="download"
            >
              <Image
                loading="lazy"
                src={DOWNLOAD_ICON_LIST.ANDROID}
                alt="App Icon"
              />
              <p>Google Play</p>
            </Link>
            <Link
              className={styles.downloadButton}
              to={DOWNLOAD_LINK_LIST.APPLE}
              role="button"
              target="_blank"
              aria-label="download"
            >
              <Image
                loading="lazy"
                src={DOWNLOAD_ICON_LIST.APPLE}
                alt="App Icon"
              />
              <p>App Store</p>
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            width="100%"
            height="auto"
          >
            <source
              src="/assets/home/first_idblock_demo.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
