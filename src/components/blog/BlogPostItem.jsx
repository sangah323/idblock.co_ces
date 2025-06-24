import React from 'react'
import styles from '@/style/blog/BlogPostItem.module.css';
import { Link } from 'react-router-dom';
import { BLOG_ROUTES } from '@/utils/routes';
import { useSelector } from 'react-redux';
import { translate } from '@/utils/translates';
import Image from '@/components/common/Image';

export default function BlogPostItem({ post }) {
  const { slug, title, description, filter, date, thumbnail } = post;
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('blog', lan.toLowerCase(), `FilterButton.${key}`);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to={BLOG_ROUTES.DETAIL.PATH(slug)}
      onClick={handleScrollToTop}
      className={styles.postItem}
      aria-label="blog post"
    >
      <div className={styles.postContents}>
        <div className={styles.postBody}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.postInfo}>
          <p className={styles.filter}>{t(`${filter}`)}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>

      <div className={styles.postImage}>
        <Image src={thumbnail} alt="post image" />
      </div>
    </Link>
  );
}
