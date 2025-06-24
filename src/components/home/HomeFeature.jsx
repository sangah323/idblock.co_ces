import React, { useEffect, useRef, useState } from 'react';

import { translate } from '@/utils/translates';
import styles from '@/style/home/HomeFeature.module.css';
import { FEATURE_IMAGE_LIST } from '@/utils/constants';
import Image from '@/components/common/Image';

export default function HomeFeature({ lan }) {
  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const contentList = translate('home', lan.toLowerCase(), 'HomeFeature.contentList');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex((section) => section === entry.target);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const contents = contentList.map((content, index) => {
    return (
      <div
        key={index}
        className={`${styles.featureContent} ${activeIndex === index ? styles.active : ''}`}
      >
        <ul className={styles.progress}>
          {Array.from({ length: 5 }).map((_, liIndex) => (
            <li
              key={liIndex}
              className={`${liIndex === activeIndex ? styles.activeProgress : ''}`}
            ></li>
          ))}
        </ul>
        <h2>{content.title}</h2>
        <p>{content.fstDes}</p>
        <p>{content.secDes}</p>
      </div>
    );
  });

  const images = FEATURE_IMAGE_LIST.map((url, index) => {
    return (
      <div
        key={index}
        ref={(el) => {
          if (el) sectionsRef.current[index] = el;
        }}
        className={styles.featureImage}
      >
        <Image src={url} alt="feature image" />
      </div>
    );
  });

  return (
    <div>
      <section className={`subSection ${styles.featureSection}`}>
        <div className={`container ${styles.featureContainer}`}>
          <div className={styles.featureContentWrapper}>{contents}</div>

          <div className={styles.featureImageWrapper}>{images}</div>
        </div>
      </section>
    </div>
  );
}
