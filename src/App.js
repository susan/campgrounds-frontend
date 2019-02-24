import React, { Component } from 'react';
import './App.css';
//import NavBar from "./Components/NavBar"
import MainContainer from "./Containers/MainContainer";
import LoginForm from "./Components/LoginForm"
import SignupForm from "./Components/SignupForm"

//import { Route, Switch, withRouter} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
       <SignupForm />
       <LoginForm />
       <MainContainer /> */}
      </div>
    );
  }
}

export default App;
