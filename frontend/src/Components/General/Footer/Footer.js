import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Medicare</h3>
                                <p>
                                    A - 123, Modi Palace <br />
                                    Red Fort Road<br />
                                    Delhi <br /><br />
                                    <strong>Phone : </strong> +91 98765 43210<br />
                                    <strong>Email : </strong> info@medicare.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/Home">Home</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/About">About us</NavLink></li>
                                    {/* <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Services</NavLink></li> */}
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/Contact">Contact</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/FAQ">FAQ's</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/Appointment">Doctor Appointment Booking</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Medicine Search and Ordering</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Telemedicine Consultations</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="#">Health Information and Chatbot Assistance</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bootom  py-3">

                    <div className="copyright ">
                        &copy; Copyright <strong><span>Medicare</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits pt-1">

                        Designed by <NavLink to="https://megh-portfolio.vercel.app/" target="_blank">Megh Shah</NavLink>
                    </div>

                    <div className="social-links pt-3">

                        <NavLink to="https://twitter.com/Meghshah04?t=CllsgckkLRBABKkRx4ljFw&s=08" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></NavLink>
                        <NavLink to="https://www.facebook.com/megh.shah.338?mibextid=ZbWKwL" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></NavLink>
                        <NavLink to="https://instagram.com/megh___04?igshid=OTk0YzhjMDVlZA==" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></NavLink>
                        <NavLink to="https://www.linkedin.com/in/megh-shah-a19813205" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></NavLink>
                        <NavLink to="https://github.com/megh2108" target="_blank" className="github"><i className="bx bxl-github"></i></NavLink>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
