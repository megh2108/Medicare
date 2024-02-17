import React, { useEffect, useState } from 'react'
import './Userdetail.css'

import { useAuth } from '../../../Store/auth';

// import { DataTable } from 'simple-datatables'; 

const Userdetail = () => {

  const { token } = useAuth();

  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {

      const response = await fetch("http://localhost:6500/api/admin/userdetails", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();
      // console.log(`users : ${responseData}`);
      setUsers(responseData);




    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllUsersData();
  }, [])
  // useEffect(() => {
  //   const datatables = document.querySelectorAll('.datatable');

  //   datatables.forEach(datatable => {
  //     new DataTable(datatable, {
  //       perPageSelect: [5, 10, 15, ["All", -1]],
  //       columns: [
  //         { select: 2, sortSequence: ["desc", "asc"] },
  //         { select: 3, sortSequence: ["desc"] },
  //         { select: 4, cellClass: "green", headerClass: "red" }
  //       ]
  //     });
  //   });
  // }, []);

  return (
    <>


      <main id="main" class="main">



        <section class="section">
          <div class="row">
            <div class="col-lg-12">

              <div class="card">
                <div class="card-body">
                  <h5 class="card-title title ">User Details</h5>
                  {/* <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable. Check for <a href="https://fiduswriter.github.io/simple-datatables/demos/" target="_blank">more examples</a>.</p> */}

                  <div class="table-responsive">
                    <table class="table table-bordered table-info table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Sr. No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact No</th>
                          <th>User Type</th>
                          <th>Valid(true/false)</th>
                          <th>Change Status</th>
                        </tr>
                      </thead>
                      <tbody class="table-group-divider">

                        {users.map((curUser, index) => {

                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{curUser.name}</td>
                              <td>{curUser.email}</td>
                              <td>{curUser.phone}</td>
                              <td>{curUser.type}</td>
                              <td>{String(curUser.isValid)}</td>
                              <td>
                                <div className="dropdown">
                                  <button className="btn btn-info dropdown-toggle" type="button" id={`statusDropdown-${curUser._id}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Change Status
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby={`statusDropdown-${curUser._id}`}>
                                    <button className="dropdown-item" >true</button>
                                    <button className="dropdown-item" >false</button>
                                  </div>
                                </div>
                              </td>

                            </tr>
                          );
                        })}


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

export default Userdetail
