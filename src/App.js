import React, { Component } from 'react';
import './App.css';
import AppNavBar from "./Components/AppNavBar"
//import {AppNavCss} from "./Components/NavCss"
import MainContainer from "./Containers/MainContainer";
import Home from "./Components/Home"
import ParkContainer from "./Containers/ParkContainer"
import CampgroundContainer from "./Containers/CampgroundContainer"
//import CampgroundParkDetails from './Components/CampgroundParkDetails'

import LoginForm from "./Components/LoginForm"
import SignupForm from "./Components/SignupForm"
import LogoutUser from "./Components/LogoutUser"
import { Route, Switch, withRouter, redirect, Router} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path= '/' component={AppNavBar} />
      <Switch>
      <Route path="/register" component={SignupForm}/>
       <Route path="/login" component={LoginForm}/>
       <Route path="/logout" component={LogoutUser}/>
       <Route path="/main" component={MainContainer}/>
       </Switch>
       </div>
    );
  }
}

export default withRouter(App);
