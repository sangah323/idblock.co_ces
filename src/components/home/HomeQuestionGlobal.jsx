import React from 'react';
import styles from '@/style/home/HomeQuestion.module.css';
import style from '@/style/home/HomeQuestionGlobal.module.css';

import CountUpOnScroll from '@/components/common/CountUpOnScroll';
import { CARD_GLOBAL_ICON_LIST } from '@/utils/constants';
import { useT } from '@/hooks/useT';
import Image from '@/components/common/Image';

export default function HomeQuestionGlobal() {
  const t = useT('HomeQuestion');
  const countUpDuration = 2000;

  const answerItems = CARD_GLOBAL_ICON_LIST.map((url, index) => {
    return (
      <li key={index}>
        <div>
          <h4>{t(`answer.card[${index}].cardTitle`)}</h4>
          <p>{t(`answer.card[${index}].cardDescription`)}</p>
        </div>
        <div className={`${styles.answerIcon} ${style.answerIcon}`}>
          <Image src={url} alt="icon image" />
        </div>
      </li>
    );
  });

  return (
    <section className={`subSection ${styles.questionSection}`}>
      <div className={`container ${styles.questionContainer}`}>
        <div className={`${styles.question} ${style.question}`}>
          <div className={styles.questionTitle}>
            <h2>{t('question.title[0]')}</h2>
            <h2>{t('question.title[1]')}</h2>
            <p>{t('question.description')}</p>
          </div>
          <div className={style.questionContent}>
            <ul>
              <li className={style.questionItem}>
                <div className={`${styles.problem} ${style.problem}`}>
                  <h3 className={style.activeNumber}>
                    <CountUpOnScroll target={10800} duration={countUpDuration} suffix="M cases" />
                  </h3>
                  <p>{t('question.context[0].speech')}</p>
                </div>
              </li>
              <li className={style.questionItem}>
                <div className={`${styles.problem} ${style.problem}`}>
                  <h3 className={style.activeNumber}>
                    <CountUpOnScroll
                      target={282}
                      duration={countUpDuration}
                      prefix="$"
                      suffix="M"
                    />
                  </h3>
                  <p>{t('question.context[1].speech')}</p>
                </div>
              </li>
              <li className={style.questionItem}>
                <div className={`${styles.problem} ${style.problem}`}>
                  <h3 className={style.activeNumber}>
                    <CountUpOnScroll
                      target={33100}
                      duration={countUpDuration}
                      prefix="$"
                      suffix="M"
                    />
                  </h3>
                  <p>{t('question.context[2].speech')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divided}></div>

        <div className={styles.answer}>
          <div className={styles.answerTitle}>
            <h3>{t('answer.title')}</h3>
          </div>
          <div className={`${styles.answerContent} ${style.answerContent}`}>
            <ul>{answerItems}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
