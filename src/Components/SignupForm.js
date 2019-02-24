import React, { Component } from "react";

class SignupForm extends Component {
  //keep this as we will capture input stuff here in local state,
  //then send off final to redux in handleSubmit
  state = {
    signupUsername: "",
    signupUserEmail: "",
    signupPassword: "",
  };

  handleChange = event => {
    //keep this as we capture input stuff here
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

//create handleSubmit here as we can just send off final user object
//and send to state

handleSubmit = event => {
console.log(event)
}

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Register</h2>
      {/* get rid of submitHandler anonymous function, we are doing handleSubmit
      right here to get final user object and change state
        <form onSubmit={event => this.props.submitHandler(event, this.state)}>
      */}
         <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="signupUsername"
            placeholder="username"
            //get rid of values, we will capture final value in submit
            //value={this.state.signupUsername}
            onChange={this.handleChange}
          />
         <input
            type="text"
            name="signupUserEmail"
            placeholder="email"
            //value={this.state.signupUserEmail}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="signupPassword"
            placeholder="password"
            //value={this.state.signupPassword}
            onChange={this.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
