import { useEffect, useMemo, useRef, useState } from 'react';
import { useT } from '@/hooks/useT';
import { translate } from '@/utils/translates';
import styles from '@/style/about/CompanyTimeline.module.css';

function classNames(...args) {
  return args.filter(Boolean).join(' ');
}

function YearTabs({ years, activeYear, onChange }) {
  const buttonsRef = useRef({});
  const [dotLeft, setDotLeft] = useState(0);

  useEffect(() => {
    const btn = buttonsRef.current[activeYear];
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const parentRect = btn.parentElement.getBoundingClientRect();
      setDotLeft(rect.left - parentRect.left + rect.width / 2);
    }
  }, [activeYear]);

  return (
    <div className={styles.yearTabs}>
      <div className={styles.yearTabsButtons}>
        {years.map((year) => {
          const isActive = year === activeYear;
          return (
            <button
              key={year}
              ref={(el) => (buttonsRef.current[year] = el)}
              onClick={() => onChange(year)}
              className={classNames(styles.yearButton, isActive && styles.active)}
              aria-pressed={isActive}
            >
              {year}
            </button>
          );
        })}
      </div>

      <div className={styles.yearLine}>
        <div className={styles.yearDot} style={{ left: dotLeft }} />
      </div>
    </div>
  );
}

function Timeline({ year, entries }) {
  if (!entries.length) {
    return (
      <div className={styles.timelineEmpty}>
        <p>No records found for {year}.</p>
      </div>
    );
  }

  return (
    <div className={styles.timeline}>
      {entries.map((entry, idx) => (
        <div key={`${year}-${idx}`} className={styles.timelineMonthGroup}>
          <div className={styles.timelineMonth}>
            {year}.{entry.month}
          </div>
          <ul className={styles.timelineContentList}>
            {entry.contents.map((text, i) => (
              <li key={`${year}-${entry.month}-${i}`} className={styles.timelineItem}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function CompanyTimeline({ lan = 'eng', defaultYear }) {
  const t = useT('CompanyTimeline');

  const langMap = { ko: 'kor', en: 'eng', ja: 'jpn', vi: 'vnm' };
  const targetLang = langMap[lan?.toLowerCase()] ?? lan?.toLowerCase() ?? 'kor';

  const raw = translate('about', targetLang, 'CompanyTimeline');

  const data = Array.isArray(raw?.timelineData) ? raw.timelineData : [];

  const years = useMemo(() => {
    return data.map((d) => Number(d.year)).sort((a, b) => b - a);
  }, [data]);

  const [activeYear, setActiveYear] = useState(defaultYear ?? years[0]);
  const currentYearData = data.find((d) => Number(d.year) === Number(activeYear));
  const entries = currentYearData ? currentYearData.timeline : [];

  return (
    <main className={styles.companyTimeline}>
      <section className={styles.timelineContainer}>
        <h1 className="sr-only">{t('title')}</h1>
        <YearTabs years={years} activeYear={activeYear} onChange={setActiveYear} />
        <Timeline year={activeYear} entries={entries} />
      </section>
    </main>
  );
}
