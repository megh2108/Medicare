import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "./Register.css"

// for store token in local storage using contextAPI 
import { useAuth } from '../../../Store/auth';

const Register = () => {

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [type, setType] = useState('');
    const [licenceno, setLicenceno] = useState('');
    const [special, setSpecial] = useState('');
    const [secretkey, setSecretkey] = useState('');

    // handle form on submit signup
    const Signup = async (e) => {
        e.preventDefault();

        const requestBody = {
            name, email, phone, password, cpassword, type
        };

        if (type === "doctor") {
            requestBody.licenceno = licenceno;
            requestBody.special = special;
        }

        if (type === "admin") {
            requestBody.secretkey = secretkey;
        }

        console.log(requestBody);


        try {
            const response = await fetch("http://localhost:6500/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            console.log("response data : ", response);

            // if (response.ok) {
            const responseData = await response.json();
            console.log("response", responseData);
            console.log("response status : ", response.status);

            if (response.status === 422) {
                // window.alert("Invalid registration");
                toast.error(responseData.extraDetails);
                console.log(responseData.extraDetails);
            }
            else if (response.status === 400) {
                // window.alert("Invalid registration");
                toast.error("Invalid registration");
                console.log("Invalid registration");
            }
            else if (response.status === 201) {
                // window.alert("Registration Successfull");
                toast.success("Registration Successfull");
                console.log("Successfull Registration");

                // storeTokenInLS(responseData.token);



                setName("");
                setEmail("");
                setPhone("");
                setPassword("");
                setCpassword("");
                setType("");
                setLicenceno("");
                setSpecial("");
                setSecretkey("");
                navigate("/Signup_Login");

            }
            else {
                // window.alert("Internal Server Error");
                toast.error("Internal Server Error");
                console.log("error inside response ", "error");

            }
            // alert("registration successful");
            // setUser({ username: "", email: "", phone: "", password: "" });
            // } else {
            //     console.log("error inside response ", "error");
            // }
        } catch (error) {
            // window.alert("Failed to fetch. Check console for details.");
            toast.error("Failed to fetch. Check console for details.");
            console.error("Error:", error);
        }
    };

    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     cpassword: "",
    //     type:"",
    //     licenceno:"",
    //     special:"",
    //     secretkey:""
    //   });

    //   const handleInput = (e) => {
    //     console.log(e);
    //     let name = e.target.name;
    //     let value = e.target.value;

    //     setUser({
    //       ...user,
    //       [name]: value,
    //     });
    //   };

    const [emails, setEmails] = useState('');
    const [passwords, setPasswords] = useState('');

    const Login = async (e) => {
        e.preventDefault();

        const requestBody = {
            emails, passwords
        };

        try {
            const response = await fetch("http://localhost:6500/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            console.log("response data : ", response);

            // if (response.ok) {
            const responseData = await response.json();
            // console.log("response", responseData);
            // console.log("token", responseData.token);
            console.log("response status : ", response.status);

            if (response.status === 400) {
                // window.alert("Invalid registration");
                toast.error("Invalid registration");
                console.log("Invalid registration");
            }
            else if (response.status === 401) {
                // window.alert("You are not authorized");
                toast.error("You are not authorized");
                console.log("You are not authorized");
            }
            else if (response.status === 200) {
                // window.alert("Patient Login Successfully");
                toast.success("Patient Login Successfully");
                console.log("Patient Login Successfully");

                storeTokenInLS(responseData.token);

                setEmails("");
                setPasswords("");
                navigate("/Home");
            }
            else if (response.status === 201) {
                // window.alert("Doctor Login Successfully");
                toast.success("Doctor Login Successfully");
                console.log("Doctor Login Successfully");

                storeTokenInLS(responseData.token);

                setEmails("");
                setPasswords("");

            }
            else if (response.status === 202) {
                // window.alert("Admin Login Successfully");
                toast.success("Admin Login Successfully");
                console.log("Admin Login Successfully");

                storeTokenInLS(responseData.token);

                setEmails("");
                setPasswords("");

                navigate("/Admin");

            }
            else {
                // window.alert("Internal Server Error");
                toast.error("Internal Server Error");
                console.log("Internal Server Error");
            }

        } catch (error) {
            // window.alert("Failed to fetch. Check console for details.");
            toast.error("Failed to fetch. Check console for details.");
            console.error("Error:", error);
        }


    };


    return (
        <>
            <section class="section profile register">
                <div class="container" data-aos="fade-up">
                    <div class="card">
                        <div class="card-body pt-3 box-register" >
                            {/* <!-- Bordered Tabs --> */}
                            <ul class="nav nav-tabs nav-tabs-bordered nav-register">


                                <li class="nav-item">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#login">Login</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#register">Signup</button>
                                </li>

                            </ul>
                            <div class="tab-content pt-2" data-aos="zoom-in">

                                <div class="container tab-pane fade show active" id="login"  >

                                    <h5 class="card-title title">Login Form</h5>


                                    <div class="row register" data-aos="fade-right">

                                        <div class="col-md-6 img">
                                            <img src="assets/img/features-2.png" class="img-fluid login-image" alt="" />
                                        </div>

                                        <div class="col-md-6 form">
                                            <form class="row g-3">
                                                <div class="col-md-12 line ">
                                                    <div class="form-floating">
                                                        <input type="email" class="form-control" id="floatingEmail" placeholder="Email" name="emails" value={emails} onChange={(e) => setEmails(e.target.value)} />
                                                        <label for="floatingEmail">Email</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-12 line ">
                                                    <div class="form-floating">
                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="passwords" value={passwords} onChange={(e) => setPasswords(e.target.value)} />
                                                        <label for="floatingPassword">Password</label>
                                                    </div>
                                                </div>
                                                <div class="text-center mt-5">
                                                    <button type="button" class="btn btn-primary" onClick={Login}>Login</button>
                                                </div>



                                                {/* <div class="col-md-12 donotacc">
                                                    <p class="small mb-0">Don't have account? <a href="#register">Create an account</a></p>
                                                </div> */}
                                            </form>

                                        </div>


                                    </div>
                                </div>


                                <div class="container tab-pane fade" id="register"  >

                                    <h5 class="card-title title ">Register Form</h5>


                                    <div class="row register"  data-aos="fade-right">



                                        <div class="col-md-6 form">
                                            <form class="row g-3">
                                                <div class="col-md-12 line ">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="floatingName" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
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
                                                        <input type="password" class="form-control" id="floatingCpassword" placeholder="Confirm Password" name="cpassword" value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                                                        <label for="floatingCpassword">Confirm Password</label>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 line checkbox">
                                                    <label for="userType" className="form-label">User Type</label>
                                                    <div className="row">

                                                        <div class="form-check col-lg-4">
                                                            <input class="form-check-input" type="radio" name="type" id="patient"
                                                                value="patient" onChange={(e) => setType(e.target.value)} />
                                                            <label class="form-check-label" for="userType">
                                                                Patient
                                                            </label>

                                                        </div>
                                                        <div class="form-check col-lg-4">
                                                            <input class="form-check-input" type="radio" name="type" id="doctor"
                                                                value="doctor" onChange={(e) => setType(e.target.value)} />
                                                            <label class="form-check-label" for="userType">
                                                                Doctor
                                                            </label>

                                                        </div>
                                                        <div class="form-check col-lg-4">
                                                            <input class="form-check-input" type="radio" name="type" id="admin"
                                                                value="admin" onChange={(e) => setType(e.target.value)} />
                                                            <label class="form-check-label" for="userType">
                                                                Admin
                                                            </label>

                                                        </div>
                                                    </div>
                                                </div>
                                                {type === "doctor" ? (
                                                    <>
                                                        <div class="col-md-6 line ">
                                                            <div class="form-floating">
                                                                <input type="text" class="form-control" id="floatingLicenceno" placeholder="Licence No" name="licenceno" value={licenceno} onChange={(e) => setLicenceno(e.target.value)} />
                                                                <label for="floatingLicenceno">Licence No</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 line ">
                                                            <div class="form-floating">
                                                                <input type="text" class="form-control" id="floatingSpecialization" placeholder="Specialization" name="special" value={special} onChange={(e) => setSpecial(e.target.value)} />
                                                                <label for="floatingSpecialization">Specialization</label>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : null}
                                                {type === "admin" ? (
                                                    <>
                                                        <div class="col-md-12 line ">
                                                            <div class="form-floating">
                                                                <input type="text" class="form-control" id="floatingSecretkey" placeholder="Secret Key" name="secretkey" value={secretkey} onChange={(e) => setSecretkey(e.target.value)} />
                                                                <label for="floatingSecretkey">Secret Key</label>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : null}

                                                <div class="text-center">
                                                    <button type="button" class="btn btn-primary" onClick={Signup}>Create Account</button>
                                                </div>

                                                {/* <div class="col-md-12">
                                                    <p class="small mb-3">or</p>
                                                    <button type="button" class="btn btn-info" onClick={loginwithgoogle}><span style={{ "margin-right": "10px" }}><FontAwesomeIcon icon={faGoogle} /></span>Signup with Google</button>
                                                </div> */}

                                                {/* <div class="col-md-12 donotacc">
                                                    <p class="small mb-0">Already have an account?<a href="#login">Log in</a></p>
                                                </div> */}
                                            </form>

                                        </div>
                                        <div class="col-md-6 img">
                                            <img src="assets/img/features-1.png" class="img-fluid login-image" alt="" />
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
