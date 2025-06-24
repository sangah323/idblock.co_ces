import React from 'react'
import styles from '@/style/careers/detail/CareerInfoPanel.module.css';
import { translate } from '@/utils/translates';
import { useSelector } from 'react-redux';

export default function CareerInfoPanel({ careerId, type }) {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) =>
    translate('careersDetail', lan.toLowerCase(), `CareerInfoPanel.${type}.${key}`);
  const contentList = translate(
    'careersDetail',
    lan.toLowerCase(),
    `CareerInfoPanel.${type}.contents`,
  );

  const contents = contentList.map((content, index) => {
    const { contentTitle } = content;

    // description
    const description = content.description?.map((item, index) => {
      return (
        <p key={index} className={styles.descriptionItem}>
          {item}
        </p>
      );
    });

    // descriptionLinked
    const descriptionLinked = content.descriptionLinked?.map((item, index) => {
      return (
        <p key={index} className={styles.descriptionItem}>
          {item}
        </p>
      );
    });

    // careerDescriptionBulletList
    const careerDescriptionBulletList = careerId
      ? content[`descriptionBulletList_${careerId}`]
      : content.descriptionBulletList;

    const descriptionBulletList = careerDescriptionBulletList?.map((item, index) => {
      return (
        <li key={index} className={styles.descriptionBulletListItem}>
          {item}
        </li>
      );
    });

    // descriptionNumberList
    const descriptionNumberList = content.descriptionNumberList?.map((item, index) => {
      return (
        <li key={index} className={styles.descriptionNumberListItem}>
          <p>{index + 1}.</p>
          <p>{item}</p>
        </li>
      );
    });

    return (
      <div key={index} className={styles.contentBox}>
        <h3 className={styles.contentTitle}>{contentTitle}</h3>

        {content.description ? <div className={styles.description}>{description}</div> : ''}
        {content.descriptionLinked ? (
          <div className={styles.descriptionLinked}>{descriptionLinked}</div>
        ) : (
          ''
        )}
        {careerDescriptionBulletList ? (
          <ul className={styles.descriptionBulletList}>{descriptionBulletList}</ul>
        ) : (
          ''
        )}
        {content.descriptionNumberList ? (
          <ol className={styles.descriptionNumberList}>{descriptionNumberList}</ol>
        ) : (
          ''
        )}
      </div>
    );
  });

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('title')}</h2>

      <div className={styles.contentWrapper}>{contents}</div>
    </section>
  );
}
