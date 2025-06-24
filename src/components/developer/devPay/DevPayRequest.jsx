import React from "react";
import dedent from "dedent";
import ApiSection from '@/components/developer/ApiSection';

export default function DevPayRequest() {
  const requestCode = dedent`
    fetch('https://admin.idblock.id/api/v1/payment/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here'
      },
      body: JSON.stringify({
        amount: 10000,
        currency: 'KRW',
        orderId: 'ORDER_123456789',
        paymentMethod: 'CARD'
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  `;

  const responseCode = dedent`
    {
      "paymentId": "pay_1234567890",
      "status": "PENDING",
      "amount": 10000,
      "currency": "KRW",
      "orderId": "ORDER_123456789",
      "paymentMethod": "CARD",
      "createdAt": "2024-03-15T09:30:00+09:00",
      "paymentUrl": "https://payment.idblock.id/pay/pay_1234567890",
      "expiresAt": "2024-03-15T10:30:00+09:00"
    }
  `;

  return (
    <ApiSection
      component="devPayment"
      method="request"
      requestCode={requestCode}
      responseCode={responseCode}
    />
  );
}
