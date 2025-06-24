import React from "react";
import dedent from "dedent";
import ApiSection from '@/components/developer/ApiSection';

export default function DevPayCancel() {
  const requestCode = dedent`
    fetch('https://admin.idblock.id/api/v1/payment/cancel/pay_1234567890', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here'
      },
      body: JSON.stringify({
        cancelReason: "고객 요청"
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  `;

  const responseCode = dedent`
    {
      "paymentId": "pay_1234567890",
      "status": "CANCELLED",
      "amount": 10000,
      "currency": "KRW",
      "orderId": "ORDER_123456789",
      "cancelReason": "고객 요청",
      "cancelledAt": "2024-03-15T09:40:00+09:00",
      "refundDetails": {
        "refundAmount": 10000,
        "refundStatus": "COMPLETED",
        "refundedAt": "2024-03-15T09:40:00+09:00"
      }
    }
  `;

  return (
    <ApiSection
      component="devPayment"
      method="cancel"
      requestCode={requestCode}
      responseCode={responseCode}
    />
  );
}
