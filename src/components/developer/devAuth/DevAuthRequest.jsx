import React from 'react'
import dedent from "dedent";
import ApiSection from '@/components/developer/ApiSection';

export default function DevAuthRequest() {
  const requestCode = dedent`
    fetch('https://admin.idblock.id/api/v1/identity/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here'
      },
      body: JSON.stringify({
        name: 'JOHANN LIM',
        birthDate: '19940501',
        passportNumber: 'M1234M5678'
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  `;

  const responseCode = dedent`
  {
    "verificationId": "ver_1234567890",
    "status": "PROCESSING",
    "requestedAt": "2024-03-15T09:30:00+09:00",
    "estimatedCompletionTime": "2024-03-15T09:35:00+09:00",
    "transactionId": "tx_1234567890",
    "blockchainStatus": "COMMITTED"
  }
  `;

  return (
    <ApiSection
      component="devAuth"
      method="request"
      requestCode={requestCode}
      responseCode={responseCode}
    />
  );
}
