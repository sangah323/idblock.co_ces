import React from 'react';
import DevCenterMain from '@/components/devcenter/DevCenterMain';
import DevCenterInfo from '@/components/devcenter/DevCenterInfo';
import DevCenterService from '@/components/devcenter/DevCenterService';
import DevCenterProcess from '@/components/devcenter/DevCenterProcess';
import DevCenterCta from '@/components/devcenter/DevCenterCta';

import { useSelector } from 'react-redux';
import { TContext } from '@/contexts/TContext';
import useScrollToTop from '@/hooks/useScrollToTop';

export default function DevCenter() {
  const lan = useSelector((state) => state.lan.ver);
  const pageKey = 'devcenter';

  // 페이지 이동 시 스크롤을 맨 위로 이동
  useScrollToTop();

  return (
    <TContext.Provider value={{ pageKey }}>
      <DevCenterMain />
      <DevCenterInfo lan={lan} />
      <DevCenterService lan={lan} />
      <DevCenterProcess lan={lan} />
      <DevCenterCta />
    </TContext.Provider>
  );
}
