import React, { useEffect, useState } from 'react';
import styles from '@/style/about/AboutNews.module.css';
import { translate } from '@/utils/translates';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';
import { getNews } from '@/utils/api';

export default function AboutNews({ lan }) {
  const t = useT('AboutNews');
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [pressItems, setPressItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 백엔드에서 뉴스 데이터 가져오기
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await getNews(1, 10);
        
        // API 응답 데이터를 컴포넌트에서 사용하는 형식으로 변환
        const transformedData = response.data.map(item => ({
          title: item.title,
          link: item.source_url,
          date: formatDate(item.publishedAt),
          source: item.publisher,
          image: item.imageUrl,
          preview: item.content
        }));
        
        setPressItems(transformedData);
        setError(null);
      } catch (err) {
        console.error('뉴스 데이터 로드 실패:', err);
        setError('뉴스를 불러오는 중 오류가 발생했습니다.');
        
        // 에러 발생 시 기존 정적 데이터를 fallback으로 사용
        const fallbackData = translate('about', lan.toLowerCase(), 'AboutNews.pressItems');
        setPressItems(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [lan]);

  // 날짜 포맷 변환 함수 (ISO 8601 -> YYYY.MM.DD)
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

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

  // 로딩 중일 때
  if (loading) {
    return (
      <section className={`subSection ${styles.newsSection}`}>
        <div className={`container ${styles.newsContainer}`}>
          <h2 className={styles.newsTitle}>{t('title')}</h2>
          <div className={styles.loadingMessage}>뉴스를 불러오는 중...</div>
        </div>
      </section>
    );
  }

  // 뉴스 데이터가 없을 때
  if (pressItems.length === 0) {
    return (
      <section className={`subSection ${styles.newsSection}`}>
        <div className={`container ${styles.newsContainer}`}>
          <h2 className={styles.newsTitle}>{t('title')}</h2>
          <div className={styles.emptyMessage}>표시할 뉴스가 없습니다.</div>
        </div>
      </section>
    );
  }

  return (
    <section className={`subSection ${styles.newsSection}`}>
      <div className={`container ${styles.newsContainer}`}>
        <h2 className={styles.newsTitle}>{t('title')}</h2>
        {error && <div className={styles.errorMessage}>{error}</div>}
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
