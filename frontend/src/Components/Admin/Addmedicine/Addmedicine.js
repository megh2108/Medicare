import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import './Addmedicine.css';

import { toast } from 'react-toastify';


const Addmedicine = () => {
    const { id } = useParams();

    const navigate = useNavigate();



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


    //fetching particular medicine
    useEffect(() => {
        const fetchMedicine = async () => {
            try {
                const response = await fetch(`http://localhost:6500/api/admin/medicinedetails/${id}`, {
                    method: "GET",
                });

                const responseData = await response.json();
                console.log(responseData);
                if (response.status === 404) {
                    toast.error(responseData.msg);
                }
                else if (response.status === 200) {
                    setUpdateMode(true);
                    setFormData(responseData);

                } else {
                    toast.error("Internal Server Error");
                }
            } catch (error) {
                toast.error("Failed to fetch. Check console for details.");
                console.error("Error:", error);
            }
        };

        if (id) {
            fetchMedicine();

        }
    }, [id]);


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

    //for updating post rouitng
    const updateMedicine = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:6500/api/admin/updatetMedicine/${id}`, {
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
                toast.success("Medicine updated successfully");


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

    // console.log(formData);

    // following function for editing

    const handleCancelUpdate = () => {
        navigate("/Admin/Addmedicine");
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
                                                    <button type="button" class="btn btn-primary mt-4" onClick={updateMedicine}>Update Medicine</button>
                                                </div>

                                                <div className="col-6 text-center">
                                                    <button type="button" class="btn btn-primary mt-4" onClick={handleCancelUpdate}>Cancel Update</button>
                                                </div>
                                            </>
                                        ) : (
                                            <>

                                                <div className="col-12 text-center">
                                                    <button type="button" class="btn btn-primary mt-4" onClick={addMedicine}>Add Medicine</button>
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

