import React, { useEffect, useState } from 'react';
import styles from '@/style/common/IntroVideo.module.css';

export default function IntroVideo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('seenIntro');

    if (!hasSeenIntro) {
      setVisible(true);
      localStorage.setItem('seenIntro', 'true');

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        document.body.style.overflow = '';
        setVisible(false);
      }, 7000);

      return () => {
        document.body.style.overflow = '';
        clearTimeout(timer);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <video
        src="/video/CES_2026.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className={styles.video}
      />
    </div>
  );
}
