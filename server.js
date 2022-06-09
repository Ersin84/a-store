// This is your test secret API key.
const stripe = require('stripe')('pk_test_agMKzHwBRpyR53bibwmBV4gO00jWuMIbeq');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://www.wromo.app:8000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1KefWtEt31tuBKqWGL7zGSDP',
        quantity: 1,
      },
    ],
    mode: 'payment',
    automatic_tax: {enabled: true},
  });

  res.redirect(303, session.url);
});

app.listen(8000, () => console.log('Running on port 8000'));