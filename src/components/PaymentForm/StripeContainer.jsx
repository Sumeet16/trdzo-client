import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React, { useEffect, useState } from 'react'
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LBwr5SAPjZcwZjNK2yfvdlfvqJwuUgJDtO9reMWMthC824NCC7ztOCBsg8iFyD66jLiXTzmok4lS1osOZcLBb4p00bTK66v5M";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  const [courseInfo, setCourseInfo] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('id');

  useEffect(() => {
    const getCourseById = async (id) => {
      const res = await fetch("https://trdzo.herokuapp.com/getCourseById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id
        })
      })

      const result = await res.json();
      const data = result.course;
      setCourseInfo(data)
    }
    getCourseById(myParam)
  }, []);
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm info={courseInfo} />
    </Elements>
  )
}

export default StripeContainer