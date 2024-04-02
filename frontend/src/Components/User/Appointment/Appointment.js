import React, { useState, useEffect } from 'react'
import './Appointment.css'
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../Store/auth';

const Appointment = () => {
  const navigate = useNavigate();
  const { doctors, setDoctors } = useAuth();

  //adding new concept
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  // Function to handle doctor selection
  const handleDoctorSelection = (event) => {
    const selectedDoctorId = event.target.value;
    setSelectedDoctor(selectedDoctorId);

    // Find the selected doctor
    const doctor = doctors.find((doc) => doc._id === selectedDoctorId);

    // Update available time slots if the doctor is found
    if (doctor) {
      setAvailableTimeSlots(doctor.availableTime);
    } else {
      setAvailableTimeSlots([]); // Reset time slots if doctor not found
    }
  };

  return (
    <>
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Appointment</h2>
          </div>

          <div class="card">


            <div class="card-body">

              {/* <!-- Multi Columns Form --> */}
              <form class="row g-3 mt-3">
                <div class="col-md-4">
                  <label for="inputName5" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="inputName5" />
                </div>
                <div class="col-md-4">
                  <label for="inputName5" class="form-label">Middle Name</label>
                  <input type="text" class="form-control" id="inputName5" />
                </div>
                <div class="col-md-4">
                  <label for="inputName5" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="inputName5" />
                </div>
                <div class="col-md-2">
                  <label for="inputName5" class="form-label">Age</label>
                  <input type="text" class="form-control" id="inputName5" />
                </div>
                <div class="col-md-3">
                  <label for="inputEmail5" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail5" />
                </div>
                <div class="col-md-3">
                  <label for="inputMobile5" class="form-label">Mobile Number</label>
                  <input type="text" class="form-control" id="inputMobile5" />
                </div>
                <div class="col-md-2">
                  <label for="inputCity5" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity5" />
                </div>
                <div class="col-md-3">
                  <label for="inputCity5" class="form-label">Gender</label>

                  <div class="Container">
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
                </div>
                <div class="col-md-3">
                  <label for="inputCity5" class="form-label">Date</label>
                  <input type="date" class="form-control" />
                </div>
                {/* <div class="col-md-3">
                  <label for="inputCity5" class="form-label">Doctor</label>
                  <select class="form-select" aria-label="Default select example">
                    <option value="1">Dr. Amit Patel</option>
                    <option value="2">Dr. Yogendra Bhatt</option>
                    <option value="3">Dr. Nilay Shah</option>
                  </select>
                </div> */}
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


                {/* <div class="col-md-3">
                  <label for="inputCity5" class="form-label">Time</label>
                  <select class="form-select" aria-label="Default select example">
                    <option value="1">10.30 AM - 11.00 AM</option>
                    <option value="2">11.00 AM - 11.30 AM</option>
                    <option value="3">05.00 PM - 5.30 PM</option>
                  </select>
                </div>
                 */}

                <div className="col-md-3">
                  <label htmlFor="inputCity5" className="form-label">Time</label>
                  <select className="form-select" aria-label="Default select example">
                    {availableTimeSlots.map((timeSlot, index) => (
                      <option key={index} value={timeSlot._id}>
                        {`${timeSlot.startTime} - ${timeSlot.endTime}`}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="col-md-12">
                  <label for="inputPassword" class="col-sm-2 col-md-6 col-form-label">Message for Appointment</label>
                  <div class="col-sm-10 col-md-12">
                    <textarea class="form-control" style={{ "height": "100px" }}></textarea>
                  </div>
                </div>

                {/*                                                     
              <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
              </div> */}

                <div class="text-center ">
                  <button type="submit" class="btn btn-primary mt-4">Submit</button>
                </div>
              </form>
              {/* <!-- End Multi Columns Form --> */}



            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Appointment
