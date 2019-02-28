import React, { Component } from 'react';
import './App.css';
//import NavBar from "./Components/NavBar"
import MainContainer from "./Containers/MainContainer";
import LoginForm from "./Components/LoginForm"
import SignupForm from "./Components/SignupForm"
import LogoutUser from "./Components/LogoutUser"
import { Route, Switch, withRouter, redirect} from "react-router-dom"

//import { Route, Switch, withRouter} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>

      <Route exact path="/register" component={SignupForm}/>
       <Route exact path="/login" component={LoginForm}/>
       <Route exact path="/logout" component={LogoutUser}/>
       <Route path= "/main" component={MainContainer} />

       </Switch>
       <Route path= "/" component={MainContainer} />
      </div>
    );
  }
}

export default withRouter(App);
