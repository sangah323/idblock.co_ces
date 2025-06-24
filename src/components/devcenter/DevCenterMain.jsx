import React from 'react';
import styles from '@/style/devcenter/DevCenterMain.module.css';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';
import { Link } from 'react-router-dom';
import { DEVELOPER_ROUTES } from '@/utils/routes';

export default function DevCenterMain() {
  const t = useT("DevCenterMain");

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className={`subSection ${styles.devCenterSection}`}>
      <div className={`container ${styles.devCenterContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.title}>
            <h1>{t("title[0]")}</h1>
            <h1>{t("title[1]")}</h1>
          </div>
          <div className={styles.subTitle}>
            <p>{t("subTitle[0]")}</p>
            <p>{t("subTitle[1]")}</p>
          </div>
          <Link
            to={DEVELOPER_ROUTES.ROOT.PATH}
            onClick={handleScrollToTop}
            className={styles.button}
            aria-label="link"
          >
            {t("button")}
          </Link>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/assets/devcenter/main_image.gif"
            alt="dev center video"
          />
        </div>
      </div>
    </section>
  );
}
