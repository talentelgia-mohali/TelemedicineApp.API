import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './Doctors.css';

export default class DoctorList extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "dist/js/content.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <Header />
                <DoctorBody />
                <Menu />
                <Footer />
            </div>
        )
    }
}

class DoctorBody extends React.Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <div class="content-wrapper contentDoclist">
                        <section class="content">
                            <div class="row">
                                <div class="col-md-3">
                                    <a href="#" class="btn btn-block btn-success btn-flat">
                                        Add Doctor
                                 </a>
                                </div>
                                <div className="col-sm-9">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Doctor List</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="content-header">
                                <div className="container-fluid">
                                    <div className="row mb-2">
                                        <div className="col-sm-6">
                                            <h5 className="m-0 text-dark">Doctors List</h5>
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
                                                            <th>Department</th>
                                                            <th>First Name</th>
                                                            <th>Last Name</th>
                                                            <th>Gender</th>
                                                            <th>E-mail</th>
                                                            <th>Address</th>
                                                            <th>Phone No.</th>
                                                            <th>Status</th>
                                                            <th>Edit</th>
                                                            <th>Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Kolkata</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <td>Cardiology</td>
                                                            <td>Devi</td>
                                                            <td>Shetty</td>
                                                            <td>Male</td>
                                                            <td>devishetty@telemedicine.com</td>
                                                            <td>Bangalore</td>
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
                                                            <tr>
                                                                <td>Cardiology</td>
                                                                <td>Devi</td>
                                                                <td>Shetty</td>
                                                                <td>Male</td>
                                                                <td>devishetty@telemedicine.com</td>
                                                                <td>Bangalore</td>
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
                                                                <tr>
                                                                    <td>Cardiology</td>
                                                                    <td>Devi</td>
                                                                    <td>Shetty</td>
                                                                    <td>Male</td>
                                                                    <td>devishetty@telemedicine.com</td>
                                                                    <td>Bangalore</td>
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
                                                                    <tr>
                                                                        <td>Cardiology</td>
                                                                        <td>Devi</td>
                                                                        <td>Shetty</td>
                                                                        <td>Male</td>
                                                                        <td>devishetty@telemedicine.com</td>
                                                                        <td>Bangalore</td>
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
                                                                        <tr>
                                                                            <td>Cardiology</td>
                                                                            <td>Devi</td>
                                                                            <td>Shetty</td>
                                                                            <td>Male</td>
                                                                            <td>devishetty@telemedicine.com</td>
                                                                            <td>Bangalore</td>
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
                                                                            <tr>
                                                                                <td>Cardiology</td>
                                                                                <td>Devi</td>
                                                                                <td>Shetty</td>
                                                                                <td>Male</td>
                                                                                <td>devishetty@telemedicine.com</td>
                                                                                <td>Bangalore</td>
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
                                                                                <tr>
                                                                                    <td>Cardiology</td>
                                                                                    <td>Devi</td>
                                                                                    <td>Shetty</td>
                                                                                    <td>Male</td>
                                                                                    <td>devishetty@telemedicine.com</td>
                                                                                    <td>Bangalore</td>
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
                                                                                    <tr>
                                                                                        <td>Cardiology</td>
                                                                                        <td>Devi</td>
                                                                                        <td>Shetty</td>
                                                                                        <td>Male</td>
                                                                                        <td>devishetty@telemedicine.com</td>
                                                                                        <td>Bangalore</td>
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
                                                                                        <tr>
                                                                                            <td>Cardiology</td>
                                                                                            <td>Devi</td>
                                                                                            <td>Shetty</td>
                                                                                            <td>Male</td>
                                                                                            <td>devishetty@telemedicine.com</td>
                                                                                            <td>Bangalore</td>
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
                                                                                            <tr>
                                                                                                <td>Cardiology</td>
                                                                                                <td>Devi</td>
                                                                                                <td>Shetty</td>
                                                                                                <td>Male</td>
                                                                                                <td>devishetty@telemedicine.com</td>
                                                                                                <td>Bangalore</td>
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
                                                                                        </tr>
                                                                                    </tr>
                                                                                </tr>
                                                                            </tr>
                                                                        </tr>
                                                                    </tr>
                                                                </tr>
                                                            </tr>
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
