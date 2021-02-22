import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}

                    <NavLink tag={Link} to="/Dashboard/Dashboard" className="brand-link brand_Logo">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light"><b>Telemedicine</b></span>
                    </NavLink>

                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Saunak Saha</a>
                            </div>
                        </div>

                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
                                with font-awesome or any other icon font library */}
                                <a href="#">
                                    <li className="nav-header"> <i class="fa fa-users"></i><span>  Users</span></li>
                                </a>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-user-md" />
                                        <p>
                                            Doctors
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <NavLink tag={Link} to="/Doctors/AddDoctor">
                                                <i className="far fa-circle nav-icon" />
                                                Add Doctor
                                             </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink tag={Link} to="/Doctors/DoctorList">
                                                <i className="far fa-circle nav-icon" />
                                                Doctor List 
                                             </NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-users" />
                                        <p>
                                            Patient
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>

                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <NavLink tag={Link} to="/Patients/AddPatient">
                                                <i className="far fa-circle nav-icon" />
                                                Add Patient
                                             </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink tag={Link} to="/Patients/PatientList">
                                                <i className="far fa-circle nav-icon" />
                                                Patients List
                                             </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/mailbox/read-mail.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Patient Appointments</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/mailbox/read-mail.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Treatments</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/mailbox/read-mail.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Recipes</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/mailbox/read-mail.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Documents</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>

        )
    }
}
