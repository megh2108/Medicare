import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Medicinedetail.css'

import { useAuth } from '../../../Store/auth';


const Medicinedetail = () => {
    const navigate = useNavigate();

    const { token } = useAuth();

    const [medicines, setMedicines] = useState([]);

    const getAllMedicineData = async () => {
        try {

            const response = await fetch("http://localhost:6500/api/admin/medicinedetails", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const responseData = await response.json();
            // console.log(`medicine : ${responseData}`);
            setMedicines(responseData);




        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllMedicineData();
    }, [])

    //update

    const handleUpdate = (medicine) => {
        navigate(`/Admin/Addmedicine/${medicine._id}`); 
    };

    return (
        <>

            <main id="main" class="main">
                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title title ">Medicine Details</h5>
                                    {/* <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable. Check for <a href="https://fiduswriter.github.io/simple-datatables/demos/" target="_blank">more examples</a>.</p> */}

                                    <div class="table-responsive mt-5">
                                        <table class="table table-bordered table-info table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Sr. No.</th>
                                                    <th>Name</th>
                                                    <th>Dosage</th>
                                                    <th>Side Effects</th>
                                                    <th>Symptoms</th>
                                                    <th>Contraindications</th>
                                                    <th>Usage Instructions</th>
                                                    <th>Manufacturer</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-group-divider">

                                                {medicines.map((medicine, index) => (
                                                    <tr key={medicine._id}>
                                                        <td>{index + 1}</td>
                                                        <td>{medicine.name}</td>
                                                        <td>{medicine.dosage}</td>
                                                        <td>{medicine.sideEffects.join(', ')}</td>
                                                        <td>{medicine.symptoms.join(', ')}</td>
                                                        <td>{medicine.contraindications.join(', ')}</td>
                                                        <td>{medicine.usageInstructions}</td>
                                                        <td>{medicine.manufacturer}</td>
                                                        <td>
                                                            <button className="btn btn-primary w-100" type="button" onClick={() => handleUpdate(medicine)}>Update</button>
                                                            <button className="btn btn-danger w-100 mt-3" type="button">Delete</button>

                                                        </td>
                                                    </tr>
                                                ))}

                                           </tbody>
                                        </table>

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

export default Medicinedetail