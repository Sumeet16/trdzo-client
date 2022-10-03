import React, { useState } from "react";
import "./verify.css"
import Headers from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useNavigate } from "react-router-dom";

const Verify = () => {

    const [otp, setOtp] = useState();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setOtp(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("https://trdzo.herokuapp.com/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp
            })
        });

        const result = await res.json();
        const status = res.status;
        if (status == 500) {
            alert("Invalid OTP")
        } else if (status == 422) {
            alert("Error Occurred")
        } else {
            navigate("/logUser", { replace: true })
        }
    }
    return (
        <>
            <Headers color="black" />

            <div className="main-verify">
                <h2>Enter OTP Sent to your Email ID</h2>
                <div className="verify-form">
                    <form onSubmit={handleSubmit} className="otp-form">
                        <input
                            name="otp"
                            type="number"
                            autoComplete="off"
                            placaholder="Enter OTP"
                            onChange={handleChange}
                        />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Verify