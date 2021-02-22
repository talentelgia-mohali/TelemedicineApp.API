import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import AddPatientBody from './AddPatientBody';
import './Patients.css';

export default class AddPatient extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddPatientBody />
                <Menu />
                <Footer />
            </div>
        )
    }
}


