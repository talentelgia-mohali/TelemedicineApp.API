import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
		 <Router>
            <div class="wrapper">
				  
			   <Route exact path='/' component={Login} />
		       <Route exact path='/Dashboard/Dashboard' component={Dashboard} />  
				
            </div>
		</Router>
       );
    }
}
