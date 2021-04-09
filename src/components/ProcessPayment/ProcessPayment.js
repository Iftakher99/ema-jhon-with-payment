import React from "react";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
const stripePromise = loadStripe(
  "sk_test_51IeD4mHIHsFKjCw15vssWYOve3qDqV1yFD7ADs2sUzZQrpSFD1XOCIX3Tsslp869PlwB9V9yzYMY0lQEwl4RIFdO00KMnneMJk"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm />
    </Elements>
  );
};

export default ProcessPayment;
