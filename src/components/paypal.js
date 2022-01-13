import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function Paypal({ amount }) {
  return (
    <PayPalButtons
      style={{
        layout: 'vertical',
        color: 'blue',
        shape: 'pill',
        label: 'paypal',
      }}
      createOrder={(data, actions) => {
        console.log('data', amount);
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        const name = details.payer.name.given_name;
      }}
    />
  );
}
