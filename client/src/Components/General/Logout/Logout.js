import React, { useState,useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";


const Logout = () => {

    const navigate = useNavigate();
    // const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {

        const userLogoutPromise = fetch('http://localhost:6004/user-logout', {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });
        const doctorLogoutPromise = fetch('http://localhost:6004/doctor-logout', {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });
        const googleLogoutPromise = fetch('http://localhost:6004/google-logout', {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });
        Promise.all([userLogoutPromise, doctorLogoutPromise, googleLogoutPromise])
            .then((responses) => {
                    const allLoggedOut = responses.every((res) => res.status === 200);

                    if (allLoggedOut) {
                        window.alert('Successfully logged out.');
                        navigate('/Login');
                    } else {
                        const error = new Error('Logout failed.');
                        throw error;
                    }
            })
            // const logoutRequests = Promise.all([userLogoutPromise, doctorLogoutPromise, googleLogoutPromise]);

            // logoutRequests.then((responses) => {
            //     navigate('/Login');

            //     if (responses.status == 200) {
            //         window.alert("User Successfully Logout");
            //         navigate('/Login');
            //     }
            //     else if (responses.status == 201) {
            //         window.alert("Doctor Successfully Logout");
            //         navigate('/Login');
            //     }

            //     const hasError = responses.some((res) => res.status !== 200);

            //     if (hasError) {
            //         const error = new Error('Logout failed.');
            //         throw error;
            //     }


            // })
            .catch((err) => {
                console.error(err);
            });

        
    }, []);

    // useEffect(() => {

    //     fetch('http://localhost:6004/logout', {
    //         method: "GET",
    //         headers: {
    //             Accept: "appllication/json",
    //             "Content-Type": "application/json"
    //         },
    //         credentials: "include"

    //     }).then((res) => {
    //         // dispatch({ type: "USER", payload: false })
    //         navigate('/Login');
    //         if (res.status != 200) {
    //             const error = new Error(res.error);
    //             throw error;
    //         }
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // },[]);

    return (
        <>

        </>
    )
}

export default Logout
