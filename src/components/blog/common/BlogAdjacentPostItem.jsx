import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BLOG_ROUTES } from '@/utils/routes';
import styles from '@/style/blog/common/BlogAdjacentPostItem.module.css';
import { translate } from '@/utils/translates';
import Image from '@/components/common/Image';

export default function BlogAdjacentPostItem({ data }) {
  const { slug, thumbnail, title, description, filter, date } = data;
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('blog', lan.toLowerCase(), `FilterButton.${key}`);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to={BLOG_ROUTES.DETAIL.PATH(slug)}
      onClick={handleScrollToTop}
      className={styles.postBox}
      aria-label="adjacent post"
    >
      <div className={styles.postImage}>
        <Image src={thumbnail} alt="thumbnail image" />
      </div>

      <div className={styles.postInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.filterOptions}>
          <p className={styles.filter}>{t(`${filter}`)}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
