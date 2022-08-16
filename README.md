# PayPal Webhook Listener Example for NodeJS

This repo gives an example of a Webhook Listener for Paypal for NodeJS, along with payload verification. The documentation provides a Java pseudocode as a webhook listener at https://developer.paypal.com/api/rest/webhooks/, but doesn't provide sample NodeJS code. This repo fills in that void. 

Although Paypal used to have an official [SDK for NodeJS](https://github.com/paypal/PayPal-node-SDK), it is now deprecated as of 2022. Developers are expected to use [this URL](https://developer.paypal.com/docs/api/webhooks/v1/#verify-webhook-signature_post) to verify the incoming payload's authenticity. 

More implementation examples of Paypal checkout and Paypal Subscriptions for MERN stack can be found in this [frontend](https://github.com/romesh-jaya/movie-store-frontend-react) and [backend](https://github.com/romesh-jaya/movie-store-backend-nodejs).

## .env variables

All fields mentioned in .env.example must be filled with correct values and renamed as .env. 
    
    - STARTPORT - Port that this server will run on. 
    - PAYPAL_WEBHOOK_ID: Paypal Webhook endpoint's ID,
    - PAYPAL_VERIFY_URL: URL to verify Paypal signature,
    - PAYPAL_CLIENT_ID: Paypal Client ID,
    - PAYPAL_CLIENT_SECRET: Paypal Client Secret,
    - PAYPAL_AUTH_URL: URL to get Paypal auth token
    

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the app. Need to manually set environment variables. The server will start by default at http://localhost:5000. You can send a sample Post request to http://localhost:5000/api/webhook, with the header content in sampleWebhookHeader.txt and JSON body in sampleWebhookPayload.json to verify the functionality working as expected. 




