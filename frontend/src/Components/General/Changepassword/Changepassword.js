import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "./Changepassword.css"

// for store token in local storage using contextAPI 
import { useAuth } from '../../../Store/auth';

const Changepassword = () => {

    // const navigate = useNavigate();
    // const {storeTokenInLS} = useAuth();
    const { id } = useAuth();



    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reenterNewPassword, setReenterNewPassword] = useState('');

    const Change = async (e) => {
        e.preventDefault();

        const requestBody = {
            id, oldPassword, newPassword, reenterNewPassword
        };

        console.log(requestBody);
        try {
            const response = await fetch("http://localhost:6500/api/auth/changepassword", {
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
                toast.error("password is not correct.");
                console.log("password is not correct.");
            }
            else if (response.status === 200) {
                // window.alert("Patient Login Successfully");
                toast.success("password change Successfully");
                console.log("password change Successfully");

                setOldPassword("");
                setNewPassword("");
                setReenterNewPassword("");
                // navigate("/Home");
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
            <section class="section profile changepassword">
                <div class="container cp-container" data-aos="fade-up">
                    <div class="card">
                        <div class="card-body pt-3 box-register" >
                            {/* <!-- Bordered Tabs --> */}



                            <h5 class="card-title title">Change Password</h5>


                            <div class="row register" data-aos="fade-right">



                                <div class="col-md-12 form">
                                    <form class="row g-3">


                                        <div class="col-md-12 line ">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="passwords" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                                                <label for="floatingPassword">Old Password</label>
                                            </div>
                                        </div>

                                        <div class="col-md-12 line ">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="passwords" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                                <label for="floatingPassword">New Password</label>
                                            </div>
                                        </div>

                                        <div class="col-md-12 line ">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="passwords" value={reenterNewPassword} onChange={(e) => setReenterNewPassword(e.target.value)} />
                                                <label for="floatingPassword">Re-Enter New Password</label>
                                            </div>
                                        </div>



                                        <div class="text-center mt-5">
                                            <button type="button" class="btn btn-primary" onClick={Change}>Change Password</button>
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

export default Changepassword
