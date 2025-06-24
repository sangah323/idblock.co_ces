import React from 'react'
import styles from '@/style/devcenter/DevCenterService.module.css';
import { translate } from '@/utils/translates';
import { SERVICE_IMAGE_LIST } from '@/utils/constants/devcenter';
import Image from '@/components/common/Image';
import { Link } from 'react-router-dom';
import { DEVELOPER_ROUTES } from '@/utils/routes';

export default function DevCenterService({ lan }) {
  const contentList = translate(
    "devcenter",
    lan.toLowerCase(),
    `DevCenterService`
  );

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const contents = contentList.map((content, index) => {
    return (
      <div
        key={index}
        className={`${styles.serviceContents} ${index === 1 ? styles.reverse : ""}`}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>{content.title}</h2>
          <div className={styles.subTitle}>
            <p>{content.subTitle[0]}</p>
            <p>{content.subTitle[1]}</p>
            <p>{content.subTitle[2]}</p>
          </div>
          <Link
            to={DEVELOPER_ROUTES.ROOT.PATH}
            onClick={handleScrollToTop}
            className={styles.button}
            aria-label="link"
          >
            {content.button}
          </Link>
        </div>

        <div className={styles.image}>
          <Image src={SERVICE_IMAGE_LIST[index]} alt="service image" />
        </div>
      </div>
    );
  });

  return (
    <section className={`subSection ${styles.serviceSection}`}>
      <div className={`container ${styles.serviceContainer}`}>{contents}</div>
    </section>
  );
}
