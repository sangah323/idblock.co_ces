import React, { useEffect } from 'react';
import styles from '@/style/careers/CareersHiringProcess.module.css';
import { translate } from '@/utils/translates';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CareersHiringProcess({ lan }) {
  const t = useT('CareersHiringProcess');
  const contentList = translate('careers', lan.toLowerCase(), `CareersHiringProcess.contents`);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const lastIndex = contentList.length - 1;
  const contents = contentList.map((content, index) => {
    return (
      <li key={index} className={styles.content}>
        <div className={styles.processIndex}>
          {index === lastIndex ? (
            <Image src="/assets/careers/check_icon.png" alt="check icon" />
          ) : (
            <p>{index + 1}</p>
          )}
        </div>
        <h2 className={styles.contentsTitle}>{content.contentsTitle}</h2>

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
    <section className={`subSection ${styles.processSection}`}>
      <div className={`container ${styles.processContainer}`}>
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
