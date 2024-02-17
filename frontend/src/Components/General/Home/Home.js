import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">

                <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
                    <h1>Empowering Your Health Journey</h1>
                    <h2>Explore seamless healthcare with Medicare </h2>
                    <NavLink to="/Appointment" className="btn-get-started scrollto">Book Appointment</NavLink>
                    <img src="assets/img/hero-img.png" className="img-fluid hero-img" alt="" data-aos="zoom-in" data-aos-delay="150" />
                </div>

            </section>

        </>
    )
}

export default Home
