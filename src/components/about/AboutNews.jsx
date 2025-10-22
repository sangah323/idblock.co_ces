import React, { useEffect, useState, useCallback } from 'react';
import styles from '@/style/about/AboutNews.module.css';
import { translate } from '@/utils/translates';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';
import { getAllNews } from '@/utils/api';

export default function AboutNews({ lan }) {
  const t = useT('AboutNews');
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [pressItems, setPressItems] = useState([]);
  const [allNewsData, setAllNewsData] = useState([]); // 전체 뉴스 데이터 저장
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [scrollInterval, setScrollInterval] = useState(null);

  // 언어 코드 매핑 함수
  const getLanguageCode = (language) => {
    const langMap = {
      'Korean': 'ko',
      'English': 'en', 
      'Japanese': 'ja',
      'Vietnamese': 'vi'
    };
    return langMap[language] || 'ko';
  };

  // 전체 뉴스 데이터를 한 번만 가져오기
  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true);
        // 전체 뉴스 데이터를 가져옴 (언어 필터링 없음)
        const response = await getAllNews(1, 50);
        
        // API 응답 데이터를 컴포넌트에서 사용하는 형식으로 변환
        const transformedData = response.data.map(item => ({
          id: item.id,
          title: item.title,
          link: item.source_url,
          date: formatDate(item.publishedAt),
          source: item.publisher,
          image: item.imageUrl,
          preview: item.content,
          language: item.language || 'ko' // 언어 정보 추가 (백엔드에서 제공하는 경우)
        }));
        
        setAllNewsData(transformedData);
        setError(null);
      } catch (err) {
        console.error('뉴스 데이터 로드 실패:', err);
        setError('뉴스를 불러오는 중 오류가 발생했습니다.');
        
        // 에러 발생 시 기존 정적 데이터를 fallback으로 사용
        try {
          const fallbackData = translate('about', lan.toLowerCase(), 'AboutNews.pressItems');
          if (fallbackData && Array.isArray(fallbackData)) {
            setAllNewsData(fallbackData.map(item => ({ ...item, language: 'ko' })));
          } else {
            setAllNewsData([]);
          }
        } catch (fallbackErr) {
          console.error('Fallback 데이터 로드 실패:', fallbackErr);
          setAllNewsData([]);
        }
      } finally {
        setLoading(false);
      }
    };

    // 전체 뉴스 데이터가 없을 때만 가져오기
    if (allNewsData.length === 0) {
      fetchAllNews();
    }
  }, [allNewsData.length, lan]);

  // 언어별 필터링 로직
  useEffect(() => {
    if (allNewsData.length === 0) return;

    const languageCode = getLanguageCode(lan);
    
    // 현재 언어에 맞는 뉴스만 필터링
    const filteredNews = allNewsData.filter(item => {
      // 백엔드에서 언어 정보를 제공하는 경우
      if (item.language) {
        return item.language === languageCode;
      }
      
      // 백엔드에서 언어 정보를 제공하지 않는 경우, 제목이나 내용으로 언어 감지
      const title = item.title || '';
      const content = item.preview || '';
      const text = title + ' ' + content;
      
      switch (languageCode) {
        case 'ko':
          // 한글 포함 여부로 판단 (한글 문자가 있는 경우)
          return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);
        case 'en':
          // 영어 포함 여부로 판단 (한글이나 일본어, 베트남어가 없고 영어가 있는 경우)
          return !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|ひらがなカタカナ一-龯|àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/.test(text) && /[a-zA-Z]/.test(text);
        case 'ja':
          // 일본어 포함 여부로 판단 (히라가나, 가타카나, 한자)
          return /[ひらがなカタカナ一-龯]/.test(text);
        case 'vi':
          // 베트남어 포함 여부로 판단 (베트남어 특수문자)
          return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/.test(text);
        default:
          return true;
      }
    });

    setPressItems(filteredNews.slice(0, 10)); // 최대 10개만 표시
  }, [allNewsData, lan]);

  // 날짜 포맷 변환 함수 (ISO 8601 -> YYYY.MM.DD)
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  // 자동 스크롤 함수
  const startAutoScroll = useCallback(() => {
    if (pressItems.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const maxIndex = currentWidth <= 1100 ? pressItems.length - 1 : Math.floor(pressItems.length / 2) - 1;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000); // 3초마다 자동 스크롤
    
    setScrollInterval(interval);
  }, [pressItems.length, currentWidth]);

  // 자동 스크롤 중지 함수
  const stopAutoScroll = useCallback(() => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  }, [scrollInterval]);

  // 자동 스크롤 시작/중지 토글
  const toggleAutoScroll = useCallback(() => {
    if (isAutoScrolling) {
      stopAutoScroll();
      setIsAutoScrolling(false);
    } else {
      startAutoScroll();
      setIsAutoScrolling(true);
    }
  }, [isAutoScrolling, startAutoScroll, stopAutoScroll]);

  // 컴포넌트 마운트 시 자동 스크롤 시작
  useEffect(() => {
    if (!loading && pressItems.length > 0 && isAutoScrolling) {
      startAutoScroll();
    }
    
    return () => stopAutoScroll();
  }, [loading, pressItems.length, isAutoScrolling, startAutoScroll, stopAutoScroll]);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 수동 네비게이션 함수들
  const handlePrev = useCallback(() => {
    stopAutoScroll();
    setIsAutoScrolling(false);
    
    setActiveIndex(prev => {
      const maxIndex = currentWidth <= 1100 ? pressItems.length - 1 : Math.floor(pressItems.length / 2) - 1;
      return prev === 0 ? maxIndex : prev - 1;
    });
  }, [currentWidth, pressItems.length, stopAutoScroll]);

  const handleNext = useCallback(() => {
    stopAutoScroll();
    setIsAutoScrolling(false);
    
    setActiveIndex(prev => {
      const maxIndex = currentWidth <= 1100 ? pressItems.length - 1 : Math.floor(pressItems.length / 2) - 1;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [currentWidth, pressItems.length, stopAutoScroll]);

  // 마우스 이벤트 핸들러
  const handleMouseEnter = useCallback(() => {
    stopAutoScroll();
  }, [stopAutoScroll]);

  const handleMouseLeave = useCallback(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    }
  }, [isAutoScrolling, startAutoScroll]);


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
          <div className={styles.loadingMessage}>{t('loading') || '뉴스를 불러오는 중...'}</div>
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
          <div className={styles.emptyMessage}>{t('empty') || '표시할 뉴스가 없습니다.'}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={`subSection ${styles.newsSection}`}>
      <div className={`container ${styles.newsContainer}`}>
        <div className={styles.newsHeader}>
          <h2 className={styles.newsTitle}>{t('title')}</h2>
          <button 
            className={`${styles.autoScrollToggle} ${isAutoScrolling ? styles.active : ''}`}
            onClick={toggleAutoScroll}
            aria-label={isAutoScrolling ? '자동 스크롤 중지' : '자동 스크롤 시작'}
            title={isAutoScrolling ? '자동 스크롤 중지' : '자동 스크롤 시작'}
          >
            <div className={styles.toggleIcon}>
              {isAutoScrolling ? '⏸️' : '▶️'}
            </div>
          </button>
        </div>
        
        {error && <div className={styles.errorMessage}>{t('error') || error}</div>}
        
        <div 
          className={styles.newsBox}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
        
        {/* 인디케이터 */}
        <div className={styles.indicators}>
          {Array.from({ length: currentWidth <= 1100 ? pressItems.length : Math.ceil(pressItems.length / 2) }).map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => {
                setActiveIndex(index);
                stopAutoScroll();
                setIsAutoScrolling(false);
              }}
              aria-label={`뉴스 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
