import React from 'react'
import "./Doctorprofile.css"
import { NavLink } from 'react-router-dom';


const Doctorprofile = () => {
    return (
        <>
            <section class="section profile doctor-profile">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">

                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                    <h2>Dr. Amit Patel</h2>
                                    <h3>Orthopedic Surgen</h3>
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

                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#rating">Ratings</button>
                                        </li>

                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#appointment">Appointment</button>
                                        </li>



                                    </ul>
                                    <div class="tab-content pt-2">

                                        <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                            <h5 class="card-title">About</h5>
                                            <p class="small fst-italic">Dr. Amit Patel is a highly skilled and compassionate physician specializing in Internal Medicine. With a wealth of knowledge and over 10 years of clinical experience, Dr. Patel is dedicated to providing comprehensive and personalized healthcare to his patients. His commitment to staying abreast of the latest medical advancements ensures that individuals under his care receive the highest standard of treatment.      </p>

                                            <h5 class="card-title">Basic Details</h5>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Full Name</div>
                                                <div class="col-lg-9 col-md-8">Dr. Amit Patel</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Email</div>
                                                <div class="col-lg-9 col-md-8">amitpatel@gmail.com</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Contact No</div>
                                                <div class="col-lg-9 col-md-8">+91 98765 43210</div>
                                            </div>


                                            <h5 class="card-title">Professional Details</h5>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Medical License Number</div>
                                                <div class="col-lg-9 col-md-8">M123456789</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Specialization</div>
                                                <div class="col-lg-9 col-md-8">Othopedic</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Qualifications</div>
                                                <div class="col-lg-9 col-md-8">Doctor of Medicine (MD), University of Medical Sciences, 2005</div>
                                                <div class="col-lg-3 col-md-4 label"></div>
                                                <div class="col-lg-9 col-md-8">Board Certified in Cardiology</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Years of Experience</div>
                                                <div class="col-lg-9 col-md-8">15 years</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Hospital Affiliation</div>
                                                <div class="col-lg-9 col-md-8">Iris Hospital, Anand</div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade profile-edit pt-3" id="rating">

                                            {/* <!-- Profile Edit Form --> */}
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
                                            {/* <!-- End Profile Edit Form --> */}

                                        </div>

                                        <div class="tab-pane fade pt-3" id="appointment">


                                            {/* <div class="card"> */}
                                            <div class="card-body">

                                                {/* <!-- Multi Columns Form --> */}
                                                <form class="row g-3 mt-3">
                                                    <div class="col-md-5">
                                                        <label for="inputName5" class="form-label">First Name</label>
                                                        <input type="text" class="form-control" id="inputName5" />
                                                    </div>
                                                    <div class="col-md-5">
                                                        <label for="inputName5" class="form-label">Last Name</label>
                                                        <input type="text" class="form-control" id="inputName5" />
                                                    </div>
                                                    <div class="col-md-2">
                                                        <label for="inputName5" class="form-label">Age</label>
                                                        <input type="text" class="form-control" id="inputName5" />
                                                    </div>
                                                    <div class="col-md-5">
                                                        <label for="inputEmail5" class="form-label">Email</label>
                                                        <input type="email" class="form-control" id="inputEmail5" />
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputMobile5" class="form-label">Mobile Number</label>
                                                        <input type="text" class="form-control" id="inputMobile5" />
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="inputCity5" class="form-label">City</label>
                                                        <input type="text" class="form-control" id="inputCity5" />
                                                    </div>
                                                    <div class="col-md-4">
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
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="inputCity5" class="form-label">Time</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option value="1">10.30 AM - 11.00 AM</option>
                                                            <option value="2">11.00 AM - 11.30 AM</option>
                                                            <option value="3">05.00 PM - 5.30 PM</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label for="inputPassword" class="col-sm-2 col-md-6 col-form-label">Message for Appointment</label>
                                                        <div class="col-sm-10 col-md-12">
                                                            <textarea class="form-control" style={{"height": "100px"}}></textarea>
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
            </section >
        </>
    )
}

export default Doctorprofile
