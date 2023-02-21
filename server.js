const express = require("express")

const app = (express)
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY )

 app.use(express.static("public"))
 app.use(express.json)


    const calculateOrderAmount = (items) => {
      // Replace this constant with a calculation of the order's amount
      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client
      return 14000;
    };

    app.post("/create-payment-intent", async (req, res) => {
      const { items } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "inr",
        automatic_payment_methods: {
          enabled: true,
          "id": "pi_1Dt0s32eZvKYlo2CV1tCo99t",
          "object": "payment_intent",
          "amount": 1000,
          "amount_capturable": 0,
        },

       

    })
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  app.listen(4242, () => console.log("Node server listening on port 4242!"));