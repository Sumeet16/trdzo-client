import React, { useState, useEffect } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}


const PaymentForm = (props) => {
    const navigate = useNavigate();
    const [success, setsuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const amountPayable = props.info.dprice * 100

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const userId = localStorage.getItem("userId")
                const response = await axios.post("http://localhost:8080/pay", {
                    amount: amountPayable,
                    id,
                    courseId: props.info._id,
                    courseTitle: props.info.title,
                    desc: props.info.title,
                    userId
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setsuccess(true)
                    localStorage.setItem("userData", response.data.user.myLearning);
                    navigate("/mylearning", { replace: true })
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className='FormGroup'>
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>Payment Succesfull</h2>
                </div>
            }
        </>
    )
}

export default PaymentForm