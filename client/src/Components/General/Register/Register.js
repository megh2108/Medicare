import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Register.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Register = () => {

    //login with google
    const loginwithgoogle = ()=>{
        window.open("http://localhost:6004/auth/google/callback","_self")
    }

    const navigate = useNavigate();

    //user
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    // doctor
    const [dname, setDname] = useState('');
    const [demail, setDemail] = useState('');
    const [dphone, setDphone] = useState('');
    const [dlno, setDlno] = useState('');
    const [dspecial, setDspecial] = useState('');
    const [dpassword, setDpassword] = useState('');
    const [dcpassword, setDcpassword] = useState('');

    const signup = async (e) => {
        e.preventDefault();

        const requestBody = {
            name, email, phone, password, cpassword
        };
        console.log(requestBody);

        const response = await fetch("http://localhost:6004/user-register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),

        });

        const res = await response.json();
        console.log(response.status);

        if (response.status === 422 || !res) {
            // toast.error("Invalid registration");
            window.alert("Invalid registration");
            console.log("Invalid registration");
        } else {
            // toast.success("Registration Successfull");
            window.alert("Successfull Registration");
            console.log("Successfull Registration");
            navigate("/Login");

        }

    };

    const doctorsignup = async (e) => {
        e.preventDefault();

        const requestBody = {
            dname, demail, dphone,dlno,dspecial, dpassword, dcpassword
        };
        console.log(requestBody);

        const response = await fetch("http://localhost:6004/doctor-register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),

        });

        const res = await response.json();
        console.log(response.status);

        if (response.status === 422 || !res) {
            // toast.error("Invalid registration");
            window.alert("Invalid registration");
            console.log("Invalid registration");
        } else {
            // toast.success("Registration Successfull");
            window.alert("Successfull Registration");
            console.log("Successfull Registration");
            navigate("/Login");

        }

    };


    return (
        <>
            <section class="section profile register">
                <div class="container">
                    <div class="card">
                        <div class="card-body pt-3 box-register">
                            {/* <!-- Bordered Tabs --> */}
                            <ul class="nav nav-tabs nav-tabs-bordered nav-register">

                                <li class="nav-item">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#user">User Register</button>
                                </li>

                                <li class="nav-item">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#doctor">Doctor Register</button>
                                </li>

                            </ul>
                            <div class="tab-content pt-2">


                                <div class="container tab-pane fade show active" id="user">

                                    <div class="row register">

                                        <div class="col-md-6">
                                            <img src="assets/img/features-1.png" class="img-fluid login-image" alt="" />
                                        </div>

                                        <div class="col-md-6 form">
                                            <form class="row g-3">
                                                <div class="col-md-12 line ">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="floatingName" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                                                        <label for="floatingName"> Your Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="email" class="form-control" id="floatingEmail" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        <label for="floatingEmail">Your Email</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="floatingContact" placeholder="Contact" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                        <label for="floatingContact">Your Contact</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        <label for="floatingPassword">Password</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="password" class="form-control" id="floatingCpassword" placeholder="Confirm Password" name="cpassword" value={cpassword} onChange={(e) => setCpassword(e.target.value)}/>
                                                        <label for="floatingCpassword">Confirm Password</label>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-primary" onClick={signup}>Create Account</button>
                                                </div>

                                                <div class="col-md-12">
                                                    <p class="small mb-3">or</p>
                                                    <button type="button" class="btn btn-info" onClick={loginwithgoogle}><span style={{ "margin-right": "10px" }}><FontAwesomeIcon icon={faGoogle} /></span>Signup with Google</button>
                                                </div>

                                                <div class="col-md-12 donotacc">
                                                    <p class="small mb-0">Already have an account? <a href="/Login">Log in</a></p>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                                <div class="container tab-pane fade" id="doctor">

                                    <div class="row register">


                                        <div class="col-md-6 form">
                                            <form class="row g-3">
                                                <div class="col-md-12 line ">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="floatingName" placeholder="Name" name="dname" value={dname} onChange={(e) => setDname(e.target.value)} />
                                                        <label for="floatingName">Doctor Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="email" class="form-control" id="floatingEmail" placeholder="Email" name="demail" value={demail} onChange={(e) => setDemail(e.target.value)}/>
                                                        <label for="floatingEmail">Doctor Email</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="floatingContact" placeholder="Contact" name="dphone" value={dphone} onChange={(e) => setDphone(e.target.value)} />
                                                        <label for="floatingContact">Doctor Contact</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="floatingLicense" placeholder="LicenseNo" name="dlno" value={dlno} onChange={(e) => setDlno(e.target.value)} />
                                                        <label for="floatingLicense">Medical License No.</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="floatingLicense" placeholder="LicenseNo" name="dspecial" value={dspecial} onChange={(e) => setDspecial(e.target.value)} />
                                                        <label for="floatingLicense">Specialization</label>
                                                    </div>
                                                </div>
                                              
                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="dpassword" value={dpassword} onChange={(e) => setDpassword(e.target.value)} />
                                                        <label for="floatingPassword">Password</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 line ">
                                                    <div class="form-floating">
                                                        <input type="password" class="form-control" id="floatingCpassword" placeholder="ConfirmPassword" name="dcpassword" value={dcpassword} onChange={(e) => setDcpassword(e.target.value)} />
                                                        <label for="floatingCpassword">Confirm Password</label>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-primary" onClick={doctorsignup}>Create Account</button>
                                                </div>


                                                <div class="col-md-12 donotacc">
                                                    <p class="small mb-0">Already have an account? <a href="/Login">Log in</a></p>
                                                </div>
                                            </form>

                                        </div>

                                        <div class="col-md-6">
                                            <img src="assets/img/features-2.png" class="img-fluid login-image" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
