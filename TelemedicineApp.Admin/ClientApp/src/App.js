import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AddDoctor from './components/Doctors/AddDoctor';
import DoctorList from './components/Doctors/DoctorList';
import AddPatient from './components/Patients/AddPatient';
import PatientList from './components/Patients/PatientList';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Router>
                <div class="wrapper">

                    <Route exact path='/' component={Login} />
                    <Route exact path='/Dashboard/Dashboard' component={Dashboard} />
                    <Route exact path='/Doctors/AddDoctor' component={AddDoctor} /> 
                    <Route exact path='/Doctors/DoctorList' component={DoctorList} /> 
                    <Route exact path='/Patients/AddPatient' component={AddPatient} />
                    <Route exact path='/Patients/PatientList' component={PatientList} /> 

                </div>
            </Router>
        );
    }
}
