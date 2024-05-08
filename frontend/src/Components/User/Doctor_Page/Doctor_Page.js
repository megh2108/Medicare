import React, { useState, useEffect } from 'react';
import './Doctor_Page.css';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../../Store/auth';


const Doctor_Page = () => {

    const { doctors, setDoctors } = useAuth();

    // const [doctors, setDoctors] = useState([]);

    const getDoctorData = async () => {
        try {
            const response = await fetch("http://localhost:6500/api/admin/getDoctor", {
                method: "GET",
            });
            const responseData = await response.json();
            setDoctors(responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDoctorData();
    }, []);

    return (
        <>
            <section id="doctor-page">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Our Doctors</h2>
                    </div>

                    <div className="container" data-aos="zoom-in">
                        <div className="row">
                      
                            {doctors.map(doctor => (
                                <div key={doctor._id} className="col-md-4">
                                    <NavLink to={`/Doctorprofile/${doctor._id}`}>
                                        <div className="card card-doctor">
                                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                                {/* Assuming profile-img.jpg is located at public/assets/img */}
                                                <img src={doctor.imageUrl || 'assets/img/profile-img.jpg'}  alt="Profile" className="rounded-circle" />
                                                {/* <img src="assets/img/profile-img.jpg"  alt="Profile" className="rounded-circle" /> */}
                                                <h2>{doctor.name}</h2>
                                                <h3>{doctor.special}</h3>
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
                            ))} 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Doctor_Page;



// import React, { useState, useEffect } from 'react'
// import './Doctor_Page.css'
// import { NavLink } from 'react-router-dom';


// const Doctor_Page = () => {

//     const [doctors, setDoctors] = useState([]);
//     // const [searchKeyword, setSearchKeyword] = useState('');
  
//     const getDoctorData = async () => {
//       try {
//         const response = await fetch("http://localhost:6500/api/admin/getDoctor", {
//           method: "GET",
//         });
//         const responseData = await response.json();
//         setDoctors(responseData);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     useEffect(() => {
//         getDoctorData();
//     }, []);
//     return (
//         <>
//             <section id="doctor-page">
//                 <div className="container" data-aos="fade-up">

//                     <div className="section-title">
//                         <h2>Our Doctors</h2>
//                     </div>

//                     <div className="container" data-aos="zoom-in">
//                         <div className="row">
//                             <div className="col-md-4">
//                                 <NavLink to="/Docorprofile">
//                                     <div className="card card-doctor">
//                                         <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

//                                             <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
//                                             <h2>Dr. Amit Patel</h2>
//                                             <h3>Orthopedic Surgen</h3>
//                                             <div className="social-links mt-2">
//                                                 <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
//                                                 <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
//                                                 <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
//                                                 <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </NavLink>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//         </>
//     )
// }

// export default Doctor_Page  