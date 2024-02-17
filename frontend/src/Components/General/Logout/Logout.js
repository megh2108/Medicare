import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";

// for logout contextAPI
import { useAuth } from '../../../Store/auth';


const Logout = () => {

    const navigate = useNavigate();
    const { logoutUser } = useAuth();

    useEffect(() => {
        logoutUser();
    }, [logoutUser]);


    return <Navigate to="/Signup_Login" />
}

export default Logout
