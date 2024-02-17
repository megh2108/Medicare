import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import axios from "axios";

// Components
// general
import Home from './Components/General/Home/Home';
import Navbar from './Components/General/Navbar/Navbar';
import Footer from './Components/General/Footer/Footer';
import Contact from './Components/General/Contact/Contact';
import Specialist from './Components/General/Specialist/Specialist';
import Faq from './Components/General/FAQ/Faq';
// import Login from './Components/General/Login/Login';
import Register from './Components/General/Register/Register';
import Logout from './Components/General/Logout/Logout';
import ScrollToTop from './Components/General/Scroll/ScrollToTop';
import Error from './Components/General/Error/Error';

// user
import Doctor from './Components/User/Doctor/Doctor';
import Doctorprofile from './Components/User/Doctorprofile/Doctorprofile';
import Appointment from './Components/User/Appointment/Appointment';

//admin
import Sidebar from './Components/Admin/Sidebar/Sidebar';
import Userdetail from './Components/Admin/Userdetails/Userdetail';
import Dashboard from './Components/Admin/Dashboard/Dashboard';

const App = () => {


  return (
    <>

      <ScrollToTop />
      <Navbar />

      <Routes>

        {/* general route */}
        <Route path="/Home" excact element={[<Home />, <Specialist />, <Doctor />, <Faq />]} />
        <Route path="/Contact" excact element={<Contact />} />
        <Route path="/FAQ" excact element={<Faq />} />
        {/* <Route path="/Login" excact element={<Login />} /> */}
        <Route path="/Logout" excact element={<Logout />} />
        <Route path="/Signup_Login" excact element={<Register />} />
        <Route path="/" excact element={<Home />} />
        <Route path="*" excact element={<Error />} />


        {/* user route */}
        <Route path="/Docorprofile" excact element={<Doctorprofile />} />
        <Route path="/Appointment" excact element={<Appointment />} />


        <Route path="/Admin" excact element={<Sidebar /> } >

          <Route path="Dashboard" excact element={<Dashboard />} />
          <Route path="Userdetails" excact element={<Userdetail />} />
        </Route>


      </Routes>

      <Footer />


    </>
  );
}

export default App;
