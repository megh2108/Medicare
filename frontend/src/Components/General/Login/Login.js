import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Login.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {

    const loginwithgoogle = () => {
        window.open("http://localhost:6004/auth/google/callback", "_self")
    }

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const signin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const userLoginPromise = fetch('http://localhost:6004/user-login', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 email, password
    //             })
    //         });

    //         const doctorLoginPromise = fetch('http://localhost:6004/doctor-login', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 email, password
    //             })
    //         });

    //         const [userLoginResponse, doctorLoginResponse] = await Promise.all([userLoginPromise, doctorLoginPromise]);

    //         console.log('User Login Response:', userLoginResponse);
    //         console.log('Doctor Login Response:', doctorLoginResponse);

    //         // Check and handle responses for user-login
    //         if (userLoginResponse.status === 201) {
    //             // User login success
    //             window.alert("User Successfully Logged In");
    //             navigate("/Home");
    //         } else if (doctorLoginResponse.status === 200) {
    //             // Doctor login success
    //             window.alert("Doctor Successfully Logged In");
    //             navigate("/Contact");
    //             // Additional logic for Doctor login success
    //         }else if (userLoginResponse.status === 400) {
    //             // User login failed
    //             window.alert("Invalid User Login");
    //         }  else if (doctorLoginResponse.status === 401) {
    //             // Doctor login failed
    //             window.alert("Invalid Doctor Login");
    //         } else if (doctorLoginResponse.status === 500 || userLoginResponse.status === 500) {
    //             // Doctor login failed
    //             window.alert("Invalid Doctor Login");
    //         } else {
    //             // Handle other status codes or unexpected response for user-login
    //             window.alert("Unexpected error occurred during User Login. Please try again.");
    //         }


    //     } catch (err) {
    //         console.error("Error during login:", err);
    //         // Handle other errors
    //         window.alert("An error occurred during login. Please try again.");
    //     }
    // }


    const signin = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch('http://localhost:6004/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = await response.json();
            console.log(response.status);

            if (response.status === 200) {
                // Successful login
                // dispatch({ type: "USER", payload: true });
                // toast.success("User Successfully Logged In");
                window.alert("Doctor Successfully Logged In");
                navigate("/Contact");
            } else if (response.status === 201) {
                // Successful login
                // dispatch({ type: "USER", payload: true });
                // toast.success("User Successfully Logged In");
                window.alert("User Successfully Logged In");
                navigate("/Home");
            }else if (response.status === 202) {
                // Successful login
                // dispatch({ type: "USER", payload: true });
                // toast.success("User Successfully Logged In");
                window.alert("Admin Successfully Logged In");
                navigate("/Admin/Dashboard");
            } else if (response.status === 400) {
                // Invalid login credentials
                // toast.error("Invalid Login");
                window.alert("Invalid Login");
            } else {
                // Handle other status codes or unexpected response
                window.alert("Unexpected error occurred. Please try again.");
            }

        } catch (err) {
            console.error("Error during login:", err);
            // Handle other errors
            window.alert("An error occurred during login. Please try again.");
        }

    }

    return (
        <>
            <section class="section profile login">
                <div class="container">
                    <div class="card">
                        <div class="card-body pt-3 box-register">
                            <h5 class="card-title title ">Login Form</h5>

                            <div class="row">

                                <div class="col-md-6">
                                    <img src="assets/img/features-1.png" class="img-fluid login-image" alt="" />
                                </div>

                                <div class="col-md-6 form">
                                    <form class="g-3">
                                        <div class="col-md-12 line ">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="floatingEmail" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <label for="floatingEmail">Email</label>
                                            </div>
                                        </div>

                                        <div class="col-md-12 line ">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="btn btn-primary" onClick={signin}>Login</button>
                                        </div>

                                        <div class="col-md-12">
                                            <p class="small mb-3 mt-3">or</p>
                                            <button type="button" class="btn btn-info" onClick={loginwithgoogle}><span style={{ "margin-right": "10px" }}><FontAwesomeIcon icon={faGoogle} /></span>Signin with Google</button>
                                        </div>

                                        <div class="col-md-12 donotacc">
                                            <p class="small mb-0">Don't have account? <a href="/Signup">Create an account</a></p>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
