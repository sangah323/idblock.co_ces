import { useEffect, useRef, useState } from 'react';

import Image from '@/components/common/Image';
import { useT } from '@/hooks/useT';
import styles from '@/style/about/AboutHistory.module.css';
import { HISTORY_IMAGE_LIST } from '@/utils/constants';
import { translate } from '@/utils/translates';

export default function AboutHistory({ lan }) {
  const t = useT('AboutHistory');
  const contentList = translate('about', lan.toLowerCase(), 'AboutHistory.contentList');
  const [loaded, setLoaded] = useState(false);

  const sectionRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indices, setIndices] = useState({
    2024: 0,
    2025: 0,
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.5;

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setCurrentIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timers = HISTORY_IMAGE_LIST.map((yearContent, index) =>
      setInterval(() => {
        setIndices((prev) => ({
          ...prev,
          [yearContent.year]:
            (prev[yearContent.year] + 1) % HISTORY_IMAGE_LIST[index].images.length,
        }));
      }, 3000),
    );

    return () => {
      timers.forEach(clearInterval);
    };
  }, []);

  useEffect(() => {
    setLoaded(false);
  }, [indices]);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const images = contentList.map((yearContent, index) => {
    return (
      <div key={index} className={`${styles.image} ${currentIndex === index ? styles.active : ''}`}>
        <h2>{yearContent.year}</h2>
        <div className={styles.imageList}>
          <Image
            src={HISTORY_IMAGE_LIST[index].images[indices[yearContent.year]]}
            onLoad={handleImageLoad}
            className={`${styles.fadeImage} ${loaded ? styles.fadeImageLoaded : ''}`}
            name="timeline image"
          />
        </div>
      </div>
    );
  });

  const contents = contentList.map((yearContent, index) => {
    const yearContents = yearContent.quarter.map((quarterContent, index) => {
      const quarterContentList = quarterContent.contents.map((con, index) => {
        return <li key={index}>{con}</li>;
      });

      return (
        <div key={index} className={styles.quarter}>
          <h3>{quarterContent.name}</h3>
          <ul className={styles.timeline}>{quarterContentList}</ul>
        </div>
      );
    });

    return (
      <div
        key={index}
        className={styles.content}
        ref={(el) => (sectionRefs.current[index] = el)}
        data-index={index}
      >
        {yearContents}
      </div>
    );
  });

  return (
    <section className={`subSection ${styles.historySection}`}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={`container ${styles.historyContainer}`}>
        <div className={styles.historyCard}>
          <div className={styles.images}>{images}</div>
          <div className={styles.contents}>{contents}</div>
        </div>
      </div>
    </section>
  );
}
