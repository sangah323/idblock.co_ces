import React from "react";
import dedent from "dedent";
import ApiSection from '@/components/developer/ApiSection';

export default function DevPayInquiry() {
  const requestCode = dedent`
    fetch('https://admin.idblock.id/api/v1/payment/inquiry/pay_1234567890', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  `;

  const responseCode = dedent`
    {
      "paymentId": "pay_1234567890",
      "status": "COMPLETED",
      "amount": 10000,
      "currency": "KRW",
      "orderId": "ORDER_123456789",
      "paymentMethod": "CARD",
      "createdAt": "2024-03-15T09:30:00+09:00",
      "completedAt": "2024-03-15T09:35:00+09:00",
      "paymentDetails": {
        "cardNumber": "****-****-****-1234",
        "cardType": "VISA",
        "installmentPeriod": 0
      }
    }
  `;

  return (
    <ApiSection
      component="devPayment"
      method="inquiry"
      requestCode={requestCode}
      responseCode={responseCode}
    />
  );
}
