import React, { useState, useEffect } from 'react'
import './Yourprofile.css'

import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../../Store/auth';

const Yourprofile = () => {
    // const { id } = useParams();

    const { id, formData, setFormData } = useAuth();
 


    //for updating post rouitng
    const updateProfile = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:6500/api/admin/updateUser/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (response.status === 404) {
                toast.error(responseData.msg);
            } else if (response.status === 200) {
                toast.success("Doctor updated successfully");


                // setFormData({
                //     name: '',
                //     dosage: '',
                //     sideEffects: [''],
                //     symptoms: [''],
                //     contraindications: [''],
                //     usageInstructions: '',
                //     manufacturer: ''

                // });
            } else {
                toast.error("Internal Server Error");
            }
        } catch (error) {
            toast.error("Failed to fetch. Check console for details.");
            console.error("Error:", error);
        }
    };

    const convertToBase64 = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            setFormData({ ...formData, formData: reader.result });
        };
        reader.onerror = (error) => {
            console.log("Error: ", error);
        };
        reader.readAsDataURL(e.target.files[0]);
    };


    return (
        <>
            <section class="section profile doctor-profile" data-aos="zoom-in">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">

                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                    <h2>{formData.name}</h2>
                                    <h3>{formData.special}</h3>
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
                                    <ul class="nav nav-tabs nav-tabs-bordered ">

                                        <li class="nav-item">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>


                                    </ul>
                                    <div class="tab-content pt-2">
                                        <div class="tab-pane fade  show active profile-edit pt-3" id="profile-edit">

                                            {/* <!-- Profile Edit Form --> */}
                                            <form>
                                                <h5 class="card-title">Basic Details</h5>
                                                <div class="row mb-3">
                                                    <label for="image" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <img src="assets/img/profile-img.jpg" alt="Profile" />
                                                        <div class="pt-2">
                                                            <a href="#" class="btn btn-primary btn-sm m-1" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                                                            <a href="#" class="btn btn-danger btn-sm m-1" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="name" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="phone" class="col-md-4 col-lg-3 col-form-label">Contact No</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div class="row mb-3">
                                                    <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <textarea class="form-control" id="about" style={{ "height": "100px" }} name="about" value={formData.about} onChange={(e) => setFormData({ ...formData, about: e.target.value })} />
                                                    </div>
                                                </div>


                                                <h5 class="card-title">Professional  Details</h5>
                                                <div class="row mb-3">
                                                    <label for="licenceno" class="col-md-4 col-lg-3 col-form-label">Medical License No</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="licenceno" name="licenceno" value={formData.licenceno} onChange={(e) => setFormData({ ...formData, licenceno: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="special" class="col-md-4 col-lg-3 col-form-label">Specialization</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="special" name="special" value={formData.special} onChange={(e) => setFormData({ ...formData, special: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="qualification" class="col-md-4 col-lg-3 col-form-label">Qualifications</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="qualification" name="qualification" value={formData.qualification} onChange={(e) => setFormData({ ...formData, qualification: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="experience" class="col-md-4 col-lg-3 col-form-label">Years of Experience</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="experience" name="experience" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="hospitalAffiliaion" class="col-md-4 col-lg-3 col-form-label">Hospital Affiliation</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input type="text" class="form-control" id="hospitalAffiliaion" name="hospitalAffiliaion" value={formData.hospitalAffiliaion} onChange={(e) => setFormData({ ...formData, hospitalAffiliaion: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="button" class="btn btn-primary mt-3" onClick={updateProfile}>Update Profile</button>

                                                </div>

                                            </form>
                                            {/* <!-- End Profile Edit Form --> */}

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

export default Yourprofile