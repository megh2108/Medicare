import React, { useEffect, useState } from 'react'
import './Appointmentdetails.css'
import { toast } from 'react-toastify';


import { useAuth } from '../../../Store/auth';

// import { DataTable } from 'simple-datatables'; 

const Appointmentdetails = () => {

    const { token } = useAuth();

    const [appointments, setAppointments] = useState([]);

    const getAllAppointmentData = async () => {
        try {

            const response = await fetch("http://localhost:6500/api/admin/medicineDetails", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const responseData = await response.json();
            console.log(`users : ${responseData}`);
            setAppointments(responseData);




        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllAppointmentData();
    }, [])



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
                                                    <th>Appointment No.</th>
                                                    <th>Patient name</th>
                                                    <th>City</th>
                                                    <th>Appointment Date</th>
                                                    <th>Appointment Time</th>
                                                    <th>Details</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-group-divider">

                                                {appointments.map((curAppointment, index) => {

                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>Appointment - {index + 1}</td>
                                                            <td>{curAppointment.firstName}</td>
                                                            <td>{curAppointment.city}</td>
                                                            <td>{curAppointment.date}</td>
                                                            <td>
                                                                {/* pending for date */}
                                                            </td>
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
                                                    );
                                                })}


                                            </tbody>
                                        </table>


                                        {appointments.map((appointment) => (
                                            <div
                                                id={`details-${appointment._id}`}
                                                key={appointment._id}
                                                style={{ display: "none" }}
                                            >
                                                <div clasName="container">
                                                    <div clasName="row">
                                                        <table className="table table-bordered table-info table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Email</th>
                                                                    <th scope="col">Current Balance</th>
                                                                </tr>
                                                            </thead>

                                                        </table>

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
