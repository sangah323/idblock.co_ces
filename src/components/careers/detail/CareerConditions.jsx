import React from 'react'
import styles from '@/style/careers/detail/CareerConditions.module.css';
import { translate } from '@/utils/translates';
import { useSelector } from 'react-redux';

export default function CareerConditions({ careerId }) {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) =>
    translate('careersDetail', lan.toLowerCase(), `CareerConditions.${careerId}.${key}`);
  const buttonText = translate('careersDetail', lan.toLowerCase(), `CareerConditions.button`);

  return (
    <div className={styles.aside}>
      <ul className={styles.contents}>
        <li className={styles.contentItem}>
          <p className={styles.title}>{t("department.title")}</p>
          <p className={styles.content}>{t("department.content")}</p>
        </li>
        <li className={styles.contentItem}>
          <p className={styles.title}>{t("career.title")}</p>
          <p className={styles.content}>{t("career.content")}</p>
        </li>
        <li className={styles.contentItem}>
          <p className={styles.title}>{t("jobType.title")}</p>
          <p className={styles.content}>{t("jobType.content")}</p>
        </li>
        <li className={styles.contentItem}>
          <p className={styles.title}>{t("jobLocation.title")}</p>
          <div className={styles.location}>
            <p className={styles.content}>{t("jobLocation.content")}</p>
            <p className={styles.content}>{t("jobLocation.contentDetail")}</p>
          </div>
        </li>
      </ul>

      <button className={styles.applyButton} aria-label="apply">
        {buttonText}
      </button>
    </div>
  );
}
