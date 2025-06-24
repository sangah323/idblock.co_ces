import React from 'react'
import styles from '@/style/developer/DevGuideStarted.module.css';
import { useSelector } from "react-redux";
import { translate } from '@/utils/translates';

export default function DevGuideStarted() {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) =>
    translate("developer", lan.toLowerCase(), `devGuide.started.${key}`);
  const params = translate(
    "developer",
    lan.toLowerCase(),
    `devGuide.started.content.params`
  );

  return (
    <div className={styles.mainContent}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.description}>{t("description")}</p>
      </div>

      <div className={styles.contentBox}>
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>
            {t("content.title")}
          </h3>
          <div className={styles.params}>
            {Object.entries(params).map(([key, value]) => (
              <div key={key} className={styles.param}>
                <p className={styles.code}>{key}</p>
                <p className={`code ${styles.type}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
}
