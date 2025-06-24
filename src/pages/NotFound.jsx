import React from 'react'
import styles from '@/style/pages/NotFound.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSelector } from 'react-redux';
import { translate } from '@/utils/translates';
import { Link } from 'react-router-dom';
import Image from '@/components/common/Image';

export default function NotFound() {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('common', lan.toLowerCase(), key);

  return (
    <>
      <Header showLogoOnly={true}></Header>
      <section className="subSection">
        <div className={`container ${styles.errorContainer}`}>
          <div className={styles.errorBox}>
            <Image src="/assets/notfound/error-image.png" alt="error image" />
            <p>{t("notfound.context[0]")}</p>
            <p>{t("notfound.context[1]")}</p>
          </div>
          <Link to="/" aria-label="notfound">
            {t("notfound.button")}
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
