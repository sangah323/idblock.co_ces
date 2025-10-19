import { useT } from '@/hooks/useT';
import '@/style/about/AboutCompanyTimeline.css';
import { translate } from '@/utils/translates';
import { useEffect, useMemo, useRef, useState } from 'react';

// -------------------------------- 유틸 ----------------------------------------
function classNames(...args) {
  return args.filter(Boolean).join(' ');
}

// ------------------------------ YearTabs --------------------------------------
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
    <div className="year-tabs">
      <div className="year-tabs-buttons">
        {years.map((y) => {
          const active = y === activeYear;
          return (
            <button
              key={y}
              ref={(el) => (buttonsRef.current[y] = el)}
              onClick={() => onChange(y)}
              className={classNames('year-button', active && 'active')}
              aria-pressed={active}
            >
              {y}
            </button>
          );
        })}
      </div>
      <div className="year-line">
        <div className="year-dot" style={{ left: dotLeft, transition: 'left 0.3s ease' }} />
      </div>
    </div>
  );
}

// ------------------------------ Timeline --------------------------------------

function Timeline({ year, entries }) {
  return (
    <div className="timeline">
      <div className="timeline-entries">
        {entries.map((entry, idx) => (
          <div key={`${year}-${idx}`} className="timeline-month-group">
            <div className="timeline-month">
              {year}.{entry.month}
            </div>
            <ul className="timeline-content-list">
              {entry.contents.map((text, i) => (
                <li key={`${year}-${entry.month}-${i}`} className="timeline-item">
                  - {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------- CompanyTimeline ---------------------------------

export default function CompanyTimeline({ lan, defaultYear }) {
  const t = useT('AboutHistory');
  const data = translate('about', lan.toLowerCase(), 'AboutHistory.timelineData');

  // === JSON이 배열이므로 key 리스트 대신 map으로 변환 ===
  const years = useMemo(() => data.map((d) => Number(d.year)).sort((a, b) => b - a), [data]);

  const [activeYear, setActiveYear] = useState(defaultYear ?? years[0]);

  // ===선택된 연도의 timeline 데이터 추출 ===
  const currentYearData = data.find((d) => Number(d.year) === Number(activeYear));
  const entries = currentYearData ? currentYearData.timeline : [];

  return (
    <main className="company-timeline">
      <section className="timeline-container">
        <h1 className="sr-only">{t('title')}</h1>
        <YearTabs years={years} activeYear={activeYear} onChange={setActiveYear} />
        <Timeline year={activeYear} entries={entries} />
      </section>
    </main>
  );
}
