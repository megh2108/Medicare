import React, { useState } from 'react';
import './Addmedicine.css';

import { toast } from 'react-toastify';


const Addmedicine = () => {

    const [updateMode, setUpdateMode] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        dosage: '',
        sideEffects: [''],
        symptoms: [''],
        contraindications: [''],
        usageInstructions: '',
        manufacturer: ''
    });


    const addMedicine = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:6500/api/admin/insertMedicine", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (response.status === 400) {
                toast.error(responseData.msg);
            } else if (response.status === 201) {
                toast.success("Medicine inserted successfully");


                setFormData({
                    name: '',
                    dosage: '',
                    sideEffects: [''],
                    symptoms: [''],
                    contraindications: [''],
                    usageInstructions: '',
                    manufacturer: ''
                });
            } else {
                toast.error("Internal Server Error");
            }
        } catch (error) {
            toast.error("Failed to fetch. Check console for details.");
            console.error("Error:", error);
        }
    };

    // following three function for adding

    const handleChange = (e, index, field) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [field]: formData[field].map((item, i) => i === index ? value : item)
        }));
    };

    const handleAddField = (field) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: [...formData[field], '']
        }));
    };

    const handleRemoveField = (index, field) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: formData[field].filter((_, i) => i !== index)
        }));
    };

    console.log(formData);

    // following function for editing

    const handleCancelUpdate = () => {
        setFormData({
            name: '',
            dosage: '',
            sideEffects: [''],
            symptoms: [''],
            contraindications: [''],
            usageInstructions: '',
            manufacturer: ''
        });
        setUpdateMode(false);
        // setItemIdToUpdate(null);
    };

    return (
        <main id="main" className="main">
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title title">{updateMode ? 'Update Medicine' : 'Add Medicine'}</h5>
                                <form>
                                    <div className="row g-3 mt-3">
                                        <div className="col-md-4">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="dosage" className="form-label">Dosage(in mg)</label>
                                            <input type="text" className="form-control" id="dosage" name="dosage" value={formData.dosage} onChange={(e) => setFormData({ ...formData, dosage: e.target.value })} required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                                            <input type="text" className="form-control" id="manufacturer" name="manufacturer" value={formData.manufacturer} onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="sideEffects" className="form-label">Side Effects</label>
                                            {formData.sideEffects.map((effect, index) => (
                                                <div key={index} className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Side Effect" value={effect} onChange={(e) => handleChange(e, index, 'sideEffects')} />
                                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleRemoveField(index, 'sideEffects')}>-</button>
                                                    {index === formData.sideEffects.length - 1 && <button className="btn btn-outline-secondary" type="button" onClick={() => handleAddField('sideEffects')}>+</button>}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="symptoms" className="form-label">Symptoms</label>
                                            {formData.symptoms.map((symptom, index) => (
                                                <div key={index} className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Symptom" value={symptom} onChange={(e) => handleChange(e, index, 'symptoms')} />
                                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleRemoveField(index, 'symptoms')}>-</button>
                                                    {index === formData.symptoms.length - 1 && <button className="btn btn-outline-secondary" type="button" onClick={() => handleAddField('symptoms')}>+</button>}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="contraindications" className="form-label">Contraindications</label>
                                            {formData.contraindications.map((contraindication, index) => (
                                                <div key={index} className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Contraindication" value={contraindication} onChange={(e) => handleChange(e, index, 'contraindications')} />
                                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleRemoveField(index, 'contraindications')}>-</button>
                                                    {index === formData.contraindications.length - 1 && <button className="btn btn-outline-secondary" type="button" onClick={() => handleAddField('contraindications')}>+</button>}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="usageInstructions" className="form-label">Usage Instructions</label>
                                            <input type="text" className="form-control" id="usageInstructions" name="usageInstructions" value={formData.usageInstructions} onChange={(e) => setFormData({ ...formData, usageInstructions: e.target.value })} required />
                                        </div>

                                        {updateMode ? (
                                            <>
                                                <div className="col-6 text-center">
                                                    <button type="button" class="btn btn-primary mt-4">Update Medicine</button>
                                                    {/* <button type="submit" className="btn btn-primary mt-4">Submit</button> */}
                                                </div>

                                                <div className="col-6 text-center">
                                                    <button type="button" class="btn btn-primary mt-4" onClick={handleCancelUpdate}>Cancel Update</button>
                                                    {/* <button type="submit" className="btn btn-primary mt-4">Submit</button> */}
                                                </div>
                                            </>
                                        ) : (
                                            <>

                                                <div className="col-12 text-center">
                                                    <button type="button" class="btn btn-primary mt-4" onClick={addMedicine}>Add Medicine</button>
                                                    {/* <button type="submit" className="btn btn-primary mt-4">Submit</button> */}
                                                </div>

                                            </>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Addmedicine;


// import React, { useEffect, useState } from 'react'
// import './Addmedicine.css'
// const Addmedicine = () => {
//     return (
//         <>
//             <main id="main" class="main">
//                 <section class="section">
//                     <div class="row">
//                         <div class="col-lg-12">

//                             <div class="card">
//                                 <div class="card-body">
//                                     <h5 class="card-title title">Add Medicine</h5>
//                                     <div>
//                                         <form class="row g-3 mt-3">
//                                             <div class="col-md-4">
//                                                 <label for="inputName5" class="form-label">First Name</label>
//                                                 <input type="text" class="form-control" id="inputName5" />
//                                             </div>
//                                             <div class="col-md-4">
//                                                 <label for="inputName5" class="form-label">Middle Name</label>
//                                                 <input type="text" class="form-control" id="inputName5" />
//                                             </div>
//                                             <div class="col-md-4">
//                                                 <label for="inputName5" class="form-label">Last Name</label>
//                                                 <input type="text" class="form-control" id="inputName5" />
//                                             </div>
//                                             <div class="col-md-2">
//                                                 <label for="inputName5" class="form-label">Age</label>
//                                                 <input type="text" class="form-control" id="inputName5" />
//                                             </div>
//                                             <div class="col-md-3">
//                                                 <label for="inputEmail5" class="form-label">Email</label>
//                                                 <input type="email" class="form-control" id="inputEmail5" />
//                                             </div>
//                                             <div class="col-md-3">
//                                                 <label for="inputMobile5" class="form-label">Mobile Number</label>
//                                                 <input type="text" class="form-control" id="inputMobile5" />
//                                             </div>
//                                             <div class="col-md-2">
//                                                 <label for="inputCity5" class="form-label">City</label>
//                                                 <input type="text" class="form-control" id="inputCity5" />
//                                             </div>
//                                             <div class="col-md-3">
//                                                 <label for="inputCity5" class="form-label">Gender</label>

//                                                 <div class="Container">
//                                                     <div class="row">
//                                                         <div class="form-check col-lg-4">
//                                                             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
//                                                             <label class="form-check-label" for="gridRadios1">
//                                                                 Male
//                                                             </label>
//                                                         </div>
//                                                         <div class="form-check col-lg-4">
//                                                             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
//                                                             <label class="form-check-label" for="gridRadios2">
//                                                                 Female
//                                                             </label>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="col-md-3">
//                                                 <label for="inputCity5" class="form-label">Date</label>
//                                                 <input type="date" class="form-control" />
//                                             </div>
//                                             <div class="col-md-3">
//                                                 <label for="inputCity5" class="form-label">Doctor</label>
//                                                 <select class="form-select" aria-label="Default select example">
//                                                     <option value="1">Dr. Amit Patel</option>
//                                                     <option value="2">Dr. Yogendra Bhatt</option>
//                                                     <option value="3">Dr. Nilay Shah</option>
//                                                 </select>
//                                             </div>
//                                             <div class="col-md-3">
//                                                 <label for="inputCity5" class="form-label">Time</label>
//                                                 <select class="form-select" aria-label="Default select example">
//                                                     <option value="1">10.30 AM - 11.00 AM</option>
//                                                     <option value="2">11.00 AM - 11.30 AM</option>
//                                                     <option value="3">05.00 PM - 5.30 PM</option>
//                                                 </select>
//                                             </div>
//                                             <div class="col-md-12">
//                                                 <label for="inputPassword" class="col-sm-2 col-md-6 col-form-label">Message for Appointment</label>
//                                                 <div class="col-sm-10 col-md-12">
//                                                     <textarea class="form-control" style={{ "height": "100px" }}></textarea>
//                                                 </div>
//                                             </div>

//                                             {/*
//                                             <div class="col-md-2">
//                                                 <label for="inputZip" class="form-label">Zip</label>
//                                                 <input type="text" class="form-control" id="inputZip" />
//                                             </div> */}

//                                             <div class="text-center ">
//                                                 <button type="submit" class="btn btn-primary mt-4">Submit</button>
//                                             </div>
//                                         </form>
//                                     </div>


//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </section>

//             </main>


//         </>
//     )
// }

// export default Addmedicine