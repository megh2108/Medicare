import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../../Store/auth';

const Yourappointment = () => {
    const { token, id } = useAuth();
    const [futureAppointments, setFutureAppointments] = useState([]);

    useEffect(() => {
        // Function to fetch future appointments
        const fetchFutureAppointments = async () => {
            try {
                const response = await fetch(`http://localhost:6500/api/admin/getFutureAppointmentsForOneUser/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Assuming you store token in local storage
                    }
                });
                const data = await response.json();
                setFutureAppointments(data);
            } catch (error) {
                console.error('Error fetching future appointments:', error);
            }
        };

        fetchFutureAppointments();
    }, [id]); // Fetch appointments when user id changes

    return (
        <div>
            <h2>Future Appointments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Time</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(futureAppointments) && futureAppointments.map(appointment => (
                        <tr key={appointment._id}>
                            <td>{appointment.date}</td>
                            <td>{appointment.doctor.name}</td>
                            <td>{appointment.time.startTime} - {appointment.time.endTime}</td>
                            <td>{appointment.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Yourappointment