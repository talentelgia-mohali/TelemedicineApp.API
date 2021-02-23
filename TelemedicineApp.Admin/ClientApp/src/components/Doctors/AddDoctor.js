import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './Doctors.css';

export default class AddDoctor extends Component {
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
                <div className="content-wrapper">
                    <section class="content-header">
                        <div class="row">
                            <div class="col-md-3">
                                <a href="#" class="btn btn-block btn-success btn-flat">
                                    Doctors List
                                 </a>
                            </div>
                            <div className="col-sm-9">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Add Doctor</li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h5 className="m-0 text-dark">Add Doctor</h5>
                                </div>                               
                            </div>
                            <hr />
                        </div>
                    </div>                     
                    <section className="content docform_Registration">
                        <div className="container-fluid">
                            <div className="row">
                                <div class="mt-1 col-md-3">
                                    <label for="inputFirstName" class="control-label">First Name</label>
                                    <input type="text" className="form-control" id="firstname" placeholder="Enter First Name"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputFirstName" class="control-label">Middle Name</label>
                                    <input type="text" class="form-control " id="lastname" placeholder="Enter Middle Name"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputlastname">Last Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Last Name"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputSex" class="control-label">Gender</label>
                                    <select class="form-control" name="sex" required=""><option value="">Choose Gender</option>
                                        <option value="male">Male</option><option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div class="mt-1 col-md-3">
                                    <label for="inpputBirthDate" class="control-label">Birth Date</label>
                                    <input type="text" value="" name="birth_date" class="form-control" id="birth_date" placeholder="yyyy-mm-dd" required=""></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputAddress" class="control-label">Address</label>
                                    <input type="text" class="form-control " id="Address" placeholder="Enter Address"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" class="form-control" id="Address2" placeholder="Enter Address 2"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputStreet">Street</label>
                                    <input type="text" class="form-control" id="Street" placeholder="Enter Street"></input>
                                </div>
                            </div>

                            <div className="row">
                                <div class="mt-1 col-md-3">
                                    <label for="inputZipCode" class="control-label">Zip Code</label>
                                    <input type="text" class="form-control " id="ZipCode" placeholder="Enter Zip Code"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="City" placeholder="Enter City"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputStreet">Pin Code</label>
                                    <input type="text" class="form-control" id="PinCode" placeholder="Enter Pin Code"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputSex" class="control-label">Department</label>
                                    <select class="form-control" name="sex" required=""><option value="">Choose Department</option>
                                        <option value="Cardiology">Cardiology</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div class="mt-1 col-md-3">
                                    <label for="inputemail" class="control-label">Email ID</label>
                                    <input type="text" class="form-control " id="email" placeholder="Enter Email ID"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputpassword" class="control-label">Password</label>
                                    <input type="text" class="form-control " id="Password" placeholder="Enter Password"></input>
                                </div>

                                <div class="mt-1 col-md-3">
                                    <label for="inputFile">
                                        Profile Picture
                                    </label>
                                    <input type="file" id="inputFileProfile" name="picture"></input>
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-sm-3">
                                    <label for="inputFile">
                                        Upload Certificates
                                    </label>
                                    <input type="file" id="inputFiledoc1" name="picture"></input>
                                    <input type="file" id="inputFiledoc2" name="picture"></input>
                                </div> 
                            </div>
                        </div>
                        <hr />
                        <div class="box-footer">
                            <button type="submit" class="btn btn-info btn-flat">Submit</button>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
