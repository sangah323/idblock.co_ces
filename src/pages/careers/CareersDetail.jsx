import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from '@/style/pages/CareersDetail.module.css';
import { translate } from '@/utils/translates';
import { DEPARTMENT_LIST } from '@/utils/constants/careers';

import CareerInfoPanel from '@/components/careers/detail/CareerInfoPanel';
import CareerConditions from '@/components/careers/detail/CareerConditions';

export default function CareersDetail() {
  const { careerId } = useParams();
  const department = DEPARTMENT_LIST[careerId];

  const lan = useSelector((state) => state.lan.ver);
  const careerSections = translate('careersDetail', lan.toLowerCase(), 'CareerInfoPanel');
  const careerList = Object.keys(careerSections);

  const careerInfos = careerList.map((item, index) => {
    if (item === 'CareerSummary') {
      return <CareerInfoPanel key={index} careerId={careerId} type={item} />;
    } else {
      return <CareerInfoPanel key={index} careerId={false} type={item} />;
    }
  });

  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.mainInfo}>
        <h1 className={styles.department}>{department}</h1>
        <div className={styles.container}>{careerInfos}</div>
      </div>

      <CareerConditions careerId={careerId} />
    </main>
  );
}
