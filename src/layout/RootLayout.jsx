import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout() {
  const location = useLocation();

  // 페이지 이동 시 스크롤을 맨 위로 강제 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
