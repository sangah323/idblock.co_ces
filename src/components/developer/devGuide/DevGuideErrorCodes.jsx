import React from 'react';
import styles from '@/style/developer/DevGuideErrorCodes.module.css';
import { useSelector } from "react-redux";
import { translate } from '@/utils/translates';

export default function DevGuideErrorCodes() {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) =>
    translate("developer", lan.toLowerCase(), `devGuide.errorCodes.${key}`);
  const params = translate(
    "developer",
    lan.toLowerCase(),
    `devGuide.errorCodes.content.params`
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
            {params.map((error) => (
              <div key={error.code} className={styles.errorItem}>
                <div className={styles.errorHeader}>
                  <span className={`code ${styles.errorCode}`}>{error.code}</span>
                  <span className={`code ${styles.errorName}`}>{error.name}</span>
                </div>
                <p className={styles.errorDescription}>{error.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};