import React, { useEffect } from 'react';
import styles from '@/style/careers/CareersIntro.module.css';
import { translate } from '@/utils/translates';
import { INFO_ICON_LIST } from '@/utils/constants/careers';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CareersIntro({ lan }) {
  const t = useT('CareersIntro');
  const contentList = translate('careers', lan.toLowerCase(), `CareersIntro.contents`);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const contents = contentList.map((content, index) => {
    return (
      <li key={index} className={styles.content}>
        <div className={styles.contentTop}>
          <Image
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            src={INFO_ICON_LIST[index]}
            alt="info icon"
          />
          <h2
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            className={styles.contentsTitle}
          >
            {content.contentsTitle}
          </h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-once="true"
          className={styles.descriptionWrapper}
        >
          <p className={styles.contentsSubTitle}>{content.contentsSubTitle}</p>
          <p className={styles.description}>{content.description}</p>
        </div>
      </li>
    );
  });

  return (
    <section className={`subSection ${styles.introSection}`}>
      <div className={`container ${styles.introContainer}`}>
        <div className={styles.titleWrapper}>
          <Image
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once="true"
            src="/assets/careers/quotes.png"
            alt="quotes image"
          />
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-once="true" className={styles.title}>
            {t('title')}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            className={styles.subTitle}
          >
            {t('subTitle')}
          </p>
        </div>

        <ul className={styles.contentsWrapper}>{contents}</ul>
      </div>
    </section>
  );
}
