import React, { useEffect } from 'react';
import styles from '@/style/careers/CareersCulture.module.css';
import { translate } from '@/utils/translates';
import { CULTURE_ICON_LIST } from '@/utils/constants/careers';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CareersCulture({ lan }) {
  const t = useT('CareersCulture');
  const contentList = translate('careers', lan.toLowerCase(), `CareersCulture.contents`);

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
            src={CULTURE_ICON_LIST[index]}
            alt="culture icon"
          />
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            className={styles.contentsTitle}
          >
            {content.contentsTitle}
          </h2>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="true"
          className={styles.description}
        >
          {content.description}
        </p>
      </li>
    );
  });

  return (
    <section className={`subSection ${styles.cultureSection}`}>
      <div className={`container ${styles.cultureContainer}`}>
        <div className={styles.titleWrapper}>
          <Image
            data-aos="fade-up"
            data-aos-delay="0"
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
