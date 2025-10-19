import AboutCompanyTimeline from '@/components/about/AboutCompanyTimeline';
import AboutContact from '@/components/about/AboutContact';
import AboutGoal from '@/components/about/AboutGoal';
import AboutMain from '@/components/about/AboutMain';
import AboutMap from '@/components/about/AboutMap';
import AboutNews from '@/components/about/AboutNews';
import { useEffect } from 'react';

import { TContext } from '@/contexts/TContext';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';

export default function About() {
  const location = useLocation();
  const lan = useSelector((state) => state.lan.ver);
  const pageKey = 'about';

  useEffect(() => {
    const sectionName = sessionStorage.getItem('scrollTarget');
    sessionStorage.removeItem('scrollTarget');

    if (sectionName) {
      scroller.scrollTo(sectionName, {
        duration: 600,
        smooth: 'easeInOutQuart',
        offset: 0,
      });
    }
  }, [location]);

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
