import React from 'react'
import './Specialist.css'
import { NavLink } from 'react-router-dom';



const Specialist = () => {
    return (
        <>
            <section id="features" className="features" data-aos="fade-up">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Top-Searched Specialties</h2>
                    </div>

                    <div className="row" data-aos="fade-left">
                        <div className="col-lg-2 col-md-4" data-fancybox data-src="#Primary_Care">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <div>
                                    <img src="assets/img/Specialist/primarycare.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Primary Care</NavLink></h3>
                                </div>

                            </div>
                        </div>

                        <div id="Primary_Care" style={{"display":" none"}}>
                            <section id="about">
                                <div class="container" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                            {/* <img src="/ConveyorBelt_Website_include/img/card/chemical_industry.jpg" class="img-fluid" alt=""> */}
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                            <h3>Primary Care</h3><br/>                                               
                                                <p>
                                                    The chemical industry is one of the world’s most important economic sectors and its products have
                                                    directly or indirectly found their way into all areas of daily life. In the chemical industry, our
                                                    products, especially chain conveyors are used to transport fertilizer, detergent powders, and plastic
                                                    pellets or powders. These industries demand making of conveyor technologies keeping in mind some
                                                    factors
                                                    like corrosion, wear & tear, thermal stress, explosion protection and most importantly bulk material
                                                    transport method. Their special requirements are our challenge – no matter whether chains, sprockets
                                                    and/or conveyor components are involved, and we are keen to deliver them.
                                                </p>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>

                        <div className="col-lg-2 col-md-4 mt-4 mt-md-0" data-fancybox data-src="#Dentist">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div>
                                    <img src="assets/img/Specialist/dentist.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Dentist</NavLink></h3>
                                </div>
                            </div>
                        </div>

                        <div id="Dentist" style={{"display":" none"}}>
                            <section id="about">
                                <div class="container" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                            {/* <img src="/ConveyorBelt_Website_include/img/card/chemical_industry.jpg" class="img-fluid" alt=""> */}
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                            <h3>Dentist</h3><br/>                                               
                                                <p>
                                                    The chemical industry is one of the world’s most important economic sectors and its products have
                                                    directly or indirectly found their way into all areas of daily life. In the chemical industry, our
                                                    products, especially chain conveyors are used to transport fertilizer, detergent powders, and plastic
                                                    pellets or powders. These industries demand making of conveyor technologies keeping in mind some
                                                    factors
                                                    like corrosion, wear & tear, thermal stress, explosion protection and most importantly bulk material
                                                    transport method. Their special requirements are our challenge – no matter whether chains, sprockets
                                                    and/or conveyor components are involved, and we are keen to deliver them.
                                                </p>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-md-0" data-fancybox data-src="#Eye_Doctor">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
                                <div>
                                    <img src="assets/img/Specialist/eyes.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Eye Doctor</NavLink></h3>
                                </div>
                            </div>
                        </div>

                        <div id="Eye_Doctor" style={{"display":" none"}}>
                            <section id="about">
                                <div class="container" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                            {/* <img src="/ConveyorBelt_Website_include/img/card/chemical_industry.jpg" class="img-fluid" alt=""> */}
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                            <h3>Eye Doctor</h3><br/>                                               
                                                <p>
                                                    The chemical industry is one of the world’s most important economic sectors and its products have
                                                    directly or indirectly found their way into all areas of daily life. In the chemical industry, our
                                                    products, especially chain conveyors are used to transport fertilizer, detergent powders, and plastic
                                                    pellets or powders. These industries demand making of conveyor technologies keeping in mind some
                                                    factors
                                                    like corrosion, wear & tear, thermal stress, explosion protection and most importantly bulk material
                                                    transport method. Their special requirements are our challenge – no matter whether chains, sprockets
                                                    and/or conveyor components are involved, and we are keen to deliver them.
                                                </p>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-lg-0" data-fancybox data-src="#Physiotherapists">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div>
                                    <img src="assets/img/Specialist/physio.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Physiotherapists</NavLink></h3>
                                </div>
                            </div>
                        </div>

                        <div id="Physiotherapists" style={{"display":" none"}}>
                            <section id="about">
                                <div class="container" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                            {/* <img src="/ConveyorBelt_Website_include/img/card/chemical_industry.jpg" class="img-fluid" alt=""> */}
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                            <h3>Physiotherapists</h3><br/>                                               
                                                <p>
                                                    The chemical industry is one of the world’s most important economic sectors and its products have
                                                    directly or indirectly found their way into all areas of daily life. In the chemical industry, our
                                                    products, especially chain conveyors are used to transport fertilizer, detergent powders, and plastic
                                                    pellets or powders. These industries demand making of conveyor technologies keeping in mind some
                                                    factors
                                                    like corrosion, wear & tear, thermal stress, explosion protection and most importantly bulk material
                                                    transport method. Their special requirements are our challenge – no matter whether chains, sprockets
                                                    and/or conveyor components are involved, and we are keen to deliver them.
                                                </p>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-lg-0" data-fancybox data-src="#Orthopedic">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div>
                                    <img src="assets/img/Specialist/ortho.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Orthopedic</NavLink></h3>
                                </div>
                            </div>
                        </div>

                        <div id="Orthopedic" style={{"display":" none"}}>
                            <section id="about">
                                <div class="container" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                            {/* <img src="/ConveyorBelt_Website_include/img/card/chemical_industry.jpg" class="img-fluid" alt=""> */}
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                            <h3>Orthopedic</h3><br/>                                               
                                                <p>
                                                    The chemical industry is one of the world’s most important economic sectors and its products have
                                                    directly or indirectly found their way into all areas of daily life. In the chemical industry, our
                                                    products, especially chain conveyors are used to transport fertilizer, detergent powders, and plastic
                                                    pellets or powders. These industries demand making of conveyor technologies keeping in mind some
                                                    factors
                                                    like corrosion, wear & tear, thermal stress, explosion protection and most importantly bulk material
                                                    transport method. Their special requirements are our challenge – no matter whether chains, sprockets
                                                    and/or conveyor components are involved, and we are keen to deliver them.
                                                </p>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-lg-0" data-fancybox data-src="#Cardiologist">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div>
                                    <img src="assets/img/Specialist/cardio.png" />
                                </div>
                                <div>
                                    <h3><NavLink to="">Cardiologist</NavLink></h3>
                                </div>
                            </div>
                        </div>

                        <div id="Cardiologist" style={{"display":" none"}}>
                            <section id="about">
                                <div class="container" data-aos="fade-up">
                                    <div class="row">
                                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                            {/* <img src="/ConveyorBelt_Website_include/img/card/chemical_industry.jpg" class="img-fluid" alt=""> */}
                                        </div>
                                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                            <h3>Cardiologist</h3><br/>                                               
                                                <p>
                                                    The chemical industry is one of the world’s most important economic sectors and its products have
                                                    directly or indirectly found their way into all areas of daily life. In the chemical industry, our
                                                    products, especially chain conveyors are used to transport fertilizer, detergent powders, and plastic
                                                    pellets or powders. These industries demand making of conveyor technologies keeping in mind some
                                                    factors
                                                    like corrosion, wear & tear, thermal stress, explosion protection and most importantly bulk material
                                                    transport method. Their special requirements are our challenge – no matter whether chains, sprockets
                                                    and/or conveyor components are involved, and we are keen to deliver them.
                                                </p>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Specialist
