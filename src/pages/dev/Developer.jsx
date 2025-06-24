import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';

import DevAuth from '@/components/developer/devAuth/DevAuth';
import DevPayment from '@/components/developer/devPay/DevPayment';
import DevGuide from '@/components/developer/devGuide/DevGuide';

import SectionObserver from '@/components/common/SectionObserver';
import { useDevTab } from '@/contexts/DevTabContext';
import { translate } from '@/utils/translates';

export default function Developer() {
  const { currentTab, setCurrentTab } = useDevTab();

  const lan = useSelector((state) => state.lan.ver);
  const tabList = translate('developer', lan.toLowerCase(), `devSidebar.context`);

  useEffect(() => {
    setCurrentTab(currentTab);
  }, [setCurrentTab, currentTab]);

  useEffect(() => {
    const checkCenterSection = () => {
      const sections = document.querySelectorAll('[data-section]');
      const middle = window.innerHeight / 2;

      let closestSection = null;
      let smallestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(sectionMiddle - middle);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        const tab = closestSection.getAttribute('data-section');
        setCurrentTab(tab);
      }
    };

    checkCenterSection();
    window.addEventListener('scroll', checkCenterSection);
    window.addEventListener('resize', checkCenterSection);

    return () => {
      window.removeEventListener('scroll', checkCenterSection);
      window.removeEventListener('resize', checkCenterSection);
    };
  }, [setCurrentTab]);

  return (
    <>
      <Element name="auth" data-section={tabList[0].title}>
        <SectionObserver id={tabList[0].title} onVisible={setCurrentTab} />
        <DevAuth />
      </Element>
      <Element name="payment" data-section={tabList[1].title}>
        <SectionObserver id={tabList[1].title} onVisible={setCurrentTab} />
        <DevPayment />
      </Element>
      <Element name="guide" data-section={tabList[2].title}>
        <SectionObserver id={tabList[2].title} onVisible={setCurrentTab} />
        <DevGuide />
      </Element>
    </>
  );
}
