import React from 'react'
import styles from '@/style/devcenter/DevCenterCta.module.css';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';
import { Link } from 'react-router-dom';
import { DEVELOPER_ROUTES } from '@/utils/routes';

export default function DevCenterCta() {
  const t = useT("DevCenterCta");

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className={`subSection ${styles.ctaSection}`}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.contents}>
          <div className={styles.title}>
            <h2>{t("title[0]")}</h2>
            <h2>{t("title[1]")}</h2>
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

        <div className={styles.image}>
          <Image src="/assets/devcenter/cta_image.png" alt="banner image" />
        </div>
      </div>
    </section>
  );
}
