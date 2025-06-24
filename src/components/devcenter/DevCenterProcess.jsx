import React from 'react'
import styles from '@/style/devcenter/DevCenterProcess.module.css';
import { translate } from '@/utils/translates';
import { PROCESS_ICON_LIST } from '@/utils/constants/devcenter';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function DevCenterProcess({ lan }) {
  const t = useT('DevCenterProcess');
  const contentList = translate('devcenter', lan.toLowerCase(), `DevCenterProcess.process`);

  const contents = contentList.map((content, index) => {
    return (
      <div key={index} className={styles.processBox}>
        <div className={styles.process}>
          <div className={styles.top}>
            <Image src={PROCESS_ICON_LIST[index]} alt="process icon" />
            <h2 className={styles.processNumber}>{content.processNumber}</h2>
          </div>
          <div className={styles.bottom}>
            <h2 className={styles.processTitle}>{content.processTitle}</h2>
            <div className={styles.processSubTitle}>
              <p>{content.processSubTitle[0]}</p>
              <p>{content.processSubTitle[1]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className={`subSection ${styles.processSection}`}>
      <div className={`container ${styles.processContainer}`}>
        <div className={styles.contentBox}>
          <h2 className={styles.title}>{t('title')}</h2>
          <div className={styles.subTitle}>
            <p>{t('subTitle[0]')}</p>
            <p>{t('subTitle[1]')}</p>
          </div>
        </div>

        <div className={styles.processWrapper}>{contents}</div>
      </div>
    </section>
  );
}
