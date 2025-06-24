import React, { useEffect, useRef, useState } from "react";
import styles from '@/style/home/HomeStep.module.css';
import { STEP_IMAGE_LIST } from '@/utils/constants';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function HomeStep() {
  const t = useT("HomeStep");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const images = STEP_IMAGE_LIST.map((url, index) => {
    const isActive = activeIndex >= index;
    const isLast = activeIndex == index;

    return (
      <Image
        key={index}
        src={url}
        alt="authentication step image"
        className={`${isActive ? styles.activeImage : ""} ${isLast ? styles.lastImage : ""}`}
      />
    );
  });

  const processItems = STEP_IMAGE_LIST.map((_, index) => {
    return (
      <li key={index}>
        <p
          className={`${activeIndex >= index ? styles.activeP : ""} ${activeIndex == index ? styles.lastP : ""}`}
        ></p>
      </li>
    );
  });

  const processBarItems = STEP_IMAGE_LIST.slice(0, -1).map((_, index) => {
    return (
      <li
        key={index}
        className={activeIndex > index ? styles.activeLi : ""}
      ></li>
    );
  });

  const stepItems = STEP_IMAGE_LIST.map((_, index) => {
    const isActive = activeIndex >= index;

    return (
      <div
        key={index}
        className={`${styles.step} ${isActive ? styles.activeStep : ""}`}
      >
        <p>{`STEP ${index + 1}`}</p>
        <p>{t(`step[${index}].content[0]`)}</p>
        <p>{t(`step[${index}].content[1]`)}</p>
      </div>
    );
  });

  return (
    <section className={`subSection ${styles.stepSection}`} ref={containerRef}>
      <div className={`container ${styles.stepContainer}`}>
        <div className={styles.stepContent}>
          <h2>{t("title[0]")}</h2>
          <h2>{t("title[1]")}</h2>
        </div>

        <div className={styles.stepImage}>
          <div className={styles.imageBox}>{images}</div>

          <div className={styles.progressBox}>
            <ul className={styles.progress}>{processItems}</ul>
            <ul className={styles.progressBar}>{processBarItems}</ul>
          </div>

          <div className={styles.stepBox}>{stepItems}</div>
        </div>
      </div>
    </section>
  );
}
