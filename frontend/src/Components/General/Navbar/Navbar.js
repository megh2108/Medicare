import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


import { useAuth } from '../../../Store/auth';


const select = (el, all = false) => {
  el = el.trim();

  if (el.startsWith('/')) {
    el = el.substring(1);
  }

  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const scrollto = (hash) => {
  let header = select('#header');
  let offset = header.offsetHeight;

  let cleanedHash = hash.replace('/', '');
  let element = select(cleanedHash);

  if (element) {
    let elementPos = element.offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth',
    });
  }
};


const Navbar = () => {

  //for checking import from contextAPI loggedin or nor and toogling navbar 
  const { isLoggedIn, formData } = useAuth();

  console.log("login or not ", isLoggedIn);
// console.log(id);

  useEffect(() => {


    const handleClick = (e) => {
      const clickedElement = e.target;
      const navbar = select('#navbar');

      if (clickedElement.matches('.mobile-nav-toggle')) {
        navbar.classList.toggle('navbar-mobile');
        clickedElement.classList.toggle('bi-list');
        clickedElement.classList.toggle('bi-x');
      }

      if (clickedElement.matches('.navbar .abc')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }

      if (clickedElement.matches('.navbar .dropdown > .abc')) {
        const navbar = select('#navbar');

        if (navbar.classList.contains('navbar-mobile')) {
          e.preventDefault();
          clickedElement.nextElementSibling.classList.toggle('dropdown-active');
        }
      }

      if (clickedElement.matches('.scrollto')) {
        const targetHash = clickedElement.getAttribute('to');

        if (targetHash && select(targetHash)) {
          e.preventDefault();

          let navbar = select('#navbar');

          if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');
            let navbarToggle = select('.mobile-nav-toggle');
            navbarToggle.classList.toggle('bi-list');
            navbarToggle.classList.toggle('bi-x');
          }

          scrollto(targetHash);
        }
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };



  }, []);

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><NavLink to="/">HealthEase</NavLink></h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><NavLink className="nav-link scrollto abc" to="/Home">Home</NavLink></li>
              <li><NavLink className="nav-link scrollto abc" to="/About">About</NavLink></li>
              <li><NavLink className="nav-link scrollto abc" to="/FAQ">FAQ's</NavLink></li>
              <li><NavLink className="nav-link scrollto abc" to="/Medicine">Medicine</NavLink></li>
              <li><NavLink className="nav-link scrollto abc" to="/Doctor_Page">Doctors</NavLink></li>
              <li><NavLink className="nav-link scrollto abc" to="/Contact">Contact</NavLink></li>


              {isLoggedIn ? (

                <>
                  {/* <li><NavLink className="nav-link scrollto abc" to="/Yourprofile">Your Profile</NavLink></li> */}
                  {/* <li><NavLink className="nav-link scrollto" to="/Logout">Logout</NavLink></li> */}
                  <li className="nav-item dropdown pe-3">

                    <NavLink className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown" >
                      <img src={formData.imageUrl || 'assets/img/profile-img.jpg'} alt="Profile" className="rounded-circle" />
                      {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
                      {/* <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span> */}
                    </NavLink>

                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                      <li className="dropdown-header header-prof">
                        <h6>{formData.name}</h6>
                        {/* <h6>Kevin Anderson</h6> */}
                        {/* <span>Web Designer</span> */}
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <NavLink className="dropdown-item nav-link scrollto abc" to="/Yourprofile">
                          {/* <i className="bi bi-person"></i> */}
                          <span>My Profile</span>
                        </NavLink>
                      </li>
                      {/* <hr className="dropdown-divider" />

                      <li>
                        <NavLink className="dropdown-item nav-link scrollto abc" to="/Yourappointment">
                          <span>Yourappointment</span>
                        </NavLink>
                      </li> */}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <NavLink className="dropdown-item nav-link scrollto abc" to="/Changepassword">
                          {/* <i className="bi bi-gear"></i> */}
                          <span>Change Password</span>
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <NavLink className="dropdown-item nav-link scrollto abc" to="/Logout">
                          {/* <i className="bi bi-question-circle"></i> */}
                          <span>Logout</span>
                        </NavLink>
                      </li>




                    </ul>
                  </li>

                </>
              ) : (
                <li><NavLink className="nav-link scrollto abc" to="/Signup_Login">Signup/Login</NavLink></li>
              )}

              <li><NavLink className="getstarted scrollto" to="/Appointment">Book Appointment</NavLink></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>

    </>
  )
}

export default Navbar
