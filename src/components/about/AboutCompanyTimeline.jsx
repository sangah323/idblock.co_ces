import React, { useEffect, useRef, useMemo, useState } from 'react';
import '@/style/about/AboutCompanyTimeline.css';
import { translate } from '@/utils/translates';

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

// ------------------------------ TimelineItem ----------------------------------
function TimelineItem({ month, title, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-month">{month}</div>
      <div className="timeline-content">
        <div className="timeline-title">{title}</div>
        {description && <p className="timeline-description">{description}</p>}
      </div>
    </div>
  );
}

// ------------------------------ Timeline --------------------------------------
function Timeline({ year, entries }) {
  return (
    <div className="timeline">
      <div className="timeline-year">{year}</div>
      <div className="timeline-entries">
        {entries.map((e, idx) => (
          <TimelineItem key={`${year}-${idx}`} {...e} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------- CompanyTimeline ---------------------------------
export default function CompanyTimeline({ lan, defaultYear }) {
  const data = translate('about', lan.toLowerCase(), 'AboutHistory.timelineData');
  console.log(data);
  const years = useMemo(
    () =>
      Object.keys(data)
        .map((y) => Number(y))
        .sort((a, b) => b - a),
    [data],
  );
  const [activeYear, setActiveYear] = useState(defaultYear ?? years[0]);

  const entries = data[String(activeYear)] ?? [];

  return (
    <main className="company-timeline">
      <section className="timeline-container">
        <h1 className="sr-only">회사 연혁</h1>
        <YearTabs years={years} activeYear={activeYear} onChange={setActiveYear} />
        <Timeline year={activeYear} entries={entries} />
      </section>
    </main>
  );
}

/* ---------------------------- CompanyTimeline.css ----------------------------

*/
