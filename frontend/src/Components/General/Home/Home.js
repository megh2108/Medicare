import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">

                <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
                    <h1>Simplify Your HealthCare Journey.</h1>
                    <h2>Explore seamless healthcare with HealthEase </h2>
                    <NavLink to="/Appointment" className="btn-get-started scrollto">Book Appointment</NavLink>
                    {/* <div class="search-bar">
                        <form class="search-form d-flex align-items-center">
                            <input type="text" name="query" placeholder="Serarch Medicine based on Sympton" title="Enter search keyword"/>
                                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
                        </form>
                    </div> */}
                    <img src="assets/img/hero-img.png" className="img-fluid hero-img" alt="" data-aos="zoom-in" data-aos-delay="150" />
                </div>

            </section>

        </>
    )
}

export default Home
