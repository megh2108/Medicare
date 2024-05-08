import React, { useEffect, useState } from 'react'
import './Userdetail.css'
import { toast } from 'react-toastify';


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
      console.log(`users : ${responseData}`);
      setUsers(responseData);




    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllUsersData();
  }, [])


  const handleStatusChange = async (userId, newStatus) => {
    try {
        const response = await fetch(`http://localhost:6500/api/admin/updateUserStatus/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ isValid: newStatus }),
        });

        const responseData = await response.json();

        if (response.status === 200) {
            console.log(`User status updated to ${newStatus} and mail transfer to ${responseData.email}`);
            toast.success(`${responseData.name} status updated to ${newStatus}`);

            setUsers((prevUsers) =>
            prevUsers.map((user) =>
                    user._id === userId ? { ...user, isValid: newStatus } : user
                )
            );
        }else if(response.status === 400){
          toast.error(`Mail Transfer failed to ${responseData.email}`);

        }else {
            console.log("Failed to update User status");
            toast.error("Failed to update User status");
        }
    } catch (error) {
        console.error("Error updating user status:", error);
    }
};
  

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

                  <div class="table-responsive mt-5">
                    <table class="table table-bordered table-info table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Sr. No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact No</th>
                          <th>User Type</th>
                          <th>Active/In-active</th>
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
                              <td>{curUser.isValid}</td>
                              <td>
                                <div className="dropdown">
                                  <button className="btn btn-info dropdown-toggle" type="button" id={`statusDropdown-${curUser._id}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Change Status
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby={`statusDropdown-${curUser._id}`}>
                                    <button className="dropdown-item" onClick={() => handleStatusChange(curUser._id, 'Active')}>Active</button>
                                    <button className="dropdown-item" onClick={() => handleStatusChange(curUser._id, 'In-active')}>In-active</button>
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
