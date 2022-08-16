const fetch = require('node-fetch');
const clientID = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const authURL = process.env.PAYPAL_AUTH_URL;

// Access token is used to authenticate all REST API requests to Paypal
// This function is taken from https://developer.paypal.com/docs/checkout/advanced/integrate/#link-generateclienttoken
async function generateAccessToken() {
  if (!clientID || !clientSecret || !authURL) {
    const errorParams =
      'generateAccessToken(): clientID, authURL or clientSecret was found to be empty';
    throw new Error(errorParams);
  }

  const auth = Buffer.from(clientID + ':' + clientSecret).toString('base64');

  const response = await fetch(authURL, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const data = await response.json();
  return data.access_token;
}

module.exports = {
  generateAccessToken,
};
