import React, { useEffect, useState } from 'react'
import { DOWNLOAD_LINK_LIST } from '@/utils/constants/home';

export default function StoreLinkButton({className, children}) {
  const [storeUrl, setStoreUrl] = useState('#');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
      setStoreUrl(`${DOWNLOAD_LINK_LIST.APPLE}`);
    } else if (/android/i.test(userAgent)) {
      setStoreUrl(`${DOWNLOAD_LINK_LIST.ANDROID}`);
    } else {
      setStoreUrl(`${DOWNLOAD_LINK_LIST.APPLE}`);
    }
  }, []);

  return (
    <a
      className={className}
      href={storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="app store link"
    >
      {children}
    </a>
  );
}
