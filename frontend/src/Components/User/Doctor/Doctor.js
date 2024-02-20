import React from 'react'
import './Doctor.css'
import { NavLink } from 'react-router-dom';

const Doctor = () => {
  return (
    <>
      <section className="section profile"  data-aos="fade-up">

        <div className="section-title">
          <h2>Our Doctors</h2>
        </div>

        <div className="container"  data-aos="zoom-in">
          <div className="row">
            <div className="col-md-4">
              <NavLink to="/Docorprofile">
                <div className="card">
                  <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <h2>Dr. Amit Patel</h2>
                    <h3>Orthopedic Surgen</h3>
                    <div className="social-links mt-2">
                      <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
                      <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
                      <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
                      <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                  <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                  <h2>Dr. Yogendra Bhatt</h2>
                  <h3>Neurologist</h3>
                  <div className="social-links mt-2">
                    <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
                    <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
                    <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
                    <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                  <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                  <h2>Dr. Nilay Shah</h2>
                  <h3>ENT Surgen</h3>
                  <div className="social-links mt-2">
                    <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
                    <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
                    <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
                    <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <NavLink to="#" class="btn btn-primary">View More<i class="bx bx-chevron-right"></i></NavLink>

        </div>
      </section>
    </>
  )
}

export default Doctor
