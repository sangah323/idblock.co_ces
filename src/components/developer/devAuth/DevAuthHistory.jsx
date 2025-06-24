import React from "react";
import dedent from "dedent";
import ApiSection from '@/components/developer/ApiSection';

export default function DevAuthHistory() {
  const requestCode = dedent`
    fetch('https://admin.idblock.id/api/v1/identity/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here'
      },
      body: JSON.stringify({
        startDate: '2024-03-01',
        endDate: '2024-03-15',
        status: 'COMPLETED'
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  `;

  const responseCode = dedent`
  {
    "verifications": [
      {
        "verificationId": "ver_1234567890",
        "status": "COMPLETED",
        "requestedAt": "2024-03-15T09:30:00+09:00",
        "completedAt": "2024-03-15T09:35:00+09:00",
        "transactionId": "tx_1234567890",
        "blockchainStatus": "COMMITTED",
        "blockchainInfo": {
          "channelName": "identity-channel",
          "chaincodeName": "identity-cc",
          "blockNumber": 12345,
          "transactionId": "tx_1234567890",
          "validationCode": 0,
          "chaincodeEvents": [
            {
              "eventName": "IdentityVerificationCompleted",
              "payload": {
                "verificationId": "ver_1234567890",
                "status": "COMPLETED",
                "timestamp": "2024-03-15T09:35:00+09:00"
              }
            }
          ]
        }
      },
      {
        "verificationId": "ver_0987654321",
        "status": "COMPLETED",
        "requestedAt": "2024-03-14T10:30:00+09:00",
        "completedAt": "2024-03-14T10:35:00+09:00",
        "transactionId": "tx_0987654321",
        "blockchainStatus": "COMMITTED",
        "blockchainInfo": {
          "channelName": "identity-channel",
          "chaincodeName": "identity-cc",
          "blockNumber": 12344,
          "transactionId": "tx_0987654321",
          "validationCode": 0,
          "chaincodeEvents": [
            {
              "eventName": "IdentityVerificationCompleted",
              "payload": {
                "verificationId": "ver_0987654321",
                "status": "COMPLETED",
                "timestamp": "2024-03-14T10:35:00+09:00"
              }
            }
          ]
        }
      }
    ],
    "totalCount": 2,
    "page": 1,
    "pageSize": 10
  }
  `;

  return (
    <ApiSection
      component="devAuth"
      method="history"
      requestCode={requestCode}
      responseCode={responseCode}
    />
  );
}
