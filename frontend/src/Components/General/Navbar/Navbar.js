import React, { useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

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
  const { isLoggedIn } = useAuth();
  console.log("login or not ", isLoggedIn);



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

          <h1 className="logo"><NavLink to="/">Medicare</NavLink></h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><NavLink className="nav-link scrollto abc" to="/Home">Home</NavLink></li>
              <li><NavLink className="nav-link scrollto abc" to="/About">About</NavLink></li>
              <li><NavLink className="nav-link scrollto abc" to="/FAQ">FAQ's</NavLink></li>
              <li><NavLink className="nav-link scrollto abc" to="/Contact">Contact</NavLink></li>

              {isLoggedIn ? (
                <li><NavLink className="nav-link scrollto" to="/Logout">Logout</NavLink></li>
                ) : (
                  <li><NavLink className="nav-link scrollto abc" to="/Signup_Login">Signup/Login</NavLink></li>
                )}
              {/* <li><NavLink className="nav-link scrollto abc" to="/Signup_Login">Signup/Login</NavLink></li> */}
              {/* <li><NavLink className="nav-link scrollto" to="/Logout">Logout</NavLink></li> */}

              {/* <li className="dropdown"><NavLink to="#"><span>Login / Signup</span> <i className="bi bi-chevron-down"></i></NavLink>
                                <ul>
                                    <li><NavLink to="/Login">Login</NavLink></li>
                                    <li><NavLink to="/Signup">Signup</NavLink></li>
                                   
                                </ul>
                            </li> */}
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
