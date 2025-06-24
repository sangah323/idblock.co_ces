import React, { useEffect } from 'react';
import styles from '@/style/careers/CareersOpenRoles.module.css';
import { translate } from '@/utils/translates';
import { Link } from 'react-router-dom';
import { useT } from '@/hooks/useT';
import { DEPARTMENT_LIST } from '@/utils/constants/careers';
import Image from '@/components/common/Image';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CareersOpenRoles({ lan }) {
  const t = useT('CareersOpenRoles');
  const contentList = translate('careers', lan.toLowerCase(), `CareersOpenRoles.contents`);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  function findDepartmentKeyByValue(value) {
    return Object.keys(DEPARTMENT_LIST).find((key) => DEPARTMENT_LIST[key] === value);
  }

  const contents = contentList.map((content, index) => {
    const roles = content.roles.map((item, index) => {
      const { role, employmentType, careerLevel, workLocation } = item;
      return (
        <Link
          to={`/careers/detail/${findDepartmentKeyByValue(role)}`}
          onClick={() => window.scrollTo(0, 0)}
          key={index}
          className={styles.role}
          aria-label="role detail"
        >
          <div className={styles.roleInfo}>
            <p className={styles.roleInfoTitle}>{role}</p>
            <ul className={styles.roleInfoDetail}>
              <li>{employmentType}</li>
              <li>{careerLevel}</li>
              <li>{workLocation}</li>
            </ul>
          </div>

          <div className={styles.applyLink}>
            <p>Apply</p>
            <p>&#x2192;</p>
          </div>
        </Link>
      );
    });

    return (
      <li key={index} className={styles.content}>
        <p className={styles.department}>{content.department}</p>

        <ul className={styles.roles}>{roles}</ul>
      </li>
    );
  });

  return (
    <section className={`subSection ${styles.openRolesSection}`}>
      <div className={`container ${styles.openRolesContainer}`}>
        <div className={styles.titleWrapper}>
          <Image
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once="true"
            src="/assets/careers/quotes.png"
            alt="quotes image"
          />
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-once="true" className={styles.title}>
            {t('title')}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            className={styles.subTitle}
          >
            {t('subTitle')}
          </p>
        </div>

        <ul className={styles.contentsWrapper}>{contents}</ul>
      </div>
    </section>
  );
}
