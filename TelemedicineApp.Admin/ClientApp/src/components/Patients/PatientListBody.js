import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './Patients.css';

export default class PatientListBody extends React.Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <div class="content-wrapper contentDoclist">
                        <section class="content">
                            <div class="row">
                                <div class="col-md-3">
                                    <a href="#" class="btn btn-block btn-success btn-flat">
                                        Add Patient
                                 </a>
                                </div>
                                <div className="col-sm-9">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Patient List</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="content-header">
                                <div className="container-fluid">
                                    <div className="row mb-2">
                                        <div className="col-sm-6">
                                            <h5 className="m-0 text-dark">Patients List</h5>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>

                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-16">
                                        <div class="card">
                                            <div class="card-body">
                                                <table id="tblDoctors" class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>First Name</th>
                                                            <th>Last Name</th>
                                                            <th>Gender</th>
                                                            <th>E-mail</th>
                                                            <th>Address</th>
                                                            <th>State</th>
                                                            <th>City</th>
                                                            <th>Phone No.</th>
                                                            <th>Status</th>
                                                            <th>Edit</th>
                                                            <th>Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Virat</td>
                                                            <td>Kohli</td>
                                                            <td>Male</td>
                                                            <td>viratkohli@telemedicine.com</td>
                                                            <td>Navi M.</td>
                                                            <td>MP</td>
                                                            <td>Mumbai</td>
                                                            <td>9569845812</td>
                                                            <td>
                                                                <i class="fa fa-circle text-green"></i>
                                                                <span id="status-chat"></span>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="btn btn-flat btn-xs btn-primary">
                                                                    <i class="fa fa-edit"></i>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="btn btn-flat btn-xs btn-danger">
                                                                    <i class="fas fa-trash"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mamta</td>
                                                            <td>Sen</td>
                                                            <td>Female</td>
                                                            <td>mamta@telemedicine.com</td>
                                                            <td>Dumdum Aipport</td>
                                                            <td>WB</td>
                                                            <td>Kolkata</td>
                                                            <td>78454545754</td>
                                                            <td>
                                                                <i class="fa fa-circle text-green"></i>
                                                                <span id="status-chat"></span>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="btn btn-flat btn-xs btn-primary">
                                                                    <i class="fa fa-edit"></i>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" class="btn btn-flat btn-xs btn-danger">
                                                                    <i class="fas fa-trash"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
