import React, { useState, useEffect } from 'react';

const Dashboard = () => {

  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [totalPastAppointment, setTotalPastAppointment] = useState(0);
  const [totalFutureAppointment, setTotalFutureAppointment] = useState(0);

  const getPatientData = async () => {
    try {
      const response = await fetch("http://localhost:6500/api/admin/totalCountPatients", {
        method: "GET",
      });
      const responseData = await response.json();
      setTotalPatients(responseData.totalPatients);
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctorData = async () => {
    try {
      const response = await fetch("http://localhost:6500/api/admin/totalCountDoctors", {
        method: "GET",
      });
      const responseData = await response.json();
      setTotalDoctors(responseData.totalDoctors);
    } catch (error) {
      console.log(error);
    }
  };

  const getAppointmentData = async () => {
    try {
      const response = await fetch("http://localhost:6500/api/admin/totalCountAppointments", {
        method: "GET",
      });
      const responseData = await response.json();
      setTotalPastAppointment(responseData.pastAppointments);
      setTotalFutureAppointment(responseData.futureAppointments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatientData();
    getDoctorData();
    getAppointmentData();
  }, []);


  return (
    <>
      <main id="main" class="main">
        <section id="faq" className="faq">
          {/* <!-- Begin Page Content --> */}
          <div class="container-fluid">
            {/* <!-- Content Row --> */}
            <div class="row">
              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Patients</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{totalPatients}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Total Doctors
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{totalDoctors}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* <!-- Pending Requests Card Example --> */}
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Total Past Appointments</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{totalPastAppointment}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Total Future Appointments</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{totalFutureAppointment}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </section>
      </main>
      {/* <!-- /.container-fluid --> */}
    </>
  )
}

export default Dashboard
