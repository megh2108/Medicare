import React, { useEffect, useState } from 'react'
import './Appointmentdetails.css'
import { toast } from 'react-toastify';


import { useAuth } from '../../../Store/auth';

// import { DataTable } from 'simple-datatables'; 

const Appointmentdetails = () => {

    const { token } = useAuth();

    const [appointments, setAppointments] = useState([]);

    console.log(token)


    useEffect(() => {
        const getAllAppointmentData = async () => {
            try {
                const response = await fetch("http://localhost:6500/api/admin/appointmentDetails", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch appointments');
                }

                const responseData = await response.json();
                console.log("responseData:", responseData); // Check the structure of responseData
                const formattedAppointments = responseData.map(appointment => ({
                    ...appointment,
                    date: new Date(appointment.date).toISOString().split('T')[0]
                }));
                setAppointments(formattedAppointments);
            } catch (error) {
                console.error(error);
                // Handle error, show error message to user
                toast.error('Failed to fetch appointments');
            }
        };

        getAllAppointmentData();
    }, [token]);

    return (
        <>


            <main id="main" class="main">
                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title title ">Appointment Details</h5>

                                    <div class="table-responsive mt-5">
                                        <table class="table table-bordered table-info table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Sr. No.</th>
                                                    <th>Patient name</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                    <th>Appointment Date</th>
                                                    <th>Appointment Time</th>
                                                    <th>Message</th>
                                                    <th>Details</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-group-divider">

                                                {appointments.map((curAppointment, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{curAppointment.firstName}</td>
                                                        <td>{curAppointment.age}</td>
                                                        <td>{curAppointment.gender}</td>
                                                        <td>{curAppointment.date}</td>
                                                        <td>
                                                            {curAppointment.time.startTime} - {curAppointment.time.endTime}
                                                        </td>
                                                        <td>{curAppointment.message}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-secondary "
                                                                type="button"
                                                                data-fancybox
                                                                data-src={`#details-${curAppointment._id}`}
                                                            >
                                                                View
                                                            </button>
                                                        </td>

                                                    </tr>
                                                ))}


                                            </tbody>
                                        </table>


                                        {appointments.map((appointment) => (
                                            <div
                                            class="fancy-box"
                                                id={`details-${appointment._id}`}
                                                key={appointment._id}
                                                style={{ display: "none" }}
                                            >
                                                <div clasName="container">
                                                    <div class="card">
                                                        <div class="card-body pt-3">
                                                            <h5 class="card-title">Patients Details</h5>

                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4 label ">First Name</div>
                                                                <div class="col-lg-8 col-md-8">{appointment.firstName}</div>
                                                            </div>


                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4 label ">Last Name</div>
                                                                <div class="col-lg-8 col-md-8">{appointment.lastName}</div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4 label ">Email</div>
                                                                <div class="col-lg-8 col-md-8">{appointment.email}</div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4 label ">Mobile No.</div>
                                                                <div class="col-lg-8 col-md-8">{appointment.mobileNumber}</div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4 label ">City</div>
                                                                <div class="col-lg-8 col-md-8">{appointment.city}</div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Appointmentdetails
