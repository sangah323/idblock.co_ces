import { defineFunction, secret } from '@aws-amplify/backend';

export const getGoogleApiKey = defineFunction({
  environment: {
    API_KEY: secret('GOOGLE_API_KEY')
  },
});