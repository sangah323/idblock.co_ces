import React from "react";
import dedent from "dedent";
import ApiSection from '@/components/developer/ApiSection';

export default function DevAuthResult() {
  const requestCode = dedent`
    fetch('https://admin.idblock.id/api/v1/identity/result/ver_1234567890', {
      method: 'POST',
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
    "verificationId": "ver_1234567890",
    "status": "COMPLETED",
    "requestedAt": "2024-03-15T09:30:00+09:00",
    "completedAt": "2024-03-15T09:35:00+09:00",
    "verificationResult": {
      "name": "JOHANN LIM",
      "birthDate": "19940501",
      "passportNumber": "M1234M5678",
      "verificationStatus": "VERIFIED",
      "verificationScore": 0.95,
      "verificationDetails": {
        "nameMatch": true,
        "birthDateMatch": true,
        "passportNumberMatch": true,
        "documentAuthenticity": "VERIFIED",
        "documentExpiry": "VALID"
      }
    },
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
            "timestamp": "2024-03-15T09:35:00+09:00",
            "verificationResult": {
              "name": "JOHANN LIM",
              "birthDate": "19940501",
              "passportNumber": "M1234M5678",
              "verificationStatus": "VERIFIED",
              "verificationScore": 0.95
            }
          }
        }
      ]
    }
  }
  `;

  return (
    <ApiSection
      component="devAuth"
      method="result"
      requestCode={requestCode}
      responseCode={responseCode}
    />
  );
}
