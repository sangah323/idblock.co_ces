import React, { useEffect } from 'react';
import styles from '@/style/careers/CareersMain.module.css';
import { Link } from 'react-scroll';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CareersMain() {
  const t = useT('CareersMain');

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <section className={`subSection ${styles.heroSection}`}>
      <div className={`container ${styles.heroContainer}`}>
        <Image
          className={styles.image}
          src="/assets/careers/main_image.png"
          alt="main image"
        />
        <div className={styles.contents}>
          <h1 data-aos="fade-up" data-aos-delay="0" className={styles.title}>
            {t("title")}
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.subTitle}
          >
            <p>{t("subTitle[0]")}</p>
            <p>{t("subTitle[1]")}</p>
          </div>
          <Link
            data-aos="fade-up"
            to="openRoles"
            data-aos-delay="400"
            smooth={500}
            className={styles.recruitButton}
            aria-label="open roles"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
