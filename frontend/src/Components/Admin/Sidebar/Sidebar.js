import React from 'react'
import './Sidebar.css'
import { NavLink, Outlet } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

          <li class="nav-item">
            <NavLink to="/Admin/Dashboard">
              <div class="nav-link collapsed" >
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/Admin/Userdetails">
              <div class="nav-link collapsed" >
                <i class="bi bi-person-square"></i>
                <span>User Detail</span>
              </div>
            </NavLink>

          </li>

          <li class="nav-item">
            <NavLink to="/Admin/Addmedicine">
              <div class="nav-link collapsed" >
                <i class="bi bi-person-square"></i>
                <span>Add Medicine</span>
              </div>
            </NavLink>

          </li>

          <li class="nav-item">
            <NavLink to="/Admin/Medicinedetails">
              <div class="nav-link collapsed" >
                <i class="bi bi-person-square"></i>
                <span>Medicine Detail</span>
              </div>
            </NavLink>

          </li>



        </ul>

      </aside>
      <Outlet />
    </>
  )
}

export default Sidebar
