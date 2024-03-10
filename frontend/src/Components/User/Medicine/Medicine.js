import React, { useState, useEffect } from 'react';
import './Medicine.css';

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const getMedicineData = async () => {
    try {
      const response = await fetch("http://localhost:6500/api/admin/getMedicine", {
        method: "GET",
      });
      const responseData = await response.json();
      setMedicines(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMedicineData();
  }, []);

  // Filter medicines based on search keyword
  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    medicine.dosage.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    medicine.usageInstructions.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    medicine.sideEffects.some(effect => effect.toLowerCase().includes(searchKeyword.toLowerCase())) ||
    medicine.symptoms.some(symptom => symptom.toLowerCase().includes(searchKeyword.toLowerCase()))
  );

  return (
    <>
      <section id="medicine">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Medicine</h2>
          </div>

          <div className="container">
            <div className="row">
              <div className="search-bar col-lg-12">
                <form className="search-form d-flex align-items-center">
                  <input
                    type="text"
                    name="medicine"
                    placeholder="Search Medicine by Name"
                    title="Enter search keyword"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Display filtered medicines */}
            {filteredMedicines.map(medicine => (
              <div key={medicine._id} className="col-lg-6">
                <div className="card card-medicine">
                  <div className="card-body">
                    <h5 className="card-title mx-auto">{medicine.name}</h5>
                    <h6><span>Dosage: </span>{medicine.dosage}</h6>
                    <div className="card-side-effect">
                      <h6><span>Side Effects:</span></h6>
                      <ul>
                        {medicine.sideEffects.map((effect, index) => (
                          <li key={index}>{effect}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-symptoms">
                      <h6><span>Symptoms:</span></h6>
                      <ul>
                        {medicine.symptoms.map((symptom, index) => (
                          <li key={index}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    <h6><span>How to Use:</span></h6>
                    <p className="card-text">{medicine.usageInstructions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Medicine;

