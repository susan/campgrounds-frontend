import React, { Component } from "react";

class Auth extends Component {

  state= {
  	authenticated: false
  }

  login(cb) {
  	this.setState ({
     authenticated: true
  	})
  	cb()
  }


  logout(cb) {
  	this.setState ({
     authenticated: false
  	})
  	cb()
  }

  isAuthenticated() {
  	return this.state.authenticated;
  }


}

export default Auth;
