import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './partials/Header';
import Users from './users/Users';
import AddUser from './newUser/AddUser';
import UpdateUser from './updateUser/UpdateUser'
import About from './About/About';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import "../App.css";

export default class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
        <Header branding="User Manager" />
        <div className="container">
        <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/user/add" component={AddUser} />
        <Route exact path="/user/edit/:id" component={UpdateUser} />
        <Route exact path="/about" component={About} />        
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}