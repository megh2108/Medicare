import React from 'react'
import './Specialist.css'
import { NavLink } from 'react-router-dom';



const Specialist = () => {
    return (
        <>
            <section id="features" className="features">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Top-Searched Specialties</h2>
                    </div>

                    <div className="row" data-aos="fade-left">
                        <div className="col-lg-2 col-md-4">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <div>
                                    <img src="assets/img/Specialist/primarycare.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Primary Care</NavLink></h3>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div>
                                    <img src="assets/img/Specialist/dentist.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Dentist</NavLink></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
                                <div>
                                    <img src="assets/img/Specialist/eyes.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Eye Doctor</NavLink></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div>
                                    <img src="assets/img/Specialist/physio.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Physiotherapists</NavLink></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div>
                                    <img src="assets/img/Specialist/ortho.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Orthopedic</NavLink></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div>
                                    <img src="assets/img/Specialist/cardio.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Cardiologist</NavLink></h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Specialist
