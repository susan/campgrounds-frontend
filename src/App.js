import React, { Component } from 'react';
import './App.css';
import MainContainer from "./Containers/MainContainer";
import LoginForm from "./Components/LoginForm"
import SignupForm from "./Components/SignupForm"

class App extends Component {
  render() {
    return (
      <div className="App">
       <SignupForm />
       <LoginForm />
       <MainContainer />
      </div>
    );
  }
}

export default App;
