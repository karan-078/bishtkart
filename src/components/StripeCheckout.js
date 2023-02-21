import React, { useState, useEffect,useSelector,useDispatch  }
from "react";
import { useNavigate } from 'react-router-dom';
import "./strip.scss"
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

import {
    getAllCarts,
    removeFromCart,
    clearCart,
    toggleCartQty,
    getCartTota,
  } from "../store/CartSlice";
  import { formatPrice } from "../utils/helper";
  import { Link } from "react-router-dom";
const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

 export const CheckoutForm = () => {


  // const carts = useSelector(getAllCarts);
  // const { itemsCount, totalAmount } = useSelector((state) => state.cart);

    const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async () => {
    try{
      const { data } = await axios.post(
        '/.netlify/functions/create-payment-intent',


      JSON.stringify()
        )

    } catch(error){

    }
  };

  useEffect(()=>{
    createPaymentIntent();
  },[])


  const handleChange = async (event)=>{
    setDisabled(event.empty);
    setError(event.error?event.error.message:"");
  }


  const handleSubmit = async(ev)=>{
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if(payload.error){
        setError(`payment faild ${payload.error.message}`)
        setProcessing(false)   
      } else{
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        setTimeout(() => {
          clearCart();
          navigate('/');
        }, 10000);
      }
  }

  return (

    <div className="">
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          {/* <h4>Hello, {myUser && myUser.name}</h4> */}
       
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form id='payment-form' onSubmit={handleSubmit}>
        <CardElement
          id='card-element'
        //   options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} id='submit'>
          <span id='button-text'>
            {processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {' '}
            Stripe dashboard.
          </a>{' '}
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  )
};



const StripeCheckout = () => {
    
  return <div>
    <Elements  stripe={promise}>
    <CheckoutForm />
    </Elements>
  </div>;
};

export default StripeCheckout;
