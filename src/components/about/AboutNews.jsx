import React, { useEffect, useState } from 'react';
import styles from '@/style/about/AboutNews.module.css';
import { translate } from '@/utils/translates';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function AboutNews({ lan }) {
  const t = useT('AboutNews');
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const pressItems = translate('about', lan.toLowerCase(), 'AboutNews.pressItems');

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
  }, []);

  const handlePrev = () => {
    currentWidth <= 1100
      ? setActiveIndex((prev) => (prev === 0 ? pressItems.length - 1 : prev - 1))
      : setActiveIndex((prev) => (prev === 0 ? pressItems.length / 2 - 1 : prev - 1));
  };

  const handleNext = () => {
    currentWidth <= 1100
      ? setActiveIndex((prev) => (prev === pressItems.length - 1 ? 0 : prev + 1))
      : setActiveIndex((prev) => (prev === pressItems.length / 2 - 1 ? 0 : prev + 1));
  };

  const news = pressItems.map((press, index) => {
    return (
      <div key={index} className={styles.newsCard}>
        <a href={press.link} target="_blank" rel="noopener noreferrer" aria-label="news link">
          <div className={styles.newsImage}>
            <Image src={press.image} alt="news image" />
          </div>

          <div className={styles.newsContent}>
            <p className={styles.source}>{press.source}</p>
            <h3 className={styles.title}>{press.title}</h3>
            <p className={styles.preview}>{press.preview}</p>
            <p className={styles.date}>{press.date}</p>
          </div>
        </a>
      </div>
    );
  });

  return (
    <section className={`subSection ${styles.newsSection}`}>
      <div className={`container ${styles.newsContainer}`}>
        <h2 className={styles.newsTitle}>{t('title')}</h2>
        <div className={styles.newsBox}>
          <button onClick={handlePrev} className={styles.leftArrow} aria-label="prev">
            <Image className={styles.arrow} src="/assets/about/arrow-left.png" alt="left arrow" />
          </button>

          <div className={styles.newsList}>
            <div
              style={
                currentWidth <= 480
                  ? {
                      transform: `translateX(-${activeIndex * (100 / pressItems.length)}%)`,
                    }
                  : {
                      transform: `translateX(-${activeIndex * (100 / pressItems.length) * 2}%)`,
                    }
              }
              className={styles.newsListBox}
            >
              {news}
            </div>
          </div>

          <button onClick={handleNext} className={styles.rightArrow} aria-label="next">
            <Image className={styles.arrow} src="/assets/about/arrow-right.png" alt="right arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
