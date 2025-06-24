import React from 'react'
import styles from '@/style/about/AboutContact.module.css';
import { useT } from '@/hooks/useT';
import { CONTACT_ICON_LIST } from '@/utils/constants';
import Image from '@/components/common/Image';

export default function AboutContact() {
  const t = useT('AboutContact');

  return (
    <section className={`subSection ${styles.contactSection}`}>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactContent}>
          <div className={styles.title}>
            <h2>{t("title[0]")}</h2>
            <h2>{t("title[1]")}</h2>
          </div>

          <div className={styles.description}>
            <p>{t("description[0]")}</p>
            <p>{t("description[1]")}</p>
          </div>

          <div className={styles.email}>
            <a
              className={styles.emailButton}
              href="mailto:crosshub@crosshub.kr"
              aria-label="email"
            >
              {t("button")}
            </a>
            <div className={styles.modal}>
              <Image src={CONTACT_ICON_LIST[1]} name="contact-icon" />
              <p>crosshub@crosshub.kr</p>
            </div>
          </div>
        </div>

        <div className={styles.contactImages}>
          <Image src="/assets/about/contact_image.png" name="contact image" />
        </div>
      </div>
    </section>
  );
}
