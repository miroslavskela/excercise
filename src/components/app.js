import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './partials/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import "../App.css";

export default class App extends Component {


  render() {
    return (
        <div className="App">
        <Header branding="Contact Menager" />
        <div className="container">

        </div>
      </div>
    );
  }
}