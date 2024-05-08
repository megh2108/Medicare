import React, { useState, useEffect } from 'react';
import './Appointment.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../../Store/auth';

const Appointment = () => {
    const navigate = useNavigate();
    const { doctors, id } = useAuth();
    console.log("appointment id", id);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    const [formData, setFormData] = useState({
        user: id,
        firstName: '',
        middleName: '',
        lastName: '',
        age: '',
        email: '',
        mobileNumber: '',
        city: '',
        gender: '',
        date: '',
        doctor: '',
        time: { startTime: '', endTime: '' },
        message: ''
    });

    console.log("doctor id", selectedDoctor);
    console.log("time ", formData.time);
    console.log("form data:", formData);

    // // Function to handle doctor selection
    // const handleDoctorSelection = (event) => {
    //     const selectedDoctorId = event.target.value;
    //     setSelectedDoctor(selectedDoctorId);

    //     // Find the selected doctor
    //     const doctor = doctors.find((doc) => doc._id === selectedDoctorId);

    //     // Update available time slots if the doctor is found
    //     if (doctor) {
    //         setAvailableTimeSlots(doctor.availableTime);
    //         setFormData({
    //             ...formData,
    //             doctor: selectedDoctorId,
    //             time: { startTime: '', endTime: '' }// Reset time in formData when doctor changes
    //         });
    //     } else {
    //         setAvailableTimeSlots([]); // Reset time slots if doctor not found
    //         setFormData({
    //             ...formData,
    //             doctor: '',
    //             time: { startTime: '', endTime: '' }
    //         });
    //     }
    // };

    const handleDoctorSelection = (event) => {
        const selectedDoctorId = event.target.value;
        setSelectedDoctor(selectedDoctorId);

        const doctor = doctors.find((doc) => doc._id === selectedDoctorId);

        // Update formData with selected doctor
        setFormData({
            ...formData,
            doctor: selectedDoctorId,
            time: { startTime: '', endTime: '' } // Reset time in formData when doctor changes
        });

        // Update available time slots
        if (doctor) {
            setAvailableTimeSlots(doctor.availableTime);
        } else {
            setAvailableTimeSlots([]);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleTimeSelection = (event) => {
        const selectedTime = event.target.value;
        const timeSlot = availableTimeSlots.find(slot => slot._id === selectedTime);

        setFormData({
            ...formData,
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

    return (
        <>
            <section id="contact" className="contact section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Appointment</h2>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <form className="row g-3 mt-3">
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
                                <div className="col-md-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Date</label>
                                    <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
                                </div>


                                <div className="col-md-3">
                                    <label htmlFor="inputCity5" className="form-label">Doctor</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        value={selectedDoctor}
                                        onChange={handleDoctorSelection}
                                    >
                                        <option value="">Select Doctor</option>
                                        {doctors.map((doctor) => (
                                            <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
                                        ))}
                                    </select>
                                </div>


                                <div className="col-md-3">
                                    <label htmlFor="inputCity5" className="form-label">Time</label>
                                    <select className="form-select" aria-label="Default select example" value={formData.time} onChange={handleTimeSelection}>
                                        <option value="">Select Time</option>
                                        {availableTimeSlots.map((timeSlot, index) => (
                                            <option key={index} value={timeSlot._id}>
                                                {`${timeSlot.startTime} - ${timeSlot.endTime}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Appointment;

