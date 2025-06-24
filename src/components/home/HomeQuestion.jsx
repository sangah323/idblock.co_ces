import React from 'react';
import styles from '@/style/home/HomeQuestion.module.css';
import { FOREIGNER_IMAGE_LIST, CARD_ICON_LIST } from '@/utils/constants';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function HomeQuestion() {
  const t = useT('HomeQuestion');

  const questionItems = FOREIGNER_IMAGE_LIST.map((url, index) => {
    return (
      <li key={index}>
        <Image src={url} alt="foreigner image" />
        <div className={styles.problem}>
          <p>{t(`question.context[${index}].name`)}</p>
          <p>"{t(`question.context[${index}].speech`)}"</p>
        </div>
      </li>
    );
  });

  const answerItems = CARD_ICON_LIST.map((url, index) => {
    return (
      <li key={index}>
        <div>
          <h4>{t(`answer.card[${index}].cardTitle`)}</h4>
          <p>{t(`answer.card[${index}].cardDescription[0]`)}</p>
          <p>{t(`answer.card[${index}].cardDescription[1]`)}</p>
        </div>
        <div className={styles.answerIcon}>
          <Image src={url} alt="app icon" />
        </div>
      </li>
    );
  });

  return (
    <section className={`subSection ${styles.questionSection}`}>
      <div className={`container ${styles.questionContainer}`}>
        <div className={styles.question}>
          <div className={styles.questionTitle}>
            <h2>{t('question.title[0]')}</h2>
            <h2>{t('question.title[1]')}</h2>
            <p>{t('question.description')}</p>
          </div>
          <div className={styles.questionContent}>
            <ul>{questionItems}</ul>
          </div>
        </div>

        <div className={styles.divided}></div>

        <div className={styles.answer}>
          <div className={styles.answerTitle}>
            <h3>{t('answer.title')}</h3>
          </div>
          <div className={styles.answerContent}>
            <ul>{answerItems}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
