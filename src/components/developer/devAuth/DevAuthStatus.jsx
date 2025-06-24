import React from "react";
import dedent from "dedent";
import ApiSection from '@/components/developer/ApiSection';

export default function DevAuthStatus() {
  const requestCode = dedent`
    fetch('https://admin.idblock.id/api/v1/identity/status/ver_1234567890', {
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
    "status": "PROCESSING",
    "requestedAt": "2024-03-15T09:30:00+09:00",
    "estimatedCompletionTime": "2024-03-15T09:35:00+09:00",
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
          "eventName": "IdentityVerificationStatusUpdated",
          "payload": {
            "verificationId": "ver_1234567890",
            "status": "PROCESSING",
            "timestamp": "2024-03-15T09:30:00+09:00"
          }
        }
      ]
    }
  }
  `;

  return (
    <ApiSection
      component="devAuth"
      method="status"
      requestCode={requestCode}
      responseCode={responseCode}
    />
  );
}
