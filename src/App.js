import React, { Component } from 'react';
import './App.css';
//import NavBar from "./Components/NavBar"
import MainContainer from "./Containers/MainContainer";
import LoginForm from "./Components/LoginForm"
import SignupForm from "./Components/SignupForm"
import { Route, Switch, withRouter, redirect} from "react-router-dom"

//import { Route, Switch, withRouter} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <React.Fragment>
      <Route exact path="/register" component={SignupForm}/>
       <Route exact path="/login" component={LoginForm}/>
       <Route path= "/main" component={MainContainer} />
       </React.Fragment>
       </Switch>
      </div>
    );
  }
}

export default withRouter(App);
