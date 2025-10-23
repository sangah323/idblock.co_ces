import AboutCompanyTimeline from '@/components/about/AboutCompanyTimeline';
import AboutContact from '@/components/about/AboutContact';
import AboutGoal from '@/components/about/AboutGoal';
import AboutMain from '@/components/about/AboutMain';
import AboutMap from '@/components/about/AboutMap';
import AboutNews from '@/components/about/AboutNews';
import { useEffect, useRef } from 'react';

import { TContext } from '@/contexts/TContext';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';

export default function About() {
  const location = useLocation();
  const lan = useSelector((state) => state.lan.ver);
  const pageKey = 'about';
  const isMountedRef = useRef(true);

  useEffect(() => {
    // About 페이지에 있을 때만 스크롤 로직 실행
    if (location.pathname === '/about' && isMountedRef.current) {
      const sectionName = sessionStorage.getItem('scrollTarget');
      sessionStorage.removeItem('scrollTarget');

      if (sectionName) {
        scroller.scrollTo(sectionName, {
          duration: 600,
          smooth: 'easeInOutQuart',
          offset: 0,
        });
      } else {
        // 특정 섹션으로 스크롤할 대상이 없으면 맨 위로 이동
        window.scrollTo(0, 0);
      }
    }
  }, [location.pathname]);

  // 컴포넌트 언마운트 시 cleanup
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      // react-scroll의 모든 활성 스크롤 애니메이션 중지
      scroller.scrollTo('aboutMain', {
        duration: 0,
        smooth: false,
        offset: 0,
      });
    };
  }, []);

  return (
    <TContext.Provider value={{ pageKey }}>
      <main>
        <Element name="aboutMain">
          <AboutMain />
        </Element>
        <Element name="goal">
          <AboutGoal />
        </Element>
        <Element name="history">
          {/* <AboutHistory lan={lan} /> */}
          <AboutCompanyTimeline lan={lan} />
        </Element>
        <Element name="news">
          <AboutNews lan={lan} />
        </Element>
        <Element name="map">
          <AboutMap lan={lan} />
        </Element>
        <Element name="contact">
          <AboutContact />
        </Element>
      </main>
    </TContext.Provider>
  );
}
