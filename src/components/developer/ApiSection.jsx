import React from 'react'
import { useSelector } from 'react-redux';

import styles from '@/style/developer/ApiSection.module.css';
import CodeBlock from '@/components/common/CodeBlock';
import { METHOD_TO_COLOR } from '@/utils/constants/developer';
import { translate } from '@/utils/translates';

export default function ApiSection({component, method, requestCode, responseCode } ) {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('developer', lan.toLowerCase(), `${component}.${method}.${key}`);
  const tExample = (key) =>
    translate(
      "developer",
      lan.toLowerCase(),
      `devSidebarDashboard.example.${key}`
    );
  const params = translate(
    "developer",
    lan.toLowerCase(),
    `${component}.${method}.params`
  );

  const methodStyle = (method) => {
    const color = METHOD_TO_COLOR[method];
    return color;
  };
  const methodColor = methodStyle(t("method"));

  return (
    <div className={styles.mainContent}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <h2>{t('title')}</h2>
          <div className={styles.methodBox}>
            <p className={`${styles.method} ${styles[methodColor]}`}>{t('method')}</p>
            <p className={`code ${styles.code}`}>{t('endpoint')}</p>
          </div>
        </div>
        <p>{t('description')}</p>
      </div>

      <div className={styles.contentBox}>
        <h3>{t('paramsType[0]')}</h3>
        <div className={styles.content}>
          {Object.entries(params).map(([key, value]) => (
            <div key={key} className={styles.params}>
              <p className={`code ${styles.code}`}>{key}</p>
              <span className={styles.type}>{value}</span>
              <span className={styles.require}>{t('paramsType[1]')}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.contentBox}>
        <h3>{tExample('title')}</h3>
        <div className={styles.content}>
          <h4>Request</h4>
          <CodeBlock code={requestCode} />

          <div className={styles.params}>
            <h4>Response</h4>
          </div>
          <CodeBlock code={responseCode} lang="json" />
        </div>
      </div>
    </div>
  );
}
