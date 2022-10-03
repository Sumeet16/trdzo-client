import React, { useState } from "react";
import "./UpdatePassword.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = info;

        const res = await fetch("http://localhost:8080/updatepassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }) 

        const result = await res.json();
        const statusCode = res.status;

        console.log(statusCode);

        
         if (statusCode === 404) {
            toast.error('Username Not Found !!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (statusCode === 500) {
            toast.error('Some Error Occurred !!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else{
            toast.success('Password Updated !!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("/logUser", {replace:true})
        }


    }

    return (
        <>
            <h1>Update Password</h1>

            <div className="app_container">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="email">
                            <input type="email" name="email" placeholder="Enter Your Email" autoComplete="off" onChange={handleChange} />
                        </div>
                        <div className="password">
                            <input type="password" name="password" placeholder="Enter Your New Password" autoComplete="off" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="Submitbtn">
                        <button>Update Password</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}

export default UpdatePassword