import React, { useState, useEffect } from 'react'
import "./Doctorprofile.css"
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useAuth } from '../../../Store/auth';


const Doctorprofile = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [doctor, setDoctor] = useState([]);


    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        age: '',
        email: '',
        mobileNumber: '',
        city: '',
        gender: '',
        date: '',
        doctor: doctor._id,
        time: { startTime: '', endTime: '' },
        message: ''
    });

    console.log("Doctor:", doctor);
    console.log("Doctorid:", doctor._id);
    console.log("Form Data:", formData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleTimeSelection = (event) => {
        const selectedTime = event.target.value;
        const timeSlot = doctor.availableTime.find(slot => slot._id === selectedTime); // Change availableTimeSlots to availableTime
        console.log("Timeslott", timeSlot);

        setFormData({
            ...formData,
            doctor: doctor._id,
            time: timeSlot // Update the time in formData with the selected time slot
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:6500/api/auth/registerappointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (response.status === 201) {
                toast.success(responseData.message);
                navigate("/Home");
            }
            else if (response.status === 401) {
                toast.error("Login in your account.");
                navigate("/Signup_Login");


            } else if (response.status === 402) {
                toast.error("Doctor is not available at the specified date and time");

            } else {
                toast.error("Failed to create appointment");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to create appointment");
        }
    };

    //fetching particular doctor
    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await fetch(`http://localhost:6500/api/admin/getOneUser/${id}`, {
                    method: "GET",
                });

                const responseData = await response.json();
                console.log(responseData);
                if (response.status === 404) {
                    toast.error(responseData.msg);
                }
                else if (response.status === 200) {
                    setDoctor(responseData);

                } else {
                    toast.error("Internal Server Error");
                }
            } catch (error) {
                toast.error("Failed to fetch. Check console for details.");
                console.error("Error:", error);
            }
        };

        if (id) {
            fetchDoctor();

        }
    }, [id]);
    return (
        <>
            <section class="section profile doctor-profile" data-aos="zoom-in">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">

                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                    <img src={doctor.imageUrl || 'assets/img/profile-img.jpg'} alt="Profile" className="rounded-circle" />
                                    {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
                                    <h2>{doctor.name}</h2>
                                    {/* <h2>Dr. Amit Patel</h2> */}
                                    <h3>{doctor.special}</h3>
                                    {/* <h3>Orthopedic Surgen</h3> */}
                                    <div className="social-links mt-2">
                                        <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
                                        <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
                                        <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
                                        <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-xl-8">

                            <div class="card">
                                <div class="card-body pt-3">
                                    {/* <!-- Bordered Tabs --> */}
                                    <ul class="nav nav-tabs nav-tabs-bordered">

                                        <li class="nav-item">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>

                                        {/* <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#rating">Ratings</button>
                                        </li> */}

                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#appointment">Appointment</button>
                                        </li>



                                    </ul>
                                    <div class="tab-content pt-2">

                                        <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                            <h5 class="card-title">About</h5>
                                            <p class="small fst-italic">{doctor.about}</p>
                                            {/* <p class="small fst-italic">Dr. Amit Patel is a highly skilled and compassionate physician specializing in Internal Medicine. With a wealth of knowledge and over 10 years of clinical experience, Dr. Patel is dedicated to providing comprehensive and personalized healthcare to his patients. His commitment to staying abreast of the latest medical advancements ensures that individuals under his care receive the highest standard of treatment.      </p> */}

                                            <h5 class="card-title">Basic Details</h5>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Full Name</div>
                                                <div class="col-lg-9 col-md-8">{doctor.name}</div>
                                                {/* <div class="col-lg-9 col-md-8">Dr. Amit Patel</div> */}
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Email</div>
                                                <div class="col-lg-9 col-md-8">{doctor.email}</div>
                                                {/* <div class="col-lg-9 col-md-8">amitpatel@gmail.com</div> */}
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Contact No</div>
                                                <div class="col-lg-9 col-md-8">+91 {doctor.phone}</div>
                                                {/* <div class="col-lg-9 col-md-8">+91 98765 43210</div> */}
                                            </div>


                                            <h5 class="card-title">Professional Details</h5>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Medical License Number</div>
                                                <div class="col-lg-9 col-md-8">{doctor.licenceno}</div>
                                                {/* <div class="col-lg-9 col-md-8">M123456789</div> */}
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Specialization</div>
                                                <div class="col-lg-9 col-md-8">{doctor.special}</div>
                                                {/* <div class="col-lg-9 col-md-8">Othopedic</div> */}
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Qualifications</div>
                                                <div class="col-lg-9 col-md-8">{doctor.qualification}</div>
                                                {/* <div class="col-lg-9 col-md-8">Doctor of Medicine (MD), University of Medical Sciences, 2005</div> */}
                                                {/* <div class="col-lg-3 col-md-4 label"></div> */}
                                                {/* <div class="col-lg-9 col-md-8">Board Certified in Cardiology</div> */}
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Years of Experience</div>
                                                <div class="col-lg-9 col-md-8">{doctor.experience}</div>
                                                {/* <div class="col-lg-9 col-md-8">15 years</div> */}
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Hospital Affiliation</div>
                                                <div class="col-lg-9 col-md-8">{doctor.hospitalAffiliaion}</div>
                                                {/* <div class="col-lg-9 col-md-8">Iris Hospital, Anand</div> */}
                                            </div>

                                            <h5 className="card-title">Available Time</h5>
                                            <div className="row">
                                                {doctor.availableTime && doctor.availableTime.map((timeSlot, index) => (
                                                    <div key={index} className="col-md-3">
                                                        <p>{timeSlot.startTime} - {timeSlot.endTime}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* <div class="tab-pane fade profile-edit pt-3" id="rating">

                                            <form>
                                                <div class="row mb-3">
                                                    <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <img src="assets/img/profile-img.jpg" alt="Profile" />
                                                        <div class="pt-2">
                                                            <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                                                            <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                                </div>
                                            </form>

                                        </div> */}

                                        <div class="tab-pane fade pt-3" id="appointment">


                                            {/* <div class="card"> */}
                                            <div class="card-body">

                                                {/* <!-- Multi Columns Form --> */}
                                                <form class="row g-3 mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label">First Name</label>
                                                        <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Middle Name</label>
                                                        <input type="text" className="form-control" name="middleName" value={formData.middleName} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Last Name</label>
                                                        <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
                                                    </div>

                                                    <div className="col-md-2">
                                                        <label className="form-label">Age</label>
                                                        <input type="text" className="form-control" name="age" value={formData.age} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Email</label>
                                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="form-label">Mobile Number</label>
                                                        <input type="text" className="form-control" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="form-label">City</label>
                                                        <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
                                                    </div>

                                                    {/* <div class="col-md-4">
                                                        <label for="inputCity5" class="form-label">Gender</label>

                                                        <div class="row">
                                                            <div class="form-check col-lg-4">
                                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                                <label class="form-check-label" for="gridRadios1">
                                                                    Male
                                                                </label>
                                                            </div>
                                                            <div class="form-check col-lg-4">
                                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                                                <label class="form-check-label" for="gridRadios2">
                                                                    Female
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputCity5" class="form-label">Date</label>
                                                        <input type="date" class="form-control" />
                                                    </div> */}
                                                    <div className="col-md-4">
                                                        <label className="form-label">Gender</label>
                                                        <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
                                                            <option value="">Select Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Date</label>
                                                        <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
                                                    </div>


                                                    {/* <div className="col-md-4">
                                                        <label htmlFor="inputCity5" className="form-label">Time</label>
                                                        <select className="form-select" aria-label="Default select example" value={`${formData.time.startTime}-${formData.time.endTime}`} onChange={handleTimeSelection}>
                                                            {doctor.availableTimeSlots.map((timeSlot, index) => (
                                                                <option key={index} value={timeSlot._id}>
                                                                    {`${timeSlot.startTime} - ${timeSlot.endTime}`}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div> */}


                                                    {doctor && doctor.availableTime && (

                                                        <div className="col-md-4">
                                                            <label htmlFor="inputCity5" className="form-label">Time</label>
                                                            <select className="form-select" aria-label="Default select example" value={`${formData.time.startTime}-${formData.time.endTime}`} onChange={handleTimeSelection}>
                                                                <option value="">Select Time</option>
                                                                {doctor.availableTime.map((timeSlot, index) => (
                                                                    <option key={index} value={timeSlot._id}>
                                                                        {`${timeSlot.startTime} - ${timeSlot.endTime}`}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    )}
                                                    <div className="col-md-12">
                                                        <label className="col-sm-2 col-md-6 col-form-label">Message for Appointment</label>
                                                        <div className="col-sm-10 col-md-12">
                                                            <textarea className="form-control" style={{ "height": "100px" }} name="message" value={formData.message} onChange={handleChange}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="button" className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
                                                    </div>
                                                </form>
                                                {/* <!-- End Multi Columns Form --> */}



                                                {/* </div> */}
                                            </div>
                                        </div>


                                    </div>
                                    {/* <!-- End Bordered Tabs --> */}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Doctorprofile
