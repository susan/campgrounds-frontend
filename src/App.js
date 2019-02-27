import React, { Component } from 'react';
import './App.css';
import AppNavBar from "./Components/AppNavBar"
import MainContainer from "./Containers/MainContainer";
import LoginForm from "./Components/LoginForm"
import SignupForm from "./Components/SignupForm"
import { Route, Switch, withRouter} from "react-router-dom"

//import { Route, Switch, withRouter} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavBar/>
      <Switch>
      <Route exact path="/register" component={SignupForm} />
       <Route exact path="/login" component={LoginForm} />
       </Switch>
       <Route exact path="/main" component={MainContainer} />
      </div>
    );
  }
}

export default App;
