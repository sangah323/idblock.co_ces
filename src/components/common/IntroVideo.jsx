// src/components/common/IntroVideo.jsx
import React, { useEffect, useState } from 'react';
import styles from '@/style/common/IntroVideo.module.css';

export default function IntroVideo() {
  const [show, setShow] = useState(false);
  const [disappear, setDisappear] = useState(false);

  useEffect(() => {
    // 처음에만 보여주고 싶으면 localStorage 체크 넣어도 됨
    setShow(true);

    // 6초 동안은 영상만 보이고
    const t1 = setTimeout(() => {
      setDisappear(true); // 사사사삭 시작
    }, 7000);

    // 완전 제거
    const t2 = setTimeout(() => {
      setShow(false);
    }, 8500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.videoWrapper}>
        <video src="/video/CES_2026_full.mp4" autoPlay muted playsInline className={styles.video} />
        <img src="/assets/home/vignetteOverlay.png" className={styles.vignetteImage} alt="" />
      </div>
      {/* 조각들 */}
      <div className={`${styles.shards} ${disappear ? styles.active : ''}`}>
        <div className={`${styles.shard} ${styles.s1}`}></div>
        <div className={`${styles.shard} ${styles.s2}`}></div>
        <div className={`${styles.shard} ${styles.s3}`}></div>
        <div className={`${styles.shard} ${styles.s4}`}></div>
        <div className={`${styles.shard} ${styles.s5}`}></div>
        <div className={`${styles.shard} ${styles.s6}`}></div>
      </div>
    </div>
  );
}
