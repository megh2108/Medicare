import React from 'react'
import './Error.css';

import { NavLink } from 'react-router-dom';


const Error = () => {
    return (
        <>
            <main>
                <div class="container mt-5">
                    <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                        <NavLink class="btn" to="/">Back to home</NavLink>
                        <img src="assets/img/not-found.svg" class="img-fluid py-5" alt="Page Not Found" />

                    </section>

                </div>
            </main>
        </>
    )
}

export default Error
