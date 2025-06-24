import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer';
import styles from '@/style/layout/AuthLayout.module.css';
import Image from '@/components/common/Image';

export default function AuthLayout() {
  const location = useLocation();

  return (
    <>
      <section className="subSection">
        <main className={styles.main}>
          <div className={styles.title}>
            <a href="/" aria-label="home">
              <Image
                className={styles.logo}
                src="/assets/nav/logo.png"
                alt="logo"
              />
            </a>
            <h1>{location.pathname.toUpperCase().slice(1)}</h1>
          </div>

          <Outlet />
        </main>
      </section>
      <Footer />
    </>
  );
}
