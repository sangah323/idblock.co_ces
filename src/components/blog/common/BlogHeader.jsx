import React, { useMemo } from 'react';
import styles from '@/style/blog/common/BlogHeader.module.css';
import { useSelector } from 'react-redux';
import { translate } from '@/utils/translates';
import Image from '@/components/common/Image';

export default function BlogHeader({ data }) {
  const { title, description, date, filter, source, thumbnail } = data;
  const lan = useSelector((state) => state.lan.ver);

  const translatedFilter = useMemo(() => {
    const t = (key) => translate('blog', lan.toLowerCase(), `FilterButton.${key}`);
    return filter ? t(filter) : '';
  }, [filter, lan]);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerInfo}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.filterOptions}>
          {translatedFilter && (
            <p className={styles.filter}>{translatedFilter}</p>
          )}
          <p>{date}</p>
        </div>
      </div>

      <div className={styles.headerContent}>
        <div className={styles.thumbnailWrapper}>
          <Image
            className={styles.thumbnail}
            src={thumbnail}
            alt="thumbnail image"
          />
          <p className={styles.source}>{source}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
