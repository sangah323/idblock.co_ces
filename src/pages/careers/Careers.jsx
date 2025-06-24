import React from 'react'
import CareersMain from '@/components/careers/CareersMain';
import CareersIntro from '@/components/careers/CareersIntro';
import CareersCulture from '@/components/careers/CareersCulture';
import CareersHiringProcess from '@/components/careers/CareersHiringProcess';
import CareersOpenRoles from '@/components/careers/CareersOpenRoles';

import { Element } from 'react-scroll';
import { useSelector } from 'react-redux';
import { TContext } from '@/contexts/TContext';

export default function Careers() {
  const lan = useSelector((state) => state.lan.ver);
  const pageKey = 'careers';

  return (
    <TContext.Provider value={{ pageKey }}>
      <CareersMain />
      <CareersIntro lan={lan} />
      <CareersCulture lan={lan} />
      <CareersHiringProcess lan={lan} />
      <Element name="openRoles">
        <CareersOpenRoles lan={lan} />
      </Element>
    </TContext.Provider>
  );
}
