// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

const stripe = require('stripe');
const express = require('express');
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_40b9238187c793bde5237a1fb6c3d138b4e99f9563ac3a322226a4265554d0a2";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'account.updated':
      const account = event.data.object;
      // Then define and call a function to handle the event account.updated
      break;
    case 'account.application.authorized':
      const application = event.data.object;
      // Then define and call a function to handle the event account.application.authorized
      break;
    case 'account.application.deauthorized':
      const application = event.data.object;
      // Then define and call a function to handle the event account.application.deauthorized
      break;
    case 'account.external_account.created':
      const externalAccount = event.data.object;
      // Then define and call a function to handle the event account.external_account.created
      break;
    case 'account.external_account.deleted':
      const externalAccount = event.data.object;
      // Then define and call a function to handle the event account.external_account.deleted
      break;
    case 'account.external_account.updated':
      const externalAccount = event.data.object;
      // Then define and call a function to handle the event account.external_account.updated
      break;
    case 'application_fee.created':
      const applicationFee = event.data.object;
      // Then define and call a function to handle the event application_fee.created
      break;
    case 'application_fee.refunded':
      const applicationFee = event.data.object;
      // Then define and call a function to handle the event application_fee.refunded
      break;
    case 'application_fee.refund.updated':
      const refund = event.data.object;
      // Then define and call a function to handle the event application_fee.refund.updated
      break;
    case 'charge.captured':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.captured
      break;
    case 'charge.expired':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.expired
      break;
    case 'charge.failed':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.failed
      break;
    case 'charge.pending':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.pending
      break;
    case 'charge.refunded':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.refunded
      break;
    case 'charge.succeeded':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.succeeded
      break;
    case 'charge.updated':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.updated
      break;
    case 'charge.dispute.closed':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.closed
      break;
    case 'charge.dispute.created':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.created
      break;
    case 'charge.dispute.funds_reinstated':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.funds_reinstated
      break;
    case 'charge.dispute.funds_withdrawn':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.funds_withdrawn
      break;
    case 'charge.dispute.updated':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.updated
      break;
    case 'charge.refund.updated':
      const refund = event.data.object;
      // Then define and call a function to handle the event charge.refund.updated
      break;
    case 'checkout.session.async_payment_failed':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      break;
    case 'checkout.session.async_payment_succeeded':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case 'checkout.session.completed':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.completed
      break;
    case 'checkout.session.expired':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.expired
      break;
    case 'customer.created':
      const customer = event.data.object;
      // Then define and call a function to handle the event customer.created
      break;
    case 'customer.deleted':
      const customer = event.data.object;
      // Then define and call a function to handle the event customer.deleted
      break;
    case 'customer.updated':
      const customer = event.data.object;
      // Then define and call a function to handle the event customer.updated
      break;
    case 'customer.discount.created':
      const discount = event.data.object;
      // Then define and call a function to handle the event customer.discount.created
      break;
    case 'customer.discount.deleted':
      const discount = event.data.object;
      // Then define and call a function to handle the event customer.discount.deleted
      break;
    case 'customer.discount.updated':
      const discount = event.data.object;
      // Then define and call a function to handle the event customer.discount.updated
      break;
    case 'customer.source.created':
      const source = event.data.object;
      // Then define and call a function to handle the event customer.source.created
      break;
    case 'customer.source.deleted':
      const source = event.data.object;
      // Then define and call a function to handle the event customer.source.deleted
      break;
    case 'customer.source.expiring':
      const source = event.data.object;
      // Then define and call a function to handle the event customer.source.expiring
      break;
    case 'customer.source.updated':
      const source = event.data.object;
      // Then define and call a function to handle the event customer.source.updated
      break;
    case 'customer.subscription.created':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.created
      break;
    case 'customer.subscription.deleted':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.deleted
      break;
    case 'customer.subscription.pending_update_applied':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.pending_update_applied
      break;
    case 'customer.subscription.pending_update_expired':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.pending_update_expired
      break;
    case 'customer.subscription.trial_will_end':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.trial_will_end
      break;
    case 'customer.subscription.updated':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.updated
      break;
    case 'customer.tax_id.created':
      const taxId = event.data.object;
      // Then define and call a function to handle the event customer.tax_id.created
      break;
    case 'customer.tax_id.deleted':
      const taxId = event.data.object;
      // Then define and call a function to handle the event customer.tax_id.deleted
      break;
    case 'customer.tax_id.updated':
      const taxId = event.data.object;
      // Then define and call a function to handle the event customer.tax_id.updated
      break;
    case 'identity.verification_session.canceled':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.canceled
      break;
    case 'identity.verification_session.created':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.created
      break;
    case 'identity.verification_session.processing':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.processing
      break;
    case 'identity.verification_session.redacted':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.redacted
      break;
    case 'identity.verification_session.requires_input':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.requires_input
      break;
    case 'identity.verification_session.verified':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.verified
      break;
    case 'invoice.deleted':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.deleted
      break;
    case 'invoice.finalized':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.finalized
      break;
    case 'invoice.paid':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.paid
      break;
    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.payment_succeeded
      break;
    case 'invoice.sent':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.sent
      break;
    case 'invoiceitem.created':
      const invoiceitem = event.data.object;
      // Then define and call a function to handle the event invoiceitem.created
      break;
    case 'invoiceitem.deleted':
      const invoiceitem = event.data.object;
      // Then define and call a function to handle the event invoiceitem.deleted
      break;
    case 'invoiceitem.updated':
      const invoiceitem = event.data.object;
      // Then define and call a function to handle the event invoiceitem.updated
      break;
    case 'issuing_card.created':
      const issuingCard = event.data.object;
      // Then define and call a function to handle the event issuing_card.created
      break;
    case 'issuing_card.updated':
      const issuingCard = event.data.object;
      // Then define and call a function to handle the event issuing_card.updated
      break;
    case 'issuing_transaction.created':
      const issuingTransaction = event.data.object;
      // Then define and call a function to handle the event issuing_transaction.created
      break;
    case 'issuing_transaction.updated':
      const issuingTransaction = event.data.object;
      // Then define and call a function to handle the event issuing_transaction.updated
      break;
    case 'order.created':
      const order = event.data.object;
      // Then define and call a function to handle the event order.created
      break;
    case 'order.payment_failed':
      const order = event.data.object;
      // Then define and call a function to handle the event order.payment_failed
      break;
    case 'order.payment_succeeded':
      const order = event.data.object;
      // Then define and call a function to handle the event order.payment_succeeded
      break;
    case 'order.updated':
      const order = event.data.object;
      // Then define and call a function to handle the event order.updated
      break;
    case 'payment_link.created':
      const paymentLink = event.data.object;
      // Then define and call a function to handle the event payment_link.created
      break;
    case 'payment_link.updated':
      const paymentLink = event.data.object;
      // Then define and call a function to handle the event payment_link.updated
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a function to handle the event payment_method.attached
      break;
    case 'payment_method.automatically_updated':
      const paymentMethod = event.data.object;
      // Then define and call a function to handle the event payment_method.automatically_updated
      break;
    case 'payment_method.detached':
      const paymentMethod = event.data.object;
      // Then define and call a function to handle the event payment_method.detached
      break;
    case 'payment_method.updated':
      const paymentMethod = event.data.object;
      // Then define and call a function to handle the event payment_method.updated
      break;
    case 'payout.canceled':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.canceled
      break;
    case 'payout.created':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.created
      break;
    case 'payout.failed':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.failed
      break;
    case 'payout.paid':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.paid
      break;
    case 'price.created':
      const price = event.data.object;
      // Then define and call a function to handle the event price.created
      break;
    case 'price.deleted':
      const price = event.data.object;
      // Then define and call a function to handle the event price.deleted
      break;
    case 'price.updated':
      const price = event.data.object;
      // Then define and call a function to handle the event price.updated
      break;
    case 'product.created':
      const product = event.data.object;
      // Then define and call a function to handle the event product.created
      break;
    case 'product.deleted':
      const product = event.data.object;
      // Then define and call a function to handle the event product.deleted
      break;
    case 'product.updated':
      const product = event.data.object;
      // Then define and call a function to handle the event product.updated
      break;
    case 'setup_intent.setup_failed':
      const setupIntent = event.data.object;
      // Then define and call a function to handle the event setup_intent.setup_failed
      break;
    case 'setup_intent.succeeded':
      const setupIntent = event.data.object;
      // Then define and call a function to handle the event setup_intent.succeeded
      break;
    case 'tax_rate.created':
      const taxRate = event.data.object;
      // Then define and call a function to handle the event tax_rate.created
      break;
    case 'tax_rate.updated':
      const taxRate = event.data.object;
      // Then define and call a function to handle the event tax_rate.updated
      break;
    case 'terminal.reader.action_failed':
      const reader = event.data.object;
      // Then define and call a function to handle the event terminal.reader.action_failed
      break;
    case 'terminal.reader.action_succeeded':
      const reader = event.data.object;
      // Then define and call a function to handle the event terminal.reader.action_succeeded
      break;
    case 'topup.canceled':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.canceled
      break;
    case 'topup.created':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.created
      break;
    case 'topup.failed':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.failed
      break;
    case 'topup.reversed':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.reversed
      break;
    case 'topup.succeeded':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.succeeded
      break;
    case 'transfer.created':
      const transfer = event.data.object;
      // Then define and call a function to handle the event transfer.created
      break;
    case 'transfer.failed':
      const transfer = event.data.object;
      // Then define and call a function to handle the event transfer.failed
      break;
    case 'transfer.paid':
      const transfer = event.data.object;
      // Then define and call a function to handle the event transfer.paid
      break;
    case 'transfer.reversed':
      const transfer = event.data.object;
      // Then define and call a function to handle the event transfer.reversed
      break;
    case 'transfer.updated':
      const transfer = event.data.object;
      // Then define and call a function to handle the event transfer.updated
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));