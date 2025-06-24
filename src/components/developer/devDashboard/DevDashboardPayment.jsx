import React, { useEffect, useRef, useState } from 'react';
import styles from '@/style/developer/DevDashboardPayment.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

const paymentList = [
  {
    orderDate: '2024-03-20 11:23:36',
    paymentDate: '2024-03-20 11:24:00',
    orderNumber: 'orderNumber1',
    paymentStatus: '완료',
    buyer: '-',
    paymentAmount: '1,000원',
    paymentMethod: '신용·체크카드',
    product: '티셔츠 외 2건',
  },
  {
    orderDate: '2024-03-20 11:23:36',
    paymentDate: '2024-03-20 11:24:00',
    orderNumber: 'orderNumber1',
    paymentStatus: '완료',
    buyer: '-',
    paymentAmount: '1,000원',
    paymentMethod: '신용·체크카드',
    product: '티셔츠 외 2건',
  },
  {
    orderDate: '2024-03-20 11:23:36',
    paymentDate: '2024-03-20 11:24:00',
    orderNumber: 'orderNumber1',
    paymentStatus: '완료',
    buyer: '-',
    paymentAmount: '1,000원',
    paymentMethod: '신용·체크카드',
    product: '티셔츠 외 2건',
  },
];

const payments = paymentList.map((item, index) => {
  const {
    orderDate,
    paymentDate,
    orderNumber,
    paymentStatus,
    buyer,
    paymentAmount,
    paymentMethod,
    product,
  } = item;
  return (
    <tr key={index}>
      <td>{orderDate}</td>
      <td>{paymentDate}</td>
      <td>{orderNumber}</td>
      <td>{paymentStatus}</td>
      <td>{buyer}</td>
      <td>{paymentAmount}</td>
      <td>{paymentMethod}</td>
      <td>{product}</td>
    </tr>
  );
});

export default function DevDashboardPayment() {
  const [dateRange, setDateRange] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const handleDateChange = (range) => {
    if (range && range.length === 2) {
      setDateRange(range);
      setShowCalendar(false);
    }
  };

  const formattedRange = dateRange
    ? `${format(dateRange[0], 'yyyy-MM-dd')} ~ ${format(dateRange[1], 'yyyy-MM-dd')}`
    : '날짜를 선택해주세요';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>결제 내역</h1>

      <div className={styles.filterBox}>
        <div className={styles.filterDate}>
          <h2 className={styles.subTitle}>결제 일자</h2>
          <div className={styles.calendarBox} ref={calendarRef}>
            <button
              className={styles.dateRange}
              onClick={() => setShowCalendar(!showCalendar)}
              aria-label="date"
            >
              {formattedRange}
            </button>

            {showCalendar && (
              <div className={styles.calendar}>
                <Calendar
                  selectRange
                  onChange={handleDateChange}
                  value={dateRange || [new Date(), new Date()]}
                  calendarType="gregory"
                  showDoubleView
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.filterMethod}>
          <h2 className={styles.subTitle}>결제 수단</h2>
          <div className={styles.methodWrapper}>
            <select className={styles.methods}>
              <option>전체</option>
              <option>신용·체크카드</option>
              <option>가상계좌</option>
              <option>휴대폰</option>
            </select>
          </div>
        </div>
        <button className={styles.filterButton} aria-label="filter">
          검색
        </button>
      </div>

      <div className={styles.historyBox}>
        <h2 className={styles.subTitle}>결제내역 5건</h2>
        <table>
          <thead>
            <tr>
              <th>주문일시</th>
              <th>결제일시</th>
              <th>주문번호</th>
              <th>결제상태</th>
              <th>구매자명</th>
              <th>결제액</th>
              <th>결제수단</th>
              <th>구매상품</th>
            </tr>
          </thead>
          <tbody>{payments}</tbody>
        </table>
      </div>
    </div>
  );
}
