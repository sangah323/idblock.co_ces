import React from 'react';
import HomeMain from '@/components/home/HomeMain';
import HomeQuestion from '@/components/home/HomeQuestion';
import HomeQuestionGlobal from '@/components/home/HomeQuestionGlobal';
import HomeFeature from '@/components/home/HomeFeature';
import HomeStep from '@/components/home/HomeStep';
import HomePatent from '@/components/home/HomePatent';
import HomePartner from '@/components/home/HomePartner';

import { TContext } from '@/contexts/TContext';
import { useSelector } from 'react-redux';

export default function Home() {
  const lan = useSelector((state) => state.lan.ver);
  const pageKey = 'home';

  return (
    <TContext.Provider value={{ pageKey }}>
      <main>
        <HomeMain />
        {lan === 'KOR' ? <HomeQuestion /> : <HomeQuestionGlobal />}
        <HomeFeature lan={lan} />
        <HomeStep />
        <HomePatent />
        <HomePartner />
      </main>
    </TContext.Provider>
  );
}
