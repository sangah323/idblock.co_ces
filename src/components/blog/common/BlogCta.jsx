import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/style/blog/common/BlogCta.module.css';
import { SHARE_OPTIONS } from '@/utils/constants/blog';
import StoreLinkButton from '@/components/common/StoreLinkButton';
import Image from '@/components/common/Image';

export default function BlogCta({ t }) {
  const translate = (key) => t(`${BlogCta.name}.${key}`);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    setUrl(encodeURIComponent(window.location.href));
    setTitle(encodeURIComponent('IDBlock Blog'));
  }, []);

  const icons = SHARE_OPTIONS.map(({ id, name, icon, getUrl }) => {
    return (
      <Link
        key={id}
        to={getUrl(url, title)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} 공유`}
      >
        <Image src={icon} alt={name} />
      </Link>
    );
  });

  return (
    <div className={styles.actionWrapper}>
      <div className={styles.ctaBox}>
        <h4 className={styles.title}>{translate('title')}</h4>
        <StoreLinkButton className={styles.startLink} children={translate('button')} />
      </div>

      <div className={styles.shareBox}>
        {icons}
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert('링크가 복사되었습니다.');
          }}
          aria-label="링크 복사"
        >
          <Image src="/assets/blog/link_icon.png" alt="Copy Link" />
        </button>
      </div>
    </div>
  );
}
