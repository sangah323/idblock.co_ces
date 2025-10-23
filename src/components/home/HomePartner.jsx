import React, { useMemo } from 'react';
import styles from '@/style/home/HomePartner.module.css';

export default function HomePartner() {
  // Vite의 import.meta.glob()을 사용하여 파트너 이미지들을 자동으로 가져오기
  const domesticPartnerImages = import.meta.glob('/public/assets/partners_domestic/*.png', {
    eager: true,
  });
  const globalPartnerImages = import.meta.glob('/public/assets/partners_global/*.png', {
    eager: true,
  });

  // 이미지 경로들을 배열로 변환하고 파일명 추출
  const domesticPartnerLogos = useMemo(() => {
    return Object.keys(domesticPartnerImages).map((path) => {
      const fileName = path.split('/').pop();
      return {
        fileName,
        src: path.replace('/public', ''),
        isDomestic: true,
      };
    });
  }, [domesticPartnerImages]);

  const globalPartnerLogos = useMemo(() => {
    return Object.keys(globalPartnerImages).map((path) => {
      const fileName = path.split('/').pop();
      return {
        fileName,
        src: path.replace('/public', ''),
        isDomestic: false,
      };
    });
  }, [globalPartnerImages]);

  // 통합 파트너 로고 (국내 + 해외 섞어서)
  const allPartnerLogos = useMemo(() => {
    return [...domesticPartnerLogos, ...globalPartnerLogos];
  }, [domesticPartnerLogos, globalPartnerLogos]);

  return (
    <section className={`subSection ${styles.companyPartners}`}>
      <div className={styles.container}>
        <div className={styles.partnersWrapper}>
          <div className={styles.partnersTrack}>
            {/* 첫 번째 세트 */}
            {allPartnerLogos.map((logo, index) => (
              <img
                key={`all-first-${index}`}
                src={logo.src}
                alt={`파트너 ${logo.fileName}`}
                className={styles.partnerLogo}
              />
            ))}
            {/* 두 번째 세트 (무한 반복을 위해) */}
            {allPartnerLogos.map((logo, index) => (
              <img
                key={`all-second-${index}`}
                src={logo.src}
                alt={`파트너 ${logo.fileName}`}
                className={styles.partnerLogo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
