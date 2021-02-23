import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PatientListBody from './PatientListBody';
import Menu from '../Menu/Menu';

export default class PatientList extends Component {

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
                <PatientListBody />
                <Menu />
                <Footer />
            </div>
        )
    }
}


