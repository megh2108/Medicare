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
import About from './Components/General/About/About';
import Contact from './Components/General/Contact/Contact';
import Specialist from './Components/General/Specialist/Specialist';
import Faq from './Components/General/FAQ/Faq';
// import Login from './Components/General/Login/Login';
import Register from './Components/General/Register/Register';
import Logout from './Components/General/Logout/Logout';
import ScrollToTop from './Components/General/Scroll/ScrollToTop';
import Error from './Components/General/Error/Error';

// user
import Doctor_Home from './Components/User/Doctor_Home/Doctor_Home';
import Doctor_Page from './Components/User/Doctor_Page/Doctor_Page';
import Doctorprofile from './Components/User/Doctorprofile/Doctorprofile';
import Appointment from './Components/User/Appointment/Appointment';
import Medicine from './Components/User/Medicine/Medicine';

//admin
import Sidebar from './Components/Admin/Sidebar/Sidebar';
import Userdetail from './Components/Admin/Userdetails/Userdetail';
import Dashboard from './Components/Admin/Dashboard/Dashboard';

const App = () => {

  // useEffect(() => {
  //   const loadScript = () => {
  //     const script = document.createElement("script");
  //     script.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //     script.async = true;

  //     script.onerror = () => {
  //       console.error("Error loading Kommunicate script.");
  //     };

  //     document.body.appendChild(script);

  //     return () => {
  //       // Cleanup function to remove the script when component unmounts
  //       document.body.removeChild(script);
  //     };
  //   };

  //   loadScript();
  // }, []);

  // useEffect(() => {
  //   const loadKommunicateScript = () => {
  //     const kommunicateSettings = {
  //       appId: "2f12877b0317a94aed3a1627ed99c2729",
  //       popupWidget: true,
  //       automaticChatOpenOnNavigation: true
  //     };

  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.async = true;
  //     script.src = "https://widget.kommunicate.io/v2/kommunicate.app";

  //     document.head.appendChild(script);
  //     window.kommunicate = window.kommunicate || {};
  //     window.kommunicate._globals = kommunicateSettings;
  //   };

  //   loadKommunicateScript();
  // }, []);

  return (
    <>

      <ScrollToTop />
      <Navbar />

      <Routes>

        {/* general route */}
        <Route path="/Home" excact element={[<Home />, <Specialist />, <Doctor_Home />, <Faq />]} />
        <Route path="/Contact" excact element={<Contact />} />
        <Route path="/About" excact element={<About />} />
        <Route path="/FAQ" excact element={<Faq />} />
        <Route path="/Medicine" excact element={<Medicine/>} />
        {/* <Route path="/Login" excact element={<Login />} /> */}
        <Route path="/Logout" excact element={<Logout />} />
        <Route path="/Signup_Login" excact element={<Register />} />
        <Route path="/" excact element={<Home />} />
        <Route path="*" excact element={<Error />} />


        {/* user route */}
        <Route path="/Docorprofile" excact element={<Doctorprofile />} />
        <Route path="/Appointment" excact element={<Appointment />} />
        <Route path="/Doctor_Page" excact element={<Doctor_Page />} />


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
